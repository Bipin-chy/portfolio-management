import React, { useState } from "react";
import "./LoginCard.css";
import { Form, Input, Checkbox, Button, message, Spin } from "antd";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../../contexts/authcontexts";

const LoginForm = () => {
  const { login, currentUser } = useAuth();
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  let history = useHistory();

  const onFinish = async (values) => {
    setIsLoggingIn(true);
    const email = values.email;
    const password = values.password;

    console.log("email:", values.email, "password:", values.password);

    login(email, password)
      .then(() => {
        currentUser ? history.push("/") : history.push("/login");
      })
      .catch((e) => {
        message.error(e.message);
        setIsLoggingIn(false);
      })
      .finally(() => {
        setIsLoggingIn(false);
      });

    console.log("Received values of form: ", values);
  };

  return (
    <>
      <div className="login_container">
        <h2>Portfolio Management!</h2>
        <p>Please login to your account</p>
        <div className="login_content">
          <Form
            name="normal_login"
            className="login-form"
            // initialValues={{
            //   remember: true,
            // }}
            onFinish={onFinish}
          >
            <label className="form_label" htmlFor="email">
              Email
            </label>
            <br />
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please input your email address!",
                },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>

            <label className="form_label" htmlFor="password">
              Password
            </label>
            <br />
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input type="password" placeholder="Password" />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox className="form_label">Remember me</Checkbox>
              </Form.Item>

              <Link className="forget_password" to="/forget-password">
                Forget your password?
              </Link>
            </Form.Item>

            <Form.Item>
              <button type="submit" className="btn bg-dark">
                {isLoggingIn ? (
                  <Spin style={{ color: "white", marginRight: "10px" }} />
                ) : null}
                LOG IN
              </button>
              <div className="user">
                New user? <Link to="/register">REGISTER</Link>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
