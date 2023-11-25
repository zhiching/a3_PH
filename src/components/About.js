import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import "../styles/About.css";

// Set app element for the modal (should be done once in your app)
Modal.setAppElement("#root");

const SlidingSection = ({ title, content, delay }) => {
  const [isVisible, setIsVisible] = useState(false);

  const slideAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0)" : "translateX(100%)",
    config: { mass: 1, tension: 170, friction: 26 },
    delay: isVisible ? 0 : window.scrollY > 0 ? window.scrollY / 10 : 0 // New delay logic
  });

  const handleScroll = () => {
    const section = document.getElementById("sliding-section");
    if (section) {
      const rect = section.getBoundingClientRect();
      setIsVisible(rect.top <= window.innerHeight * delay);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <animated.div id="sliding-section" style={slideAnimation}>
      <div className="flex-items">
        <h2 id="header2">{title}</h2>
        <p id="paragraph">{content}</p>
      </div>
    </animated.div>
  );
};

const CollapsibleItem = ({ title, content, defaultOpen }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(defaultOpen);
  }, [defaultOpen]);

  const toggleCollapse = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`collapsible-item ${isActive ? "active" : ""}`}>
      <h3 onClick={toggleCollapse}>{title}</h3>
      {isActive && <p>{content}</p>}
    </div>
  );
};

const About = () => {
  const [email, setEmail] = useState(""); // State to hold the entered email
  const [error, setError] = useState(null);
  const [modalEmail, setModalEmail] = useState(""); // State to hold the email displayed in the modal
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false); // State for modal

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setError(null); // Clear any previous errors when the user types
  };
  const isEmailValid = () => {
    // Simple email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailSubmit = (event) => {
    event.preventDefault();
    if (isEmailValid()) {
      console.log("Email submitted:", email);
      setError(null); // Clear any previous errors
      setIsSubmitted(true); // Set the flag to show the success message
      setModalEmail(email); // Set the email to be displayed in the modal
      setModalIsOpen(true); // Open the modal on successful submission
      setEmail(""); // Clear the input after submission
    } else {
      setError("Please enter a valid email address");
    }
  };

  const closeModal = () => {
    setModalIsOpen(false); // Close the modal
  };
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="background_image"></div>
      <div className="About_us">
        <SlidingSection
          title="About us"
          content="Pet Heaven is a compassionate charity society dedicated to the well-being of abandoned pets. At Pet Heaven, we strive to create a haven for dogs and cats whose primary owners can no longer care for them. Our goal is to find these animals in caring homes so they can have another opportunity for an enjoyable life."
          delay={0.8}
        />
        <SlidingSection
          title="Our Mission"
          content="Pet Heaven works with a clear mission in mind - to issue a nurturing environment for abandoned pets and facilitate the adoption process. We believe that all animals deserve a loving and caring home. For that, our faithful staff works tirelessly to make it come true."
          delay={0.1}
        />
      </div>
      <div className="section">
        <h2 id="header2">
          Our Services<img id="paws_image" src="./paws_image.jpg"></img>
        </h2>
        <div className="collapsible-list">
          <CollapsibleItem
            title="Adoption Services"
            content="Our website provides a list of current pets available for adoption. Each profile provides valuable information about the pet's personality, background, and needs."
            defaultOpen={true}
          />
          <CollapsibleItem
            title="Supporter Registration"
            content="Become a valued member and supporter of Pet Heaven by registering on our platform. You will receive updates on our activities, success stories, and opportunities to contribute to the well-being of our furry friends."
          />
          <CollapsibleItem
            title="Release Your Pet"
            content="If you are having a difficult situation, you can submit requests for releasing your pets to Pet Heaven. Rest assured that we handle each case with care and empathy."
          />
          <CollapsibleItem
            title="Adoption Requests"
            content="If you are ready to adopt a specific pet, fill up our online adoption request form. Our team will review your application, conduct interviews, and work diligently to match you with the perfect companion."
          />
        </div>
      </div>
      <div className="Member_Registration">
        <h2 id="supporter_header">
          Join us now as a member and be a supporter of the society and you will
          get the latest news and updates from us!
        </h2>

        <form onSubmit={handleEmailSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
          <button type="submit">Submit</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {isSubmitted && (
          // Display the modal if submission is successful
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={{
              content: {
                width: "50%", // Adjust the width as needed
                height: "30%",
                margin: "auto"
              }
            }}
          >
            <h2>Email Sent!</h2>
            <p>
              Thank you for joining! An email has been sent to {modalEmail}!
            </p>
            <button onClick={closeModal}>Close</button>
          </Modal>
        )}
      </div>
    </>
  );
};

export default About;
