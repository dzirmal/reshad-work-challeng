import styled from 'styled-components'

export const PlanetCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const PlanetName = styled.h5``

export const PlanetImage = styled.img`
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
