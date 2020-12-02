import React, { useEffect, useState } from 'react'
import axios from '../../axios'

import requests from '../../requests'

import { PlanetsContainer, PlanetsAll, Category } from './Planets.elements'
import { Card } from '..'
import { useStateValue } from '../../stateProvider/StateProvider'

// const { GraphQLServer } = require('graphql-yoga')

function Planets() {
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
      <Category>Planets</Category>
      <PlanetsAll>
        {planets.map((planet, i) => (
          <Card key={i} planet={planet} />
        ))}
      </PlanetsAll>
    </PlanetsContainer>
  )
}

export default Planets
