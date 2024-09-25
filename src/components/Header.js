import React from "react";

const Header = () => {
  return (
    <header id="header" className="header">
      <div className="container-fluid">
        <div className="brand">
          <a href="#About" className="brand-name">
            <b>About</b> Me
          </a>
        </div>
        <div className="lets-chat">
          <span>Let's Chat</span>
          <a href="https://wa.me/7889470259?text=Hey" target="_blank">
            <button>
              <i className="fab fa-rocketchat" style={{ color: "#1D2043" }}></i>
            </button>
          </a>
        </div>
        <button className="nav-toggle-btn a-nav-toggle">
          <span className="hamburger">
            <span className="top-bun"></span>
            <span className="meat"></span>
            <span className="bottom-bun"></span>
          </span>
        </button>
        <div className="hide-menu a-nav-toggle"></div>
        <div className="menu">
          <div className="menu-main mt-100" id="accordion">
            <ul id="menuMain">
              <li data-menuanchor="About" className="active">
                <a href="#About">About</a>
              </li>
              <li data-menuanchor="Services">
                <a href="#Services">Services</a>
              </li>
              <li data-menuanchor="Skills">
                <a href="#Skills">Skills</a>
              </li>
              <li data-menuanchor="Resume">
                <a href="#Resume">Resume</a>
              </li>
              <li data-menuanchor="Weapons">
                <a href="#Weapons">Weapons</a>
              </li>
              <li data-menuanchor="Contact">
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="menu-ornament"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
