import { Form, Input, message } from "antd";
import React from "react";
import "./Register.css";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "./../../../contexts/authcontexts";
import { db } from "../../../firebase";

const Register = () => {
  const [form] = Form.useForm();
  const { createUsers } = useAuth();
  const history = useHistory();

  const onFinish = (values) => {
    console.log("clicked");
    console.log("Received values of form: ", values);

    const userData = {
      fullname: values.fullname,
      email: values.email,
      password: values.password,
    };

    console.log(userData);

    const email = values.email;
    const password = values.password;

    createUsers(email, password)
      .then((userCredential) => {
        message.info("User Registered successfully.");
        history.push("/login");
        const uid = userCredential.user.uid;
        return db.collection("Users").doc(uid).set(userData);
      })
      .then(() => {
        form.resetFields();
      });
  };

  return (
    <>
      <div className="register_container">
        <h2>Portfolio Management!</h2>
        <p>Create your own account!</p>
        <div className="register_content">
          <Form form={form} name="normal_login" onFinish={onFinish}>
            <label className="form_label" htmlFor="fullname">
              Full Name
            </label>
            <br />
            <Form.Item
              name="fullname"
              rules={[
                {
                  required: true,
                  message: "Please input your Full name!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <label className="form_label" htmlFor="email">
              Email
            </label>
            <br />
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your Email!",
                },
              ]}
            >
              <Input />
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
                  message: "Please input your password!",
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <label className="form_label" htmlFor="password">
              Confirm Password
            </label>
            <br />
            <Form.Item
              name="confirm"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <button type="submit" className="btn bg-dark">
                Register
              </button>
              <div className="user">
                Already a member? <Link to="/login">LOGIN</Link>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Register;
