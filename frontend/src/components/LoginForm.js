import { useState } from "react"
import styles from "../css/login.module.css"
import { Alert, Container, Form, Button } from "react-bootstrap"

export default function Login() {
    
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [isError, setIsError] = useState(false)

    const handleUsernameChange = (e) => {
        setUserName(e.target.value)
        setIsError(false);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setIsError(false);
    }

    
    return (
        <div className={styles.container}>
            <p>Welcome back. Log in to see your movie points and more!</p>
            <div className={styles.loginform}>
            <Form>
                <Alert variant={"danger"} className={`${styles.errorBox} ${isError ? styles.active : styles.inactive}`}>You did not enter the correct credentials</Alert>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control className={styles.inputField} onChange={handleUsernameChange} size="lg" type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Control className={styles.inputField} onChange={handlePasswordChange} size="lg" type="password" placeholder="Password" required />
                </Form.Group>
                <Container className="text-center">
                    <Button className={styles.singInButton} variant="danger" type="submit">
                        SIGN IN
                    </Button>
                </Container>
            </Form>
            </div>
        </div>

    )
}