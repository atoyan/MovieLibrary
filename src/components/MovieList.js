import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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
      if (!_.isEmpty(this.state.search)) {
        this.props.searchMoviesByTitle(this.state.search, API_KEY);
      }
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
        <div key={res.id} className="col-md-3 col-sm-6 mb-4">
          <h5 style={{ textAlign: "center" }}> {res.original_title}</h5>
          <Link to={`movie/${res.id}`}>
            <img src={baseUrl + res.poster_path} alt="" name={res.id} />
          </Link>
        </div>
      ));
    } else if (this.props.loading) {
      results = (
        <div className="m-auto">
          {" "}
          <Spinner />{" "}
        </div>
      );
    } else if (!_.isEmpty(this.state.error)) {
      results = (
        <div>
          <h3>An error occured please try a different title</h3>
        </div>
      );
    }

    return (
      <div className="container">
        <div />
        <input
          type="text"
          className="form-control mb-2"
          style={{ width: "30%", margin: "0 auto" }}
          name="SearchInput"
          onChange={this.onChange}
          onKeyPress={this.onKeyPress}
          placeholder="Find movies"
          required
        />
        <input
          type="submit"
          className="btn btn-info ml-2"
          onClick={this.onClick}
          value="SEARCH"
        />
        <hr />

        <div className="row">{results}</div>
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
