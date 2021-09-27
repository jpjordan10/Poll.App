import React from 'react'
import Poll from 'components/Poll'
import './global.css'
import { StyledAppTitle, StyledTitleContent, StyledWrapper } from './styles'

const App: React.FC = () => {
  return (
    <StyledWrapper>
      <StyledTitleContent>
        <StyledAppTitle variant="h2">Sir vote-a-lot</StyledAppTitle>
      </StyledTitleContent>
      <Poll />
    </StyledWrapper>
  )
}

export default App
