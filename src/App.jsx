// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Hexa from "./Components/Hexa";
import Career from "./Components/Careers";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import AnalytixMarketing from "./Components/AnalytixMarketing"; // Import the new component
import SoftWareSolutions from "./Components/SoftwareSolutions"; // Import the new component
import BusinessConsulting from "./Components/BusinessConsulting";
import DataSolutions from "./Components/DataSolutions";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/hexa" element={<Hexa />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/analytixmarketing"
            element={<AnalytixMarketing />}
          />{" "}
          <Route path="/softwaresolutions" element={<SoftWareSolutions />} />{" "}
          <Route path="/businessconsulting" element={<BusinessConsulting />} />{" "}
          <Route path="/datasolutions" element={<DataSolutions />} />{" "}
          {/* Add the new route */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
