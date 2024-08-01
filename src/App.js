import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import RenewableEnergyDirectory from './pages/RenewableEnergyDirectory';
import EnergyEfficiencyTools from './pages/EnergyEfficiencyTools';
import Contacts from './pages/Contacts';
import AboutUs from './pages/AboutUs';
import Footer from './pages/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import HomePage from './pages/HomePage';
import { Link as ScrollLink } from 'react-scroll';
import logo from './assets/ENERGY_HUB-removebg-preview.png';
import './App.css'; // Import your CSS file for additional styles

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/renewable-energy-directory" element={<RenewableEnergyDirectory />} />

          <Route path="/energy-efficiency" element={<EnergyEfficiencyTools />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-navbar" style={{ background: '#468585', color: '#ffffff' }}>
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="Logo" className="logo" />
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/renewable-energy-directory" activeClassName="active">Renewable Energy Directory</NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink className="nav-link" to="/energy-efficiency" activeClassName="active">Energy Efficiency</NavLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                className="nav-link"
                to="footer"
                smooth={true}
                duration={500}
              >
                Contacts
              </ScrollLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about-us" activeClassName="active">About Us</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default App;
