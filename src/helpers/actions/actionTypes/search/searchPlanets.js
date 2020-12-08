import { SEARCH_PLANETS } from '..'

export const searchPlanets = (searchText) => (dispatch) => {
  dispatch({
    type: SEARCH_PLANETS,
    payload: searchText,
  })
}
