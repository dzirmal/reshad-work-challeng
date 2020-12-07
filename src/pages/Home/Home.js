import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Modal, Row } from '../../components'
import { getPlanets } from '../../helpers/actions/actionTypes/getData/getPlanets'
import { getFilms } from '../../helpers/actions/actionTypes/getData/getFilms'
import { getPeople } from '../../helpers/actions/actionTypes/getData/getPeople'
import { GlobalContext } from '../../helpers/Provider'
import { HomeContainer, HomeContents, HomeTitle } from './Home.elements'

function Home() {
  const [showModal, setShowModal] = useState(false)
  const openModal = () => {
    setShowModal(true)
  }

  const {
    planetsDispatch,
    planetsState,
    filmsDispatch,
    filmsState,
    peopleDispatch,
    peopleState,
  } = useContext(GlobalContext)
  const history = useHistory()

  useEffect(() => {
    getPlanets(history)(planetsDispatch)
    getFilms(history)(filmsDispatch)
    getPeople(history)(peopleDispatch)
  }, [])

  return (
    <>
      <HomeContainer>
        <HomeTitle>Welcome to the Star Wars</HomeTitle>
        <HomeContents>
          <Row
            title='Planets'
            fetchUrl={planetsState.planets}
            openModal={openModal}
          />
          <Row
            title='Films'
            fetchUrl={filmsState.films}
            openModal={openModal}
          />
          <Row
            title='People'
            fetchUrl={peopleState.people}
            openModal={openModal}
          />
        </HomeContents>
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </HomeContainer>
    </>
  )
}

export default Home
