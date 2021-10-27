import { Col, Row } from "antd";
import React from "react";
import "./ContactCard.css";
import { GrMailOption, GrPhone } from "react-icons/gr";
import { RiMessage2Line } from "react-icons/ri";
import { useHistory } from "react-router";

const ContactCard = () => {
  const history = useHistory();

  const Contact = () => {
    history.push("/contact");
  };
  return (
    <>
      <div className="contact_card_container">
        <span data-aos="fade-up">portfolio management</span>
        <h1 data-aos="fade-up">CONTACT US</h1>
        <div className="contact_card_content">
          <Row gutter={[20, 20]}>
            <Col xs={24} sm={24} md={8} lg={8}>
              <div className="contact" data-aos="fade-up">
                <GrPhone />
                <h3>Talk to us</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Distinctio odit dignissimos vel quasi omnis dolor fugit labore
                  ipsam tempore laborum.
                </p>
                <button className="btn bg-dark">CALL US</button>
              </div>
            </Col>

            <Col xs={24} sm={24} md={8} lg={8}>
              <div className="contact" data-aos="fade-up" data-aos-delay="500">
                <GrMailOption />
                <h3>Mail to us</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Distinctio odit dignissimos vel quasi omnis dolor fugit labore
                  ipsam tempore laborum.
                </p>
                <button className="btn bg-dark">MAIL US</button>
              </div>
            </Col>

            <Col xs={24} sm={24} md={8} lg={8}>
              <div className="contact" data-aos="fade-up" data-aos-delay="600">
                <RiMessage2Line />
                <h3>Message to us</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Distinctio odit dignissimos vel quasi omnis dolor fugit labore
                  ipsam tempore laborum.
                </p>
                <button className="btn bg-dark">MESSAGE US</button>
              </div>
            </Col>
          </Row>

          <div className="contact_text">
            <h4 data-aos="fade-up">Questions not Answered?</h4>
            <button
              className="btn bg-light"
              onClick={Contact}
              data-aos="fade-up"
            >
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
