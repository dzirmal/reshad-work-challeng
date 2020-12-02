import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 320px;
  width: 320px;
  border: 1px solid lightgrey;
  margin: 10px;
`

export const CardHeader = styled.h3`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  margin-top: 10px;
`

export const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
`

export const CardElement = styled.div`
  display: flex;
  margin-top: 5px;
  margin-left: 10px;
`

export const CardElementName = styled.strong`
  margin-right: 10px;
`

export const CardElementNameValue = styled.p``

export const Image = styled.img`
  cursor: pointer;
  object-fit: contain;
  width: 100px;
  max-height: 100px;
  margin-right: 10px;
  transition: transform 450ms;

  &:hover {
    transform: scale(1.08);
    opacity: 1;
  }
  &.row_posterLarge {
    max-height: 250px;
  }
`
