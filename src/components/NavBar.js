import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Modal from "react-bootstrap/Modal";
import LoginForm from "./LoginForm"; // Create LoginForm component separately
import Button from "react-bootstrap/Button";

const NavBar = ({ isAuthenticated, setIsAuthenticated }) => {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleDropdownSelect = () => {
    setExpanded(!expanded);
  };

  const handleLoginModalShow = () => {
    setShowLoginModal(true);
  };

  const handleLoginModalClose = () => {
    setShowLoginModal(false);
  };
  const handleLogoutModalShow = () => {
    setShowLogoutModal(true);
  };

  const handleLogoutModalClose = () => {
    setShowLogoutModal(false);
  };

  const handleLogout = () => {
    // Perform logout logic
    setIsAuthenticated(false);
    setShowLogoutModal(false);
  };
  return (
    <>
      {showLoginModal ? null : (
        <Navbar bg="light" expand="sm">
          {/* Logo */}
          <Navbar.Brand>
            <Link to="/">
              <img src="./logo.jpg" alt="Logo" className="logo" />
            </Link>
          </Navbar.Brand>

          {/* Hamburger menu for small screens */}
          <Navbar.Toggle aria-controls="navbarNav" />

          {/* Collapsible Navbar content */}
          <Navbar.Collapse id="navbarNav">
            <Nav className="mr-auto">
              <Link
                to="/"
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
              >
                About
              </Link>
              <NavDropdown
                title="Services"
                id="basic-nav-dropdown"
                onSelect={handleDropdownSelect}
              >
                <NavDropdown.Item>
                  <Link to="/adopt" className="nav-link">
                    Adopt
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/release" className="nav-link">
                    Release
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Link
                to="/ContactUs"
                className={`nav-link ${
                  location.pathname === "/ContactUs" ? "active" : ""
                }`}
              >
                Contact Us
              </Link>
              {!isAuthenticated && (
                <>
                  <NavDropdown
                    title="Membership"
                    id="basic-nav-dropdown"
                    onSelect={handleDropdownSelect}
                  >
                    <NavDropdown.Item>
                      <Link to="/SignUp" className="nav-link">
                        SignUp
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="nav-link"
                      onClick={handleLoginModalShow}
                    >
                      Login
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              )}
              {!isAuthenticated && (
                <Link
                  to="/Shop"
                  className={`nav-link ${
                    location.pathname === "/Shop" ? "active" : ""
                  }`}
                >
                  Shop
                </Link>
              )}
              {isAuthenticated && (
                <Link
                  to="/member-shop"
                  className={`nav-link ${
                    location.pathname === "/member-shop" ? "active" : ""
                  }`}
                >
                  Member Shop
                </Link>
              )}
              {isAuthenticated && (
                <>
                  <Nav.Item>
                    <Nav.Link onClick={handleLogoutModalShow}>Logout</Nav.Link>
                  </Nav.Item>
                </>
              )}
              {isAuthenticated && (
                <Link
                  to="/UserAccount"
                  className={`nav-link ${
                    location.pathname === "/UserAccount" ? "active" : ""
                  }`}
                >
                  My Account
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )}
      {/* Login Modal */}
      <Modal show={showLoginModal} onHide={handleLoginModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Pass the setIsAuthenticated prop to the LoginForm */}
          <LoginForm
            onClose={handleLoginModalClose}
            setIsAuthenticated={setIsAuthenticated}
          />
        </Modal.Body>
      </Modal>
      {/* Logout Confirmation Modal */}
      <Modal show={showLogoutModal} onHide={handleLogoutModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Logout Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to logout?</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleLogout}>
            Logout
          </Button>
          <Button variant="secondary" onClick={handleLogoutModalClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NavBar;
