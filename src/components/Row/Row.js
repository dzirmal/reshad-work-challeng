import React from 'react'

import { HomeCard } from '..'
import { RowCards, RowContainer, Title } from './Row.elements'

function Row({ title, fetchUrl, openModal }) {
  return (
    <>
      <RowContainer>
        <Title>{title}</Title>
        <RowCards>
          <HomeCard fetchUrl={fetchUrl} openModal={openModal} />
        </RowCards>
      </RowContainer>
    </>
  )
}

export default Row
