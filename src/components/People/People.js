import React, { useEffect, useState } from 'react'
import axios from '../../axios'

import requests from '../../requests'
import PersonCard from '../PersonCard/PersonCard'
import { Category, PeopleAll, PeopleContainer } from './People.elements'

function People() {
  const [people, setPeople] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPlanets() {
      const request = await axios.get(requests.fetchPeople)
      setPeople(request.data.results)

      return request
    }
    fetchPlanets()
  }, [])

  console.log('people:', people)

  return (
    <PeopleContainer>
      <Category>People</Category>
      <PeopleAll>
        {people.map((person, i) => (
          <PersonCard key={i} person={person} />
        ))}
      </PeopleAll>
    </PeopleContainer>
  )
}

export default People
