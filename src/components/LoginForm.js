import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const LoginForm = ({ onClose, setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Add error state
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLogin = () => {
    // Hardcoded credentials for testing
    const hardcodedEmail = "test@example.com";
    const hardcodedPassword = "test123";

    // Check if entered credentials match the hardcoded values
    if (email === hardcodedEmail && password === hardcodedPassword) {
      // Successful login
      setIsAuthenticated(true);
      onClose(); // Close the modal after successful login
      navigate("/"); // Redirect to the home page
    } else {
      // Display an error message for incorrect credentials
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="button" onClick={handleLogin}>
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
