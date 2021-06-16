
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
        <Nav.Link eventKey="0" as={Link} to="/" className={`${styles.logoContainer}`}>
          <img
            className={styles.logo}
            src="../assets/whitepopcorn.svg"
            alt="popcorn"
          />
        </Nav.Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className={`${styles.myNav} w-100 pb-3 pb-sm-0`} id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link eventKey="1" as={Link} to="/allmovies" className={styles.link}>
            All movies
          </Nav.Link>
          <Nav.Link eventKey="2" as={Link} to="/about" className={styles.link}>
            About
          </Nav.Link>
          {
            activeUser ? (
              <React.Fragment>
                <Nav.Link eventKey="3" as={Link} to="/profile" className={styles.link}>
                  Profile
                </Nav.Link>
                <Nav.Link eventKey="4"
                  as={Link}
                  to="/"
                  onClick={logout}
                  className={`${styles.link} float-end`}>
                  Log out
                </Nav.Link>
              </React.Fragment>
            ) : (
              <Nav.Link eventKey="5" as={Link} to="/login" className={styles.link}>
                Log in
              </Nav.Link>
            )
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
