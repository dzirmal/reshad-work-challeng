import axios from 'axios'

// const instance = axios.create({
//   baseURL: 'https://api.themoviedb.org/3',
// })

// I create the .env file then I created the BACKED_URL const and imported here
// doesn't work
// const baseURL = process.env.REACT_APP_BACKEND_URL

const baseURL = 'https://swapi.dev/api/'

let planets = {}

if (localStorage.token) {
  planets.Authorization = `Earth  ${localStorage.token}`
}

const axiosInstance = axios.create({
  baseURL: baseURL,
  planets,
})

export default axiosInstance
