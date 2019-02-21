import React from "react";

export default function Header() {
  return (
    <div className="mx-auto">
      <nav className="navbar navbar-expand-lg navbar-light bg-info mb-4">
        <ul className="navbar nav">
          <li className="nav-item">
            <a
              className="nav-link ml-auto "
              href="."
              style={{ color: "white" }}
            >
              <i class="fas fa-film" /> MOVIE LIBRARY <i class="fas fa-video" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
