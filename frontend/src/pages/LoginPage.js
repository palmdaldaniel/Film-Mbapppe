import { useContext } from "react";
import LoginForm from "../components/LoginForm";
import { Container } from "react-bootstrap"
import { UserContext } from "../contexts/UserContext"
import styles from "../css/login.module.css"
import { useHistory } from "react-router-dom";
import SignUp from "../components/SignUp";

export default function LoginPage() {
  const history = useHistory();
  const { showLogin, setShowLogin } = useContext(UserContext)
  const toggle = () => {
    setShowLogin(!showLogin)
  }

  return (
    <div className={styles.logincontainer}>
    <Container className={`${styles.containerStyle} py-0`} >
      {showLogin ? <LoginForm /> : <SignUp />}
      
      <p className={styles.toggleText} onClick={toggle}>{showLogin ? "Are you not a member yet? " : "Back to login"}</p>
    </Container>
  </div>
)
}