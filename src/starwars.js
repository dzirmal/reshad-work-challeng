import React, { useState } from 'react'

function starWars() {
  // const [showModal, setShowModal] = useState(false)

  return {
    planets: [],
    films: [],
    people: [],
    addPlanets(planet) {
      planet.push({
        name: '',
        climate: '',
        created: '',
        edited: '',
        films: '',
        orbital_period: '',
        population: '',
        residents: '',
        rotation_period: '',
        surface_water: '',
        terrain: '',
        url: '',
      })
    },

    getFilmDetails(self) {
      self.films = self.films.filter(
        (film) => film.episode_id !== self.episode_id
      )
    },

    // openModal() {
    //   setShowModal(true)
    // },
  }
}

export default starWars
