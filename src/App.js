import NavBar from "./components/NavBar";
import "./styles/App.css";
import "./styles/About.css";
import About from "./components/About";
import Home from "./components/Home";
import "./styles/HomeFlexBox.css";
import Adopt from "./components/Adopt";
import Release from "./components/Release";
import AdoptionForm from "./components/AdoptionForm";
import Hisoka from "./components/Hisoka";
import Bond from "./components/Bond";
import Milo from "./components/Milo";
import Lucky from "./components/Lucky";
import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";
import SignUp from "./components/SignUp";
import ContactUs from "./components/ContactUs";
import MapComponent from "./components/MapComponent";
import Shop from "./components/Shop";
import MemberShop from "./components/MemberShop";
import UserAccount from "./components/UserAccount";

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState(""); // for "normal" user or "member"
  const handleLogin = (type) => {
    setIsAuthenticated(true);
    setUserType(type);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserType("");
  };
  return (
    <>
      <Router>
        <NavBar
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
          onLogout={handleLogout}
        />

        <div className="container">
          <Routes>
            {/* ... other routes */}
            <Route
              path="/shop"
              element={
                isAuthenticated && userType === "member" ? (
                  <MemberShop />
                ) : (
                  <Shop />
                )
              }
            />
            <Route path="/member-shop" element={<MemberShop />} />
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/adopt" element={<Adopt />} />
            <Route path="/release" element={<Release />} />
            <Route path="/AdoptionForm" element={<AdoptionForm />} />
            <Route path="/Hisoka" element={<Hisoka />} />
            <Route path="/Bond" element={<Bond />} />
            <Route path="/Milo" element={<Milo />} />
            <Route path="/Lucky" element={<Lucky />} />
            <Route path="/LoginForm" element={<LoginForm />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/MapComponent" element={<MapComponent />} />
            <Route path="/Shop" element={<Shop />} />

            <Route path="/UserAccount" element={<UserAccount />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
