import React from "react";
import bishes2 from "../assets/bishes2.png";

const Hero = () => {
  return (
    <>
      <section className="hero-section container" id="hero">
        <div className="grid hero">
          <div className="left flex">
            <div>
              Hi, I am
              <h2>Bishes Adhikari</h2>
            </div>
            <div className="tag">Software. Developer</div>
            <p>I love coding and passionate about coding</p>
            <div>
              <a href="./IT resume latest.docx" download="">
                <button>
                  Download CV <i className="fa-solid fa-download"></i>
                </button>
              </a>
            </div>
          </div>
          <div className="right flex">
            <img src={bishes2} alt="bishes standing" />
          </div>
        </div>
      </section>

      {/* <!-- banner section --> */}
      <section className="banner flex container">
        <div className="flex info-content">
          <div className="flex-center icon-container">
            <i className="fa-solid fa-award"></i>
          </div>
          <div>
            <span>IT</span>
            <p>4th Semester</p>
          </div>
        </div>
        <div className="info-divider"></div>

        <div className="flex info-content">
          <div className="flex-center icon-container">
            <i className="fa-solid fa-award"></i>
          </div>
          <div>
            <span>10+ Projects</span>
            <p>Completed</p>
          </div>
        </div>
        <div className="info-divider"></div>

        <div className="flex info-content">
          <div className="flex-center icon-container">
            <i className="fa-solid fa-award"></i>
          </div>
          <div>
            <span>1+ Year</span>
            <p>Experience</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
