import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { popularMovies } from "../actions/searchMoviesByTitleAction";
import { API_KEY } from "../keys/key";
import Spinner from "./Spinner";
const _ = require("lodash");

class DiscoverMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      result: [],
      error: ""
    };
  }
  componentDidMount() {
    this.props.popularMovies(API_KEY);
  }
  componentWillReceiveProps(nextProps) {
    if (!_.isEmpty(nextProps)) {
      this.setState({ result: nextProps.result.result });
    }
  }

  render() {
    let results = "";
    let baseUrl = "http://image.tmdb.org/t/p/w185";
    if (!_.isEmpty(this.state.result) && _.isEmpty(this.state.error)) {
      console.log(this.state.result);
      results = this.state.result.map(res => (
        <div
          key={res.id}
          name={res.original_title}
          className="col-md-3 col-sm-6"
        >
          <h5 style={{ textAlign: "center" }}> {res.original_title}</h5>
          <Link to={`movie/${res.id}`}>
            <img src={baseUrl + res.poster_path} alt="" name={res.id} />
          </Link>
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
      <div className="container">
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
  { popularMovies }
)(DiscoverMovies);
