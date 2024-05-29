import React from "react";
import { Link } from "react-router-dom";
import { auth } from "./Config/Firebase";

function Header({ user }) {
  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <div>
      {/* Navigation */}
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        id="mainNav"
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="assets/img/navbar-logo.svg" alt="..." />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars ms-1" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">

              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
              <li className="nav-item dropdown">
                {user ? (
                  <>
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="userDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Welcome, {user}
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="userDropdown"
                    >
                      <li className="nav-item">
                        <Link className="dropdown-item" to="/add-products">
                          Add Products
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="dropdown-item" to="/add-location">
                          Add Location
                        </Link>
                      </li>
                      <li>
                        <button
                          className="dropdown-item"
                          onClick={handleLogout}
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </>
                ) : (
                  <Link className="nav-link" to="/login">
                    Login | Signup
                  </Link>
                )}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/bu">
                  <i className="fas fa-shopping-cart"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Masthead */}
      <header className="masthead">
        <div className="container">
          <div className="masthead-subheading">Welcome To Our Studio!</div>
          <div className="masthead-heading text-uppercase">
            It's Nice To Meet You
          </div>
          <a className="btn btn-primary btn-xl text-uppercase" href="#services">
            Tell Me More
          </a>
        </div>
      </header>
    </div>
  );
}

export default Header;
