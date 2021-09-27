import styled from 'styled-components'

interface OptionProps {
  isBeingEditted?: boolean
}

export const StyledQuestionItem = styled.div<OptionProps>`
  padding: 10px 5px;
  display: grid;
  grid-template-columns: 1fr 100px;
`
