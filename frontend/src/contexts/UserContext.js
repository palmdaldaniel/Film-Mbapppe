import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {

  const [showLogin, setShowLogin] = useState(true);
  const [activeUser, setActiveUser] = useState(undefined);
  const [bookings, setBookings] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState(null);
  const [loginResult, setLoginResult] = useState(null);
  const [isUser, setIsUser] = useState(false);

  // for Protected route
  const [isAuth, setIsAuth] = useState(false);



  useEffect(() => {
    whoami();
  }, []);

  const whoami = async () => {
    let user = await fetch("/api/v1/users/whoami");
    user = await user.json();
    if (user) {
      setIsAuth(true);
      setActiveUser(user);
    }
    else {
      setActiveUser(null)
    }
    return user;
  };



  const editUser = async (e) => {
    e.preventDefault();
    let newPassword = e.target[1].value;
    let newName = e.target[0].value;

    let body = { name: newName, password: newPassword };

    //PASSWORD CHECKS
    if (newPassword === "") {
      body = { name: newName }
    } else {
      if (newPassword.length < 5) {
        setMessage("Password too short!");
        setTimeout(() => {
          setMessage(null);
        }, 2000);
        return;
      }
      if (!newPassword.match(RegExp(
        "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{4,}$"))) {
          setMessage("Need a stronger password");
          setTimeout(() => {
            setMessage(null);
          }, 2000);
          return;
      }
    };

    //NAME CHECKS
    if (newName === "") {
      body = { password: newPassword }
    } else {
      if (newName.length <= 1) {
        setMessage("Name too short!");
        setTimeout(() => {
          setMessage(null);
        }, 2000);
        return;
      }
      if (newName.length > 12) {
        setMessage("Name too long!");
        setTimeout(() => {
          setMessage(null);
        }, 2000);
        return;
      }
    };

    if (newName === "" && newPassword === "") {
      setMessage("Please fill out at least one field");
        setTimeout(() => {
          setMessage(null);
        }, 2000);
        return;
    }

    let updatedUser = await fetch(`/api/v1/users/${activeUser._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body)
    })
    updatedUser = await updatedUser.json();
    setActiveUser(updatedUser)
    setIsEditing(!isEditing);
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
      setIsAuth(true);
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
    setIsAuth(true); 

    return result;
  };

  const logout = async () => {
    let result = await fetch("/api/v1/users/logout");
    result = await result.json();
    setActiveUser(null)
    setIsAuth(false);
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
    editUser,
    isEditing,
    setIsEditing,
    setShowLogin,
    showLogin,
    message,
    setLoginResult,
    loginResult,
    isUser,
    setIsUser,
    isAuth
  };

  return (
    <UserContext.Provider value={values}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
