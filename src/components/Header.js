import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="mx-auto ">
      <nav className="navbar navbar-expand-lg navbar-light bg-info mb-4">
        <ul className="navbar nav">
          <li className="nav-item">
            <a
              className="nav-link ml-auto "
              href="."
              style={{ color: "white" }}
            >
              <i className="fas fa-film" /> MOVIE LIBRARY{" "}
              <i className="fas fa-video" />
            </a>
          </li>
        </ul>
        <ul className="navbar nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/search" style={{ color: "white" }}>
              SEARCH
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/discover"
              style={{ color: "white" }}
            >
              DISCOVER
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
