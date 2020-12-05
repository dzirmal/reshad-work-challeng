import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { PlanetsContainer, PlanetsAll, Category } from './Planets.elements'
import { PlanetCard } from '..'
import { getPlanets } from '../../helpers/actions/getPlanets'
import { GlobalProvider } from '../../helpers/Provider'

// const { GraphQLServer } = require('graphql-yoga')
// import axios from '../../helpers/axios/axios'
// import requests from '../../helpers/requests'

const Planets = () => {
  const planetsDispatch = useContext(GlobalProvider)
  const planetsState = useContext(GlobalProvider)
  const context = useContext(GlobalProvider)

  const history = useHistory()

  const [planets, setPlanets] = useState([])
  // const [loading, setLoading] = useState(true)
  // // useEffect(() => {
  //   async function fetchPlanets() {
  //     const request = await axios.get(requests.fetchPlanets)
  //     setPlanets(request.data.results)

  //     return request
  //   }
  //   fetchPlanets()
  // }, [])

  console.log('planetsState:', planetsState)
  console.log('planetsDispatch:', planetsDispatch)
  console.log('context:', context)

  useEffect(() => {
    // getPlanets(history)(planetsDispatch)
    getPlanets(history)(planetsDispatch)
  }, [])

  return (
    <PlanetsContainer>
      <Category>Planets</Category>
      <PlanetsAll>
        {planets.map((planet, i) => (
          <PlanetCard key={i} planet={planet} />
        ))}
      </PlanetsAll>
    </PlanetsContainer>
  )
}

export default Planets
