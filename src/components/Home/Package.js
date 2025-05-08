import React from "react";
import "./Page.css"; // Link to the CSS for styling

const Packages = () => {
  const packageData = [
    {
      heading: "WEB SITE DEVELOPMENT PACKAGE",
      subheading: "Send your requirements, and we'll send you a quotation",
      list: [
        "Cost varies depending on the number of pages.",
        "Mobile responsive design",
        "Email and Social media facility",
        "2 Free Email Accounts",
        "Free SSL Certificate",
        "Discounts and gift cards",
        "User-friendly and attractive layout",
        "Free hosting included",
        "Free Domain",
        "No service charges for changes to the existing application during the first year",
        "Renewal costs apply after the first year"
      ],
    },
    {
      heading: "Web Application Development Package",
      subheading: "Send your requirements, and we'll send you a quotation",
      list: [
              "Inventory Management System",
              "Reservation Management System",
              "HR Management System",
              "Email facility",
              "User-friendly and attractive layout",
              "Free Domain",
              "Monthly backups",
              "No service charges for changes to the existing application during the first year",
              "Renewal costs apply after the first year",
              "Basic customer support"
            ],

    },
    {
      heading: "Portfolio Development Package",
      subheading: "Send your requirements, and we'll send you a quotation",
       list: [
              "Cost varies depending on the number of pages.",
              "Mobile responsive design",
              "Email and Social media facility",
              "User-friendly and attractive layout",
              "Free hosting included",
              "No service charges for changes to the existing application during the first year",
              "Renewal costs apply after the first year"
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
