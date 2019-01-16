import R from 'ramda'

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

/* eslint-disable-next-line */
const debug = makeDebugger('L:CheatsheetThread')

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

export const syncCheatsheet = readme => {
  const args = {
    readme,
    lastSync: new Date().toISOString(),
    communityId: store.curCommunity.id,
  }

  sr71$.mutate(S.syncCheatsheet, args)
}

export const syncCheetsheetFromGithub = () => {
  githubApi
    .searchCheatsheet(store.curCommunity.raw)
    .then(res => {
      if (!res || R.startsWith('404', res))
        return store.markState({ curView: TYPE.NOT_FOUND })

      syncCheatsheet(res)
    })
    .catch(e => store.handleError(githubApi.parseError(e)))
}

export const addContributor = user => {
  const args = {
    id: store.cheatsheetData.id,
    contributor: user,
  }
  sr71$.mutate(S.addCheatsheetContributor, args)
}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('cheatsheet'),
    action: ({ cheatsheet }) =>
      store.markState({ cheatsheet, curView: TYPE.RESULT }),
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
    action: () => loadCheatsheet(),
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

export const init = _store => {
  store = _store

  if (sub$) return false
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
}

export const uninit = () => {
  if (store.curView === TYPE.LOADING || !sub$) return false
  debug('===== do uninit')
  sr71$.stop()
  sub$.unsubscribe()
  sub$ = null
}
