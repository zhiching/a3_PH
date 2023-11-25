import React, { useState } from "react";
import "../styles/AdoptionForm.css";

const AdoptionForm = () => {
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  const modalDimensions = {
    height: "130px", // Adjust the height as needed
    width: "300px", // Adjust the width as needed
  };
  // Define styles for the modal
  const confirmationModalStyle = {
    ...modalDimensions,
    display: confirmationModalOpen || successModalOpen ? "block" : "none",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    border: "2px solid #ccc",
    padding: "20px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    zIndex: successModalOpen ? "999" : "1000",
  };

  const successModalStyle = {
    ...modalDimensions,
    display: successModalOpen ? "block" : "none",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    border: "2px solid #ccc",
    padding: "20px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    zIndex: "1001",
  };

  const handleDateTimeSelection = (dateTime) => {
    setSelectedDateTime(dateTime);
  };

  const handleBackToSelection = () => {
    setSelectedDateTime(null);
  };

  const handleCompleteAppointment = async (e) => {
    e.preventDefault();

    // Prepare form data
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("selectedDateTime", selectedDateTime);

    try {
      // Send form data to Formspree
      const response = await fetch("https://formspree.io/f/myyqarbv", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setConfirmationModalOpen(true);
      } else {
        console.error("Failed to submit the form.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  const handleConfirm = () => {
    setConfirmationModalOpen(false);
    // Perform actions to submit the form or make an API call
    // For now, let's just simulate a successful submission
    setTimeout(() => {
      setSuccessModalOpen(true);
    }, 500);
  };

  const handleCancel = () => {
    setConfirmationModalOpen(false);
  };

  const handleOk = () => {
    setSuccessModalOpen(false);
    // Redirect to the home page or perform any other action
    // For now, let's simulate a redirect to the home page
    window.location.href = "/";
  };

  // Sample data for dates and times
  const dates = [
    "Monday, 20 November 2023",
    "Tuesday, 21 November 2023",
    "Thursday, 23 November 2023",
    "Friday, 24 November 2023",
  ];
  const times = ["11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM"];

  const inputStyle = {
    fontSize: "16px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    width: "100%",
  };

  const submitButtonStyle = {
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    padding: "10px",
    margin: "0 auto",
    cursor: "pointer",
    fontSize: "16px",
  };

  return (
    <div>
      {!selectedDateTime ? (
        // Date and Time Selection
        <>
          <h2>
            Adoption Viewing appointment with Pet Heaven:<br></br>1 hour
          </h2>
          <br></br>
          <br></br>
          <div className="date-selection">
            {dates.map((date) => (
              <div key={date} style={{ fontSize: "18px" }}>
                <p>{date}</p>
                {times.map((time) => (
                  <button
                    className="time-button"
                    onClick={() => handleDateTimeSelection(`${date} ${time}`)}
                  >
                    {time}
                  </button>
                ))}
                <br></br>
                <br></br>
              </div>
            ))}
          </div>
        </>
      ) : (
        // Selected Date and Time
        <>
          <h2>
            Adoption Viewing appointment with Pet Heaven:{" "}
            <button className="button-back" onClick={handleBackToSelection}>
              Back to Timing Selection
            </button>
            <br></br>1 hour
          </h2>
          <br></br>
          <br></br>
          <h3>Selected date & time: {selectedDateTime}</h3>
          <br></br>
          {/* Your Information Form */}
          <form
            onSubmit={handleCompleteAppointment}
            enctype="multipart/form-data"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <label
              style={{
                fontWeight: "bold",
                marginBottom: "10px",
                fontSize: "18px",
              }}
            >
              First Name <span style={{ color: "red" }}>*</span>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                style={inputStyle}
              />
            </label>
            <label
              style={{
                fontWeight: "bold",
                marginBottom: "10px",
                fontSize: "18px",
              }}
            >
              Last Name <span style={{ color: "red" }}>*</span>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                style={inputStyle}
              />
            </label>
            <label
              style={{
                fontWeight: "bold",
                marginBottom: "10px",
                fontSize: "18px",
              }}
            >
              Phone <span style={{ color: "red" }}>*</span>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                style={inputStyle}
              />
            </label>
            <label
              style={{
                fontWeight: "bold",
                marginBottom: "10px",
                fontSize: "18px",
              }}
            >
              Email <span style={{ color: "red" }}>*</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={inputStyle}
              />
            </label>

            <button
              className="button-back"
              type="submit"
              style={submitButtonStyle}
            >
              Submit
            </button>
          </form>
        </>
      )}
      {/* Confirmation Modal */}
      <div style={confirmationModalStyle}>
        <p>Confirm all details are correct and proceed with the submission?</p>
        <button onClick={handleConfirm}>Confirm</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>

      {/* Success Modal */}
      <div style={successModalStyle}>
        <p>Appointment has been successfully made.</p>
        <button onClick={handleOk}>Ok</button>
      </div>
    </div>
  );
};

export default AdoptionForm;
