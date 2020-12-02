import { Link } from 'react-router-dom'

const { createGlobalStyle, default: styled } = require('styled-components')

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;font-family: 'Source Sans Pro', sans-serif
}
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  border-radius: 4px;
  align-items: center;
  background: ${({ primary }) => (primary ? '#364f6b' : '#00adb5')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: ${({ primary }) => (primary ? '#0BD5EA' : '#364f6b')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    color: ${({ primary }) => (primary ? '#364f6b' : '#0BD5EA')};
    background: ${({ primary }) => (primary ? '#00adb5' : '#364f6b')};
  }
`

export const Links = styled(Link)`
  text-decoration: none;
  color: #fff;
`

export default GlobalStyle
