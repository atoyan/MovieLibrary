import React, { Component } from "react";
import { connect } from "react-redux";
import { searchMoviesByTitle } from "../actions/searchMoviesByTitleAction";
import { API_KEY } from "../keys/key";
import Spinner from "./Spinner";

const _ = require("lodash");

class MovieList extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.result) {
      this.setState({ result: nextProps.result.result });
    }
  }
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
      this.props.searchMoviesByTitle(this.state.search, API_KEY);
    };
    this.onKeyPress = e => {
      if (e.key === "Enter") {
        this.onClick();
      }
    };
  }

  render() {
    let results = "";
    let baseUrl = "http://image.tmdb.org/t/p/w185";
    if (!_.isEmpty(this.state.result) && _.isEmpty(this.state.error)) {
      console.log(this.state.result);
      results = this.state.result.map(res => (
        <div key={res.id}>
          <div>
            <h2> {res.original_title}</h2>
            <h4>
              <span>IMDB Rating {res.vote_average} </span>
            </h4>
          </div>
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
    } else if (this.props.loading) {
      results = <Spinner />;
    } else if (!_.isEmpty(this.state.error)) {
      results = (
        <div>
          <h3>An error occured please try a different title</h3>
        </div>
      );
    }

    return (
      <div>
        <label className="mr-2 ">
          <h2>Search Movie </h2>
        </label>

        <input
          type="text"
          className="form-control mb-2"
          style={{ width: "30%", margin: "0 auto" }}
          name="SearchInput"
          onChange={this.onChange}
          onKeyPress={this.onKeyPress}
        />
        <input
          type="submit"
          className="btn btn-info ml-2"
          onClick={this.onClick}
          value="SEARCH"
        />
        <hr />
        {results}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  result: state.result,
  loading: state.result.loading
});

export default connect(
  mapStateToProps,
  { searchMoviesByTitle }
)(MovieList);
