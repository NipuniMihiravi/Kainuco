import React from 'react';
import { useNavigate } from "react-router-dom";
import './Page.css';
import logo from "../../assets/logo.png";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="first-image">


      {/* Background Video */}
      <video
        className="content-video"
        src="/Images/vedio.MOV"
        autoPlay
        muted
        loop
        playsInline
      >
        Your browser does not support the video tag.
      </video>

      {/* Text on Video */}
      <div className="video-text-overlay">
        <h2 className="wording-heading">
          Implementing an Innovative <span className="orange-text">Software</span> Solution
        </h2>
        <p>Innovative Designs | Modern Architecture | Expert Consultation</p>
      </div>
    </div>
  );
};

export default Footer;
