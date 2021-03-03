import styled from 'styled-components'

export const Anchor = styled.a`
color: white;
padding: 13px 0;
cursor: pointer;
border-bottom: solid 2px transparent;
margin-right: 1rem;
font-family: 'Raleway', sans-serif;
:hover{
  border-bottom: 2px solid white;
}
@media only screen and (max-width: 1024px){
  display:none;
}
`