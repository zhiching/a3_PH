// src/components/Signup.js
import React, { useState } from "react";
import "../styles/SignUp.css"; // Import your CSS file for styling

const Signup = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [cvv, setCvv] = useState("");
  const [membershipOption, setMembershipOption] = useState("");

  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showThankYouModal, setShowThankYouModal] = useState(false);

  const handleCloseAllModals = () => {
    setShowConfirmationModal(false);
    setShowThankYouModal(false);
    // Add other modal states as needed
  };

  const handleConfirmationModal = () => {
    setShowConfirmationModal(true);
  };

  const resetFormFields = () => {
    setEmail("");
    setPassword("");
    setRepeatPassword("");
    setNameOnCard("");
    setCreditCardNumber("");
    setExpMonth("");
    setExpYear("");
    setCvv("");
    setMembershipOption("");
  };
  const handleThankYouModal = () => {
    setShowThankYouModal(true);
    resetFormFields(); // Reset form fields
  };

  const handleCloseConfirmationModal = () => {
    setShowConfirmationModal(false);
  };

  const handleCloseThankYouModal = () => {
    setShowThankYouModal(false);
    onClose(); // Close the Signup modal
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show confirmation modal
    handleConfirmationModal();
  };

  return (
    <>
      <div className="imageContainer">
        <div className="image">
          <img
            src="/Membership_page_doggy_paws.jpg"
            alt="Description of the image"
          />
        </div>
        <div className="description">
          <h2 id="header2">Membership</h2>
          <p id="paragraph">
            We have consistently required assistance and continue to seek
            support in delivering diverse animal welfare services to the
            community.
          </p>
          <p id="paragraph">These services include, and not limited to:</p>
          <ul id="paragraph">
            <li>Animal cruelty investigations</li>
            <li>
              Operation of a clinic catering to stray and abandoned animals
              within the community
            </li>
            <li>
              Implementation of educational programs for schools and
              organizations to raise public awareness
            </li>
            <li>
              A 24-hour emergency service for sick, injured and very young
              animals
            </li>
            <li>
              Management of an animal shelter and the facilitation of quarantine
              for unwanted, abused, and abandoned animals
            </li>
          </ul>
          <p id="paragraph">
            As a purpose-driven and forward-thinking organization, we aim to
            enhance the uniqueness of our membership program, bringing added
            value to the lives of our members. Through this initiative, our
            members will gain deeper insights into animal welfare issues,
            focusing on the most deserving recipients – the animals. However,
            our journey begins at the very core – with compassion and
            commitment.
          </p>
          <p id="paragraph">
            Your support matters in helping us uphold animal welfare and
            minimize cruelty to animals!
          </p>
          <h2 id="header2">What will you receive</h2>
          <ul id="paragraph">
            <li>My PetHeaven Publications</li>
            <li>Membership Card</li>
            <li>Membership Perks (5% disount in our Shop items)</li>
          </ul>
        </div>
      </div>

      <div className="signup-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          <h1>Sign Up as a Membership</h1>
          <p>Please fill up this form to create a membership account.</p>
          <hr />
          <label>
            <b>Membership Options</b>
          </label>
          <div>
            <label>
              <input
                type="radio"
                name="membershipOption"
                value="1 Year – $50.00 "
                onChange={(e) => setMembershipOption(e.target.value)}
                required
              />
              1 Year – $50.00
            </label>

            <label>
              <input
                type="radio"
                name="membershipOption"
                value="2 Years – $100.00"
                onChange={(e) => setMembershipOption(e.target.value)}
                required
              />
              2 Years – $100.00
            </label>

            <label>
              <input
                type="radio"
                name="membershipOption"
                value="3 Years – $150.00"
                onChange={(e) => setMembershipOption(e.target.value)}
                required
              />
              3 Years – $150.00
            </label>

            <label>
              <input
                type="radio"
                name="membershipOption"
                value="Lifetime – $500.00"
                onChange={(e) => setMembershipOption(e.target.value)}
                required
              />
              Lifetime – $500.00
            </label>
          </div>
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label htmlFor="repeatPassword">
            <b>Repeat Password</b>
          </label>
          <input
            type="password"
            placeholder="Repeat Password"
            name="repeatPassword"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            required
          />

          {/* Card Information Fields */}
          <label htmlFor="nameOnCard">
            <b>Name on Card</b>
          </label>
          <input
            type="text"
            placeholder="Enter Name on Card"
            name="nameOnCard"
            value={nameOnCard}
            onChange={(e) => setNameOnCard(e.target.value)}
            required
          />

          <label htmlFor="creditCardNumber">
            <b>Credit Card Number</b>
          </label>
          <input
            type="number"
            placeholder="Enter Credit Card Number"
            name="creditCardNumber"
            value={creditCardNumber}
            onChange={(e) => setCreditCardNumber(e.target.value)}
            required
          />

          <label htmlFor="expMonth">
            <b>Expiration Month</b>
          </label>
          <input
            type="number"
            placeholder="Enter Expiration Month"
            name="expMonth"
            value={expMonth}
            onChange={(e) => setExpMonth(e.target.value)}
            required
          />

          <label htmlFor="expYear">
            <b>Expiration Year</b>
          </label>
          <input
            type="number"
            placeholder="Enter Expiration Year"
            name="expYear"
            value={expYear}
            onChange={(e) => setExpYear(e.target.value)}
            required
          />

          <label htmlFor="cvv">
            <b>CVV</b>
          </label>
          <input
            type="number"
            placeholder="Enter CVV"
            name="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />
          {/* End of Card Information Fields */}

          <label style={{ display: "inline-flex", alignItems: "center" }}>
            <input
              type="checkbox"
              checked="checked"
              name="remember"
              style={{ marginRight: "5px" }}
            />
            Remember me
          </label>

          <p>
            By creating an account you agree to our{" "}
            <a href="#" style={{ color: "dodgerblue" }}>
              Terms & Privacy
            </a>
            .
          </p>

          <div className="clearfix">
            <button type="button" className="cancelbtn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="signupbtn">
              Sign Up
            </button>
          </div>
        </form>
      </div>
      {/* Confirmation Modal */}
      {showConfirmationModal && (
        <div className="modal">
          <div className="modal-content">
            <p>Confirm submission?</p>
            <button onClick={handleCloseConfirmationModal}>No</button>
            <button onClick={handleThankYouModal}>Yes</button>
          </div>
        </div>
      )}

      {/* Thank You Modal */}
      {showThankYouModal && (
        <div className="modal">
          <div className="modal-content">
            <p>
              Thank you for joining us! You may login to your account on the
              Login page under Membership.
            </p>
            <button onClick={handleCloseAllModals}>OK</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Signup;
