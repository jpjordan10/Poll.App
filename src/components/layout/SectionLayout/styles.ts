import styled, { css } from 'styled-components'

const BaseSection = css`
  padding: 10px 5px;
  display: grid;
  min-width: 0;
`
export const StyledWrapper = styled.div`
  height: 90vh;
  border-radius: 30px;
  background-color: white;
  display: grid;
  grid-template-rows: 100px 1fr 80px;
  grid-template-areas:
    'header'
    'main'
    'footer';
`

export const StyledHeader = styled.div`
  ${BaseSection}
  grid-area: header;
  word-break: break-all;
`

export const StyledMain = styled.div`
  grid-area: main;
  padding: 0px 5px;
  overflow: auto;
`

export const StyledFooter = styled.div`
  ${BaseSection}
  grid-area: footer;
`
