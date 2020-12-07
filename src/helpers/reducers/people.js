import {
  PEOPLE_LOADING,
  PEOPLE_LOAD_ERROR,
  PEOPLE_LOAD_SUCCESS,
} from '../actions/actionTypes/index'

const people = (state, { payload, type }) => {
  switch (type) {
    case PEOPLE_LOADING: {
      return {
        ...state,
        people: {
          ...state.people,
          loading: true,
        },
      }
    }

    case PEOPLE_LOAD_SUCCESS: {
      return {
        ...state,
        people: {
          ...state.people,
          loading: false,
          data: payload,
        },
      }
    }

    case PEOPLE_LOAD_ERROR: {
      return {
        ...state,
        people: {
          ...state.people,
          loading: false,
          error: payload,
        },
      }
    }

    default:
      return state
  }
}

export default people
