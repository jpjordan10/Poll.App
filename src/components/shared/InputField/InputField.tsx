import React from 'react'
import { FormHelperText, TextField } from '@mui/material'
import { INPUT_MAX_LENGTH } from 'consts/pollConsts'
import { StyledWrapper } from './styles'

interface TextFieldProps {
  id: string
  label: string
  placeholder: string
  value: string
  onChange: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void
}

const InputField: React.FC<TextFieldProps> = ({
  id,
  label,
  placeholder,
  value,
  onChange
}: TextFieldProps) => {
  const helperText = `The maximum character limit(${INPUT_MAX_LENGTH}) has been reached`
  return (
    <StyledWrapper>
      <TextField
        id={id}
        label={label}
        variant="outlined"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        fullWidth
        inputProps={{ maxLength: INPUT_MAX_LENGTH }}
      />
      {value.length === INPUT_MAX_LENGTH && (
        <FormHelperText id="input-helper">{helperText}</FormHelperText>
      )}
    </StyledWrapper>
  )
}

export default InputField
