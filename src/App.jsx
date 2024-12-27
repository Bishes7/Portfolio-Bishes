import "./App.css";

import bishes1 from "./assets/bishes1.png";
import bishes2 from "./assets/bishes2.png";

function App() {
  return (
    <>
      <input type="checkbox" id="darkmode" />

      <div className="wrapper">
        <label htmlFor="darkmode">
          <i className="fa-solid sfa-circle-half-stroke"></i>
        </label>

        <header>
          <div className="header container flex">
            <div className="logo flex">
              <div>Bishes</div>
              <div className="line">Software. Developer</div>
            </div>
            <label htmlFor="hamburger-menu">
              <i className="fa-solid fa-bars l"></i>
            </label>
            <input type="checkbox" id="hamburger-menu" />
            <div className="menu">
              <ul className="flex navigation">
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

        <div className="skills" id="skills">
          <h2 className="title">
            <span>Skills</span>
          </h2>
          <div className="container flex skills-container">
            <div>
              <i
                className="fa-brands fa-html5"
                style={{ color: "orangered" }}
              ></i>

              <span> HTML </span>
            </div>
            <div>
              <i
                className="fa-brands fa-css3-alt"
                style={{ color: "blue" }}
              ></i>

              <span> CSS </span>
            </div>
            <div>
              <i className="fa-brands fa-js" style={{ color: "yellow" }}></i>

              <span> JavaScript </span>
            </div>
            <div>
              <i className="fa-brands fa-github"></i>

              <span> Github </span>
            </div>
            <div>
              <i
                className="fa-brands fa-python"
                style={{ color: "yellowgreen" }}
              ></i>
              <span> Python </span>
            </div>
          </div>
        </div>

        <section className="projects container" id="projects">
          <h2 className="title">
            <span> My Projects </span>
          </h2>

          <div className="grid project-container">
            <div className="project-card">
              <div className="top">
                <img src={bishes1} alt="" width="100%" />
              </div>

              <div className="bottom-container">
                <div className="links">
                  <a href="https://github.com/Bishes7">
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-chrome"></i>
                  </a>
                </div>
                <h3>Personal Portfolio</h3>
                <p>Techstack: HTML, CSS, JavaScript, react, python</p>
              </div>
            </div>

            <div className="project-card">
              <div className="top">
                <img src={bishes1} alt="" width="100%" />
              </div>

              <div className="bottom-container">
                <div className="links">
                  <a href="https://github.com/Bishes7">
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-chrome"></i>
                  </a>
                </div>
                <h3>Personal Portfolio</h3>
                <p>Techstack: HTML, CSS, JavaScript, react, python</p>
              </div>
            </div>

            <div className="project-card">
              <div className="top">
                <img src={bishes1} alt="" width="100%" />
              </div>

              <div className="bottom-container">
                <div className="links">
                  <a href="https://github.com/Bishes7">
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-chrome"></i>
                  </a>
                </div>
                <h3>Personal Portfolio</h3>
                <p>Techstack: HTML, CSS, JavaScript, react, python</p>
              </div>
            </div>

            <div className="project-card">
              <div className="top">
                <img src={bishes1} alt="" width="100%" />
              </div>

              <div className="bottom-container">
                <div className="links">
                  <a href="https://github.com/Bishes7">
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-chrome"></i>
                  </a>
                </div>
                <h3>Personal Portfolio</h3>
                <p>Techstack: HTML, CSS, JavaScript, react, python</p>
              </div>
            </div>
          </div>
        </section>
        <section className="about" id="about">
          <h2 className="title">
            <span>About me</span>
          </h2>
          <div className="container flex about-content">
            <div className="flex-center myimage">
              <img src={bishes2} alt="" width="100%" />
            </div>
            <div className="bio container">
              <h2>Bishes Adhikari</h2>
              <p>
                Passionate full-stack developer skilled in both front-end
                technologies (HTML, CSS, JavaScript) and back-end development
                (Node.js, databases), creating efficient, responsive, and
                dynamic web applications. Dedicated to continuous learning and
                delivering innovative solutions.
              </p>
              <p>Sydney, Australia</p>
              <div>
                <div className="tag">Interest</div>
                <div className="flex">
                  <span> Coding </span>
                  <span>Meditation </span>
                  <span>Cooking</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact container" id="contact">
          <h2 className="title">
            <span>Contact</span>
          </h2>
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
          <div className="bottom">
            &copy;Copy right, all right reserved 2024
          </div>
        </footer>
        <a href="#hero" className="go-up flex-center">
          <i className="fa-solid fa-chevron-up"></i>
        </a>
      </div>
    </>
  );
}

export default App;
