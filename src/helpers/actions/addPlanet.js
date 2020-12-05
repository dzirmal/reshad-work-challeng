import axiosInstance from '../axios/axios'
import requests from '../requests'
import { ADD_PLANET, GET_LOADING } from './actionTypes'

export const getPlanets = ({
  name,
  climate,
  created,
  edited,
  films,
  orbital_period,
  population,
  residents,
  rotation_period,
  surface_water,
  terrain,
  url,
}) => (dispatch) => {
  dispatch({
    // type: ADD_PLANET,
    type: GET_LOADING,
  })
  axiosInstance
    .post(requests.fetchPlanets)
    .then((response) => console.log('response', response))
    .catch((error) => console.log('error', error))
}
