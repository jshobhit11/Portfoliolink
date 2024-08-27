import React from "react";
import "./Project.css";
// import image from "../assets/image.jpeg";
import Navbar from "./Navbar";
import Book_Store from "../assets/Book_Store.jpeg";
import Chat_App from "../assets/CHAT_APP.jpg";
import Resume_Maker from "../assets/Resume_Maker.jpeg";
import Page from "../assets/page.jpg";

const Projects = () => {
  return (
    <>
      <Navbar />

      <div className="projects-page">
        <div className="projects-container">
          <h2>
            Projects
            <span className="line">
              <hr />
            </span>
          </h2>

          <div className="all-projects">
            <div className="project-block">
              <h2>Chat app</h2>
              <div className="project-image">
                <img src={Chat_App} alt=" " />
              </div>
              <div className="about-project">
                <a
                  href="https://64da11730c870d2f122521a6--stellular-brioche-32e96e.netlify.app/"
                  className="live-link"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/jshobhit11/ChatApplication"
                  className="Source Code"
                >
                  Source Code
                </a>
              </div>
            </div>

            <div className="project-block">
              <h2>Book Store</h2>
              <div className="project-image">
                <img src={Book_Store} alt=" " />
              </div>
              <div className="about-project">
                <a
                  href="https://66c7773837ef607495569e37--cerulean-dolphin-7a1111.netlify.app/"
                  className="live-link"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/jshobhit11/Bookstore_Frontend"
                  className="Source Code"
                >
                  Source Code
                </a>
              </div>
            </div>

            <div className="project-block">
              <h2>Resume Builder</h2>
              <div className="project-image">
                <img src={Resume_Maker} alt=" " />
              </div>
              <div className="about-project">
                <a
                  href="https://resumebuilder-7zxl.onrender.com"
                  className="live-link"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/jshobhit11/ResumeBuilder"
                  className="Source Code"
                >
                  Source Code
                </a>
              </div>
            </div>

            <div className="project-block">
              <h2>Login/Signup Page</h2>
              <div className="project-image">
                <img src={Page} alt=" " />
              </div>
              <div className="about-project">
                <a href="https://quicklogin.netlify.app/" className="live-link">
                  Live Demo
                </a>
                <a
                  href="https://github.com/jshobhit11/LOGIN-SIGNUP"
                  className="Source Code"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
