import React, { useContext, useEffect } from 'react'

import { FilmCard } from '..'
import { Category, FilmsAll, FilmsContainer } from './Films.elements'
import { GlobalContext } from '../../helpers/Provider'
import { useHistory } from 'react-router-dom'
import { getFilms } from '../../helpers/actions/actionTypes/getData/getFilms'

function Films() {
  const { filmsState, filmsDispatch } = useContext(GlobalContext)
  const history = useHistory()
  useEffect(() => {
    getFilms(history)(filmsDispatch)
  }, [])

  return (
    <FilmsContainer>
      <Category>Films</Category>
      <FilmsAll>
        <FilmCard filmsState={filmsState} />
      </FilmsAll>
    </FilmsContainer>
  )
}

export default Films
