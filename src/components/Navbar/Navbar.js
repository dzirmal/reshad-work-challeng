import React, { useState } from 'react'
import { Button, Links } from '../../globalStyle'
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavMenu,
  NavItem,
} from './Navbar.elements'
import { FaBars, FaTimes, FaAngleDown } from 'react-icons/fa'

function Navbar() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  return (
    <>
      <Nav>
        <NavbarContainer>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <Links to='/'>
                <Button>Home</Button>
              </Links>
            </NavItem>

            <NavItem>
              <Links to='/planets'>
                <Button>Planets</Button>
              </Links>
            </NavItem>

            <NavItem>
              <Links to='/films'>
                <Button>Films</Button>
              </Links>
            </NavItem>

            <NavItem>
              <Links to='/people'>
                <Button>People</Button>
              </Links>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
