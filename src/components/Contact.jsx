import React from "react";
import Title from "./Title";

const Contact = () => {
  return (
    <section className="contact container" id="contact">
      <Title title="Contact" />
      <div className="flex social">
        <a href="https://www.linkedin.com/in/bishes-adhikari/ ">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/Bishes7">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="">
          <i className="fa-solid fa-mobile"></i>
        </a>
      </div>
      <h3>OR</h3>
      <div className="flex-center">
        <a
          href="https://mail.google.com/mail/u/0/#inbox?compose=new"
          className="email-section flex-center"
          target="_blank"
        >
          <span>specialbishes9@gmail.com</span>
          <div className="email-icon">
            <i className="fa-solid fa-paper-plane"></i>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Contact;
