import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: rgb(234, 237, 237);
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px auto;
`

export const HomeTitle = styled.h1`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`

export const HomeContents = styled.div`
  display: flex;
  /* justify-content: space-around; */
  flex-direction: column;

  @media (max-width: 540px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
  }
`
