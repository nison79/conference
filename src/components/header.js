import React from 'react'
import Img from '../images/logo.png'

import styled from 'styled-components'


const Header = () => {
  return (
    <div>
      <Logo src={Img} alt="logo "></Logo>
    </div>
  )
}

export default Header


const Logo = styled.img`
  width:110px;
  padding:2rem;
`