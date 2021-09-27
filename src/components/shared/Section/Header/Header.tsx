import React from 'react'
import { Typography } from '@mui/material'
import { StyledWrapper } from './styles'

export interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }: HeaderProps) => {
  return (
    <StyledWrapper>
      <Typography variant="h6">{title}</Typography>
    </StyledWrapper>
  )
}

export default Header
