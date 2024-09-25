import React from "react";

const WeaponsSection = () => {
  return (
    <div
      className="section pp-scrollable slide slide-weapons a-slide-typed"
      data-name="weapons"
      id="Weapons"
    >
      <div className="slide-container">
        <div className="container">
          <div className="flex flex-wrap items-center -mxa-15">
            <div className="lg:grow-0 lg:shrink-0 lg:basis-1/2 pxa-15">
              <div className="weapons-content rmb-75 animate-element delay5 fadeInUp">
                <div className="section-title mb-35">
                  <span className="sub-title mb-45 text-2xl">My Weapons</span>
                  <h2 className="slide-title animate-element delay5 fadeInUp text-2xl text-start ps-20">
                    My{" "}
                    <span
                      className="text-typed a-typed a-typed-weapons"
                      data-text="favorite tools"
                    ></span>{" "}
                    which I use every day in my life.
                  </h2>
                </div>
                <p className="animate-element delay6 fadeInUp text-start ps-20">
                  I always loved these softwares and libraries that I use in my
                  work, because I am very good at these. These are the main
                  tools aside my coding skills of my web development career that
                  help me ensure my clients’ satisfaction.
                </p>
              </div>
            </div>
            <div className="lg:grow-0 lg:shrink-0 lg:basis-1/2 pxa-15">
              <div className="weapons-images">
                <div className="weapons-item one animate-element delay11 bounceIn">
                  <img src="assets/images/weapons/github.png" alt="Github" />
                </div>
                <div className="weapons-item two animate-element delay5 fadeInDown">
                  <img src="assets/images/weapons/chatgpt.webp" alt="ChatGPT" />
                </div>
                <div className="weapons-item three animate-element delay6 fadeInUp">
                  <img
                    src="assets/images/weapons/bootstrap.webp"
                    alt="Bootstrap"
                  />
                </div>
                <div className="weapons-item four animate-element delay7 fadeInLeft">
                  <img src="assets/images/weapons/canva.webp" alt="Canva" />
                </div>
                <div className="weapons-item five animate-element delay8 fadeInRight">
                  <img src="assets/images/weapons/google.png" alt="Google" />
                </div>
                <div className="weapons-item six animate-element delay9 fadeInLeft">
                  <img
                    src="assets/images/weapons/tailwind.webp"
                    alt="Tailwind"
                  />
                </div>
                <div className="weapons-item seven animate-element delay10 fadeInUp">
                  <img
                    src="assets/images/weapons/framer-motion.png"
                    alt="Frame Motion"
                  />
                </div>
                <div className="weapons-item eight animate-element delay5 fadeInRight">
                  <img
                    src="assets/images/weapons/animatecss.png"
                    alt="animate.css"
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

export default WeaponsSection;
