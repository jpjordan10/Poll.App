import React, { useState } from 'react'
import IconButton from 'components/shared/IconButton'
import InputField from 'components/shared/InputField'
import { MAX_OPTIONS_LIMIT } from 'consts/pollConsts'
import { usePollContext } from 'context/PollContext'
import { IconType } from 'enums/IconType'
import PollActions from 'store/actions/poll.actions'
import { StyledQuestionItem } from '../styles'

const Add: React.FC = () => {
  const [value, setValue] = useState('')
  const {
    statePoll: { options }
  } = usePollContext()

  const disabled = !value || options.length === MAX_OPTIONS_LIMIT

  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void => {
    setValue(event.target.value)
  }

  const handleSave = (): void => {
    PollActions.addOption(value)
    setValue('')
  }

  return (
    <>
      <StyledQuestionItem>
        <InputField
          id="add-question-input"
          placeholder="Type a new option"
          label="Add an option"
          value={value}
          onChange={handleChange}
        />
        <IconButton
          type={IconType.Add}
          disabled={disabled}
          onClick={handleSave}
        />
      </StyledQuestionItem>
    </>
  )
}

export default Add
