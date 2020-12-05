import requests from '../requests'
import axiosInstance from './axios'

export default (history) => {
  axiosInstance(history)
    .get(requests.fetchPlanets)
    .then((results) => console.log('dataPlanets:', results.data))
    .catch((error) => console.log('err:', error))
}
