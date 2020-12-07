import {
  FILMS_LOADING,
  FILMS_LOAD_ERROR,
  FILMS_LOAD_SUCCESS,
} from '../actions/actionTypes/index'

const films = (state, { payload, type }) => {
  switch (type) {
    case FILMS_LOADING: {
      return {
        ...state,
        films: {
          ...state.films,
          loading: true,
        },
      }
    }

    case FILMS_LOAD_SUCCESS: {
      return {
        ...state,
        films: {
          ...state.films,
          loading: false,
          data: payload,
        },
      }
    }

    case FILMS_LOAD_ERROR: {
      return {
        ...state,
        films: {
          ...state.films,
          loading: false,
          error: payload,
        },
      }
    }

    default:
      return state
  }
}

export default films
