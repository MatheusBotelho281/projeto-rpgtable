import React from 'react'
import { InnerWrapper, Logo, Wrapper } from './styles'
import HeaderLink from '../HeaderL'

export default function Header(props) {
  return (
    <Wrapper>
      <InnerWrapper>
        <div>
          <Logo src='./media/Logo.png' />
          <h3>{props.campanha}</h3>
        </div>
        <div>
          <div><HeaderLink TextoDoLink='Home' /></div>
          <div><HeaderLink TextoDoLink='Dados' /></div>
          <div><HeaderLink TextoDoLink='Baixar Conteúdo' /></div>
          <div><HeaderLink TextoDoLink='Notas do Mestre' /></div>
        </div>
      </InnerWrapper>
    </Wrapper>
  )
}
