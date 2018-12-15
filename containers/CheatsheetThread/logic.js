import {
  makeDebugger,
  $solver,
  asyncErr,
  asyncRes,
  TYPE,
  ERR,
  EVENT,
  THREAD,
  githubApi,
} from '../../utils'

import SR71 from '../../utils/network/sr71'
import S from './schema'

const sr71$ = new SR71({
  resv_event: [EVENT.COMMUNITY_CHANGE, EVENT.TABBER_CHANGE],
})

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:CheatsheetThread')
/* eslint-enable no-unused-vars */

let sub$ = null
let store = null

const loadCheatsheet = () => {
  const community = store.curCommunity.raw
  // const community = 'no-exsit'
  /* const community = 'elixir' */

  debug('query cheatsheet: ', community)
  store.markState({ curView: TYPE.LOADING })
  sr71$.query(S.cheatsheet, { community })
}

export function syncCheatsheet(readme) {
  const args = {
    readme,
    lastSync: new Date().toISOString(),
    communityId: store.curCommunity.id,
  }

  sr71$.mutate(S.syncCheatsheet, args)
}

export function syncCheetsheetFromGithub() {
  githubApi
    .searchCheatsheet(store.curCommunity.raw)
    .then(res => syncCheatsheet(res))
    .catch(e => store.handleError(githubApi.parseError(e)))
}

export function addContributor(user) {
  const args = {
    id: store.cheatsheetData.id,
    contributor: user,
  }
  sr71$.mutate(S.addCheatsheetContributor, args)
}

// export function someMethod() {}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('cheatsheet'),
    action: ({ cheatsheet }) => {
      debug('get the cheatsheet: ', cheatsheet)

      store.markState({ cheatsheet, curView: TYPE.RESULT })
    },
  },
  {
    match: asyncRes('syncCheatsheet'),
    action: () => loadCheatsheet(),
  },
  {
    match: asyncRes('addCheatsheetContributor'),
    action: () => loadCheatsheet(),
  },
  {
    match: asyncRes(EVENT.COMMUNITY_CHANGE),
    action: () => {
      debug('======= fucking COMMUNITY_CHANGE ')
      loadCheatsheet()
    },
  },
  {
    match: asyncRes(EVENT.TABBER_CHANGE),
    action: res => {
      const { data } = res[EVENT.TABBER_CHANGE]
      const { activeThread } = data
      if (activeThread === THREAD.CHEATSHEET) return loadCheatsheet()
    },
  },
]
const ErrSolver = [
  {
    match: asyncErr(ERR.CRAPHQL),
    action: ({ details }) => {
      debug('ERR.CRAPHQL -->', details)
      // TODO: add CODE to NOT_FOUND in server
      store.markState({ curView: TYPE.NOT_FOUND })
    },
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      debug('ERR.TIMEOUT -->', details)
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: ({ details }) => {
      debug('ERR.NETWORK -->', details)
    },
  },
]

export function init(_store) {
  store = _store

  if (sub$) return false
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
}

export function uninit() {
  if (store.curView === TYPE.LOADING || !sub$) return false
  debug('===== do uninit')
  sub$.unsubscribe()
  sub$ = null
}
