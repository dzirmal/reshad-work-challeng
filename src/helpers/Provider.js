import React, { createContext, children, useReducer } from 'react'
import {
  filmsInitState,
  peopleInitState,
  planetsInitState,
} from './initialStates'
import { planets, films, people } from './reducers'

export const GlobalContext = createContext({})

export const GlobalProvider = ({ children }) => {
  const [planetsState, dispatchPlanets] = useReducer(planets, planetsInitState)
  const [filmsState, dispatchFilms] = useReducer(films, filmsInitState)
  const [peopleState, dispatchPeople] = useReducer(people, peopleInitState)

  return (
    <GlobalContext.Provider
      value={{
        planetsState,
        dispatchPlanets,
        filmsState,
        dispatchFilms,
        peopleState,
        dispatchPeople,
      }}>
      {children}
    </GlobalContext.Provider>
  )
}
