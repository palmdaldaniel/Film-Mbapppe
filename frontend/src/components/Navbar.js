
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import styles from "../css/Navbar.module.css";
import { Navbar, Nav } from 'react-bootstrap'

const NavbarComponent = () => {
  const { logout, activeUser } = useContext(UserContext);

  return (
    <Navbar collapseOnSelect expand="sm" variant="dark">
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
        <Navbar.Collapse className={`${styles.myNav} w-100 pb-3 pb-sm-0`} id="responsive-navbar-nav">
          <Nav className="me-auto">
           <Nav.Link eventKey="1">
              <Link  className={styles.link} to="/allmovies">
                All movies
              </Link>
           </Nav.Link>
            <Nav.Link eventKey="2">
              <Link className={styles.link} to="/about">
                About
              </Link>
            </Nav.Link>
            {
              activeUser ? (
                <React.Fragment>
                  <Nav.Link eventKey="3">
                    <Link className={styles.link} to="/profile">
                      Profile
                    </Link>
                  </Nav.Link>
                  <Nav.Link eventKey="4">
                    <Link
                      onClick={logout}
                      className={`${styles.link} float-end`}
                      to="/"
                    >
                      Log out
                  </Link>
                  </Nav.Link>
                </React.Fragment>
              ) : (
                <Nav.Link eventKey="5">
                  <Link to="/login" className={styles.link}>
                    Log in
                  </Link>
                </Nav.Link>
              )
            }
          </Nav>
        </Navbar.Collapse>
    </Navbar>


  );
};

export default NavbarComponent;
