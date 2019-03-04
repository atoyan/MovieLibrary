import React, { Component } from "react";
import { connect } from "react-redux";
import noposter from "./noposter.jpg";
import { searchMovie } from "../actions/searchMoviesByTitleAction";
//import { API_KEY } from "../keys/key";
import PropTypes from "prop-types";
const key = process.env.API_KEY; // || API_KEY;

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
      this.props.searchMovie(this.props.match.params.id, key);
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
    let posterpath = this.state.movie.poster_path
      ? baseUrl + this.state.movie.poster_path
      : noposter;
    console.log(this.state.movie.poster_path);
    console.log(posterpath);
    if (this.state.movie) {
      movie = (
        <div className="col-md-6 m-auto">
          <h2>
            {this.state.movie.original_title} ({this.state.movie.release_date}){" "}
          </h2>
          <img className="img-fluid" src={posterpath} alt="poster" />
          <h5>Overview</h5>
          <p>
            {" "}
            <span> Votes: {this.state.movie.vote_count} </span>{" "}
            <span> Rating: {this.state.movie.vote_average} </span>
          </p>
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

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
  searchMovie: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  movie: state.result.movie
});

export default connect(
  mapStateToProps,
  { searchMovie }
)(Movie);
