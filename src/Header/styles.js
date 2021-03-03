import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export const InnerWrapper = styled.div`
display: flex;
width: 1300px;
justify-content: space-between;
align-items: center;
position: relative;
padding: 0.6em 0;
div{
  display: flex;
  align-items: center;
  margin: 0;
  h3{
    color: white;
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: 1.6rem;
    @media only screen and (max-width: 768px){
      font-size: 1.1rem;
    }
  }
}
`

export const Logo = styled.img`
width: 128px;
height: auto;
margin: 0 2rem;
`