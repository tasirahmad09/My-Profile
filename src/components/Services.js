import React from "react";

const ServicesSection = () => {
  return (
    <div
      className="section pp-scrollable slide slide-services slide-light slide-services a-slide-typed"
      data-name="services"
    >
      <div className="slide-container">
        <div className="container">
          <div className="flex flex-wrap items-center -mxa-15">
            <div className="lg:grow-0 lg:shrink-0 basisa-58 pxa-15">
              <div className="service-image animate-element delay4 fadeInUp">
                <span className="sub-title text-2xl mb-75 ms-20">Services</span>
                <div className="service-inner-images">
                  <img src="assets/images/services/me-3.png" alt="Service" />
                  <img
                    className="shape-one animate-element delay6 bounceIn"
                    src="assets/images/services/shape-one.png"
                    alt="shape"
                  />
                  <img
                    className="shape-two animate-element delay8 bounceIn"
                    src="assets/images/services/shape-two.png"
                    alt="shape"
                  />
                </div>
              </div>
            </div>
            <div className="lg:grow-0 lg:shrink-0 basisa-41 pxa-15 pe-20">
              <div className="service-content pt-100 rpt-55 animate-element delay5 fadeInUp">
                <div className="section-title mb-25">
                  <h2 className="text-2xl slide-title animate-element delay5 fadeInUp text-start">
                    What{" "}
                    <span
                      className="text-typed a-typed a-typed-services"
                      data-text="Services"
                    ></span>{" "}
                    I provide to my clients in here.
                  </h2>
                </div>
                <p className="animate-element delay6 fadeInUp text-start">
                  I always want to be able to meet the goals of my clients, I
                  value my services as a web developer through my work. You may
                  like my <b>services.</b>
                </p>
                <div className="our-services animate-element delay8 fadeInUp">
                  <div className="service-item">
                    <div className="icon">
                      <img
                        src="assets/images/services/service-icon1.png"
                        alt="Icon"
                      />
                    </div>
                    <h4>Web Design</h4>
                  </div>
                  <div className="service-item">
                    <div className="icon">
                      <img
                        src="assets/images/services/service-icon2.png"
                        alt="Icon"
                      />
                    </div>
                    <h4>UI/UX Design</h4>
                  </div>
                  <div className="service-item">
                    <div className="icon">
                      <img
                        src="assets/images/services/service-icon3.png"
                        alt="Icon"
                      />
                    </div>
                    <h4>Performance Optimization</h4>
                  </div>
                  <div className="service-item">
                    <div className="icon">
                      <img
                        src="assets/images/services/service-icon4.png"
                        alt="Icon"
                      />
                    </div>
                    <h4>CMS Implementation</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
