import React from "react";

const ProgressNav = () => {
  return (
    <div className="container-fluid">
      <div className="progress-nav">
        <ul id="menu">
          <li data-menuanchor="About" className="active"></li>
          <li data-menuanchor="Services"></li>
          <li data-menuanchor="Skills"></li>
          <li data-menuanchor="Resume"></li>
          <li data-menuanchor="Weapons"></li>
          <li data-menuanchor="Contact"></li>
        </ul>
      </div>
    </div>
  );
};

export default ProgressNav;
