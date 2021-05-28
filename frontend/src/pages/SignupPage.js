import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { Alert, Container, Form, Button } from "react-bootstrap";
import styles from "../css/SignupPage.module.css";

const Register = () => {
  const history = useHistory();
  const { showLogin, setShowLogin } = useContext(UserContext); //added
  //const [activeUser, setActiveUser] = useState(null);
  const [user, setUser] = useState(null);
  const [signUpDone, setSignUpDone] = useState(false);
  const [signUpFail, setSignUpFail] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const register = (userData) => {
    fetch("/api/v1/users/register", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.hasOwnProperty("error")) {
          setSignUpFail(true);
        } else {
          setUser(result.user);
          setSignUpFail(false);
          setSignUpDone(true);
          setTimeout(() => {
            history.push("/");
          }, 5000);
        }
      });
  };

  
    const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  
  const registerSubmitHandler = (e) => {
    e.preventDefault();
    let userData = {
      email,
      password,
      //username,
    };

    register(userData);
  };

  const homeRouter = () => {
    setShowLogin(false);
    history.push("/");
  };

  return (
    <div className={styles.registercontainer}>
      <h1 className={styles.header}>MOVIEPLUS</h1>
      <Container className={`${styles.containerStyle} py-0`}>
        {signUpDone ? (
          <div className="confirmationDiv">
            <h1>You have now been registred!!</h1>
          </div>
        ) : (
          <div>
            <p className={styles.registerformtext}>Register your account</p>
            <div className={styles.registerform}>
              {/*<Form>
                        <form action="submit" onSubmit={registerSubmitHandler}>
                        <label htmlFor="handleUsername">Full name:</label>
                        <input type="text" id="handleUsername" name="name" required />
                        <label htmlFor="handleEmail">E-mail:</label>
                        <input type="email" id="handleEmail" name="email" required onChange={() => setSignUpFail(false)} />
                        <label htmlFor="handlePassword">Password:</label>
                        <input type="text" id="handlePassword" name="password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{0,7}$" required />
                        {signUpFail && <p className="error">This email is already at use.</p>}
                        
                        <Button className={styles.registerButton} variant="danger" type="submit">
                        Create account</Button>

                        <p className={styles.toggleText} onClick={loginRouter}>{showLogin ? "Are you not a member yet? " : " Login here"}</p> 
                      </form>
                    </Form> */}
              {}{" "}
              <Form onSubmit={registerSubmitHandler}>
                <Form.Group controlId="formBasicUsername">
                  <Form.Control
                    className={styles.inputField}
                    onChange={handleUsernameChange}
                    size="lg"
                    type="username"
                    placeholder="username"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    className={styles.inputField}
                    onChange={handleEmailChange}
                    size="lg"
                    type="email"
                    placeholder="Enter email"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control
                    className={styles.inputField}
                    onChange={handlePasswordChange}
                    size="lg"
                    type="text"
                    placeholder="Password"
                    pattern="/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\S{0,7}$/"
                    required
                  />

                  {signUpFail && (
                    <p className="error">This email is already at use.</p>
                  )}
                </Form.Group>
                <Container className="text-center">
                  <Button
                    className={styles.registerButton}
                    variant="danger"
                    type="submit"
                    //onClick={homeRouter}
                    //onSubmit={homeRouter}
                  >
                    Register
                  </Button>
                </Container>
              </Form>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Register;
