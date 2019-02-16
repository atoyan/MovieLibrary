import React, { Component } from "react";
import MovieList from "./components/MovieList";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/Header";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <MovieList />
        </div>
      </Provider>
    );
  }
}

export default App;
