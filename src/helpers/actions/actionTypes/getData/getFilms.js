import axiosInstance from '../../../axios/axios'
import requests from '../../../requests'

import { FILMS_LOADING, FILMS_LOAD_ERROR, FILMS_LOAD_SUCCESS } from '..'
import { CONNECTION_ERROR } from '../api'

export const getFilms = (history) => (dispatch) => {
  dispatch({ type: FILMS_LOADING })
  axiosInstance
    .get(requests.fetchFilms)
    .then((response) => {
      dispatch({ type: FILMS_LOAD_SUCCESS, payload: response.data.results })

      // console.log('response.data', response.data)
    })
    .catch((error) => {
      dispatch({
        type: FILMS_LOAD_ERROR,
        payload: error.response ? error.response.data : CONNECTION_ERROR,
      })
      // console.log('error', error)
    })
}
