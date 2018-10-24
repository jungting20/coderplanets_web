import React from 'react'

import { ICON_CMD } from '../../config'

import { FocusLine } from '../../components'
import NumSection from './NumSection'
import {
  Wrapper,
  LeftPart,
  RightPart,
  RightWrapper,
  NumberDivider,
  AchieveWrapper,
} from './styles/site_social'

const NumbersDashboard = ({ user }) => (
  <RightWrapper>
    <NumSection title="声望" num={user.achievement.reputation} />
    <NumberDivider />
    <NumSection title="关注者" num={user.followingsCount} />
    <NumberDivider />
    <NumSection title="关注中" num={user.followersCount} />
  </RightWrapper>
)

const AcieveDashboard = ({ user }) => (
  <AchieveWrapper>
    <FocusLine
      before="共获得"
      iconSrc={`${ICON_CMD}/likev2.svg`}
      focus={user.achievement.contentsStaredCount}
      after="赞"
    />
    <FocusLine
      before="创作的内容被收藏"
      iconSrc={`${ICON_CMD}/favoritev2.svg`}
      focus={user.achievement.contentsFavoritedCount}
      after="次"
    />
  </AchieveWrapper>
)

/* const SiteSocial = ({user}) => { */
const SiteSocial = ({ user }) => {
  return (
    <Wrapper>
      <LeftPart>
        <NumbersDashboard user={user} />
      </LeftPart>
      <RightPart>
        <AcieveDashboard user={user} />
      </RightPart>
    </Wrapper>
  )
}

export default SiteSocial
