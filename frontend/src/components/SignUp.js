import { useState } from "react";
import { useHistory } from "react-router-dom";
//import { UserContext } from "../contexts/UserContext";
import { Alert, Container, Form, Button } from "react-bootstrap";
import styles from "../css/SignUp.module.css";

const Register = () => {
  const history = useHistory();
  //const { setActiveUser } = useContext(UserContext);
 
  const [
    
  ] = useState(null);
  const [signUpDone, setSignUpDone] = useState(false);
  const [ setActiveUser] = useState(null);
  const [signUpFail, setSignUpFail] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");



  //the register part from backend
  const register = async (newUser) => {
    let result = await fetch("/api/v1/users/register", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.hasOwnProperty("error")) {
          setSignUpFail(true);
        } else {
          setActiveUser(result.user);
          setSignUpFail(false);
          setSignUpDone(true);
          setTimeout(() => {
            history.push("/");
          }, 6000);
        }
      });
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const registerSubmitHandler = (e) => {
    e.preventDefault();
    e.preventDefault();
    let newUser = {};
    document.querySelectorAll("input").forEach(field => newUser[field.name] = field.value);
    
    register(newUser);
}



  return (
    <div className={styles.registercontainer}>
      <h1 className={styles.header}>Filmvisarna</h1>
      <Container className={`${styles.containerStyle} py-0`}>
        {signUpDone ? (
          <div className="confirmationDiv">
            <h1>You have been registred!!</h1>
          </div>
        ) : (
          <div>
            <p className={styles.registerformtext}>Register your account</p>
            <div className={styles.registerform}>
              <Form>
                <form action="submit" onSubmit={registerSubmitHandler}>
                  <Form.Group controlId="formBasicUsername">
                    <Form.Control
                      className={styles.inputField}
                      size="lg"
                      htmlFor="handleName"
                      type="name"
                      placeholder="Username"
                      required
                      onChange={({handleNameChange})}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      className={styles.inputField}
                      size="lg"
                      htmlFor="handleEmail"
                      type="email"
                      placeholder="E-mail"
                      required
                      onChange={({handleEmailChange}) }
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Control
                      className={styles.inputField}
                      size="lg"
                      htmlFor="handlePassword"
                      type="password"
                      placeholder="Password"
                      required
                      onChange={(handlePasswordChange)}
                      pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,7}$"
                      required
                    />
                      <p> 5-7 letters. At least one lower case, one upper case letter, one number, one special character.</p>
                    {signUpFail && (
                      <p className="error">This email is already at use.</p>
                    )}
                  </Form.Group>
                  <div className={styles.regarea}>
                  <Button
                    className={styles.registerButton}
                    variant="danger"
                    type="submit"
                    onSubmit={registerSubmitHandler}
                  >
                    Register
                  </Button>
                  </div>
                </form>
              </Form>
              {}{" "}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Register;
