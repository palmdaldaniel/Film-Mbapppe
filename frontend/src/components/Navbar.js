import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

import styles from "../css/Navbar.module.css";

const Navbar = () => {
  const { loggedIn, logOut, deleteUser } = useContext(UserContext);

  return (
    <div>
      <nav
        className={`${styles.navbar} navbar navbar-expand-lg navbar-light bg-light`}
      >
        <Link to="/">
          <img
            className={styles.logo}
            src="https://www.filmstaden.se/contentassets/abcfcecd76ac47a18718257ddc52e804/logo-32x.png"
            width="100"
            height="30"
            alt="logo"
          />
        </Link>
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
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="nav-item nav-link w-100">
            <Link className={styles.link} to="/allmovies">
             All movies
            </Link>
            <Link className={styles.link} to="/about">
                  About
                </Link>
                <Link className={styles.link} to="/profile">
                 Profile
                </Link>
            {loggedIn ? (
              <React.Fragment>
               
                <Link
                  className={`${styles.link} float-end`}
                  onClick={() => deleteUser(localStorage.getItem("user"))}
                  to="/"
                >
                 Delete Profile
                </Link>
                <Link
                  onClick={logOut}
                  className={`${styles.link} float-end`}
                  to="/"
                >
                  Log out
                </Link>
              </React.Fragment>
            ) : (
              <Link to="/login" className={`${styles.link} float-end`}>
                Log in
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
