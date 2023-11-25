import React from "react";
import { Link } from "react-router-dom";

const Lucky = () => {
  const linkStyle = {
    color: "blue", // Change the color to your desired color
    textDecoration: "underline", // Add underline for better visual indication
  };
  return (
    <>
      <div className="imageContainer">
        <div className="image">
          <img src="/Dog4_Shiba_inu.jpg" alt="Shiba inu" />
        </div>
        <div className="description">
          <h2 id="header2">Lucky</h2>
          <p>
            Name: Lucky<br></br>Gender: Male
            <br></br>Colour: Ginger white<br></br>Age: 2 years (as of Nov 2023)
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

export default Lucky;
