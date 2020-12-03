import React, { useEffect, useState } from 'react'

import axios from '../../axios'

import requests from '../../requests'
import { FilmCard } from '..'
import { Category, FilmsAll, FilmsContainer } from './Films.elements'

function Films() {
  // const [{ movies, dispatch }] = useStateValue()
  const [films, setFilms] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchFilms() {
      const request = await axios.get(requests.fetchFilms)
      setFilms(request.data.results)

      return request
    }
    fetchFilms()
  }, [])

  console.log('films:', films)

  return (
    <FilmsContainer>
      <Category>Films</Category>
      <FilmsAll>
        {films.map((film) => (
          <FilmCard key={film.episode_id} film={film} />
        ))}
      </FilmsAll>
    </FilmsContainer>
  )
}

export default Films
