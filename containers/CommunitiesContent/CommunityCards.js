import React from 'react'
import R from 'ramda'

// import { ICON_CMD } from '../../config'
// import { Wrapper } from './styles'
import { TrendLine } from '../../components'
import SubscribeBtn from './SubscribeBtn'

import {
  Wrapper,
  CardsWrapper,
  Card,
  EmptyCard,
  EmptyTitle,
  EmptyDesc,
  IssueLink,
  SearchValueFocus,
  CommunityIcon,
  CardTitle,
  CardDesc,
  ActivitySpark,
  Divider,
  CardFooter,
} from './styles/community_cards'

import { NON_FILL_COMMUNITY, prettyNum, cutFrom } from '../../utils'

const CommunityCard = ({ community, restProps }) => (
  <Card>
    <CommunityIcon
      nonFill={R.contains(community.raw, NON_FILL_COMMUNITY)}
      src={community.logo}
    />
    <CardTitle>{community.title}</CardTitle>
    <CardDesc>{community.desc}</CardDesc>
    <ActivitySpark>
      <TrendLine data={community.contributesDigest} />
    </ActivitySpark>
    <Divider />
    <CardFooter>
      <React.Fragment>
        {/* TODO: number color should be different when number grow large */}
        {prettyNum(community.subscribersCount)}{' '}
        {community.subscribersCount < 1000 ? '人关注' : '关注'}
      </React.Fragment>

      <SubscribeBtn community={community} restProps={restProps} />
    </CardFooter>
  </Card>
)

const CommnityCards = ({ entries, restProps }) => {
  if (R.isEmpty(entries)) {
    const { searchValue } = restProps

    return (
      <CardsWrapper>
        <EmptyCard>
          <EmptyTitle>
            没有找到包含{' '}
            <SearchValueFocus>{cutFrom(searchValue, 10)}</SearchValueFocus>{' '}
            的社区
          </EmptyTitle>
          <EmptyDesc>
            若没有你感兴趣的社区, 你可以
            <IssueLink
              href="https://github.com/coderplanets/coderplanets_web/issues/280"
              rel="noopener noreferrer"
              target="_blank"
            >
              参与创建
            </IssueLink>
          </EmptyDesc>
        </EmptyCard>
      </CardsWrapper>
    )
  }
  return (
    <Wrapper>
      <CardsWrapper>
        {entries.map(community => (
          <CommunityCard
            key={community.raw}
            community={community}
            restProps={restProps}
          />
        ))}
      </CardsWrapper>
    </Wrapper>
  )
}

export default CommnityCards
