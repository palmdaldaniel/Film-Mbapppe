import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { Container, Form, Button, Modal } from "react-bootstrap";
import styles from "../css/SignUp.module.css";
import ModalWindow from './ModalWindow'

const Register = () => {
  const history = useHistory();
  const { createUser, setActiveUser } = useContext(UserContext);
 

  const [signUpDone, setSignUpDone] = useState(false);
  const [signUpFail, setSignUpFail] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");


  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const registerSubmitHandler = async (e) => {
    e.preventDefault();
    let newUser = {
      email,
      password,
      name
    };
    let result = await createUser(newUser);
    if(!result.error) {
      setActiveUser(result)
      history.push('/')
    }
    else if (result.error){
      setSignUpFail(true)
    }
}

let modalValues = {
  signUpFail: signUpFail,
  setSignUpFail: setSignUpFail,
  modalText: 'This email is already registered'
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
                      pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,7}$"
                      required
                    />
                    <ul className='mt-4 mb-0'>
                        <li>5-7 letters</li>
                        <li>1 lowercase letter</li>
                        <li>1 uppercase letter</li>
                        <li>1 number</li>
                        <li>1 special character</li>
                    </ul>

                  </Form.Group>
                  <div className={styles.regarea}>
                  <Button
                    className={styles.registerButton}
                    variant="danger"
                    type="submit"
                    
                  >
                    Register
                  </Button>
                  </div>
                
              </Form>
              
              {}{" "}
            </div>
            <ModalWindow modalValues={modalValues}/>
          </div>
        )}
      </Container>
    </div>

  );
};

export default Register;
