import axios from "axios";
import { SEARCH_MOVIES_BY_TITLE, LOADING } from "../actions/types";

export const searchMoviesByTitle = (name, key) => dispatch => {
  dispatch({
    type: LOADING
  });
  axios
    .get(
      "https://api.themoviedb.org/3/search/movie?api_key=" +
        key +
        "&query=" +
        name
    )
    .then(res => {
      dispatch({
        type: SEARCH_MOVIES_BY_TITLE,
        payload: res.data.results
      });
    })
    .catch(err => {
      console.log(err);
    });
};
