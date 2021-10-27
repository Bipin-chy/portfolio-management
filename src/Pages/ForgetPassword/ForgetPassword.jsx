import React from "react";
import "./ForgetPassword.css";
import forgetPasswordImg from "./../../assets/forget_password.png";
import { Form, Input, message } from "antd";
import { useHistory, Link } from "react-router-dom";
import { useAuth } from "../../contexts/authcontexts";

const ForgetPassword = () => {
  const [form] = Form.useForm();
  const { forgotPassword } = useAuth();

  const history = useHistory();

  const onFinish = (values) => {
    console.log(values);

    const email = values.email;
    console.log("your Email is", email);

    forgotPassword(email)
      .then(() => {
        // console.log(email);
        message.success("Password reset email is successfully sent");
        form.resetFields();
      })
      .catch((error) => {
        message.error(error);
      });
  };
  return (
    <>
      <div className="wrapper">
        <div className="forget_password_container">
          <h2>Forgot your password?</h2>
          <p>Enter your email address</p>
          <div className="forget_password_content">
            <div className="forget_password_box">
              <img src={forgetPasswordImg} alt="lock" />
              <Form form={form} onFinish={onFinish}>
                <label htmlFor="mobile-email">Email *</label>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please enter email !",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item>
                  <button
                    style={{ width: "100%" }}
                    type="submit"
                    className="btn bg-dark"
                  >
                    SEND
                  </button>
                </Form.Item>
              </Form>
              <Link
                onClick={() => {
                  history.goBack();
                }}
              >
                Go Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
