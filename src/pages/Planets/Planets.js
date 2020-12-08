import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { PlanetsContainer, PlanetsAll, Category } from './Planets.elements'
import { GlobalContext } from '../../helpers/Provider'
import { getPlanets } from '../../helpers/actions/actionTypes/getData/getPlanets'
import { PlanetCard } from '../../components'

const Planets = () => {
  const { planetsDispatch, planetsState } = useContext(GlobalContext)
  const history = useHistory()

  // console.log('planetsState:', planetsState)

  useEffect(() => {
    getPlanets(history)(planetsDispatch)
  }, [])

  return (
    <PlanetsContainer>
      <Category>Planets</Category>
      <PlanetsAll>
        <PlanetCard planetsState={planetsState} />
      </PlanetsAll>
    </PlanetsContainer>
  )
}

export default Planets
