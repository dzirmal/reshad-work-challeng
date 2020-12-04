import React, { useState } from 'react'
import { Modal, Row } from '../../components'
import requests from '../../requests'
import { HomeContainer, HomeContents, HomeTitle } from './Home.elements'

function Home() {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(true)
  }

  return (
    <>
      <HomeContainer>
        <HomeTitle>Welcome to the Star Wars</HomeTitle>
        <HomeContents>
          <Row
            title='Planets'
            fetchUrl={requests.fetchPlanets}
            openModal={openModal}
          />
          <Row
            title='Films'
            fetchUrl={requests.fetchFilms}
            openModal={openModal}
          />
          <Row
            title='People'
            fetchUrl={requests.fetchPeople}
            openModal={openModal}
          />
        </HomeContents>
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </HomeContainer>
    </>
  )
}

export default Home
