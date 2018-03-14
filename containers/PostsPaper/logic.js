import R from 'ramda'
import { makeDebugger, dispatchEvent, EVENT, ERR, TYPE } from '../../utils'
import S from './schema'
import SR71 from '../../utils/network/sr71'
// import sr71$ from '../../utils/network/sr71_simple'

const sr71$ = new SR71({
  resv_event: [EVENT.REFRESH_POSTS],
})
/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:PostsPaper')
/* eslint-enable no-unused-vars */

let postsPaper = null
let sub$ = null

const validFilter = R.pickBy(R.compose(R.not, R.isEmpty))

export function inAnchor() {
  postsPaper.setHeaderFix(false)
}

export function outAnchor() {
  postsPaper.setHeaderFix(true)
}

export function pageChange(page) {
  debug('pageChange page: ', page)
  loadPosts(page)
}

export function loadPosts(page = 1) {
  postsPaper.markState({
    curView: 'LOADING',
  })

  // debug('loadPosts curFilter: ', postsPaper.curFilter)
  // debug('loadPosts curTag: ', postsPaper.curTag)
  const args = {
    /* first: 4, */
    filter: {
      page,
      size: 20,
      ...postsPaper.curFilter,
      tag: postsPaper.curTag.title,
    },
  }

  args.filter = validFilter(args.filter)
  debug('args: ', args)
  sr71$.query(S.pagedPosts, args)
}

export function filterOnSelect(key, val) {
  postsPaper.selectFilter(key, val)
  loadPosts()
}

export function tagOnSelect(obj) {
  // debug('tagOnSelect: ', obj)
  postsPaper.selectTag(obj)
  loadPosts()
}

const dataResolver = [
  {
    match: R.has(S.pagedPostsRes),
    action: res => {
      debug('action res-->', res[S.pagedPostsRes])
      const data = res[S.pagedPostsRes]
      postsPaper.loadData(data)
      postsPaper.markState({
        curView: 'RESULT',
      })
    },
  },
  {
    match: R.has(EVENT.REFRESH_POSTS),
    action: res => {
      debug('EVENT.REFRESH_POSTS: ', res)
      loadPosts()
    },
  },
]

function handleError(res) {
  switch (res.error) {
    case ERR.PARSE_CRAPHQL:
      res.details.map(error => {
        debug(`path: ${error.path} : detail: ${error.detail}`)
        return false
      })
      return false
    case ERR.NETWORK:
      debug(`${res.error}: ${res.details}`)
      return false
    case ERR.NOT_FOUND:
      debug(`${res.error}: ${res.details}`)
      return false

    case ERR.TIMEOUT:
      debug(`${res.error}: ${res.details}`)
      // sr71$.stop()
      return false

    default:
      //      debug('un handleError in ', postsPaper)
      debug('un handleError: ', res)
  }
}

const handleData = res => {
  if (res.error) return handleError(res)
  for (let i = 0; i < dataResolver.length; i += 1) {
    if (dataResolver[i].match(res)) {
      return dataResolver[i].action(res)
    }
  }
  // debug('handleData unhandle: ', res)
}

export function onContentSelect(post) {
  debug('onContentSelect publish ')
  // PubSub.publish('hello', post)
  // dispatchEvent(EVENT.PREVIEW, { type: TYPE.POST_PREVIEW_VIEW, data: post })
  dispatchEvent(EVENT.NAV_EDIT, { type: TYPE.POST_PREVIEW_VIEW, data: post })
}

export function createContent() {
  debug('onContentSelect createContent ')
  dispatchEvent(EVENT.NAV_CREATE_POST, { type: TYPE.PREVIEW_CREATE_POST })
}

export function init(selectedStore) {
  postsPaper = selectedStore
  debug('@@@ init @@@i')
  if (sub$) sub$.unsubscribe()
  sub$ = sr71$.data().subscribe(handleData)

  /*
  sr71$.data().subscribe(res => {
    if (res.error) return handleError(res)
    debug('Logic ret: ', res)
  })
  */
  loadPosts()
}
