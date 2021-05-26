import { createContext, useState, useEffect } from "react"

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [activeUser, setActiveUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    getUser();
  }, [])

  const getUser = async () => {
    //uncomment bellow after testing
    //let user = await fetch("/api/v1/users/whoami");
    //user = await user.json();
    let user = { name: "Bob", email: "Chris@mail.com" }; //delete after testing
    setActiveUser(user)
    return
  }

  const editName = (newName) => {
    setActiveUser({name: newName});
    setIsEditing(false);
  }

  const loginUser = async (loginInfo) => {
    let result = await fetch("/api/v1/users/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(loginInfo),
    });
    result = await result.json();
    await getUser();
    return result
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
    await getUser();
    return result;
  }

  const logout = async () => {
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
    editName,
    isEditing,
    setIsEditing
  }
  return (
    <UserContext.Provider value={values}>
      {props.children}
    </UserContext.Provider>
  )
}
export default UserContextProvider