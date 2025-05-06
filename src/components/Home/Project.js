import React, { useState, useEffect } from "react";
import "./Page.css";
import WhatsAppButton from './WhatsAppButton';

const Service = () => {
  const [activeForm, setActiveForm] = useState("WEB SITE");
  const [activeGallery, setActiveGallery] = useState("WEB SITE");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const galleryData = {
    "WEB SITE": {
      "Cocoloco Gardens Resort": [
        { id: 1, img: "/Images/loco.webp", pageLink: "https://cocolocogardens.com" },
      ],
      "Dhive Interiors Designer": [
        { id: 2, img: "/Images/Dhive.jpg", pageLink: "https://www.dhiveinteriors.com" },
      ],
    },
    "WEB APPLICATION": {
      "Cocoloco Gardens Resort": [
        { id: 3, img: "/Images/inventory.png", pageLink: "https://inventory-management-frontend-fwsf.onrender.com" },
      ],
    },
  };

  return (
    <div>
      <div className="toggle-container">
        <div className="service-wording-heading-con">
          <h2 className="toggle-wording-heading">
            Explore <span className="orange-text">OUR PROJECTS</span>
          </h2>

          <div className="gallery-toggle-container">
            <div className="gallery-toggle-buttons">
              {Object.keys(galleryData).map((category) => (
                <button
                  key={category}
                  className={`gallery-toggle-button ${activeGallery === category ? "active" : ""}`}
                  onClick={() => {
                    setActiveGallery(category);
                    setActiveForm(category);
                    setSelectedImage(null);
                    setCurrentIndex(0);
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Display Subcategories and their Items */}
      {activeGallery && (
        <div className="gallery-images">
          <div className="subcategory-items">
            {Object.keys(galleryData[activeGallery]).map((subcategory) =>
              galleryData[activeGallery][subcategory].map((item) => (
                <div key={item.id} className="gallery-item">
                  <a
                    href={item.pageLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gallery-button"
                  >
                    <img
                      src={item.img}
                      alt={subcategory}
                      className="gallery-image"
                    />
                    <div className="carousel-arrows">
                      <p className="view-more-text">View Site →</p>
                    </div>
                  </a>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      <WhatsAppButton />
    </div>
  );
};

export default Service;
