import React from "react";
import "./Page.css"; // Ensure you have this CSS file

const Footer = () => {
  return (
    <footer className="footer">
      {/* Left Column - Contact Details */}
      <div className="footer-column2">
              <img src="/Images/logo.png" alt="Logo" className="footer-logo2" />
              <div className="footer-bar">© 2025 Kainuco. All rights reserved.</div>
            </div>
      <div className="footer-column">
        <h3 className="footer-heading">Reach Out</h3>
        <ul className="contact-info2">
          <li>
            <span className="label">Email:</span>
            <span className="content"> kainucosolutions@gmail.com</span>
          </li>
          <li>
            <span className="label">Contact No:</span>
            <span className="content"> +94-710654246</span>
          </li>
          <li>
            <span className="label">Address:</span>
            <span className="content"> 202/54, Isurupura Mawatha, Kesbawe</span>
          </li>

          <li className="social-links">
            <span className="label">Follow Us:</span>
            <div className="social-icons">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={`${process.env.PUBLIC_URL}/Images/facebook.png`} alt="Facebook" />
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={`${process.env.PUBLIC_URL}/Images/insta.png`} alt="Instagram" />
              </a>
            </div>
          </li>
        </ul>
      </div>

      {/* Right Column - Logo & Copyright */}

    </footer>
  );
};

export default Footer;
