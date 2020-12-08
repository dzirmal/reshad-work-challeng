import Message from '../../Messages/Message'
import {
  CardContainer,
  CardDescription,
  CardHeader,
  CardElementName,
  CardElement,
  CardElementNameValue,
} from './PlanetCard.elements'

function PlanetsCard({
  planetsState: {
    planets: { isSearchActive, foundPlanets, error, loading, data },
  },

  // planet: {
  //   name,
  //   climate,
  //   created,
  //   edited,
  //   films,
  //   orbital_period,
  //   population,
  //   residents,
  //   rotation_period,
  //   surface_water,
  //   terrain,
  //   url,
  // },
}) {
  const currentPlanets = isSearchActive ? foundPlanets : data

  return (
    <>
      {!loading && currentPlanets.length === 0 && (
        <Message messageContent='No planets yet.' />
      )}

      {currentPlanets.length > 0 &&
        currentPlanets.map((planet) => (
          <CardContainer key={planet.name}>
            <CardHeader>{planet.name}</CardHeader>
            <CardDescription>
              <CardElement>
                <CardElementName>Climate:</CardElementName>
                <CardElementNameValue>{planet.climate} </CardElementNameValue>
              </CardElement>
              <CardElement>
                <CardElementName>Created: </CardElementName>
                <CardElementNameValue> {planet.created}</CardElementNameValue>
              </CardElement>
              <CardElement>
                <CardElementName>Edited: </CardElementName>
                <CardElementNameValue> {planet.edited}</CardElementNameValue>
              </CardElement>
              <CardElement>
                <CardElementName>Films: </CardElementName>
                <CardElementNameValue>
                  {planet.films.length}
                </CardElementNameValue>
              </CardElement>
              <CardElement>
                <CardElementName>Orbital_period: </CardElementName>
                <CardElementNameValue>
                  {planet.orbital_period}
                </CardElementNameValue>
              </CardElement>
              <CardElement>
                <CardElementName>Population: </CardElementName>
                <CardElementNameValue>{planet.population}</CardElementNameValue>
              </CardElement>
              <CardElement>
                <CardElementName>Residents: </CardElementName>
                <CardElementNameValue>
                  {planet.residents.length}
                </CardElementNameValue>
              </CardElement>
              <CardElement>
                <CardElementName>Rotation_period: </CardElementName>
                <CardElementNameValue>
                  {' '}
                  {planet.rotation_period}
                </CardElementNameValue>
              </CardElement>
              <CardElement>
                <CardElementName>Surface_water: </CardElementName>
                <CardElementNameValue>
                  {' '}
                  {planet.surface_water}
                </CardElementNameValue>
              </CardElement>
              <CardElement>
                <CardElementName>Terrain: </CardElementName>
                <CardElementNameValue>{planet.terrain}</CardElementNameValue>
              </CardElement>
              <CardElement>
                <CardElementName>url: </CardElementName>
                <CardElementNameValue>{planet.url}</CardElementNameValue>
              </CardElement>
            </CardDescription>
          </CardContainer>
        ))}
    </>
  )
}

export default PlanetsCard
