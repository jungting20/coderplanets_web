/*
 * CommunitiesContentStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import { ICON_CMD } from '@config'
import { markStates, buildLog, stripMobx, Trans } from '@utils'
import { PagedCommunities, PagedCategories } from '@model'

import { LN } from './logic'
/* eslint-disable-next-line */
const log = buildLog('S:CommunitiesContentStore')

const CommunitiesContentStore = t
  .model('NewCommunityContentStore', {
    communityType: t.maybeNull(
      t.enumeration([
        LN.COMMUNITY_TYPE.STANDER,
        LN.COMMUNITY_TYPE.CITY,
        LN.COMMUNITY_TYPE.WORK,
        LN.COMMUNITY_TYPE.TEAM,
      ])
    ),
    step: t.optional(
      t.enumeration([LN.STEP.SELECT_TYPE, LN.STEP.SETUP_NAME]),
      LN.STEP.SELECT_TYPE
    ),

    // current active sidbar menu id
    activeCatalogId: t.maybeNull(t.string),
    pagedCommunities: t.maybeNull(PagedCommunities),
    searching: t.optional(t.boolean, false),
    // cur active category
    /* category: t.optional(t.string, ''), */
    // for UI loading state
    subscribing: t.optional(t.boolean, false),
    subscribingId: t.maybeNull(t.string),
    pagedCategories: t.maybeNull(PagedCategories),
    // search status
    isSearchMode: t.optional(t.boolean, false),
    searchResultCount: t.optional(t.number, 0),
    searchValue: t.optional(t.string, ''),
    showSearchMask: t.optional(t.boolean, true),
    showCreateHint: t.optional(t.boolean, true),
    showSearchHint: t.optional(t.boolean, false),
    searchfocused: t.optional(t.boolean, false),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get isLogin() {
      return self.root.account.isLogin
    },
    get curRoute() {
      return self.root.curRoute
    },
    get searchStatus() {
      return {}
    },
    get pagedCommunitiesData() {
      return stripMobx(self.pagedCommunities)
    },
    get pagiInfo() {
      const { pageNumber, pageSize, totalCount } = self.pagedCommunitiesData

      return {
        pageNumber,
        pageSize,
        totalCount,
      }
    },
    get activeMenuId() {
      const { entries } = stripMobx(self.pagedCategories)
      return self.activeCatalogId || entries[0].id
    },
    get pagedCategoriesData() {
      const { entries } = stripMobx(self.pagedCategories)
      return entries.map(item => ({
        id: item.id,
        raw: item.raw,
        title: Trans(item.title),
        icon: `${ICON_CMD}/catalogs/${item.raw}.svg`,
      }))
    },
  }))
  .actions(self => ({
    updateEditing(sobj) {
      self.mark(sobj)
    },
    authWarning(options) {
      self.root.authWarning(options)
    },
    toggleSubscribe(community) {
      const index = R.findIndex(
        R.propEq('id', community.id),
        self.pagedCommunities.entries
      )
      if (index === -1) return false

      if (self.pagedCommunities.entries[index].viewerHasSubscribed) {
        self.pagedCommunities.entries[index].viewerHasSubscribed = false
        self.pagedCommunities.entries[index].subscribersCount -= 1
      } else {
        self.pagedCommunities.entries[index].viewerHasSubscribed = true
        self.pagedCommunities.entries[index].subscribersCount += 1
      }
    },
    addSubscribedCommunity(community) {
      self.root.account.addSubscribedCommunity(community)
      self.root.communitiesContent.toggleSubscribe(community)
    },
    removeSubscribedCommunity(community) {
      self.root.account.removeSubscribedCommunity(community)
      self.root.communitiesContent.toggleSubscribe(community)
    },
    markRoute(query) {
      self.root.markRoute(query)
    },
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default CommunitiesContentStore
