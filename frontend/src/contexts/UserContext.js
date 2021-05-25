import { createContext, useState, useEffect } from "react"

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [activeUser, setActiveUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [loginResult, setLoginResult] = useState(null);

  // toggle between loginForm and register in LoginPage
  const [showLogin, setShowLogin] = useState(true);


   useEffect(() => {
    getUser();
  }, []) 

  const getUser = async () => {
    let user = await fetch("/api/v1/users/whoami")
    user = await user.json();
    setActiveUser(user)
    return
  }

  const loginUser = async (loginInfo)=>{
    let userLoggingIn = await fetch("/api/v1/users/login",{
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(loginInfo),
    });
    userLoggingIn = await userLoggingIn.json();
    if (userLoggingIn.succes) {
      setActiveUser(userLoggingIn);
      console.log("User logging in: ", activeUser);
      setLoginResult(null);
    }
    else if (userLoggingIn.error) {
      console.log(loginResult);
      setLoginResult(userLoggingIn.error);
    }



    
    return userLoggingIn;
}




const createUser = async(newUser)=>{
  let result = await fetch("/api/v1/users", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(newUser),
  });
  result = await result.json();
  getUser();
  return result;
}

const logout = async ()=>{
  await fetch("/api/v1/users/logout")
   getUser()
}




  
  const values =
  {
    activeUser, 
    setActiveUser, 
    bookings,
    setBookings,
    loginUser,
    createUser,
    logout,
    getUser, 
    showLogin, 
    setShowLogin

  }
  return (
    <UserContext.Provider value={values}>
      {props.children}
    </UserContext.Provider>
  )
}
export default UserContextProvider