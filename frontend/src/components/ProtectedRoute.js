import { useContext } from 'react'
import { UserContext } from "../contexts/UserContext";

import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {

  const { activeUser, isAuth } = useContext(UserContext);

  if (activeUser === undefined) {
    return null
  }

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          return <Component {...rest} {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/notfound",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
