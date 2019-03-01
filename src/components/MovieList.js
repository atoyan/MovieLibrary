import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { searchMoviesByTitle } from "../actions/searchMoviesByTitleAction";
import { API_KEY } from "../keys/key";
import Spinner from "./Spinner";
import noposter from "./noposter.jpg";
import Proptypes from "prop-types";

const _ = require("lodash");

class MovieList extends Component {
  componentDidMount() {
    this.setState({ result: this.props.result.result });
  }
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
      noposter: { noposter },
      error: ""
    };
    this.onChange = e => {
      e.preventDefault();
      this.setState({ search: e.target.value });
    };
    this.onClick = () => {
      if (!_.isEmpty(this.state.search)) {
        this.setState({ error: "" });
        this.props.searchMoviesByTitle(this.state.search, API_KEY);
      } else {
        this.setState({ error: "Please enter a movie Title!" });
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
    console.log(this.state.result);
    if (!_.isEmpty(this.state.result) && _.isEmpty(this.state.error)) {
      console.log(this.state.result);
      results = this.state.result.map(res => (
        <div key={res.id} className="col-md-3 col-sm-6 mb-4">
          <Link to={`movie/${res.id}`}>
            <h6 style={{ textAlign: "center" }}>
              {" "}
              {res.original_title} ({res.release_date})
            </h6>

            <img
              className="img-fluid"
              src={
                _.isEmpty(res.poster_path)
                  ? noposter
                  : baseUrl + res.poster_path
              }
              alt=""
              name={res.id}
            />
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
    }

    return (
      <div className="container">
        <label style={{ color: "#e12901" }}>{this.state.error}</label>
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
MovieList.propTypes = {
  searchMoviesByTitle: Proptypes.func.isRequired,
  result: Proptypes.object.isRequired
};

export default connect(
  mapStateToProps,
  { searchMoviesByTitle }
)(MovieList);
