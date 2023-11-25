import React from "react";
import { Link } from "react-router-dom";

const Bond = () => {
  const linkStyle = {
    color: "blue", // Change the color to your desired color
    textDecoration: "underline", // Add underline for better visual indication
  };
  return (
    <>
      <div className="imageContainer">
        <div className="image">
          <img src="/Bond_2.jpg" alt="Bond" />
        </div>
        <div className="description">
          <h2 id="header2">Hisoka</h2>
          <p>
            Name: Bond<br></br>Gender: Male
            <br></br>Colour: Snow white<br></br>Age: 2 years (as of Nov 2023)
          </p>
          <p>
            To ensure their safety and welfare, interested parties are required
            to fully mesh their windows to prevent the likelihood of “high rise
            syndrome”. This happens when cats get gravely injured or lose their
            lives after a fall from height.
          </p>
          <p></p>
          <p></p>

          <p>
            Adoption by{" "}
            <Link to="/AdoptionForm" style={linkStyle}>
              appointment{" "}
            </Link>
            only.
          </p>
        </div>
      </div>
    </>
  );
};

export default Bond;
