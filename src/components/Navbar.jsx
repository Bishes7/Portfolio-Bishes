import React, { useState } from "react";

const Navbar = () => {
  const [slideMenu, setSlideMenu] = useState(false);

  return (
    <div>
      <header>
        <div className="header container flex">
          <div className="logo flex">
            <div>Bishes</div>
            <div className="line">Software. Developer</div>
          </div>
          <label
            htmlFor="hamburger-menu"
            onClick={() => setSlideMenu(!slideMenu)}
          >
            <i className="fa-solid fa-bars l"></i>
          </label>
          <input type="checkbox" id="hamburger-menu" />
          <div className={slideMenu ? "menu slide" : "menu"}>
            <ul
              className="flex navigation "
              onClick={() => setSlideMenu(!slideMenu)}
            >
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
