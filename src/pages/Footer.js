// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/ENERGY_HUB-removebg-preview.png'; // Adjust the path if necessary

const Footer = () => {
  return (
    <footer id="footer" className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          {/* Logo Section */}
          <div className="col-md-4 mb-3">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="Logo" className="logo-footer" />
            </Link>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-4 mb-3">
            <h5><b>Quick Links</b></h5>
            <ul className="list-unstyled">
              <li><Link className="text-white" to="/renewable-energy-directory">Renewable Energy Directory</Link></li>
              <li><Link className="text-white" to="/renewable-energy">Renewable Energy</Link></li>
              <li><Link className="text-white" to="/educational-resources">Educational Resources</Link></li>
              <li><Link className="text-white" to="/community-projects">Community Projects</Link></li>
              <li><Link className="text-white" to="/about-us">About Us</Link></li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="col-md-4 mb-3">
            <h5> <b>Contact Us</b></h5>
            <p><b>Email : </b><a href="mailto:info@example.com" className="text-white">greenhubenergy@gmail.com</a></p>
            <p><b>Phone : </b><a href="tel:+917697823349" className="text-white">+91 7697823349</a></p>
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <p className="mb-0">Copyright &copy; 2024 Made with ❤️ by <b>Pro Dev’s</b></p>
      </div>
    </footer>
  );
};

export default Footer;
