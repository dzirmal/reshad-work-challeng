import React, { useEffect, useState } from 'react'
import axios from '../../helpers/axios/axios'

import { GeneralCard } from '..'
import { RowCards, RowContainer, Title } from './Row.elements'

function Row({ title, fetchUrl, showModal, openModal }) {
  const [cards, setCards] = useState([])

  useEffect(() => {
    async function fetchPlanets() {
      const request = await axios.get(fetchUrl)
      setCards(request.data.results)

      return request
    }
    fetchPlanets()
  }, [fetchUrl])

  return (
    <>
      <RowContainer>
        <Title>{title}</Title>
        <RowCards>
          {cards.map((card, i) => (
            <GeneralCard key={i} card={card} openModal={openModal} />
          ))}
        </RowCards>
      </RowContainer>
    </>
  )
}

export default Row
