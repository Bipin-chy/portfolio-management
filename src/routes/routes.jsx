import React from "react";
import { Route } from "react-router";
import {
  Home,
  Aboutus,
  Contactus,
  Login,
  Signup,
  ForgetPassword,
  // Dashboard,
} from "./../Pages";

const ROUTES = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about-us",
    component: Aboutus,
  },
  {
    path: "/contact",
    component: Contactus,
  },
  {
    path: "/login",
    component: Login,
  },

  {
    path: "/register",
    component: Signup,
  },

  {
    path: "/forget-password",
    component: ForgetPassword,
  },

  // {
  //   path: "/dashboard",
  //   component: Dashboard,
  // },
];

const Routes = () => {
  return (
    <>
      {ROUTES.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          component={route.component}
          exact
        />
      ))}
    </>
  );
};

export default Routes;
