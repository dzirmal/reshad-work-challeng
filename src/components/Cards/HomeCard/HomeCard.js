import React from 'react'
import { Button } from '../../../helpers/globalStyle'
import {
  HomeCardContainer,
  CardElement,
  CardElementName,
  CardElementNameValue,
} from './HomeCard.elements'

function HomeCard({ openModal, fetchUrl: { data } }) {
  return (
    <>
      {data.map((element) => (
        <HomeCardContainer key={element.name || element.title}>
          <CardElement>
            <CardElementName>Name:</CardElementName>
            <CardElementNameValue>
              {element.name || element.title}
            </CardElementNameValue>
          </CardElement>

          <CardElement>
            <CardElementName>Created:</CardElementName>
            <CardElementNameValue>{element.created} </CardElementNameValue>
          </CardElement>

          <CardElement>
            <CardElementName>Edited:</CardElementName>
            <CardElementNameValue>{element.edited} </CardElementNameValue>
          </CardElement>

          <Button primary onClick={openModal}>
            Details
          </Button>
        </HomeCardContainer>
      ))}
    </>
  )
}

export default HomeCard
