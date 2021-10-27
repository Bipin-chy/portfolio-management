import React from "react";
import { AboutCard } from "../../components/UI/AboutCard";
import { Graph } from "../../components/UI/Graph";
import { Header } from "./../../components/UI/Header";
import About from "./../../assets/about.jpg";

const Aboutus = () => {
  return (
    <>
      <div className="aboutus_container">
        <Header title="About us" image={About} />
        <div className="wrapper">
          <AboutCard />
          <div style={{ marginBottom: "100px" }}></div>
          <Graph />
        </div>
      </div>
    </>
  );
};

export default Aboutus;
