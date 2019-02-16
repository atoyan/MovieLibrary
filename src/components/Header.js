import React from "react";

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <ul className="navbar nav">
          <li className="nav-item">
            <a className="nav-link ml-auto" href=".">
              MovieBrowser
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
