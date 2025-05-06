import React from 'react';
import "./Page.css"; // Ensure styles are applied
import { useNavigate } from "react-router-dom";
import Footer from "./Footer"; // Ensure correct path
import ContactForm from "./ContactForm";

const Service = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="service-page">
      <div className="service-wording-heading-con">
              <h2 className="service-wording-heading">
                Transform Your Business with <span className="orange-text2">Our Services</span>
              </h2>

            </div>
        {/* Service Boxes Section */}
        <div className="service-boxes">
          {/* Service 1: Website Development */}
          <div className="service-box">
            <div className="service-icon">
              <img src="/images/image01.webp" alt="Website Development" className="service-icon-img" />
            </div>
            <div className="service-box-heading">
              <h2>Website Development</h2>
            </div>
          </div>

          {/* Service 2: Web Application Development */}
          <div className="service-box">
            <div className="service-icon">
              <img src="/images/logo.png" alt="Web Application Development" className="service-icon-img" />
            </div>
            <div className="service-box-heading">
              <h2>Web Application Development</h2>
            </div>
          </div>

          {/* Service 3: Portfolio Creation */}
          <div className="service-box">
            <div className="service-icon">
              <img src="/images/portfolio.png" alt="Portfolio Creation" className="service-icon-img" />
            </div>
            <div className="service-box-heading">
              <h2>Portfolio Creation</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
