import {
  SEARCH_MOVIES_BY_TITLE,
  LOADING,
  DISCOVER_MOVIES,
  SEARCH_MOVIE_BY_ID
} from "../actions/types";

const initialState = {
  result: [],
  loading: false,
  movie: {}
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

    case SEARCH_MOVIE_BY_ID:
      return {
        ...state,
        movie: action.payload,
        loading: false
      };
    case DISCOVER_MOVIES:
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
