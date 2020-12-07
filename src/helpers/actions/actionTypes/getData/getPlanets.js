import axiosInstance from '../../../axios/axios'
import requests from '../../../requests'
import {
  PLANETS_LOADING,
  PLANETS_LOAD_SUCCESS,
  PLANETS_LOAD_ERROR,
} from '../index'

import { CONNECTION_ERROR } from '../api'

export const getPlanets = (history) => (dispatch) => {
  dispatch({ type: PLANETS_LOADING })
  axiosInstance
    .get(requests.fetchAllPlanets)
    .then((response) => {
      dispatch({ type: PLANETS_LOAD_SUCCESS, payload: response.data.results })

      // console.log('response.data', response.data)
    })
    .catch((error) => {
      dispatch({
        type: PLANETS_LOAD_ERROR,
        payload: error.response ? error.response.data : CONNECTION_ERROR,
      })
      // console.log('error', error)
    })
}
