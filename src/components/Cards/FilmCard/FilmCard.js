import React from 'react'
import Message from '../../Messages/Message'
import { CardDescription } from '../PlanetCard/PlanetCard.elements'
import {
  FilmCardContainer,
  FilmCardElement,
  FilmCardElementName,
  FilmCardElementNameValue,
  FilmCardHeader,
} from './FilmCard.elements'

function FilmCard({
  filmsState: {
    films: { data, loading },
  },
  // film: {
  //   characters,
  //   created,
  //   director,
  //   edited,
  //   episode_id,
  //   opening_crawl,
  //   planets,
  //   producer,
  //   release_date,
  //   species,
  //   starships,
  //   title,
  //   url,
  //   vehicles,
  // },
}) {
  return (
    <>
      {!loading && data.length === 0 && (
        <Message messageContent='No films yet.' />
      )}

      {data.length > 0 &&
        data.map((film) => (
          <FilmCardContainer key={film.title}>
            <FilmCardHeader>{film.title}</FilmCardHeader>
            <CardDescription>
              <FilmCardElement>
                <FilmCardElementName>Characters:</FilmCardElementName>
                <FilmCardElementNameValue>
                  {film.characters.length}{' '}
                </FilmCardElementNameValue>
              </FilmCardElement>
              <FilmCardElement>
                <FilmCardElementName>Created: </FilmCardElementName>
                <FilmCardElementNameValue>
                  {' '}
                  {film.created}
                </FilmCardElementNameValue>
              </FilmCardElement>
              <FilmCardElement>
                <FilmCardElementName>Director: </FilmCardElementName>
                <FilmCardElementNameValue>
                  {' '}
                  {film.director}
                </FilmCardElementNameValue>
              </FilmCardElement>
              <FilmCardElement>
                <FilmCardElementName>Edited: </FilmCardElementName>
                <FilmCardElementNameValue>
                  {' '}
                  {film.edited}
                </FilmCardElementNameValue>
              </FilmCardElement>
              <FilmCardElement>
                <FilmCardElementName>EpisodeId: </FilmCardElementName>
                <FilmCardElementNameValue>
                  {film.episode_id}
                </FilmCardElementNameValue>
              </FilmCardElement>
              <FilmCardElement>
                <FilmCardElementName>Opening Crawl: </FilmCardElementName>
                <FilmCardElementNameValue>
                  {film.opening_crawl}
                </FilmCardElementNameValue>
              </FilmCardElement>
              <FilmCardElement>
                <FilmCardElementName>Planets: </FilmCardElementName>
                <FilmCardElementNameValue>
                  {film.planets.length}
                </FilmCardElementNameValue>
              </FilmCardElement>
              <FilmCardElement>
                <FilmCardElementName>Producer: </FilmCardElementName>
                <FilmCardElementNameValue>
                  {film.producer}
                </FilmCardElementNameValue>
              </FilmCardElement>
              <FilmCardElement>
                <FilmCardElementName>Release Date: </FilmCardElementName>
                <FilmCardElementNameValue>
                  {film.release_date}
                </FilmCardElementNameValue>
              </FilmCardElement>
              <FilmCardElement>
                <FilmCardElementName>Species: </FilmCardElementName>
                <FilmCardElementNameValue>
                  {film.species.length}
                </FilmCardElementNameValue>
              </FilmCardElement>
              <FilmCardElement>
                <FilmCardElementName>Starships: </FilmCardElementName>
                <FilmCardElementNameValue>
                  {film.starships.length}
                </FilmCardElementNameValue>
              </FilmCardElement>
              <FilmCardElement>
                <FilmCardElementName>url: </FilmCardElementName>
                <FilmCardElementNameValue>{film.url}</FilmCardElementNameValue>
              </FilmCardElement>
              <FilmCardElement>
                <FilmCardElementName>Vehicles: </FilmCardElementName>
                <FilmCardElementNameValue>
                  {film.vehicles.length}
                </FilmCardElementNameValue>
              </FilmCardElement>
            </CardDescription>
          </FilmCardContainer>
        ))}
    </>
  )
}

export default FilmCard
