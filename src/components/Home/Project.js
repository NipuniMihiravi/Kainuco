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
      "Wasala Tours": [
        { id: 3, img: "/Images/login2.png", pageLink: "https://www.wasalatours.com" },
      ],
      "Kings Basketball": [
        { id: 4, img: "/Images/Kings.png", pageLink: "https://www.kingsbasketballs.com" },
      ],
    },
    "WEB APPLICATION": {
      "Payment Management System": [
        {
          id: 3,
          img: "/Images/inventory.png",
          pageLinks: [
            "https://gym-invoices-front.onrender.com",
            "https://gym-invoice-back.onrender.com"
          ]
        },
      ],
    }
  };

  // Function to handle click for one or multiple links
  const handleOpenLinks = (item) => {
    if (item.pageLinks && Array.isArray(item.pageLinks)) {
      item.pageLinks.forEach(link => window.open(link, "_blank"));
    } else if (item.pageLink) {
      window.open(item.pageLink, "_blank");
    }
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
                  <div
                    className="gallery-button"
                    onClick={() => handleOpenLinks(item)}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src={item.img}
                      alt={subcategory}
                      className="gallery-image"
                    />
                    <div className="view-point">
                      <button
                        className="view-site-button"
                        onClick={(e) => {
                          e.stopPropagation(); // prevent triggering image click
                          handleOpenLinks(item);
                        }}
                      >
                        View Site
                      </button>
                    </div>
                  </div>
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
