import React from "react";
import { useHistory } from "react-router-dom";
import ReactTyped from "react-typed";
import video from "./../../../assets/Banner video/stock_video.mp4";
import "./Banner.css";

const Banner = () => {
  const history = useHistory();
  const string = [
    "An investment in knowledge pays the best interest",
    "In investing, what is comfortable is rarely profitable.",
    "Returns matter a lot. It's our capital.",
  ];

  const Contact = () => {
    history.push("/contact");
  };

  return (
    <>
      <div className="banner_container">
        <video autoPlay loop muted className="video">
          <source src={video} type="video/mp4" />
        </video>
        {/* <h1>Software Engineer</h1> */}
        <div className="banner_content">
          <div className="banner_text">
            <ReactTyped
              className="typed-text"
              strings={string}
              typeSpeed={40}
              backSpeed={60}
              loop
            />
            <div>
              <button
                className="btn bg-light"
                onClick={Contact}
                style={{ marginTop: "15px" }}
              >
                CONTACT US
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
