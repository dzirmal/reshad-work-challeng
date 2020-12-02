import React from 'react'
import { Button, Links } from '../../globalStyle'
import { NavbarContainer } from './Navbar.elements'

function Navbar() {
  return (
    <NavbarContainer>
      <Links to='/'>
        <Button>Home</Button>
      </Links>
      <Links to='/planets'>
        <Button>Planets</Button>
      </Links>
      <Links to='/films'>
        <Button>Films</Button>
      </Links>
      <Links to='/people'>
        <Button>People</Button>
      </Links>
    </NavbarContainer>
  )
}

export default Navbar
