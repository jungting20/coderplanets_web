import styled from 'styled-components'

import { BaseBanner } from './index'
// import Img from '../../../components/Img'
// import { theme } from '../../../utils'

export const Wrapper = styled(BaseBanner)`
  min-height: 45px;
`
export const BaseBannerContent = styled.div`
  display: flex;
  margin-left: 8%;
  margin-right: 8%;
`
export const BannerContainer = styled(BaseBanner)``

export const TabberWrapper = styled.div`
  width: 80vw;
  display: flex;
  margin-left: 120px;
  margin-top: 4px;
`
export const BannerContentWrapper = styled(BaseBannerContent)``
