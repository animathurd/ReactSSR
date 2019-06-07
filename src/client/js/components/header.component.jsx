import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <div>
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
            SSR Rocks!
          </a>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Top Quotes</Link>
          </li>
          <li>
            <Link to="/allQuotes">All Quotes</Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Header;
