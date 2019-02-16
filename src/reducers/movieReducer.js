import { SEARCH_MOVIES_BY_TITLE } from "../actions/types";

const initialState = {
  result: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;

    case SEARCH_MOVIES_BY_TITLE:
      return {
        ...state,
        result: action.payload
      };
  }
}
