import React from 'react'
import { StyledMain, StyledFooter, StyledHeader, StyledWrapper } from './styles'

interface SectionLayoutProps {
  header: React.ReactNode
  main: React.ReactNode
  footer: React.ReactNode
}

const SectionLayout: React.FC<SectionLayoutProps> = ({
  header,
  main,
  footer
}: SectionLayoutProps) => {
  return (
    <StyledWrapper>
      <StyledHeader>{header}</StyledHeader>
      <StyledMain>{main}</StyledMain>
      <StyledFooter>{footer}</StyledFooter>
    </StyledWrapper>
  )
}

export default SectionLayout
