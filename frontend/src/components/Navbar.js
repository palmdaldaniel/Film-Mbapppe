
import React from "react";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import styles from "../css/Navbar.module.css";
import { Navbar, Nav } from 'react-bootstrap'

const NavbarComponent = () => {
  const { logout, activeUser } = useContext(UserContext);

  const closeNavbar = () => {
    let element = document.querySelector('.navbar-collapse');
    if (element) {
      element.classList.contains('show') && element.classList.remove('show')
    }
  }

  useEffect(() => {
    document.body.addEventListener('click', closeNavbar);
  });

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
          <Nav.Link eventKey="1" className={styles.link}  href="/allmovies" >
            All movies
          </Nav.Link>
          <Nav.Link eventKey="2" className={styles.link} href="/about">
            About
          </Nav.Link>
          {
            activeUser ? (
              <React.Fragment>
                <Nav.Link eventKey="3" className={styles.link} href="/profile">
                  Profile
                </Nav.Link>
                <Nav.Link eventKey="4" onClick={logout} className={`${styles.link} float-end`} href="/">
                  Log out
                </Nav.Link>
              </React.Fragment>
            ) : (
              <Nav.Link eventKey="5" href="/login" className={styles.link}>
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
