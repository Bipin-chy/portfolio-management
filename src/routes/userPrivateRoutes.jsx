import React from "react";
import { Redirect, Route } from "react-router";
import { useAuth } from "../contexts/authcontexts";

const UserPrivateRoutes = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();
  return (
    <>
      <Route
        {...rest}
        render={(props) => {
          return currentUser ? (
            <Component {...props} />
          ) : (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        }}
      ></Route>
    </>
  );
};

export default UserPrivateRoutes;
