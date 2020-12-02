import React from 'react'
import { Button, Links } from '../../globalStyle'
import { HomeContainer } from './Home.elements'

function Home() {
  return (
    <HomeContainer>
      <h1>Welcome to the Star Wars</h1>
      <Links to='planets'>
        <Button>Planets</Button>
      </Links>
      {/* <Planets title='Star Wars Planets' fetchUrl={requests.fetchPlanets} /> */}
    </HomeContainer>
  )
}

export default Home
