import axios from 'axios'

// const instance = axios.create({
//   baseURL: 'https://api.themoviedb.org/3',
// })

// SWAPI
const instance = axios.create({
  baseURL: 'https://swapi.dev/api/',
})

export default instance
