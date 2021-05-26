import { useContext } from "react";
import LoginForm from "../components/LoginForm";
import { Container } from "react-bootstrap"
import { UserContext } from "../contexts/UserContext"
import styles from "../css/login.module.css"

export default function LoginPage() {
  const { showLogin, setShowLogin } = useContext(UserContext)
  const toggle = () => {
    setShowLogin(!showLogin)
  }
  return (
    <div className={styles.logincontainer}>
      <h1 className={styles.header}>MOVIEPLUS</h1>
      <Container className={`${styles.containerStyle} py-0`} >
        {showLogin ? <LoginForm /> : <LoginForm />}
        <p className={styles.toggleText} onClick={toggle}>{showLogin ? "Are you not a member yet?" : " Back to login"}</p>
      </Container>
    </div>
  )
}