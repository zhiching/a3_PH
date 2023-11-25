import React from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaInstagram
} from "react-icons/fa";
import "../styles/Footer.css"; // Assuming you have a separate CSS file for styling

const Footer = () => {
  return (
    <footer>
      <div className="footer-items">
        <div className="footer-column">
          <h2>Contact Us</h2>
          <p>
            <FaMapMarkerAlt /> 50 Sungei Tengah Road, Singapore 699012
          </p>
          <p>
            <FaPhone />
            <a href="tel:+6512345678"> +65 12345678</a>
          </p>
          <p>
            <FaEnvelope />
            <a href="mailto:enquiries@PetHeaven.com">
              {" "}
              enquiries@PetHeaven.com
            </a>
          </p>
        </div>
        <div className="footer-column">
          <h2>Social Media</h2>
          <p>
            <FaFacebook /> <a href="https://www.facebook.com">Facebook</a>
          </p>
          <p>
            <FaInstagram />
            <a href="https://www.instagram.com"> Instagram</a>
          </p>
        </div>
      </div>
      <p id="copy_right">&copy; 2023 Pet Heaven. All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
