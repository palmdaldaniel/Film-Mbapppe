import { useState, useContext } from "react"
import styles from "../css/login.module.css"
import { Alert, Container, Form, Button } from "react-bootstrap"
import { UserContext } from "../contexts/UserContext";
import { useHistory } from "react-router-dom";

export default function Login() {
    const { loginUser } = useContext(UserContext);
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [email, setEmail] = useState("");
    const history = useHistory();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        let loginInfo = {
            email,
            password,
        };
        let result = await loginUser(loginInfo);
        if (result.success) {
            console.log("result.success: ", result.success);
            history.push("/");
          } else {
            setError(result.error);
            console.log(result.error)
          }
        };

    return (
        <div className={styles.container}>
            <p className={styles.loginformtext}>Welcome back. Log in to see your movie points and more!</p>
            <div className={styles.loginform}>
                <Form
                    onSubmit={(e) => {
                        handleSubmit(e);
                    }}
                >
                    <Alert variant={"danger"} className={`${styles.errorBox} ${error ? styles.active : styles.inactive}`}>You did not enter the correct credentials</Alert>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control className={styles.inputField} onChange={handleEmailChange} size="lg" type="email" placeholder="Enter email" required />
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