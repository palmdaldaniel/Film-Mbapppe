import { createContext } from "react"

export const UserContext = createContext();

const UserContextProvider = (props) => {

  const values =
  {

  }
  return (
    <UserContext.Provider value={values}>
      {props.children}
    </UserContext.Provider>
  )
}
export default UserContextProvider