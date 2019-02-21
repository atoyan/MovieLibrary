import React, { Component } from "react";
import { connect } from "react-redux";

import { searchMovie } from "../actions/searchMoviesByTitleAction";
import { API_KEY } from "../keys/key";

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      error: ""
    };
  }
  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.searchMovie(this.props.match.params.id, API_KEY);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.movie) {
      this.setState({ movie: nextProps.movie });
    }
  }
  render() {
    let movie;
    let baseUrl = "http://image.tmdb.org/t/p/w500";
    if (this.state.movie) {
      movie = (
        <div className="col-md-6 m-auto">
          <h2>{this.state.movie.original_title}</h2>
          <img src={`${baseUrl}${this.state.movie.poster_path}`} alt="poster" />
          <h5>Overview</h5>
          <p>{this.state.movie.overview}</p>
        </div>
      );
    } else {
      movie = <div>Movie Not Found</div>;
    }
    return (
      <div className="container">
        <div className="row">{movie}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movie: state.result.movie
});

export default connect(
  mapStateToProps,
  { searchMovie }
)(Movie);
