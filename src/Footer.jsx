import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="flex-center">
        <div className="top flex">
          <div className="Links">
            <h3>Links</h3>
            <ul>
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
                <a href="#contact">Contacts</a>
              </li>
            </ul>
          </div>
          <div className="socials">
            <h3>Social Links</h3>
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/bishes-adhikari/">
                  Linkedin
                </a>
              </li>
              <li>
                <a href="https://github.com/Bishes7">Github</a>
              </li>
              <li>
                <a href="">Facebook</a>
              </li>
              <li>
                <a href="">Youtube</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom">&copy;Copy right, all right reserved 2024</div>
      </footer>
      <a href="#hero" className="go-up flex-center">
        <i className="fa-solid fa-chevron-up"></i>
      </a>
    </>
  );
};

export default Footer;
