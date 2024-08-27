import React from "react";
import "./Contact.css";
import Navbar from "./Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />

      <div className="contact-page">
        <div className="contact-container">
          <h4>
            Contact
            <span className="line">
              <hr />
            </span>
          </h4>
          <div className="contact">
            <div className="basic-info">
              <div class="icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C7.03 2 3 6.03 3 11C3 16 12 22 12 22C12 22 21 16 21 11C21 6.03 16.97 2 12 2ZM12 15C10.34 15 9 13.66 9 12C9 10.34 10.34 9 12 9C13.66 9 15 10.34 15 12C15 13.66 13.66 15 12 15Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
              <div class="content">
                <div class="content-heading">My Address</div>
                <div class="main-content">
                  <p>Swatanter nagar,</p>
                  <p>Narela, Delhi-</p> <p>110040</p>
                </div>
              </div>
            </div>

            <div className="basic-info">
              <div class="icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM7.68 9.68c-.39-.39-.39-1.02 0-1.41l1.42-1.42c.39-.39 1.02-.39 1.41 0l1.42 1.42c.39.39.39 1.02 0 1.41l-1.42 1.42c-.39.39-1.02.39-1.41 0L7.68 9.68zm8.64 8.64c-.39.39-1.02.39-1.41 0l-1.42-1.42c-.39-.39-.39-1.02 0-1.41l1.42-1.42c.39-.39 1.02-.39 1.41 0l1.42 1.42c.39.39.39 1.02 0 1.41l-1.42 1.42zm-4.16-4.16c-.39.39-1.02.39-1.41 0l-1.42-1.42c-.39-.39-.39-1.02 0-1.41l1.42-1.42c.39-.39 1.02-.39 1.41 0l1.42 1.42c.39.39.39 1.02 0 1.41l-1.42 1.42zm4.16-4.16c-.39.39-1.02.39-1.41 0l-1.42-1.42c-.39-.39-.39-1.02 0-1.41l1.42-1.42c.39-.39 1.02-.39 1.41 0l1.42 1.42c.39.39.39 1.02 0 1.41l-1.42 1.42z"
                    fill="#FFFFFF"
                  ></path>
                </svg>
              </div>
              <div class="content">
                <div class="content-heading">Social Profiles</div>
                <div class="main-content">
                  <a
                    href="https://github.com/jshobhit11"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 496 512"
                      class="icons-size"
                      height="30"
                      width="30"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shobhit-jain-a33593136/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 448 512"
                      class="icons-size"
                      height="30"
                      width="30"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                    </svg>
                  </a>
                  <a
                    href="mailto: jshobhit3020@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 576 512"
                      class="icons-size"
                      height="30"
                      width="30"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M160 448c-25.6 0-51.2-22.4-64-32-64-44.8-83.2-60.8-96-70.4V480c0 17.67 14.33 32 32 32h256c17.67 0 32-14.33 32-32V345.6c-12.8 9.6-32 25.6-96 70.4-12.8 9.6-38.4 32-64 32zm128-192H32c-17.67 0-32 14.33-32 32v16c25.6 19.2 22.4 19.2 115.2 86.4 9.6 6.4 28.8 25.6 44.8 25.6s35.2-19.2 44.8-22.4c92.8-67.2 89.6-67.2 115.2-86.4V288c0-17.67-14.33-32-32-32zm256-96H224c-17.67 0-32 14.33-32 32v32h96c33.21 0 60.59 25.42 63.71 57.82l.29-.22V416h192c17.67 0 32-14.33 32-32V192c0-17.67-14.33-32-32-32zm-32 128h-64v-64h64v64zm-352-96c0-35.29 28.71-64 64-64h224V32c0-17.67-14.33-32-32-32H96C78.33 0 64 14.33 64 32v192h96v-32z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div class="basic-info">
              <div class="icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 6H3C2.45 6 2 6.45 2 7V17C2 17.55 2.45 18 3 18H21C21.55 18 22 17.55 22 17V7C22 6.45 21.55 6 21 6ZM12 13L3 7L21 7L12 13Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
              <div class="content">
                <div class="content-heading">Email</div>
                <div class="main-content break-mail">
                  jshobhit3020@gmail.com
                </div>
              </div>
            </div>

            <div class="basic-info">
              <div class="icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.62 10.79c.12.46.38.86.73 1.16l2.34 2.34c.3.3.7.56 1.16.73l2.57-.65c.71-.18 1.43.13 1.84.71l1.47 1.47c.41.41.52 1.13.32 1.69l-1.04 2.76c-.33.87-1.18 1.37-2.07 1.2l-3.31-.66c-.83-.17-1.68-.54-2.38-1.14L4.7 13.43c-.69-.69-1.06-1.55-1.2-2.38L2.84 7.76c-.18-.89.33-1.74 1.2-2.07l2.76-1.04c.56-.2 1.28-.09 1.69.32l1.47 1.47c.58.41.89 1.13.71 1.84l-.65 2.57z"
                    fill="#FFFFFF"
                  ></path>
                </svg>
              </div>
              <div class="content">
                <div class="content-heading">Contact</div>
                <div class="main-content">+91 9319940204</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
