import { Col, Row } from "antd";
import React from "react";
import "./Graph.css";
import stock from "./../../../assets/stock.jpg";

const Graph = () => {
  return (
    <>
      <div className="graph_container">
        <div className="graph_content">
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={10} lg={10}>
              <div className="graph_text" data-aos="fade-up">
                <span>portfolio management</span>
                <h1>Financial Stock Market</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi maxime praesentium blanditiis ab nemo nostrum, quis
                  laudantium neque impedit error sapiente aut repellat quam
                  necessitatibus dolores fugiat natus nihil animi!
                </p>
                <button className="btn bg-dark">LEARN MORE...</button>
              </div>
            </Col>
            <Col xs={24} sm={24} md={14} lg={14}>
              <div
                className="stock_img"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <img src={stock} alt="graph" width="100%" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Graph;
