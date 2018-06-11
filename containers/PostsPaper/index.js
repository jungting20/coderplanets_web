/*
 *
 * PostsPaper
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'
import shortid from 'shortid'
import TimeAgo from 'timeago-react'
import Waypoint from 'react-waypoint'
// import Link from 'next/link'

import { ICON_ASSETS } from '../../config'

import { makeDebugger, storePlug, cutFrom, TYPE } from '../../utils'

import {
  Affix,
  AvatarsRow,
  TagList,
  PostsLoading,
  Pagi,
  NotFound,
  ContentFilter,
  BuyMeChuanChuan,
} from '../../components'

// import logic from './logic'
import * as logic from './logic'
import {
  Wrapper,
  LeftPadding,
  RightPadding,
  LeftPart,
  RightPart,
  PostWrapper,
  FilterWrapper,
  FilterResultHint,
  PostAvatar,
  PostTitleLink,
  LinkIcon,
  PostMain,
  PostTopHalf,
  PostBreif,
  PostTitle,
  PostTitleTag,
  PostSecondHalf,
  PostBodyBreif,
  PostExtra,
  PostTitleTagDot,
  TagDivider,
  WritePostBtn,
} from './styles'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:PostsPaper')
/* eslint-enable no-unused-vars */

const tags = [
  {
    color: '#FC6360',
    title: '精华',
  },
  {
    color: '#FFA653',
    title: '翻译',
  },
  {
    color: '#F8CE5A',
    title: '问答',
  },
  {
    color: '#60CC5A',
    title: '教程',
  },
  {
    color: '#9fefe4',
    title: '分享',
  },
  {
    color: '#2CB8F0',
    title: '灌水',
  },
  {
    color: '#D488DE',
    title: '活动',
  },
  {
    color: 'lightgrey',
    title: '其他',
  },
]

const PostItem = ({ post, active }) => (
  <PostWrapper current={post} active={active}>
    <div>
      <PostAvatar
        src="http://coderplanets.oss-cn-beijing.aliyuncs.com/mock/me.jpg"
        alt="avatar"
      />
    </div>
    <PostMain>
      <PostTopHalf>
        <PostBreif onClick={logic.onTitleSelect.bind(this, post)}>
          <PostTitle>{post.title}</PostTitle>
          <PostTitleLink>
            <LinkIcon src={`${ICON_ASSETS}/cmd/link.svg`} />
            <span style={{ marginLeft: 9 }}>github</span>
          </PostTitleLink>
          <PostTitleTag>
            <PostTitleTagDot />
            react
          </PostTitleTag>
        </PostBreif>
        <div>
          <AvatarsRow
            users={post.commentsParticipators}
            total={post.commentsParticipatorsCount}
          />
        </div>
      </PostTopHalf>

      <PostSecondHalf>
        <PostExtra>
          mydearxym 发布于:{' '}
          <TimeAgo datetime={post.insertedAt} locale="zh_CN" /> ⁝ 浏览:{' '}
          {post.views}
        </PostExtra>
        <PostBodyBreif>{cutFrom(post.digest, 90)}</PostBodyBreif>
      </PostSecondHalf>
    </PostMain>
  </PostWrapper>
)

const View = ({ posts, curView, active }) => {
  switch (curView) {
    case TYPE.RESULT: {
      return (
        <div>
          {posts.map(post => (
            <PostItem post={post} key={shortid.generate()} active={active} />
          ))}
        </div>
      )
    }
    case TYPE.NOT_FOUND: {
      return (
        <div>
          <NotFound />
        </div>
      )
    }
    default:
      return <PostsLoading num={5} />
  }
}

class PostsPaperContainer extends React.Component {
  componentWillMount() {
    logic.init(this.props.postsPaper)
  }

  componentDidMount() {}

  render() {
    const {
      postsData,
      curView,
      curFilter: { when, sort, wordLength },
      curTag,
      active,
      accountInfo,
    } = this.props.postsPaper

    return (
      <Wrapper>
        <LeftPadding />
        <BuyMeChuanChuan fromUser={accountInfo} />
        <LeftPart>
          <Waypoint onEnter={logic.inAnchor} onLeave={logic.outAnchor} />
          <FilterWrapper>
            <ContentFilter
              onSelect={logic.onFilterSelect}
              activeWhen={when}
              activeSort={sort}
              activeLength={wordLength}
            />
            <FilterResultHint>
              结果约 {postsData.totalCount} 条
            </FilterResultHint>
          </FilterWrapper>

          <View posts={postsData.entries} curView={curView} active={active} />

          <Pagi
            left="-10px"
            pageNumber={postsData.pageNumber}
            pageSize={postsData.pageSize}
            totalCount={postsData.totalCount}
            onChange={logic.pageChange}
          />
        </LeftPart>

        <RightPart>
          <WritePostBtn type="primary" onClick={logic.createContent}>
            发&nbsp;&nbsp;&nbsp;&nbsp;帖
          </WritePostBtn>

          <Affix offsetTop={50}>
            <TagDivider />
            <TagList tags={tags} active={curTag} onSelect={logic.onTagSelect} />
          </Affix>
        </RightPart>
        <RightPadding />
      </Wrapper>
    )
  }
}

export default inject(storePlug('postsPaper'))(observer(PostsPaperContainer))
