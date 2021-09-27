import React, { memo } from 'react'
import { FormControl, Radio, RadioGroup } from '@mui/material'
import { ReducerDefinitions } from 'store/reducers'
import { StyledFormControlLabel } from './styles'
import Empty from 'components/shared/Section/Empty'
import { DoDisturbAltOutlined as NoActionIcon } from '@mui/icons-material'
import { StyledContentWrapper } from 'components/Poll/styles'
import { MINIMUN_OPTIONS_COUNT } from 'consts/pollConsts'

interface OptionsProps {
  value: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  options: ReducerDefinitions.Option[]
}

const Options: React.FC<OptionsProps> = ({
  value,
  handleChange,
  options
}: OptionsProps) => {
  const contentExists = options.length >= MINIMUN_OPTIONS_COUNT
  return (
    <StyledContentWrapper contentExists={contentExists}>
      {contentExists ? (
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="answer"
            name="answer-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            {options.map(option => (
              <StyledFormControlLabel
                key={option.id}
                value={String(option.id)}
                control={<Radio />}
                label={option.value}
              />
            ))}
          </RadioGroup>
        </FormControl>
      ) : (
        <Empty
          icon={<NoActionIcon fontSize="large" />}
          title="You can't response the questionnaire now"
          subTitle="There should be at least two options."
        />
      )}
    </StyledContentWrapper>
  )
}

export default memo(Options)
