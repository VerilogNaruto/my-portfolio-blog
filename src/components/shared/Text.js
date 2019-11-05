import styled from 'styled-components'

export const PageTitle = styled.h1`
  text-align: ${ props => props.align || 'center' };
  color: ${ props => props.theme.title };
`

export const PageSubTitle = styled.p`
  text-align: center;
`
