import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { searchMoviesByTitle } from "../actions/searchMoviesByTitleAction";
import { API_KEY } from "../keys/key";

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      result: [],
      error: ""
    };
    this.onChange = e => {
      e.preventDefault();
      this.setState({ search: e.target.value });
    };
    this.onClick = () => {
      axios
        .get(
          "https://api.themoviedb.org/3/search/movie?api_key=" +
            API_KEY +
            "&query=" +
            this.state.search
        )
        .then(res => {
          this.setState({ result: res.data.results });
        })
        .catch(err => {
          this.setState({ error: err });
        });
    };
  }

  render() {
    let results = "";
    let baseUrl = "http://image.tmdb.org/t/p/w185";
    if (this.state.result && !this.state.error) {
      results = this.state.result.map(res => (
        <div className="container" key={res.id}>
          <hr />
          <div>{res.original_title}</div>
          <div className="container">
            {" "}
            <p>{res.overview} </p>
          </div>
          <div>
            <img src={baseUrl + res.poster_path} alt="" />
            <hr />
          </div>
        </div>
      ));
    } else if (this.state.error) {
      results = <div>An error occured</div>;
    }

    return (
      <div>
        <label>Search </label>
        <input type="text" name="SearchInput" onChange={this.onChange} />
        <input type="submit" onClick={this.onClick} value="search" />

        {results}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  result: state.result
});

export default connect(
  mapStateToProps,
  { searchMoviesByTitle }
)(MovieList);
