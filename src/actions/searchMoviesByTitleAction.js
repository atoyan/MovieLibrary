import axios from "axios";
import {
  SEARCH_MOVIES_BY_TITLE,
  LOADING,
  DISCOVER_MOVIES,
  SEARCH_MOVIE_BY_ID
} from "../actions/types";

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

export const searchMovie = (id, key) => dispatch => {
  dispatch({
    type: LOADING
  });
  axios
    .get("https://api.themoviedb.org/3/movie/" + id + "?api_key=" + key)
    .then(res => {
      console.log("SEARCH MOVIE BY ID ==", res.data);
      dispatch({
        type: SEARCH_MOVIE_BY_ID,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const popularMovies = key => dispatch => {
  axios
    .get("https://api.themoviedb.org/3/discover/movie?api_key=" + key)
    .then(res => {
      dispatch({
        type: DISCOVER_MOVIES,
        payload: res.data.results
      });
    })
    .catch(err => {
      console.log(err);
    });
};
