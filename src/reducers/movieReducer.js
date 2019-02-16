import { SEARCH_MOVIES_BY_TITLE, LOADING } from "../actions/types";

const initialState = {
  result: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;

    case SEARCH_MOVIES_BY_TITLE:
      return {
        ...state,
        result: action.payload,
        loading: false
      };
    case LOADING:
      return {
        ...state,
        loading: true
      };
  }
}
