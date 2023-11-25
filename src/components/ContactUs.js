import React from "react";
import "../styles/ContactUs.css";
import MapComponent from "../components/MapComponent";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <>
      <div className="background_image2"></div>
      <div className="two_columns">
        <div className="column">
          {/* Content for the first column */}
          <h1>Pet Heaven</h1>
          <p>
            If you have any enquiries, feel free to email us at{" "}
            <a href="mailto:enquiries@PetHeaven.com" style={{ color: "blue" }}>
              enquiries@PetHeaven.com
            </a>
            .
          </p>
          <br></br>
          <p>
            Alternatively, you can call us at{" "}
            <a href="tel:+6512345678" style={{ color: "blue" }}>
              +65 12345678{" "}
            </a>
            for a quicker respond.
          </p>
          <br></br>
          <p>
            We are located at{" "}
            <span style={{ fontWeight: "bold" }}>
              50 Sungei Tengah Road, Singapore 699012
            </span>
          </p>
          <br></br>
          <p>
            Please note that adoptions are only available by appointment, and
            no walk-ins are allowed. You can make an appointment{" "}
            <a href="AdoptionForm" style={{ color: 'blue' }}>
              here
            </a>.
          </p>


        </div>

        <div className="column">
          {/* Content for the second column */}
          <MapComponent />
        </div>
      </div>
    </>
  );
};

export default ContactUs;
