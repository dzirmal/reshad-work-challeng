import React, { useEffect, useState } from 'react'
import {
  PersonCardContainer,
  PersonCardElement,
  PersonCardElementName,
  PersonCardElementNameValue,
  PersonCardHeader,
  PersonCardDescription,
} from './PersonCard.elements'

function PersonCard({
  person: {
    birth_year,
    created,
    eye_color,
    hair_color,
    skin_color,
    species,
    starships,
    height,
    mass,
    edited,
    films,
    gender,
    homeworld,
    name,
    vehicles,
    url,
  },
}) {
  return (
    <PersonCardContainer>
      <PersonCardHeader>{name}</PersonCardHeader>
      <PersonCardDescription>
        <PersonCardElement>
          <PersonCardElementName>Birth Year:</PersonCardElementName>
          <PersonCardElementNameValue>{birth_year}</PersonCardElementNameValue>
        </PersonCardElement>

        <PersonCardElement>
          <PersonCardElementName>Created: </PersonCardElementName>
          <PersonCardElementNameValue> {created}</PersonCardElementNameValue>
        </PersonCardElement>

        <PersonCardElement>
          <PersonCardElementName>Edited: </PersonCardElementName>
          <PersonCardElementNameValue> {edited}</PersonCardElementNameValue>
        </PersonCardElement>

        <PersonCardElement>
          <PersonCardElementName>Gender: </PersonCardElementName>
          <PersonCardElementNameValue> {gender}</PersonCardElementNameValue>
        </PersonCardElement>

        <PersonCardElement>
          <PersonCardElementName>Eye Color: </PersonCardElementName>
          <PersonCardElementNameValue>{eye_color}</PersonCardElementNameValue>
        </PersonCardElement>

        <PersonCardElement>
          <PersonCardElementName>Hair Color: </PersonCardElementName>
          <PersonCardElementNameValue>{hair_color}</PersonCardElementNameValue>
        </PersonCardElement>

        <PersonCardElement>
          <PersonCardElementName>Skin Color: </PersonCardElementName>
          <PersonCardElementNameValue>{skin_color}</PersonCardElementNameValue>
        </PersonCardElement>

        <PersonCardElement>
          <PersonCardElementName>Height: </PersonCardElementName>
          <PersonCardElementNameValue>{height}</PersonCardElementNameValue>
        </PersonCardElement>

        <PersonCardElement>
          <PersonCardElementName>Mass: </PersonCardElementName>
          <PersonCardElementNameValue>{mass}</PersonCardElementNameValue>
        </PersonCardElement>

        <PersonCardElement>
          <PersonCardElementName>Films: </PersonCardElementName>
          <PersonCardElementNameValue>
            {films.length}
          </PersonCardElementNameValue>
        </PersonCardElement>

        <PersonCardElement>
          <PersonCardElementName>Species: </PersonCardElementName>
          <PersonCardElementNameValue>
            {species.length}
          </PersonCardElementNameValue>
        </PersonCardElement>

        <PersonCardElement>
          <PersonCardElementName>Starships: </PersonCardElementName>
          <PersonCardElementNameValue>
            {starships.length}
          </PersonCardElementNameValue>
        </PersonCardElement>

        <PersonCardElement>
          <PersonCardElementName>Home World: </PersonCardElementName>
          <PersonCardElementNameValue>{homeworld}</PersonCardElementNameValue>
        </PersonCardElement>

        <PersonCardElement>
          <PersonCardElementName>url: </PersonCardElementName>
          <PersonCardElementNameValue>{url}</PersonCardElementNameValue>
        </PersonCardElement>

        <PersonCardElement>
          <PersonCardElementName>Vehicles: </PersonCardElementName>
          <PersonCardElementNameValue>
            {vehicles.length}
          </PersonCardElementNameValue>
        </PersonCardElement>
      </PersonCardDescription>
    </PersonCardContainer>
  )
}

export default PersonCard
