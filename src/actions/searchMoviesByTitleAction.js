import axios from "axios";
import { SEARCH_MOVIES_BY_TITLE } from "../actions/types";

export const searchMoviesByTitle = name => dispatch => {
  axios
    .get(
      "https://api.themoviedb.org/3/search/movie?api_key=caa360a04b5f609a8389fe37708e1358&query=" +
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
