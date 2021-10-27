import React from "react";
import './Signup.css';
import { Register } from "../../components/UI/Register";

const Signup = () => {
  return (
    <>
      <div className="signup_container">
        <div className="wrapper">
          <Register />
        </div>
      </div>
    </>
  );
};

export default Signup;
