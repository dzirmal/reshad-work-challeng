import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const DropdownContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0;
  position: absolute;
`

export const Ul = styled.ul`
  &.dropdown-menu {
    width: 200px;
    position: absolute;
    top: 40px;
    list-style: none;
    text-align: center;
  }
  &.clicked {
    display: none;
  }
`

export const Li = styled.li`
  padding-top: 5px;
  padding-bottom: 5px;
  cursor: pointer;
  background: #364f6b;

  &:hover {
    font-weight: bold;
    background: #00adb5;
    color: #364f6b;
  }
`

export const Links = styled(Link)`
  text-decoration: none;
  display: block;
  width: 100%;
  height: 100%;
  color: white;
  padding: 5px;

  &:hover {
    color: #364f6b;
  }
`
