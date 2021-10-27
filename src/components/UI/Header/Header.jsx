import React from "react";
import "./Header.css";

import { Breadcrumb } from "antd";
import { IoHomeOutline } from "react-icons/io5";

const Header = ({ title, image}) => {
  return (
    <>
      <div className="header_container">
        <img src={image} alt="banner" />
        <div className="header_content">
          <h1>{title}</h1>
          <Breadcrumb>
            <Breadcrumb.Item href="">
              <IoHomeOutline />
            </Breadcrumb.Item>
            <Breadcrumb.Item>{title}</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
    </>
  );
};

export default Header;
