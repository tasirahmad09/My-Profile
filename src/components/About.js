import React from "react";
import "../index.css";

const AboutSection = () => {
  return (
    <div
      className="section pp-scrollable slide slide-about a-slide-typed"
      data-name="about"
    >
      <div className="slide-container">
        <div className="container">
          <div className="number-email-cv">
            <ul className="number-email">
              <li>
                Call me <a href="callto:+917889470259">(+91) 7889470259</a>
              </li>
              <li>
                <a href="mailto:tasirahmad09@gmail.com">
                  tasirahmad09@gmail.com
                </a>
              </li>
            </ul>
            <a href="#Contact" className="download-cv">
              Download CV <i className="fas fa-download"></i>
            </a>
          </div>
          <div className="flex flex-wrap items-center -mxa-15">
            <div className="lg:grow-0 lg:shrink-0 basisa-41 pxa-15">
              <div className="about-content pt-100 rpt-0 animate-element delay5 fadeInUp">
                <span className="sub-title mb-10 animate-element delay3 fadeInUp text-2xl ms-20">
                  About Me
                </span>
                <h1 className="text-7xl  pe-20 ps-20 text-start slide-title animate-element delay5 fadeInUp">
                  Hi,
                  <br /> I’m{" "}
                  <span
                    className="text-typed a-typed a-typed-about"
                    data-text="Tasir"
                  ></span>
                </h1>
                <h3 className="text-start ps-20 pt-2 animate-element delay7 fadeInUp">
                  Web Developer
                </h3>
                <p className="ps-20 text-start animate-element delay8 fadeInUp">
                  Hey are looking for Web Developer to build your{" "}
                  <b>Brand and grow your business?</b> let's shake hands.
                </p>
                <a
                  href="#Contact"
                  className="theme-btn mt-45 rmt-25 animate-element delay9 fadeInUp ms-20"
                >
                  hire me <i className="fas fa-long-arrow-alt-right"></i>
                </a>
                <div className="social-style-one mt-55 rmt-35 animate-element delay10 fadeInUp">
                  <a
                    href="https://www.facebook.com/rashie.aayan.9"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" target="_blank">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/tasir__ahmad/"
                    target="_blank"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:grow-0 lg:shrink-0 basisa-58 pxa-15">
              <div className="about-image pt-100 rpt-50 lg:text-right">
                <div className="about-inner-images">
                  <img
                    className="animate-element delay7 fadeInUp w-90"
                    src="assets/images/about/me-1.png"
                    alt="About"
                  />
                  <img
                    className="shape-one animate-element delay10 bounceIn"
                    src="assets/images/about/shape-one.png"
                    alt="Shape"
                  />
                  <img
                    className="shape-two animate-element delay11 bounceIn"
                    src="assets/images/about/shape-two.png"
                    alt="Shape"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
