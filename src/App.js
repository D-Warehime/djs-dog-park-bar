import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./components/LandingPage/LandingPage";
import Pricing from "./components/Pricing/Pricing";
import Gallery from "./components/Gallery/Gallery";
import Merchandise from "./components/Merchandise/Merchandise";
import TermsOfService from "./components/Footer/TermsOfService/TermsOfService";
import PrivacyPolicy from "./components/Footer/PrivacyPolicy/PrivacyPolicy";
import AboutUs from "./components/AboutUs/AboutUs";
import DogPark from "./components/DogPark/DogPark";
import Bar from "./components/Bar/Bar";
import FAQContainer from "./components/Footer/FAQs/FAQs";
import Profile from "./components/Profile/Profile";
import Events from "./components/UpcomingEvents/Events";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main-content-container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/merchandise" element={<Merchandise />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/dog-park" element={<DogPark />} />
          <Route path="/bar" element={<Bar />} />
          <Route path="/faqs" element={<FAQContainer />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/events" element={<Events />} />
        </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
