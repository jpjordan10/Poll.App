import React from 'react'
import { StyledItem, StyledWrapper } from './styles'
import { Typography } from '@mui/material'

interface FooterProps {
  text?: string
  action?: React.ReactNode
}

const Footer: React.FC<FooterProps> = ({
  text = '',
  action = undefined
}: FooterProps) => {
  return (
    <StyledWrapper>
      <StyledItem position="start">
        <Typography variant="body1">{text}</Typography>
      </StyledItem>
      <StyledItem position="end">{action}</StyledItem>
    </StyledWrapper>
  )
}

export default Footer
