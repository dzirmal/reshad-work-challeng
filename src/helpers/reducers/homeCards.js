import {
  HOME_CARDS_LOADING,
  HOME_CARDS_LOAD_ERROR,
  HOME_CARDS_LOAD_SUCCESS,
} from '../actions/actionTypes'

const homeCards = (state, { payload, type }) => {
  switch (type) {
    case HOME_CARDS_LOADING: {
      return {
        ...state,
        homeCards: {
          ...state.homeCards,
          loading: true,
        },
      }
    }

    case HOME_CARDS_LOAD_SUCCESS: {
      return {
        ...state,
        homeCards: {
          ...state.homeCards,
          loading: false,
          data: payload,
        },
      }
    }

    case HOME_CARDS_LOAD_ERROR: {
      return {
        ...state,
        homeCards: {
          ...state.homeCards,
          loading: false,
          error: payload,
        },
      }
    }

    default:
      return state
  }
}

export default homeCards
