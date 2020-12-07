import { PEOPLE_LOADING, PEOPLE_LOAD_ERROR, PEOPLE_LOAD_SUCCESS } from '..'
import axiosInstance from '../../../axios/axios'
import requests from '../../../requests'
import { CONNECTION_ERROR } from '../api'

export const getPeople = (history) => (dispatch) => {
  dispatch({ type: PEOPLE_LOADING })
  axiosInstance
    .get(requests.fetchPeople)
    .then((response) => {
      dispatch({ type: PEOPLE_LOAD_SUCCESS, payload: response.data.results })

      // console.log('response.data', response.data)
    })
    .catch((error) => {
      dispatch({
        type: PEOPLE_LOAD_ERROR,
        payload: error.response ? error.response.data : CONNECTION_ERROR,
      })
      // console.log('error', error)
    })
}
