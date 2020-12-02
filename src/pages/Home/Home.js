import React from 'react'
import { Button, Links } from '../../globalStyle'
import { HomeContainer, HomeContents, HomeTitle } from './Home.elements'

function Home() {
  return (
    <HomeContainer>
      <HomeTitle>Welcome to the Star Wars</HomeTitle>
      <HomeContents>
        <Links to='/planets'>
          <Button big>Planets</Button>
        </Links>
        <Links to='/films'>
          <Button big>Films</Button>
        </Links>
        <Links to='/people'>
          <Button big>People</Button>
        </Links>
      </HomeContents>
    </HomeContainer>
  )
}

export default Home
