import { createContext, useState } from "react"

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const history = useHistory();
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
    //setUser(user)
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

// whoami
const whoami = async () => {
  let userlogin = await fetch("/api/v1/users/whoami");
  userlogin = await userlogin.json();
  if (userlogin) {
    setUser(userlogin);
  };


//register user 
const register = async (userToRegister) => {
  let userToAdd = await fetch('/api/v1/users/register', {
    method: 'POST',
    headers: { "content-type": "application/json" },
    body: JSON.stringify(userToRegister)
  });

  userToAdd = await userToAdd.json();

  if (userToAdd.success) {
    console.log(userToAdd.success)
  } else if (userToAdd.error) {
    console.log(userToAdd.error)
    setCurrentUser(undefined);
  }
};

  
  const values =
  {
    activeUser, 
    setActiveUser, 
    bookings,
    setBookings,
    loginUser,
    createUser,
    logout,
    getUser

  }
  return (
    <UserContext.Provider value={values}>
      {props.children}
    </UserContext.Provider>
  );
  }
};
export default UserContextProvider;