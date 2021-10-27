import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import logo from "./../../../assets/logo.jpg";
import { Button, Dropdown, Menu } from "antd";
import { AiOutlineMenu, CgCloseR } from "react-icons/all";
import profile from "./../../../assets/profile.png";
import "./NavBar.css";
import { useAuth } from "./../../../contexts/authcontexts";

const NavBar = () => {
  const { logout, currentUser } = useAuth();
  const history = useHistory();

  const [isMobMenuVisible, setIsMobMenuVisible] = useState(false);

  const HandleMenu = () => {
    setIsMobMenuVisible(false);
  };

  const loggingOut = () => {
    logout();
    history.push("/");
  };

  const menu = (
    <Menu>
      <Menu.Item key="1">
        <NavLink to="/user/transaction" exact>
          Dashboard
        </NavLink>
      </Menu.Item>
      <Menu.Item key="2">
        <NavLink to="/user/portfolio" exact>
          My Portfolio
        </NavLink>
      </Menu.Item>
      {currentUser ? (
        <Menu.Item key="2" onClick={loggingOut}>
          Log Out
        </Menu.Item>
      ) : (
        <Menu.Item key="2">
          <NavLink to="/login">Log In</NavLink>
        </Menu.Item>
      )}
    </Menu>
  );

  return (
    <>
      <div className="navbar-container">
        <div className="navbar-menu">
          <div className="navbar-logo">
            <img src={logo} alt="Porfolio Management" className="logo" />
          </div>

          <ul className="menu-list">
            <li className="menu-item">
              <NavLink activeClassName="activeNavLink" exact={true} to="/">
                <div className="top-bar" />
                HOME
              </NavLink>
            </li>
            <li className="menu-item has-sub-menu">
              <NavLink
                activeClassName="activeNavLink"
                exact={true}
                to="/about-us"
              >
                <div className="top-bar" />
                ABOUT US
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                activeClassName="activeNavLink"
                exact={true}
                to="/contact"
              >
                <div className="top-bar" />
                CONTACT
              </NavLink>
            </li>

            <li className="menu-item">
              {currentUser ? (
                <Dropdown overlay={menu} placement="bottomCenter">
                  <div className="profile_img">
                    <img src={profile} alt="profile" />
                  </div>
                </Dropdown>
              ) : (
                <Button
                  type="button"
                  className="bg-dark"
                  style={{ margin: "0 0 0 2rem " }}
                  onClick={() => {
                    history.push("/login");
                  }}
                >
                  LOGIN
                </Button>
              )}
            </li>
          </ul>
          <div className="navbar-menu-toggle">
            <NavLink to="/login" style={{ marginRight: "10px" }}>
              {currentUser ? (
                <Dropdown overlay={menu} placement="bottomCenter">
                  <div className="profile_img">
                    <img src={profile} alt="profile" />
                  </div>
                </Dropdown>
              ) : (
                <Button
                  type="button"
                  className="bg-dark"
                  style={{ margin: "0 0 0 2rem " }}
                  onClick={() => {
                    history.push("/login");
                  }}
                >
                  LOGIN
                </Button>
              )}
            </NavLink>

            <AiOutlineMenu
              onClick={() => setIsMobMenuVisible((prevVal) => !prevVal)}
            />
          </div>
        </div>
      </div>

      <div className={`mob-menu ${isMobMenuVisible ? "visible" : ""}`}>
        <CgCloseR
          className="mob-menu-close"
          onClick={() => setIsMobMenuVisible((prevVal) => !prevVal)}
        />

        <ul className="menu-list">
          <li className="menu-item">
            <NavLink
              activeClassName="activeNavLink"
              exact={true}
              to="/"
              onClick={HandleMenu}
            >
              <div className="top-bar" />
              Home
            </NavLink>
          </li>

          <li className="menu-item has-sub-menu">
            <NavLink
              activeClassName="activeNavLink"
              exact={true}
              to="/about-us"
              onClick={HandleMenu}
            >
              <div className="top-bar" />
              About us
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink
              activeClassName="activeNavLink"
              exact={true}
              to="/contact"
              onClick={HandleMenu}
            >
              <div className="top-bar" />
              Contact
            </NavLink>
          </li>

          <li className="menu-item">
            <NavLink
              activeClassName="activeNavLink"
              exact={true}
              to="/change-password"
              onClick={HandleMenu}
            >
              Lost Password
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
