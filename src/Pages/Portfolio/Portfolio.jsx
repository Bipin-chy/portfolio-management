import React from "react";
import "./Portfolio.css";
import { PortfolioCard } from "../../components/UI/PortfolioCard";
import NavBar from "../../components/Layout/NavBar/NavBar";
import Footer from "./../../components/Layout/Footer/Footer";

const Portfolio = () => {
  return (
    <>
      <NavBar />
      <div className="portfolio_container">
        <div className="wrapper">
          <PortfolioCard />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
