import React from "react";
import "./Login.css";
import { LoginCard } from "../../components/UI/LoginCard";

const Login = () => {
  return (
    <>
      <div className="login_page_container">
        <div className="wrapper">
          <LoginCard />
        </div>
      </div>
    </>
  );
};

export default Login;
