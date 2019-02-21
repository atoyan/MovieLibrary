import React, { Component } from "react";
import MovieList from "./components/MovieList";
import Movie from "./components/Movie";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/Header";
import DiscoverMovies from "./components/DiscoverMovies";
import Landing from "./components/Landing";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/search" component={MovieList} />
            <Route exact path="/discover" component={DiscoverMovies} />
            <Route exact path="/movie/:id" component={Movie} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
