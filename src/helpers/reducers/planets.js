import {
  PLANETS_LOADING,
  PLANETS_LOAD_ERROR,
  PLANETS_LOAD_SUCCESS,
} from '../actions/actionTypes/index'

const planets = (state, { payload, type }) => {
  switch (type) {
    case PLANETS_LOADING: {
      return {
        ...state,
        planets: {
          ...state.planets,
          loading: true,
        },
      }
    }

    case PLANETS_LOAD_SUCCESS: {
      return {
        ...state,
        planets: {
          ...state.planets,
          loading: false,
          planets: payload,
        },
      }
    }

    case PLANETS_LOAD_ERROR: {
      return {
        ...state,
        planets: {
          ...state.planets,
          loading: false,
          error: payload,
        },
      }
    }

    default:
      return state
  }
}

export default planets
