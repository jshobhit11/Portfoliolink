import React from "react";
import "./About.css";
import Navbar from "./Navbar";
import profilepic from "../assets/profilepic1.jpg";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-page">
        <div className="about-container">
          <div className="about-left">
            <img src={profilepic} alt="ShobhitJain" />

            <div className="about-right">
              <div className="about-bio">
                Hello, I recently graduated in Computer Science and Engineering
                from Maharaja Agrasen Institute of Technology. I have a strong
                interest in software development and enjoy creating innovative
                solutions. I have solid experience in full stack development,
                working with programming languages like C++ and JavaScript, and
                using libraries and frameworks such as React JS and Node.js. I'm
                driven by a passion for applying algorithms to tackle real-world
                problems.
              </div>

              <div className="deep-info">
                <div className="basics-info">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    className="arrow-right"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M271.653 1023.192c-8.685 0-17.573-3.432-24.238-10.097-13.33-13.33-13.33-35.144 0-48.474L703.67 508.163 254.08 58.573c-13.33-13.331-13.33-35.145 0-48.475 13.33-13.33 35.143-13.33 48.473 0L776.38 483.925c13.33 13.33 13.33 35.143 0 48.473l-480.492 480.694c-6.665 6.665-15.551 10.099-24.236 10.099z"></path>
                  </svg>
                  <h4>Birthday: 30 Jan 2002</h4>
                </div>

                <div className="basics-info">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    class="arrow-right"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M271.653 1023.192c-8.685 0-17.573-3.432-24.238-10.097-13.33-13.33-13.33-35.144 0-48.474L703.67 508.163 254.08 58.573c-13.33-13.331-13.33-35.145 0-48.475 13.33-13.33 35.143-13.33 48.473 0L776.38 483.925c13.33 13.33 13.33 35.143 0 48.473l-480.492 480.694c-6.665 6.665-15.551 10.099-24.236 10.099z"></path>
                  </svg>
                  <h4>City: Narela, Delhi India</h4>
                </div>

                <div className="basics-info">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    class="arrow-right"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M271.653 1023.192c-8.685 0-17.573-3.432-24.238-10.097-13.33-13.33-13.33-35.144 0-48.474L703.67 508.163 254.08 58.573c-13.33-13.331-13.33-35.145 0-48.475 13.33-13.33 35.143-13.33 48.473 0L776.38 483.925c13.33 13.33 13.33 35.143 0 48.473l-480.492 480.694c-6.665 6.665-15.551 10.099-24.236 10.099z"></path>
                  </svg>
                  <h4>Phone: 9319940204</h4>
                </div>

                <div className="basics-info">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    class="arrow-right"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M271.653 1023.192c-8.685 0-17.573-3.432-24.238-10.097-13.33-13.33-13.33-35.144 0-48.474L703.67 508.163 254.08 58.573c-13.33-13.331-13.33-35.145 0-48.475 13.33-13.33 35.143-13.33 48.473 0L776.38 483.925c13.33 13.33 13.33 35.143 0 48.473l-480.492 480.694c-6.665 6.665-15.551 10.099-24.236 10.099z"></path>
                  </svg>
                  <h4>Email: jshobhit3020@gmail.com</h4>
                </div>
              </div>
            </div>
          </div>

          <h2 className="interest-title">Interests -------------</h2>
          <div className="interests">
            <div className="each-interest">
              <span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="#1976D2"
                    stroke-width="2"
                    fill="none"
                  ></circle>
                  <path
                    d="M2 12C4 8 8 6 12 6C16 6 20 8 22 12C20 16 16 18 12 18C8 18 4 16 2 12Z"
                    stroke="#2196F3"
                    stroke-width="2"
                  ></path>
                  <path
                    d="M2 12C4 16 8 18 12 18C16 18 20 16 22 12C20 8 16 6 12 6C8 6 4 8 2 12Z"
                    stroke="#2196F3"
                    stroke-width="2"
                  ></path>
                  <path
                    d="M12 2C12 6 12 18 12 22"
                    stroke="#2196F3"
                    stroke-width="2"
                  ></path>
                  <path
                    d="M4.93 4.93C8.24 8.24 15.76 15.76 19.07 19.07"
                    stroke="#2196F3"
                    stroke-width="2"
                  ></path>
                  <path
                    d="M4.93 19.07C8.24 15.76 15.76 8.24 19.07 4.93"
                    stroke="#2196F3"
                    stroke-width="2"
                  ></path>
                  <circle cx="12" cy="12" r="1.5" fill="#4CAF50"></circle>
                  <circle cx="12" cy="6" r="1.5" fill="#4CAF50"></circle>
                  <circle cx="12" cy="18" r="1.5" fill="#4CAF50"></circle>
                  <circle cx="6" cy="12" r="1.5" fill="#4CAF50"></circle>
                  <circle cx="18" cy="12" r="1.5" fill="#4CAF50"></circle>
                  <circle cx="4.93" cy="4.93" r="1.5" fill="#4CAF50"></circle>
                  <circle cx="19.07" cy="4.93" r="1.5" fill="#4CAF50"></circle>
                  <circle cx="4.93" cy="19.07" r="1.5" fill="#4CAF50"></circle>
                  <circle cx="19.07" cy="19.07" r="1.5" fill="#4CAF50"></circle>
                </svg>
              </span>
              Software Development
            </div>
            <div className="each-interest">
              <span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3"
                    y="4"
                    width="18"
                    height="12"
                    rx="2"
                    stroke="#1976D2"
                    stroke-width="2"
                    fill="#E3F2FD"
                  ></rect>
                  <path
                    d="M7 8L5 12L7 16"
                    stroke="#F57C00"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M17 8L19 12L17 16"
                    stroke="#F57C00"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M9 12H15"
                    stroke="#F57C00"
                    stroke-width="2"
                    stroke-linecap="round"
                  ></path>
                  <path
                    d="M7 10H17"
                    stroke="#004D40"
                    stroke-width="2"
                    stroke-linecap="round"
                  ></path>
                  <path
                    d="M7 12H17"
                    stroke="#004D40"
                    stroke-width="2"
                    stroke-linecap="round"
                  ></path>
                  <path
                    d="M7 14H17"
                    stroke="#004D40"
                    stroke-width="2"
                    stroke-linecap="round"
                  ></path>
                  <rect
                    x="10"
                    y="16"
                    width="4"
                    height="1"
                    rx="0.5"
                    fill="#1976D2"
                  ></rect>
                  <rect
                    x="11"
                    y="17"
                    width="2"
                    height="1"
                    fill="#1976D2"
                  ></rect>
                </svg>
              </span>
              Problem Solving
            </div>
            <div className="each-interest">
              <span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 8L5 12L7 16"
                    stroke="#F57C00"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M17 8L19 12L17 16"
                    stroke="#F57C00"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M9 12H15"
                    stroke="#004D40"
                    stroke-width="2"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </span>
              Web Development
            </div>
            <div className="each-interest">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="64"
                  height="64"
                >
                  <rect x="20" y="10" width="8" height="40" fill="#8B4513" />
                  <rect x="18" y="50" width="12" height="4" fill="#8B4513" />
                  <circle cx="30" cy="30" r="12" fill="#FF0000" />
                  <line x1="18" y1="30" x2="42" y2="30" stroke="#FFF" />
                  <line x1="30" y1="18" x2="30" y2="42" stroke="#FFF" />
                </svg>
              </span>
              Cricket
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
