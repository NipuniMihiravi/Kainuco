import React, { useRef, useEffect } from 'react';
import './Page.css'; // Assuming you will add the corresponding CSS here
import backgroundImage from "./purple-black.webp";

const About = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // Add the visible class
        } else {
          entry.target.classList.remove('visible'); // Remove it when out of view
        }
      },
      { threshold: 0.3 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
    };
  }, []);

  return (
   <div className="two-column-layout">
     <div className="wording">
       <h1>WHO WE ARE</h1>
     </div>
     <div className="wording2">
       <p>"With years of experience in the IT industry, we are a leading provider of innovative solutions that empower businesses to achieve greater efficiency, scalability, and success. Backed by deep industry knowledge and technological expertise, we pride ourselves on being friendly, flexible, and highly adaptable to your unique requirements. Our customer-centric approach ensures a clear understanding of industrial needs, enabling us to deliver impactful solutions that help organizations thrive in an ever-evolving digital world."</p>
     </div>
   </div>

  );
};

export default About;
