import React from 'react'
import { PollContextProvider } from 'context/PollContext'
import Form from './Form'
import Questionnaire from './Questionnaire'
import Results from './Results'
import { StyledWrapper } from './styles'

const Poll: React.FC = () => {
  return (
    <PollContextProvider>
      <StyledWrapper>
        <Form />
        <Questionnaire />
        <Results />
      </StyledWrapper>
    </PollContextProvider>
  )
}

export default Poll
