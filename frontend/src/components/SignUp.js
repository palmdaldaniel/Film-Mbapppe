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
console.log(`name`, name)
console.log(`email`, email)
console.log(`password`, password)


  //the register part from backend
  const register = async (newUser) => {
    console.log(`new user`, newUser)
    let result = await fetch("/api/v1/users/register", {
      
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newUser)
    })
      // .then((response) => response.json())
      // .then((result) => {
      //   if (result.hasOwnProperty("error")) {
      //     setSignUpFail(true);
      //   } else {
      //     setActiveUser(result.user);
      //     setSignUpFail(false);
      //     setSignUpDone(true);
      //     setTimeout(() => {
      //       history.push("/");
      //     }, 6000);
      //   }
      // });
  };

  const handleNameChange = (e) => {
    console.log(e.target.value)
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
    console.log('Hello')
    let newUser = {
      email,
      password,
      name
    };
    // document.querySelectorAll("input").forEach(field => newUser[field.name] = field.value);
    console.log(`newUser`, newUser)
    register(newUser);
}

  return (
    <div className={styles.registercontainer}>
      <h1 className={styles.header}>MOVIEPLUS</h1>
      <Container className={`${styles.containerStyle} py-0`}>
        {signUpDone ? (
          <div className="confirmationDiv">
            <h1>You have been registred!!</h1>
          </div>
        ) : (
          <div>
            <p className={styles.registerformtext}>Register your account</p>
            <div className={styles.registerform}>
              <Form onSubmit={(e) => registerSubmitHandler(e)}>
                
                  <Form.Group controlId="formBasicUsername">
                    <Form.Control
                      className={styles.inputField}
                      size="lg"
                      htmlFor="handleName"
                      type="name"
                      placeholder="Username"
                      required
                      onChange={handleNameChange}
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
                      onChange={handleEmailChange}
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
                      onChange={handlePasswordChange}
                      // pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{0,7}$"
                      required
                    />
                    {signUpFail && (
                      <p className="error">This email is already at use.</p>
                    )}
                  </Form.Group>

                  <Button
                    className={styles.registerButton}
                    variant="danger"
                    type="submit"
                    
                  >
                    Register
                  </Button>
                
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
