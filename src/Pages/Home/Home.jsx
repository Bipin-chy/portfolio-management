import { Row } from "antd";
import React from "react";
import { AboutCard } from "../../components/UI/AboutCard";
import { Banner } from "../../components/UI/Banner";
import { ContactCard } from "../../components/UI/ContactCard";
import { Graph } from "../../components/UI/Graph";

const Home = () => {
  return (
    <>
      <div className="home_container">
        <Banner />
        <div className="wrapper">
          <AboutCard />
          <ContactCard />
          <Graph />
        </div>
      </div>
    </>
  );
};

export default Home;
