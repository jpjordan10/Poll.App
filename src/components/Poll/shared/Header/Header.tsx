import React, { useEffect, useState } from 'react'
import HeaderSection, { HeaderProps } from 'components/shared/Section/Header'
import formatQuestionTitle from 'utils/formatQuestionTitle'

const Header: React.FC<HeaderProps> = ({ title }: HeaderProps) => {
  const [value, setValue] = useState('')

  useEffect(() => {
    setValue(formatQuestionTitle(title))
  }, [title])

  return <HeaderSection title={value} />
}

export default Header
