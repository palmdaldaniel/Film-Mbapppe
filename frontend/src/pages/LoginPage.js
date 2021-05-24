import { useContext } from "react";
import Login from "../components/Login";
import { Container } from "react-bootstrap"
import { UserContext } from "../contexts/UserContext"
import styles from "../css/login.module.css"

export default function LoginPage() {
  const { showLogin, setShowLogin } = useContext(UserContext);

  const toggle = () => {
    setToBeLogin(!toBeLogin)
  }
  
  }

  return (
    <div>
      <Container className={`${styles.containerStyle} py-0`} >
        {toBeLogin ? <Login /> : hej}
        <p className={styles.toggleText} onClick={toggle}>{showLogin ? "Are you not a member yet?" : " Back to login"}</p>
      </Container>
      
      </div>
  )