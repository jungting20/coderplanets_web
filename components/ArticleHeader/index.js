/*
 *
 * ArticleHeader
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'

import { ICON_CMD } from '../../config'

import Maybe from '../Maybe'

import {
  Wrapper,
  ReactionWrapper,
  Reaction,
  ReactionAction,
  ReactionName,
  CollectIcon,
  LikeIcon,
  ReactionUserNum,
  Divider,
} from './styles'

import UserInfo from './UserInfo'
import CompanyInfo from './CompanyInfo'

import { makeDebugger, TYPE, THREAD } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:ArticleHeader:index')
/* eslint-enable no-unused-vars */

const ArticleHeader = ({
  thread,
  author,
  company,
  data,
  onReaction,
  showFavorite,
  showStar,
}) => {
  return (
    <Wrapper>
      {author && !company ? (
        <UserInfo author={author} insertedAt={data.insertedAt} />
      ) : null}
      {company ? (
        <CompanyInfo
          company={company}
          insertedAt={data.insertedAt}
          author={author}
        />
      ) : null}
      <ReactionWrapper>
        <Maybe text={showFavorite}>
          <Reaction>
            <ReactionAction
              onClick={onReaction.bind(
                this,
                thread,
                TYPE.FAVORITE,
                data.viewerHasFavorited,
                data
              )}
            >
              <CollectIcon src={`${ICON_CMD}/uncollect.svg`} />
              <ReactionName>
                {data.viewerHasFavorited ? (
                  <span>已收藏</span>
                ) : (
                  <span>收藏</span>
                )}
              </ReactionName>
            </ReactionAction>
            <ReactionUserNum>{data.favoritedCount}</ReactionUserNum>
            <Divider />
          </Reaction>
        </Maybe>

        <Maybe test={showStar}>
          <Reaction>
            <ReactionAction
              onClick={onReaction.bind(
                this,
                thread,
                TYPE.STAR,
                data.viewerHasStarred,
                data
              )}
            >
              <LikeIcon src={`${ICON_CMD}/like.svg`} />
              <ReactionName>赞</ReactionName>
            </ReactionAction>
            <ReactionUserNum>{data.starredCount}</ReactionUserNum>
            <Divider />
          </Reaction>
        </Maybe>

        <Reaction>
          <ReactionAction>
            <ReactionName>浏览:</ReactionName>
          </ReactionAction>
          <ReactionUserNum>{data.views}</ReactionUserNum>
        </Reaction>
      </ReactionWrapper>
    </Wrapper>
  )
}

ArticleHeader.propTypes = {
  author: PropTypes.shape({
    nickname: PropTypes.string,
    avatar: PropTypes.string,
  }),
  company: PropTypes.shape({
    title: PropTypes.string,
    logo: PropTypes.string,
  }),
  thread: PropTypes.oneOf(R.values(THREAD)),

  data: PropTypes.shape({
    // star
    starredCount: PropTypes.number,
    viewerHasStarred: PropTypes.bool,
    // favorite
    favoritedCount: PropTypes.number,
    viewerHasFavorited: PropTypes.bool,
    // published at
    insertedAt: PropTypes.string,
    // views
    views: PropTypes.number,
    // handler
  }).isRequired,
  onReaction: PropTypes.func,
  // ui
  showFavorite: PropTypes.bool,
  showStar: PropTypes.bool,
}

ArticleHeader.defaultProps = {
  thread: THREAD.POST,
  onReaction: debug,
  showFavorite: true,
  showStar: true,
  author: null,
  company: null,
}

export default ArticleHeader
