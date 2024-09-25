import React from "react";

const SkillsSection = () => {
  return (
    <div
      className="section pp-scrollable slide slide-skills a-slide-typed"
      data-name="skills"
    >
      <div className="slide-container">
        <div className="container">
          <div className="flex flex-wrap items-center -mxa-15">
            <div className="lg:grow-0 lg:shrink-0 basisa-41 pxa-15">
              <div className="skill-content animate-element delay5 fadeInUp">
                <div className="section-title mb-25">
                  <span className="sub-title mb-45 text-2xl">Skills</span>
                  <h2 className="text-2xl slide-title animate-element delay5 fadeInUp">
                    As a Web Developer I am good at few{" "}
                    <span
                      className="text-typed a-typed a-typed-skills"
                      data-text="skills."
                    ></span>
                  </h2>
                </div>
                <p className="animate-element delay6 fadeInUp">
                  All developers have good skills to ensure their clients are
                  satisfied. As a web developer, I am also specialized in a few{" "}
                  <b>skills.</b>
                </p>
                <div className="bar-list a-progressbar pt-5 animate-element delay9 fadeInUp">
                  <div className="bar-item">
                    <div className="flex flex-wrap -mxa-15">
                      <div className="basis-0 grow bar-item-title pxa-15">
                        HTML/CSS/Scss
                      </div>
                      <div className="grow-0 shrink-0 basis-auto w-auto text-right bar-item-value pxa-15">
                        85%
                      </div>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar flex flex-col justify-center"
                        role="progressbar"
                        aria-valuenow="85"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className="bar-item">
                    <div className="flex flex-wrap -mxa-15">
                      <div className="basis-0 grow bar-item-title pxa-15">
                        JavaScript
                      </div>
                      <div className="grow-0 shrink-0 basis-auto w-auto text-right bar-item-value pxa-15">
                        65%
                      </div>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="65"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className="bar-item">
                    <div className="flex flex-wrap -mxa-15">
                      <div className="basis-0 grow bar-item-title pxa-15">
                        Bootstrap/Tailwind
                      </div>
                      <div className="grow-0 shrink-0 basis-auto w-auto text-right bar-item-value pxa-15">
                        75%
                      </div>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className="bar-item">
                    <div className="flex flex-wrap -mxa-15">
                      <div className="basis-0 grow bar-item-title pxa-15">
                        React JS
                      </div>
                      <div className="grow-0 shrink-0 basis-auto w-auto text-right bar-item-value pxa-15">
                        60%
                      </div>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="60"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:grow-0 lg:shrink-0 basisa-58 pxa-15 w-full">
              <div className="skill-image pt-55 lg:text-right animate-element delay4 fadeInUp">
                <div className="skill-images-inner">
                  <img src="assets/images/skills/me-4.png" alt="Skills" />
                  <img
                    className="shape-one animate-element delay6 bounceIn me-80"
                    src="assets/images/skills/shape-one.png"
                    alt="shape"
                  />
                  <img
                    className="shape-two animate-element delay8 bounceIn me-80"
                    src="assets/images/skills/shape-two.png"
                    alt="shape"
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

export default SkillsSection;
