import React, { useState } from 'react'
import { Button, Links } from '../../helpers/globalStyle'
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavMenu,
  NavItem,
  NavSearchInput,
  NavSearch,
  NavbarLeft,
  NavbarCenter,
  NavbarRight,
} from './Navbar.elements'
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa'

function Navbar() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavbarLeft>
            <NavItem>
              <Links to='/'>
                <Button>Home</Button>
              </Links>
            </NavItem>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
          </NavbarLeft>

          <NavbarCenter>
            <NavSearch>
              <NavSearchInput />
              <FaSearch
                style={{
                  backgroundColor: '#00adb5',
                  padding: '5px',
                  height: '30px',
                  width: '30px',
                }}
              />
            </NavSearch>
          </NavbarCenter>

          <NavbarRight>
            <NavMenu onClick={handleClick} click={click}>
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
          </NavbarRight>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
