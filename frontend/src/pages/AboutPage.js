import * as ReactBootstrap from "react-bootstrap";
import { Alert, Container, Form, Button } from "react-bootstrap";
import styles from "../css/AboutPage.module.css";

function About() {
  return (
    <div className="About">
      <ReactBootstrap.Jumbotron>
        className={styles.Jumbotron}
        style=
        {{
          backgroundImage: "url(../assets/red-chair.jpeg)",
        }}
        <Container fluid>
          <div className={styles.info}>
            <p>
              MoviePlus is the oldest and first website dedicated exclusively to
              Malmö cinemas, and has been the most trusted swedish cinema guide
              on the web for the past 22 years. Founded in early 1995 at the
              dawn of commercial internet use, the website continues to be one
              of the world's highest ranked theatre websites and most trusted
              sources for cinema listings, news and reviews.
            </p>
            <span>&nbsp;</span>
            <p>
              For ticket booking or other questions you can contact us via mail
              : movieplus@gmx.com or just call us at 0702323232.
            </p>
          </div>
        </Container>
      </ReactBootstrap.Jumbotron>

      <ReactBootstrap.Container className="Contact">
        <div classname="contactt">
          {/*<p>
            you can either contact us via mail : movieplus@gmx.com or just call
            us at 0702323232
          </p>*/}
        </div>
      </ReactBootstrap.Container>
    </div>
  );
}

export default About;

