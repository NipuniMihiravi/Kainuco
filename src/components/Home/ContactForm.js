import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2"; // Import SweetAlert2
import "./Page.css"; // Ensure this file is in your project

const ContactForm = () => {
  const form = useRef();

  // EmailJS Configuration Variables
  const SERVICE_ID = "service_g3nw8ap";
  const TEMPLATE_ID = "template_s3itd2d";
  const USER_ID = "VEr6k6ZYDcWoBJgrh"; // Use your actual user ID

  const sendEmail = (e) => {
    e.preventDefault();

    // Show a styled confirmation dialog before sending the email
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to send this message?",
      icon: "question",
      background: "#000", // Black background
      color: "#fff", // White text
      showCancelButton: true,
      confirmButtonColor: "#28a745", // Green confirm button
      cancelButtonColor: "#d33", // Red cancel button
      confirmButtonText: "Yes, send it!",
      cancelButtonText: "No, cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        emailjs
          .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
          .then(() => {
            Swal.fire({
              title: "Success!",
              text: "Your email has been sent successfully.",
              icon: "success",
              background: "#000", // Black background
              color: "#fff", // White text
              confirmButtonColor: "#28a745",
            });

            // Clear the form fields after successful submission
            form.current.reset();
          })
          .catch((error) => {
            Swal.fire({
              title: "Error",
              text: "Failed to send email. Please try again.",
              icon: "error",
              background: "#000",
              color: "#fff",
              confirmButtonColor: "#d33",
            });
          });
      }
    });
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        {/* Left Column - Contact Info */}
        <div className="contact-info">
          <h1>Send Us Your <span className="orange-text">Requirement</span></h1>
          <p>
            Please send us your requirements, and we will respond with a
            comprehensive quotation covering all the necessary details.
          </p>
        </div>

        {/* Right Column - Contact Form */}
        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="Your Name" required />
            <input type="email" name="user_email" placeholder="Your Email" required />
            <input type="tel" name="user_phone" placeholder="Your Phone Number" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
