import styled from 'styled-components'

export const HomeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid lightgrey;
  width: 270px;
  padding: 5px;
  margin: 8px;
  transition: transform 450ms;
  background-color: white;

  &:hover {
    transform: scale(1.08);
    opacity: 1;
  }
`

export const CardElement = styled.div`
  display: flex;
  margin-top: 5px;
  margin-left: 10px;
`

export const CardElementName = styled.strong`
  margin-right: 10px;
`

export const CardElementNameValue = styled.p`
  margin-bottom: 5px;
`
