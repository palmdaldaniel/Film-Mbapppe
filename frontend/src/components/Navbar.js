
import React from "react";
import { useContext } from "react";
//import use context from react needs to be added later -----> Don't Delete!
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext"; 
import styles from "../css/Navbar.module.css";

const Navbar = () => {
  
  const { logout, activeUser } = useContext(UserContext); // Don't elete!logout and logged in  needs to be added later on.
console.log(activeUser)
  return (
    <div>
      <nav
        // className={`${styles.navbar} navbar navbar-expand-lg`} // navbar-light bg-light
        className={styles.navbar} // navbar-light bg-light
      >
        <Link to="/">
          <img
            className={styles.logo}
            src="../assets/whitepopcorn.svg" //the white logo mostly white
            //src="../assets/popcorn.svg" // the black one
            // src="https://pic.onlinewebfonts.com/svg/img_63417.png"
            alt="popcorn"
          />
        </Link>

        {/* <div className={ `${styles.collapse} collapse navbar-collapse`}> id="navbarNavAltMarkup" */}
        <div className="">
          {" "}
          {/* <div className="nav-item nav-link w-100"> */}
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
              ) // Don't delete! we are going to comment out this section later on.
            }
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
