import React from 'react'
import { Button, Links } from '../../globalStyle'

function Navbar() {
  return (
    <div>
      <Links to='/'>
        <Button>Home</Button>
      </Links>
      <Links to='/planets'>
        <Button>Planets</Button>
      </Links>
    </div>
  )
}

export default Navbar
