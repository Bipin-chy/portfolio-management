import { Col, Row } from "antd";
import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { Link } from "react-router-dom";
import Copyright from "./Copyright";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer_container">
        <div className="wrapper">
          <Row gutter={[40, 40]}>
            <Col xs={24} sm={24} md={12} lg={8}>
              <h1 style={{ color: "#F37C24" }}>Portfolio Management</h1>
              <p>
                Portfolio management is the selection, prioritisation and
                control of an organisation's programmes and projects, in line
                with its strategic objectives and capacity to deliver. The goal
                is to balance the implementation of change initiatives and the
                maintenance of business-as-usual, while optimising return on
                investment.
              </p>
            </Col>
            <Col xs={24} sm={24} md={12} lg={8}>
              <h1>Quick Links</h1>

              <div className="quick_links">
                <div className="quick_links_item">
                  <Link to="/">Home</Link>
                  <Link to="/contact">Contact us</Link>
                  <Link to="/about-us">About us</Link>
                  <Link to="/address">Address</Link>
                </div>
                <div className="quick_links_item">
                  <Link to="/report">Report</Link>
                  <Link to="/faqs">FaQs</Link>
                  <Link to="/blog">Blog</Link>
                  <Link to="/privacy">Privacy </Link>
                </div>
              </div>
            </Col>

            <Col xs={24} sm={24} md={12} lg={8}>
              <h1>Contact Info</h1>
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
            </Col>
          </Row>
        </div>
      </div>
      <Copyright />
    </>
  );
};

export default Footer;
