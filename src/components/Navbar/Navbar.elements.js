import styled from 'styled-components'

export const Nav = styled.nav`
  background-color: #101522;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 100;
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 80px;
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 480px) {
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.ul`
  width: 100%;
  max-width: 1400px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease-in-out;
    background: #101522;
  }
`

export const NavItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #0bd5ea;
    color: #0bd5ea;
  }

  @media screen and (max-width: 480px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`
