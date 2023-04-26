import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <h3 className="navbar-brand">logo</h3>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse  " id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto navbar-light">
          <a className="nav-item nav-link active" href="http://localhost:5000">
            Home <span className="sr-only">(current)</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;