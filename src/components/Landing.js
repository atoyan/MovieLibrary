import React from "react";
import movie from "./movie.gif";

export default function Landing() {
  return (
    <div>
      <div className="container">
        <h1 className="mb-4"> Movie Library</h1>
        <img className="img-fluid mt-4" src={movie} alt="movie" />
      </div>
    </div>
  );
}
