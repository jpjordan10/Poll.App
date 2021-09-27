import styled from 'styled-components'

interface ItemProps {
  position: 'start' | 'end'
}

export const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`

export const StyledItem = styled.div<ItemProps>`
  padding: 10px 5px;
  display: grid;
  justify-self: ${props => props.position};
`
