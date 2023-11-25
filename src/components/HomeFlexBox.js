import React from "react";
import "../styles/HomeFlexBox.css";
import { Link } from "react-router-dom";

const HomeFlexBox = () => {
  return (
    <div className="flex-container">
      <Link to="/adopt" className="flex-item">
        <h2>
          <img id="logo1" src="./Adopt_logo.png"></img>
          <span id="Logo_Text"> Adopt</span>
        </h2>
        <p id="paragraphid">
          Welcome to Pet Heaven, where love finds a home.Adopt a furry friend
          and transform both your lives. Our devoted team ensures a semless
          process, connecting you with a loyal companion. Embrace the joy of
          adoption, and let the journey begin.
        </p>
        <br></br>
        <br></br>
        <h id="learnMoreid">Learn more</h>
      </Link>
      <Link to="/release" className="flex-item">
        <h2>
          <img id="logo2" src="./Release_logo.png"></img>
          <span id="Logo_Text"> Release</span>
        </h2>
        <p id="paragraphid">
          If you are considering to release your pet, Pet Heaven is commited to
          ensure a safe and loving environment for pets in transition. Our
          compassionate team works diligently to find suitable homes for pets in
          need.
        </p>
        <br></br>
        <br></br>
        <h id="learnMoreid">Learn more</h>
      </Link>
      <Link to="/about" className="flex-item">
        <h2>
          <img id="logo3" src="./register_logo.jpg"></img>
          <span id="Logo_Text"> Register</span>
        </h2>
        <p id="paragraphid">
          Interesting updates on our Pet Heaven's activities, events, and new
          pets available for adoptions will be updated to our members. Register
          now if you want to be a part of our Pet heaven members!
        </p>
        <br></br>
        <br></br>
        <h id="learnMoreid">Learn more</h>
      </Link>
    </div>
  );
};

export default HomeFlexBox;
