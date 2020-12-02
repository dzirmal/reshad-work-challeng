import React from 'react'
import { CardDescription } from '../Card/Card.elements'
import {
  FilmCardContainer,
  FilmCardElement,
  FilmCardElementName,
  FilmCardElementNameValue,
  FilmCardHeader,
} from './FilmCard.elements'

function FilmCard({
  film: {
    characters,
    created,
    director,
    edited,
    episode_id,
    opening_crawl,
    planets,
    producer,
    release_date,
    species,
    starships,
    title,
    url,
    vehicles,
  },
}) {
  return (
    <FilmCardContainer>
      <FilmCardHeader>{title}</FilmCardHeader>
      <CardDescription>
        <FilmCardElement>
          <FilmCardElementName>Characters:</FilmCardElementName>
          <FilmCardElementNameValue>
            {characters.length}{' '}
          </FilmCardElementNameValue>
        </FilmCardElement>
        <FilmCardElement>
          <FilmCardElementName>Created: </FilmCardElementName>
          <FilmCardElementNameValue> {created}</FilmCardElementNameValue>
        </FilmCardElement>
        <FilmCardElement>
          <FilmCardElementName>Director: </FilmCardElementName>
          <FilmCardElementNameValue> {director}</FilmCardElementNameValue>
        </FilmCardElement>
        <FilmCardElement>
          <FilmCardElementName>Edited: </FilmCardElementName>
          <FilmCardElementNameValue> {edited}</FilmCardElementNameValue>
        </FilmCardElement>
        <FilmCardElement>
          <FilmCardElementName>EpisodeId: </FilmCardElementName>
          <FilmCardElementNameValue>{episode_id}</FilmCardElementNameValue>
        </FilmCardElement>
        <FilmCardElement>
          <FilmCardElementName>Opening Crawl: </FilmCardElementName>
          <FilmCardElementNameValue>{opening_crawl}</FilmCardElementNameValue>
        </FilmCardElement>
        <FilmCardElement>
          <FilmCardElementName>Planets: </FilmCardElementName>
          <FilmCardElementNameValue>{planets.length}</FilmCardElementNameValue>
        </FilmCardElement>
        <FilmCardElement>
          <FilmCardElementName>Producer: </FilmCardElementName>
          <FilmCardElementNameValue>{producer}</FilmCardElementNameValue>
        </FilmCardElement>
        <FilmCardElement>
          <FilmCardElementName>Release Date: </FilmCardElementName>
          <FilmCardElementNameValue>{release_date}</FilmCardElementNameValue>
        </FilmCardElement>
        <FilmCardElement>
          <FilmCardElementName>Species: </FilmCardElementName>
          <FilmCardElementNameValue>{species.length}</FilmCardElementNameValue>
        </FilmCardElement>
        <FilmCardElement>
          <FilmCardElementName>Starships: </FilmCardElementName>
          <FilmCardElementNameValue>
            {starships.length}
          </FilmCardElementNameValue>
        </FilmCardElement>
        <FilmCardElement>
          <FilmCardElementName>url: </FilmCardElementName>
          <FilmCardElementNameValue>{url}</FilmCardElementNameValue>
        </FilmCardElement>
        <FilmCardElement>
          <FilmCardElementName>Vehicles: </FilmCardElementName>
          <FilmCardElementNameValue>{vehicles.length}</FilmCardElementNameValue>
        </FilmCardElement>
      </CardDescription>
    </FilmCardContainer>
  )
}

export default FilmCard
