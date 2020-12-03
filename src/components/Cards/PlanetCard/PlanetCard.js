import React from 'react'
import {
  CardContainer,
  CardDescription,
  CardHeader,
  CardElementName,
  CardElement,
  CardElementNameValue,
} from './PlanetCard.elements'

function Card({
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
    <CardContainer>
      <CardHeader>{name}</CardHeader>
      <CardDescription>
        <CardElement>
          <CardElementName>Climate:</CardElementName>
          <CardElementNameValue>{climate} </CardElementNameValue>
        </CardElement>
        <CardElement>
          <CardElementName>Created: </CardElementName>
          <CardElementNameValue> {created}</CardElementNameValue>
        </CardElement>
        <CardElement>
          <CardElementName>Edited: </CardElementName>
          <CardElementNameValue> {edited}</CardElementNameValue>
        </CardElement>
        <CardElement>
          <CardElementName>Films: </CardElementName>
          <CardElementNameValue>{films.length}</CardElementNameValue>
        </CardElement>
        <CardElement>
          <CardElementName>Orbital_period: </CardElementName>
          <CardElementNameValue>{orbital_period}</CardElementNameValue>
        </CardElement>
        <CardElement>
          <CardElementName>Population: </CardElementName>
          <CardElementNameValue>{population}</CardElementNameValue>
        </CardElement>
        <CardElement>
          <CardElementName>Residents: </CardElementName>
          <CardElementNameValue>{residents.length}</CardElementNameValue>
        </CardElement>
        <CardElement>
          <CardElementName>Rotation_period: </CardElementName>
          <CardElementNameValue> {rotation_period}</CardElementNameValue>
        </CardElement>
        <CardElement>
          <CardElementName>Surface_water: </CardElementName>
          <CardElementNameValue> {surface_water}</CardElementNameValue>
        </CardElement>
        <CardElement>
          <CardElementName>Terrain: </CardElementName>
          <CardElementNameValue>{terrain}</CardElementNameValue>
        </CardElement>
        <CardElement>
          <CardElementName>url: </CardElementName>
          <CardElementNameValue>{url}</CardElementNameValue>
        </CardElement>
      </CardDescription>
    </CardContainer>
  )
}

export default Card
