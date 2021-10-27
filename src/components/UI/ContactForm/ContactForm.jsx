import { Col, Row, Form, Input, message } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React from "react";
import "./ContactForm.css";
import { BiPhone } from "react-icons/bi";
import { BiEnvelope } from "react-icons/bi";
import { BiMap } from "react-icons/bi";
import { db } from "../../../firebase";

const ContactForm = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const name = values.name;
    const email = values.email;
    const subject = values.subject;
    const query = values.message;

    const contact = {
      Name: name,
      Email: email,
      Subject: subject,
      Message: query,
    };

    db.collection("Contact")
      .doc()
      .set(contact)
      .then(() => {
        message.success("message sent successfully!");
        form.resetFields();
      })
      .catch((err) => message.error(err));
  };
  return (
    <>
      <div className="contact_form_container">
        <div className="contact_form_content">
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={8} lg={8}>
              <div className="contact_form_text" data-aos="fade-up">
                <span>portfolio management</span>
                <h1>Contact Info</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum asperiores, esse accusantium pariatur reprehenderit
                  illo similique dicta blanditiis accusamus quidem veritatis hic
                  vel nulla ratione porro molestias corrupti quisquam velit.
                </p>
                <div className="contact_info">
                  <a href="tel:+9779801245637">
                    <div className="contact_info_item">
                      <BiPhone />
                      <p>+9779801245637</p>
                    </div>
                  </a>

                  <a href="mailto:info@stockmanagement.com">
                    <div className="contact_info_item">
                      <BiEnvelope />
                      <p>info@stockmanagement.com</p>
                    </div>
                  </a>

                  <a
                    target="blank_"
                    href="https://www.google.com/maps/place/11%2F22+Essington+Ave,+Palmerston+City+NT+0830,+Australia/@-12.4880664,130.9793682,17z/data=!3m1!4b1!4m5!3m4!1s0x2cc0a2cbb487793b:0x31f15f961f3b4452!8m2!3d-12.4880664!4d130.9815569"
                  >
                    <div className="contact_info_item">
                      <BiMap />
                      <p>Budhanilkantha-10, Jyotinagar Kapan</p>
                    </div>
                  </a>
                </div>
              </div>
            </Col>
            <Col xs={24} sm={24} md={16} lg={16}>
              <div
                className="contact_form_details"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <h1>Request a Qoute?</h1>
                <Form
                  name="normal_login"
                  className="login-form"
                  onFinish={onFinish}
                >
                  <label htmlFor="name">Your Name</label>
                  <Form.Item
                    name="name"
                    rules={[
                      { required: true, message: "Please input your Name!" },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <label htmlFor="email">Your Email</label>
                  <Form.Item
                    name="email"
                    rules={[
                      { required: true, message: "Please input your Email!" },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <label htmlFor="subject">Your Subject</label>
                  <Form.Item
                    name="subject"
                    rules={[
                      { required: true, message: "Please input your Subject!" },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <label htmlFor="message">Your Message</label>
                  <Form.Item
                    name="message"
                    rules={[
                      { required: true, message: "Please input your Message!" },
                    ]}
                  >
                    <TextArea rows={4} />
                  </Form.Item>

                  <Form.Item>
                    <button type="submit" className=" btn bg-dark">
                      REQUEST
                    </button>
                  </Form.Item>
                </Form>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
