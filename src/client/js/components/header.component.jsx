import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <div>
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">
            SSR Rocks!
          </a>
        </div>
        <ul class="nav navbar-nav">
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
