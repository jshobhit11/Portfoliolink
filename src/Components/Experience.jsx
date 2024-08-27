import React from "react";
import "./Experience.css";
import Navbar from "./Navbar";

const Experience = () => {
  return (
    <>
      <Navbar />

      <div className="experience-page">
        <div className="experience-container">
          <h4>
            Experiences
            <span className="line">
              <hr />
            </span>
          </h4>

          <div className="all-experiences">
            <h3>Coding Ninajs</h3>
            <p className="time-period">sept 2022 - Nov 2022</p>

            <p className="position">Teaching Assistant</p>

            <div className="about-role">
              <ul>
                <li>
                  Provided one-on-one guidance to students, helping them
                  understand complex coding concepts.
                </li>
                <li>
                  Assisted in debugging code and clarifying doubts during coding
                  sessions.
                </li>
                <li>
                  Helped create a positive and collaborative learning
                  environment for students to excel.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
