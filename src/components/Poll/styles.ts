import styled from 'styled-components'

interface ContentWrapperProps {
  contentExists: boolean
}

export const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  min-height: 0;
  min-width: 0;
  column-gap: 15px;
`

export const StyledContentWrapper = styled.div<ContentWrapperProps>`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: ${props => (props.contentExists ? 'flex-start' : 'center')};
`
