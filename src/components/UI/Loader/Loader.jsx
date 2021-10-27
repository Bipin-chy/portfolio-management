import { Spin } from "antd";
import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <>
      <div className="loader_container">
        <div className="loader_content">
          <h3>Loading! Please wait.............</h3>
          <Spin size="large" />
        </div>
      </div>
    </>
  );
};

export default Loader;
