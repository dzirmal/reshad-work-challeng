import React, { useContext, useEffect } from 'react'

import { Category, PeopleAll, PeopleContainer } from './People.elements'
import { GlobalContext } from '../../helpers/Provider'
import { useHistory } from 'react-router-dom'
import { getPeople } from '../../helpers/actions/actionTypes/getData/getPeople'
import { PersonCard } from '../../components'

function People() {
  const { peopleState, peopleDispatch } = useContext(GlobalContext)
  const history = useHistory()

  useEffect(() => {
    getPeople(history)(peopleDispatch)
  }, [])

  return (
    <PeopleContainer>
      <Category>People</Category>
      <PeopleAll>
        <PersonCard peopleState={peopleState} />
      </PeopleAll>
    </PeopleContainer>
  )
}

export default People
