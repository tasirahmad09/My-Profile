import React from "react";

const ContactSection = () => {
  return (
    <div className="section pp-scrollable slide slide-contact slide-light">
      <div className="slide-container">
        <div className="container">
          <div className="footer-contact text-center mb-35">
            <div className="section-title mb-30 animate-element delay8 fadeInUp">
              <h2>Stay Connected</h2>
            </div>
            <span className="country list-inline-item animate-element delay9 fadeInUp">
              Kashmir
            </span>
            <h3 className="animate-element delay6 fadeInUp">
              <a href="mailto:hello_niharik@gmail.com">
                tasirahmad09@gmail.com
              </a>
            </h3>
            <a
              href="callto:+917889470259"
              className="number list-inline-item animate-element delay10 fadeInUp"
            >
              (+91)7889470259
            </a>
            <div className="social-style-two mt-25 animate-element delay11 fadeInUp">
              <a href="https://github.com/tasirahmad09" target="_blank">
                <img src="assets/images/contact/github.png" alt="Social" />
              </a>
              <a href="https://www.facebook.com/rashie.aayan.9" target="_blank">
                <img src="assets/images/contact/fb.png" alt="Social" />
              </a>
              <a href="https://www.instagram.com/tasir__ahmad/" target="_blank">
                <img
                  src="assets/images/contact/social-instagram.png"
                  alt="Social"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom-girl animate-element delay12 zoomIn">
          <img
            src="assets/images/contact/footer-bottom-girl.png"
            alt="footer girl"
          />
        </div>
        <div className="footer-bottom-shape">
          <img
            src="assets/images/contact/footer-bottom-shape.png"
            alt="Shape"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
