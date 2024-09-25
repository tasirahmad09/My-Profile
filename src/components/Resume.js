import React from "react";

const ResumeSection = () => {
  return (
    <div className="section pp-scrollable slide slide-resume slide-light">
      <div className="slide-container">
        <div className="container">
          <div className="flex flex-wrap items-center -mxa-15">
            <div className="lg:grow-0 lg:shrink-0 lg:basis-1/2 pxa-15">
              <div className="educations rmb-55">
                <div className="section-title mb-45 animate-element delay2 fadeInUp">
                  <span className="sub-title mb-45 text-2xl">
                    Qualification
                  </span>
                  <h2 className="slide-title animate-element delay5 fadeInUp">
                    My Education
                  </h2>
                </div>
                <div className="edu-experi-wrap ps-10">
                  <div className="edu-experi-item animate-element delay5 fadeInUp">
                    <span className="years">2020</span>
                    <div className="vacancy-content ps-10">
                      <span className="title">10 + 2</span>
                      <h4 className="subject">Non-Medical</h4>
                      <h6 className="institution">
                        M.G.L Higher Secondary School
                      </h6>
                      <p>
                        Completed 10 + 2 in Non-Medical, focusing on subjects
                        that laid a strong foundation in science and
                        mathematics, preparing for further academic pursuits in
                        technical and engineering fields.
                      </p>
                    </div>
                  </div>
                  <div className="edu-experi-item animate-element delay8 fadeInUp">
                    <span className="years">2021-2024</span>
                    <div className="vacancy-content">
                      <span className="title">B.C.A</span>
                      <h4 className="subject">
                        Bachelor of Computer Application
                      </h4>
                      <h6 className="institution">University of Kashmir</h6>
                      <p>
                        I've done my Bachelor of Computer Application, acquiring
                        comprehensive knowledge in computer science,
                        programming, and software development, while developing
                        practical skills for a career in technology.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:grow-0 lg:shrink-0 lg:basis-1/2 pxa-15">
              <div className="experiences">
                <div className="section-title mb-45 animate-element delay4 fadeInUp">
                  <span className="sub-title mb-45 text-2xl">Experience</span>
                  <h2 className="slide-title animate-element delay5 fadeInUp">
                    My Experience
                  </h2>
                </div>
                <div className="edu-experi-wrap ">
                  <div className="edu-experi-item beahance animate-element delay7 fadeInUp">
                    <span className="years">2021-2024</span>
                    <div className="vacancy-content">
                      <span className="title">Common Websites</span>
                      <h4 className="subject">Freelance Web Developer</h4>
                      <p>
                        As a freelancer, I have built various websites using
                        HTML, CSS, JavaScript and WordPress, focusing on
                        responsive design and user experience to deliver
                        engaging and accessible online platforms for clients.
                      </p>
                    </div>
                  </div>
                  <div className="edu-experi-item dribbble animate-element delay10 fadeInUp">
                    <span className="years">2024</span>
                    <div className="vacancy-content">
                      <span className="title">CodeMites</span>
                      <h4 className="subject">Internship</h4>
                      <p>
                        During my internship, I designed and implemented
                        reusable React components for the Peerzada Estates
                        website, enhancing frontend structure and
                        maintainability. I collaborated on creating a responsive
                        user interface for a seamless user experience across
                        devices and optimized component performance for improved
                        usability and cross-browser compatibility.
                      </p>
                    </div>
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

export default ResumeSection;
