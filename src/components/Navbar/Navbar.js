import React, { useContext, useState } from 'react'
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
  NavItemDropdown,
} from './Navbar.elements'
import { FaBars, FaTimes, FaSearch, FaAngleDown } from 'react-icons/fa'
import { GlobalContext } from '../../helpers/Provider'
import { searchPlanets } from '../../helpers/actions/actionTypes/search/searchPlanets'
import { Dropdown } from '..'

function Navbar() {
  const [click, setClick] = useState(false)
  const [dropdown, setDropdown] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const { planetsDispatch: dispatch } = useContext(GlobalContext)

  const onMouseEnter = () => {
    if (window.innerWidth < 560) {
      setDropdown(false)
    } else {
      setDropdown(true)
    }
  }
  const onMouseLeave = () => {
    if (window.innerWidth < 560) {
      setDropdown(false)
    } else {
      setDropdown(false)
    }
  }

  const handleSearch = (e, { value }) => {
    const searchText = value.trim().replace(/" "/g, '')
    console.log('value', value)
    searchPlanets(searchText)(dispatch)
  }

  // console.log('foundPlanets:', foundPlanets)

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
              <NavSearchInput placeholder='Search' onChange={handleSearch} />
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
              <NavItem onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <NavItemDropdown>
                  More <FaAngleDown />
                  {dropdown && <Dropdown />}
                </NavItemDropdown>
              </NavItem>
            </NavMenu>
          </NavbarRight>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
