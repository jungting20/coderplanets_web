import styled from 'styled-components'

import Img from '../../../components/Img'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Divider = styled(Img)`
  fill: ${theme('editor.footer')};
  width: 10px;
  height: 15px;
  margin-left: 4px;
  margin-right: 4px;
  display: block;
`
