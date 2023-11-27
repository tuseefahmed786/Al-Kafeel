import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="home d-flex">
      <div className="hero-heading">
      <div className="download-npm d-flex justify-content-center">
        <div className="overflow">
        <p>npm i @tuseefahmed110/al-kafeel-ui</p>
        </div>
      </div>
        <h1>Work's with the creative UI component Library React JS.</h1>
    <div className="home-button d-flex justify-content-center">
      <Link to="components/avatar">Component's 🚀</Link>
    </div>
      </div>
    </div>
  );
}

export default Home;
