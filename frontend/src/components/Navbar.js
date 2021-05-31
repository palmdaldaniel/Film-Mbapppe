
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import styles from "../css/Navbar.module.css";

const Navbar = () => {

  const { logout, activeUser } = useContext(UserContext);
  console.log(activeUser)
  return (
    <div>
      <nav
        className={styles.navbar}
      >
        <Link to="/">
          <img
            className={styles.logo}
            src="../assets/whitepopcorn.svg"
            alt="popcorn"
          />
        </Link>

        <div className="">
          {" "}

          <div className="">
            <Link className={styles.link} to="/allmovies">
              All movies
            </Link>
            <Link className={styles.link} to="/about">
              About
            </Link>
            <Link className={styles.link} to="/profile">
              Profile
            </Link>

            {
              activeUser ? (
                <React.Fragment>
                  <Link
                    onClick={logout}
                    className={`${styles.link} float-end`}
                    to="/"
                  >
                    Log out
                </Link>
                </React.Fragment>
              ) : (

                <Link to="/login" className={styles.link}>
                  Log in
                </Link>
              )
            }
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
