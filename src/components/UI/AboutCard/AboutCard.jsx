import { Col, Row } from "antd";
import React from "react";
import "./AboutCard.css";
import about from "./../../../assets/about-girl.png";

const AboutCard = () => {
  return (
    <>
      <div className="about_card_container">
        <div className="about_card_content">
          <div className="about_bg"></div>
          <Row gutter={[30, 16]}>
            <Col xs={24} sm={24} md={10} lg={10}>
              <div className="about_img" data-aos="fade-up">
                <img src={about} alt="About girl" width="70%" />
              </div>
            </Col>
            <Col xs={24} sm={24} md={14} lg={14}>
              <div
                className="about_text"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <span>Portfolio Management</span>
                <h1>ABOUT US</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  commodi, facere fugit, aspernatur rem aperiam nisi aliquid
                  repudiandae velit adipisci nemo nam placeat vitae quibusdam
                  sit est excepturi dicta harum labore eum, dolore beatae
                  deserunt? Minus vero eius laboriosam deleniti?
                </p>
                <button className="btn bg-dark" style={{ marginTop: "10px" }}>
                  LEARN MORE
                </button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default AboutCard;
