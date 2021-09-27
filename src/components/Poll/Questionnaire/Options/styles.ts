import styled from 'styled-components'
import { FormControlLabel } from '@mui/material'

interface WrapperProps {
  contentExists: boolean
}

export const StyledWrapper = styled.div<WrapperProps>`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: ${props => (props.contentExists ? 'flex-start' : 'center')};
`

export const StyledFormControlLabel = styled(FormControlLabel)`
  padding: 10px;
  span:nth-child(2) {
    word-break: break-all;
  }
`
