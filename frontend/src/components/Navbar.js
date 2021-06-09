
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import styles from "../css/Navbar.module.css";
import { Navbar, Nav } from 'react-bootstrap'

const NavbarComponent = () => {
  const { logout, activeUser } = useContext(UserContext);
  return (

    <Navbar collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand >
          <Link to="/">
            <img
              className={styles.logo}
              src="../assets/whitepopcorn.svg"
              alt="popcorn"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className={`${styles.myNav} w-100 pb-3`} id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className={styles.link} to="/allmovies">
              All movies
            </Link>
            <Link className={styles.link} to="/about">
              About
            </Link>
            {
              activeUser ? (
                <React.Fragment>
                  <Link className={styles.link} to="/profile">
                    Profile
                  </Link>
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
          </Nav>
        </Navbar.Collapse>
    </Navbar>


  );
};

export default NavbarComponent;
