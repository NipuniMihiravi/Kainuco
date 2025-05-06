import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter, Route, Routes, Navigate, useLocation } from "react-router-dom";

import ScrollToTop from './components/Home/ScrollToTop';

import About from "./components/Home/About";
import Service from "./components/Home/Service";
import Project from "./components/Home/Project";
import ContactForm from "./components/Home/ContactForm";
import Footer from "./components/Home/Footer";
import CoverImage from "./components/Home/CoverImage";


import Package from "./components/Home/Package";


import WhatsAppButton from './components/Home/WhatsAppButton';
import "./App.css";

const App = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/home";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1024);

  // Refs to sections
  const coverImageRef = useRef(null);
    const serviceRef = useRef(null);
    const aboutRef = useRef(null);
    const projectRef = useRef(null);
    const packageRef = useRef(null);
    const contactRef = useRef(null);
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth > 1024);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (navbar) {
        if (window.scrollY > 0) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Apply effect on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <>
      {isHomePage && (
        <div>
          {!isLargeScreen && (
            <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              ☰
            </button>
          )}

          <nav className={`vertical-navbar ${isMenuOpen || isLargeScreen ? "open" : ""}`}>
              <div
                className="logos-container"
                onClick={() => scrollToSection(coverImageRef)}
                style={{ cursor: "pointer" }} // Optional: indicates clickability
              >
                <img src="/Images/logo.png" alt="Logo" className="logos" />
              </div>

            <ul className="nav-links">

               <li><button onClick={() => scrollToSection(serviceRef)}>SERVICES</button></li>
               <li><button onClick={() => scrollToSection(projectRef)}>PROJECTS</button></li>
              <li><button onClick={() => scrollToSection(packageRef)}>PACKAGES</button></li>
              <li><button onClick={() => scrollToSection(contactRef)}>CONTACT</button></li>
            </ul>
          </nav>

          <main className={`main-content ${isMenuOpen && !isLargeScreen ? "shifted" : ""}`}>
           <div ref={coverImageRef}><CoverImage /></div>
            <div ref={serviceRef}><Service /></div>
                        <div ref={aboutRef}><About /></div>
                        <div ref={projectRef}><Project /></div>
                        <div ref={packageRef}><Package /></div>
                        <div ref={contactRef}><ContactForm /></div>
                        <WhatsAppButton />
                        <Footer />
          </main>
        </div>
      )}

      <Routes>

 <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<Navigate to="/home" />} />

      </Routes>
    </>
  );
};

const AppWrapper = () => (
  <BrowserRouter>
  <ScrollToTop />
    <App />
  </BrowserRouter>
);

export default AppWrapper;
