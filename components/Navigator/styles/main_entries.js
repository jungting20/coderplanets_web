import styled from 'styled-components'

import { theme, cs } from 'utils'
import DotDividerBase from '../../DotDivider'

export const Wrapper = styled.div`
  ${cs.flex('align-center')};

  margin-left: 10px;
  font-size: 0.9rem;
`
export const DotDivider = styled(DotDividerBase)`
  background-color: ${theme('banner.desc')};
`
export const SiteLink = styled.div`
  color: ${theme('banner.desc')};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: ${theme('banner.title')};
  }
`
