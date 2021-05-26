import { createContext, useState, useEffect } from "react"

export const UserContext = createContext();

const UserContextProvider = (props) => {
<<<<<<< Updated upstream
  //const history = useHistory();
=======
>>>>>>> Stashed changes
  const [activeUser, setActiveUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState(null);

  const [loginResult, setLoginResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [status, setStatus] = useState(404);

<<<<<<< Updated upstream
  // toggle between loginForm and register in LoginPage
  //const [showLogin, setShowLogin] = useState(true);

  useEffect(() => {
    whoami();
  }, [])

  const whoami = async () => {
    //uncomment bellow after testing
    //let user = await fetch("/api/v1/users/whoami");
    //user = await user.json();
    let user = { name: "Bob", email: "Chris@mail.com" }; //delete after testing
    setActiveUser(user)
=======
 


   useEffect(() => {
    getUser();
  }, []) 


  const getUser = async () => {
    let user = await fetch("/api/v1/users/whoami")
    user = await user.json();
    setUser(user)
>>>>>>> Stashed changes
    return
  }

  const editName = (newName) => {
    if (newName.length > 12) {
      setMessage("Name too long!");
      setTimeout(() => {
        setMessage(null)
      }, 2000);
      return
    }
    if (newName.length <= 1) {
      setMessage("Name too short!");
      setTimeout(() => {
        setMessage(null)
      }, 2000);
      return
    }
    setActiveUser({ name: newName });
    setIsEditing(false);
    //Send to DB and change there when connected to DB and recall whoami()
  }

  const loginUser = async (loginInfo) => {
    let result = await fetch("/api/v1/users/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(loginInfo),
    });
    let userLoggingIn = await userLoggingIn.json();
    if (!userLoggingIn.error) {
      setActiveUser(userLoggingIn);
      console.log("User logging in: ", activeUser);
      setLoginResult(null);
    } else {
      console.log(loginResult);
      setLoginResult(userLoggingIn.error);
    }
    return userLoggingIn;
  }

  const createUser = async (newUser) => {
    let result = await fetch("/api/v1/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    result = await result.json();
    whoami();
    return result;
  }

  const logout = async () => {
    await fetch("/api/v1/users/logout")
    whoami()
  }

  //register user 
  const register = async (userToRegister) => {
    let userToAdd = await fetch('/api/v1/users/register', {
      method: 'POST',
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userToRegister)
    });

    userToAdd = await userToAdd.json();

<<<<<<< Updated upstream
    if (userToAdd.success) {
      console.log(userToAdd.success)
    } else if (userToAdd.error) {
      console.log(userToAdd.error)
      //setCurrentUser(undefined);
    }
  };


=======
// whoami
const whoami = async () => {
  let userlogin = await fetch("/api/v1/users/whoami");
  userlogin = await userlogin.json();
  if (userlogin) {
    setUser(userlogin);
  }
};


//register user 
const registerU = async (user) => {
  let userRegi = await fetch("/api/v1/users/register", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if (userRegi.status === 404) {
    userRegi = await userRegi.json();
    setErrorMessage(userRegi.failed);
  } else if (userRegi.status === 200) {
    userRegi = await userRegi.json();
    setStatus(200);
  }
};

  
>>>>>>> Stashed changes
  const values =
  {
    activeUser,
    setActiveUser,
    bookings,
    setBookings,
    loginUser,
    createUser,
    logout,
<<<<<<< Updated upstream
    whoami,
    editName,
    isEditing,
    setIsEditing,
    message,
    register
=======
    getUser,
    setErrorMessage,
    errorMessage,
    registerU,
    whoami
  

>>>>>>> Stashed changes
  }

  return (
    <UserContext.Provider value={values}>
      {props.children}
    </UserContext.Provider>
  );
<<<<<<< Updated upstream
};
=======
  }
>>>>>>> Stashed changes

export default UserContextProvider;