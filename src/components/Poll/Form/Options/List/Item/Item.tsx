import React, { useEffect, useState } from 'react'
import IconButton from 'components/shared/IconButton'
import InputField from 'components/shared/InputField'
import { IconType } from 'enums/IconType'
import PollActions from 'store/actions/poll.actions'
import { ReducerDefinitions } from 'store/reducers'
import { StyledQuestionItem } from '../../styles'
import { StyledIconWrapper } from './styles'

interface ItemProps {
  item: ReducerDefinitions.Option
}

const Item: React.FC<ItemProps> = ({ item: { value, id } }: ItemProps) => {
  const [fieldValue, setFieldValue] = useState(value)
  const [isBeingEditted, setIsBeingEditted] = useState(false)

  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void => {
    setFieldValue(event.target.value)
  }

  const handleCancel = (): void => {
    setFieldValue(value)
  }

  const handleUpdate = (): void => {
    PollActions.updateOption(id, fieldValue)
  }

  const handleRemove = (): void => {
    PollActions.removeOption(id)
  }

  useEffect(() => {
    setIsBeingEditted(value !== fieldValue)
  }, [fieldValue, value])

  return (
    <div>
      <StyledQuestionItem isBeingEditted={isBeingEditted}>
        <InputField
          id="question-input"
          placeholder="Type an option"
          label="Option"
          value={fieldValue}
          onChange={handleChange}
        />
        <StyledIconWrapper>
          {isBeingEditted ? (
            <>
              <IconButton
                type={IconType.Accept}
                onClick={handleUpdate}
                disabled={!Boolean(fieldValue)}
              />
              <IconButton
                type={IconType.Cancel}
                onClick={handleCancel}
                disabled={!Boolean(fieldValue)}
              />
            </>
          ) : (
            <IconButton type={IconType.Remove} onClick={handleRemove} />
          )}
        </StyledIconWrapper>
      </StyledQuestionItem>
    </div>
  )
}

export default Item
