import React from 'react'
import { StyledWrapper } from './styles'
import { Typography } from '@mui/material'

interface EmptyProps {
  title: string
  subTitle: string
  icon: React.ReactNode
}

const Empty: React.FC<EmptyProps> = ({ title, subTitle, icon }: EmptyProps) => {
  return (
    <StyledWrapper>
      {icon}
      <Typography variant="subtitle1">{title}</Typography>
      <Typography variant="subtitle2">{subTitle}</Typography>
    </StyledWrapper>
  )
}

export default Empty
