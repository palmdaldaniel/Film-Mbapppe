import { useContext } from "react";
import LoginForm from "../components/LoginForm";
import { Container } from "react-bootstrap"
import { UserContext } from "../contexts/UserContext"
import styles from "../css/login.module.css"
import { useHistory } from "react-router-dom";
//import SignUp from "../components/SignUp";

export default function LoginPage() {
  const history = useHistory();
  const { showLogin, setShowLogin } = useContext(UserContext)
  const toggle = () => {
    setShowLogin(!showLogin)
  }

  const registerRouter = () => {
    setShowLogin(false);
    history.push("/register");
  };
  return (
    <div className={styles.logincontainer}>
      <h1 className={styles.header}>Filmvisarna</h1>
      <Container className={`${styles.containerStyle} py-0`} >
        {showLogin ? <LoginForm /> : <LoginForm />}
        
        <p className={styles.toggleText} onClick={registerRouter}>{showLogin ? "Are you not a member yet? " : " Register here"}</p>
      </Container>
    </div>
  )
}