import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {

  const [showLogin, setShowLogin] = useState(false); // set this from true to false, that's why it wasn't working.
  const [activeUser, setActiveUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState(null);
  const [loginResult, setLoginResult] = useState(null);
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    whoami();
  }, []);

  const whoami = async () => {
    //uncomment bellow after testing
    let user = await fetch("/api/v1/users/whoami");
    user = await user.json();
    // let user = { name: "Bob", email: "Chris@mail.com" }; //delete after testing
    setActiveUser(user);
    return user;
  };

  const editName = async (e) => {
    e.preventDefault();
    let newName = e.target[0].value ;
    if (newName.length > 12) {
      setMessage("Name too long!");
      setTimeout(() => {
        setMessage(null);
      }, 2000);
      return;
    }
    if (newName.length <= 1) {
      setMessage("Name too short!");
      setTimeout(() => {
        setMessage(null);
      }, 2000);
      return;
    }

    let changeUserName = await fetch(`/api/v1/users/${activeUser._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({name: newName})
    })
    changeUserName = await changeUserName.json();
    setActiveUser(changeUserName)
    setIsEditing(false);
  };



  const loginUser = async (loginInfo) => {
    let userLoggingIn = await fetch("/api/v1/users/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(loginInfo),
    });
    userLoggingIn = await userLoggingIn.json();
    if (!userLoggingIn.error) {
      setActiveUser(userLoggingIn);
      setLoginResult(null);
    } else {
      setLoginResult(userLoggingIn.error);
    }
    return userLoggingIn;
  };



  const createUser = async (newUser) => {
    let result = await fetch("/api/v1/users/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    result = await result.json();


    return result;
  };

  const logout = async () => {
    let result = await fetch("/api/v1/users/logout");
    result = await result.json();
    setActiveUser(null)
    return result;
  };



  const values = {
    activeUser,
    setActiveUser,
    bookings,
    setBookings,
    loginUser,
    createUser,
    logout,
    whoami,
    editName,
    isEditing,
    setIsEditing,
    setShowLogin,
    showLogin,
    message,
    setLoginResult,
    loginResult,
    isUser,
    setIsUser,


  };

  return (
    <UserContext.Provider value={values}>{props.children}</UserContext.Provider>
  );
};

export default UserContextProvider;
