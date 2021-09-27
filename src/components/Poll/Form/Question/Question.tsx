import React from 'react'
import { usePollContext } from 'context/PollContext'
import PollActions from 'store/actions/poll.actions'
import InputField from 'components/shared/InputField'
import { StyledWrapper } from './styles'

const Question: React.FC = () => {
  const {
    statePoll: { title }
  } = usePollContext()

  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void => {
    PollActions.onChangeTitle(event.target.value)
  }

  return (
    <StyledWrapper>
      <InputField
        id="question-input"
        placeholder="Type an option"
        label="Question"
        value={title}
        onChange={handleChange}
      />
    </StyledWrapper>
  )
}

export default Question
