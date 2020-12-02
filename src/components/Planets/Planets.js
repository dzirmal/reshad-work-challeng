import React, { useEffect, useState } from 'react'
import axios from '../../axios'

import requests from '../../requests'

import { PlanetsContainer, PlanetsAll, PlanetsTitle } from './Planets.elements'
import { PlanetCard } from '..'
import { useStateValue } from '../../stateProvider/StateProvider'

// const { GraphQLServer } = require('graphql-yoga')

function Planets({ title }) {
  // const [{ movies, dispatch }] = useStateValue()
  const [planets, setPlanets] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPlanets() {
      const request = await axios.get(requests.fetchPlanets)
      setPlanets(request.data.results)

      return request
    }
    fetchPlanets()
  }, [])

  console.log('planets:', planets)

  return (
    <PlanetsContainer>
      <PlanetsTitle>{title}</PlanetsTitle>
      <PlanetsAll>
        {planets.map((planet, i) => (
          <PlanetCard key={i} planet={planet} />
        ))}
      </PlanetsAll>
    </PlanetsContainer>
  )
}

export default Planets
