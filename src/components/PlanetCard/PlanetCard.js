import React from 'react'
import requests from '../../requests'
import { PlanetCardContainer, PlanetName } from './PlanetCard.elements'

function PlanetCard({
  planet: {
    name,
    climate,
    created,
    edited,
    films,
    orbital_period,
    population,
    residents,
    rotation_period,
    surface_water,
    terrain,
    url,
  },
}) {
  return (
    <PlanetCardContainer>
      <PlanetName>Name: {name}</PlanetName>
    </PlanetCardContainer>
  )
}

export default PlanetCard
