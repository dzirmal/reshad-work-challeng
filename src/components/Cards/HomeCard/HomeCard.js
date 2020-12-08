import React from 'react'
import { Button } from '../../../helpers/globalStyle'
import Message from '../../Messages/Message'
import {
  HomeCardContainer,
  CardElement,
  CardElementName,
  CardElementNameValue,
} from './HomeCard.elements'

function HomeCard({ openModal, fetchUrl: { data, loading } }) {
  return (
    <>
      {!loading && data.length === 0 && (
        <Message messageContent='No planets, films or people yet.' />
      )}

      {data.length > 0 &&
        data.map((element) => (
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
