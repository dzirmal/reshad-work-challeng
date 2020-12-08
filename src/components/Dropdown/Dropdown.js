import React, { useState } from 'react'
import { DropdownContainer, Li, Ul, Links } from './Dropdown.elements'

function Dropdown() {
  const [click, setClick] = useState(false)

  const more = [
    { name: 'Planets', link: '/planets' },
    { name: 'Films', link: '/films' },
    { name: 'People', link: '/people' },
  ]

  const handleClick = (e) => {
    e.preventDefault()
    setClick(!click)
  }
  return (
    <DropdownContainer>
      <Ul className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
        {more.map((item, i) => (
          <Li onClick={(e) => handleClick(e)} key={i}>
            <Links to={item.link} onClick={() => setClick(false)}>
              {item.name}
            </Links>
          </Li>
        ))}
      </Ul>
    </DropdownContainer>
  )
}

export default Dropdown
