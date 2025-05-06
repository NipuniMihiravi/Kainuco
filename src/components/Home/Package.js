import React from "react";
import "./Page.css"; // Link to the CSS for styling

const Packages = () => {
  const packageData = [
    {
      heading: "WEB SITE DEVELOPMENT PACKAGE",
      subheading: "RS.40,000/-",
      list: [
        "3 pages including the Home Page",
        "Additional pages cost Rs. 3,000 each",
        "Mobile responsive design",
        "Email and Social media facility",
        "User-friendly and attractive layout",
        "Free hosting included",
        "No service charges for changes to the existing application during the first year",
        "Renewal cost: Rs. 15,000 per year"
      ],
    },
    {
      heading: "Web Application Development Package",
      subheading: "Prices are subject to change",
      list: [
              "Inventory Management System",
              "Reservation Management System",
              "HR Management System",
              "Email facility",
              "User-friendly and attractive layout",
              "Free hosting included",
              "No service charges for changes to the existing application during the first year",
            ],

    },
    {
      heading: "Portfolio Development Package",
      subheading: "RS.20,000/-",
       list: [
              "Single Page Content",
              "Additional pages cost Rs. 2,500 each",
              "Mobile responsive design",
              "Email and Social media facility",
              "User-friendly and attractive layout",
              "Free hosting included",
              "No service charges for changes to the existing application during the first year",
              "Renewal cost: Rs. 10,000 per year"
            ],
    },
  ];

  return (
  <div className="package-container">
  <div className="service-wording-heading-con">
                    <h2 className="service-wording-heading">
                      Get Info About <span className="orange-text2">Our Packages</span>
                    </h2>

                  </div>
    <div className="package-container">

      {packageData.map((pkg, index) => (
        <div key={index} className="package-box">
         <div className="package-header">
           <h2 className="package-heading">{pkg.heading}</h2>
         </div>
         <div className="package-header1">
                    <h4 className="package-subheading">{pkg.subheading}</h4>
                  </div>

          <ul className="package-list">
            {pkg.list.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Packages;
