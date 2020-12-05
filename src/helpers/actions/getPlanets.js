import axiosInstance from '../axios/axios'
import requests from '../requests'
import {
  PLANETS_LOADING,
  PLANETS_LOAD_SUCCESS,
  PLANETS_LOAD_ERROR,
} from './actionTypes/index'

import { CONNECTION_ERROR } from './actionTypes/api'

export const getPlanets = (history) => {
  // dispatch({ type: PLANETS_LOADING })
  axiosInstance(history)
    .get(requests.fetchPlanets)
    .then((response) => {
      // dispatch({ type: PLANETS_LOAD_SUCCESS, payload: response.data })

      console.log('response', response)
    })
    .catch((error) => {
      // dispatch({
      //   type: PLANETS_LOAD_ERROR,
      //   payload: error.response ? error.response.data : CONNECTION_ERROR,
      // })
      console.log('error', error)
    })
}
