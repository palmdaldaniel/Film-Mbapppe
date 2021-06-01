import { Container, Col, Row } from "react-bootstrap"
import styles from "../css/Footer.module.css"
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";


export default function Footer() {

  const history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return (
    <footer>
      <Container fluid>
        <Row>
          <Col className={styles.footerInfo}>
            <Link to="/" className={styles.footerLogo}><img className={styles.Logo} src="./assets/whitepopcorn.svg" alt="popcorn logo" /></Link>
            <span className={styles.companyName}>Filmvisarna AB</span>
            <div className={styles.footerText}>
              <img 
              className={styles.icons} 
              src="./assets/fb-icon.png" 
              alt="Socialicon facebook" 
              />
              <img 
              className={styles.instaIcon} 
              src="./assets/insta.png" 
              alt="Socialicon Instagram" 
              />
              <p className={styles.about} onClick={() => { history.push('/about') }}>About us</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

