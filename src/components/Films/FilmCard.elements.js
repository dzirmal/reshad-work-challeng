import styled from 'styled-components'

export const FilmCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 320px; */
  width: 420px;
  border: 1px solid lightgrey;
  margin: 10px;
  padding-right: 10px;
`

export const FilmCardHeader = styled.h3`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  margin-top: 10px;
`

export const FilmCardDescription = styled.div`
  display: flex;
  flex-direction: column;
`

export const FilmCardElement = styled.div`
  display: flex;
  margin-top: 5px;
  margin-bottom: 10px;
  margin-left: 10px;
`

export const FilmCardElementName = styled.strong`
  margin-right: 10px;
`

export const FilmCardElementNameValue = styled.p``

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
