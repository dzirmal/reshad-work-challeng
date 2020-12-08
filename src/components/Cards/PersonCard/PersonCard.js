import React, { useEffect, useState } from 'react'
import Message from '../../Messages/Message'
import {
  PersonCardContainer,
  PersonCardElement,
  PersonCardElementName,
  PersonCardElementNameValue,
  PersonCardHeader,
  PersonCardDescription,
} from './PersonCard.elements'

function PersonCard({
  peopleState: {
    people: { loading, data },
  },
  // person: {
  //   birth_year,
  //   created,
  //   eye_color,
  //   hair_color,
  //   skin_color,
  //   species,
  //   starships,
  //   height,
  //   mass,
  //   edited,
  //   films,
  //   gender,
  //   homeworld,
  //   name,
  //   vehicles,
  //   url,
  // },
}) {
  return (
    <>
      {!loading && data.length === 0 && (
        <Message messageContent='No people yet.' />
      )}

      {data.length > 0 &&
        data.map((person) => (
          <PersonCardContainer key={person.name}>
            <PersonCardHeader>{person.name}</PersonCardHeader>
            <PersonCardDescription>
              <PersonCardElement>
                <PersonCardElementName>Birth Year:</PersonCardElementName>
                <PersonCardElementNameValue>
                  {person.birth_year}
                </PersonCardElementNameValue>
              </PersonCardElement>

              <PersonCardElement>
                <PersonCardElementName>Created: </PersonCardElementName>
                <PersonCardElementNameValue>
                  {person.created}
                </PersonCardElementNameValue>
              </PersonCardElement>

              <PersonCardElement>
                <PersonCardElementName>Edited: </PersonCardElementName>
                <PersonCardElementNameValue>
                  {person.edited}
                </PersonCardElementNameValue>
              </PersonCardElement>

              <PersonCardElement>
                <PersonCardElementName>Gender: </PersonCardElementName>
                <PersonCardElementNameValue>
                  {person.gender}
                </PersonCardElementNameValue>
              </PersonCardElement>

              <PersonCardElement>
                <PersonCardElementName>Eye Color: </PersonCardElementName>
                <PersonCardElementNameValue>
                  {person.eye_color}
                </PersonCardElementNameValue>
              </PersonCardElement>

              <PersonCardElement>
                <PersonCardElementName>Hair Color: </PersonCardElementName>
                <PersonCardElementNameValue>
                  {person.hair_color}
                </PersonCardElementNameValue>
              </PersonCardElement>

              <PersonCardElement>
                <PersonCardElementName>Skin Color: </PersonCardElementName>
                <PersonCardElementNameValue>
                  {person.skin_color}
                </PersonCardElementNameValue>
              </PersonCardElement>

              <PersonCardElement>
                <PersonCardElementName>Height: </PersonCardElementName>
                <PersonCardElementNameValue>
                  {person.height}
                </PersonCardElementNameValue>
              </PersonCardElement>

              <PersonCardElement>
                <PersonCardElementName>Mass: </PersonCardElementName>
                <PersonCardElementNameValue>
                  {person.mass}
                </PersonCardElementNameValue>
              </PersonCardElement>

              <PersonCardElement>
                <PersonCardElementName>Films: </PersonCardElementName>
                <PersonCardElementNameValue>
                  {person.films.length}
                </PersonCardElementNameValue>
              </PersonCardElement>

              <PersonCardElement>
                <PersonCardElementName>Species: </PersonCardElementName>
                <PersonCardElementNameValue>
                  {person.species.length}
                </PersonCardElementNameValue>
              </PersonCardElement>

              <PersonCardElement>
                <PersonCardElementName>Starships: </PersonCardElementName>
                <PersonCardElementNameValue>
                  {person.starships.length}
                </PersonCardElementNameValue>
              </PersonCardElement>

              <PersonCardElement>
                <PersonCardElementName>Home World: </PersonCardElementName>
                <PersonCardElementNameValue>
                  {person.homeworld}
                </PersonCardElementNameValue>
              </PersonCardElement>

              <PersonCardElement>
                <PersonCardElementName>url: </PersonCardElementName>
                <PersonCardElementNameValue>
                  {person.url}
                </PersonCardElementNameValue>
              </PersonCardElement>

              <PersonCardElement>
                <PersonCardElementName>Vehicles: </PersonCardElementName>
                <PersonCardElementNameValue>
                  {person.vehicles.length}
                </PersonCardElementNameValue>
              </PersonCardElement>
            </PersonCardDescription>
          </PersonCardContainer>
        ))}
    </>
  )
}

export default PersonCard
