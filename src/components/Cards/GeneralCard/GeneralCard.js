import React from 'react'
import { Button } from '../../../helpers/globalStyle'
import {
  GeneralCardContainer,
  CardElement,
  CardElementName,
  CardElementNameValue,
} from './GeneralCard.elements'

function GeneralCard({ openModal, card: { name, created, edited, title } }) {
  return (
    <GeneralCardContainer>
      <CardElement>
        <CardElementName>Name:</CardElementName>
        <CardElementNameValue>{name || title} </CardElementNameValue>
      </CardElement>

      <CardElement>
        <CardElementName>Created:</CardElementName>
        <CardElementNameValue>{created} </CardElementNameValue>
      </CardElement>

      <CardElement>
        <CardElementName>Edited:</CardElementName>
        <CardElementNameValue>{edited} </CardElementNameValue>
      </CardElement>

      <Button primary onClick={openModal}>
        Details
      </Button>
    </GeneralCardContainer>
  )
}

export default GeneralCard
