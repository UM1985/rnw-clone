// Footer.jsx
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5">
      <div className="container">
        <div className="row">
          {/* CONTACT US */}
          <div className="col-md-3 mb-4 footer-item">
            <h5 className="fw-bold mb-3">CONTACT US</h5>
            <p className="mb-2 fw-bold">Our Branches</p>
            <ul className="list-unstyled text-light footer-list">
              <li>A K Road</li>
              <li>Yogi Chowk</li>
              <li>Sarthana</li>
              <li>Mota Varachha</li>
              <li>Ved Road</li>
              <li>Adajan</li>
              <li>Dindoli</li>
              <li>Vesu</li>
            </ul>
            <p className="mb-1">📞 +91 7878 444 333</p>
            <p className="mb-1 fw-bold">Franchise Information</p>
            <p className="mb-1">📧 info@rnwmultimedia.edu.in</p>
          </div>

          {/* TRENDING COURSE */}
          <div className="col-md-3 mb-4 footer-item">
            <h5 className="fw-bold mb-3">TRENDING COURSE</h5>
            <ul className="list-unstyled text-light footer-list">
              <li>PHP</li>
              <li>Project Training Surat</li>
              <li>Android Training Course</li>
              <li>Web Designing Training Course</li>
              <li>Full Stack Development Course</li>
            </ul>
          </div>

          {/* IMPORTANT PAGES */}
          <div className="col-md-3 mb-4 footer-item">
            <h5 className="fw-bold mb-3">IMPORTANT PAGES</h5>
            <ul className="list-unstyled text-light footer-list">
              <li>Home</li>
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Blog</li>
              <li>Events</li>
              <li>Approval</li>
              <li>Students T&amp;C</li>
              <li>Sitemap</li>
              <li>Cities Sitemap</li>
              <li>Student Login</li>
            </ul>
          </div>

          {/* BE RECRUITER */}
          <div className="col-md-3 mb-4 footer-item">
            <h5 className="fw-bold mb-3">BE RECRUITER</h5>
            <ul className="list-unstyled text-light footer-list">
              <li>Company Login/Register</li>
              <li>Company T&amp;C</li>
              <li>Placement Student Login</li>
              <li>Placement Student T&amp;C</li>
            </ul>
            <p className="mb-1">📞 +91 93313 13196</p>
            <p className="mb-1">📧 placement@rnwmultimedia.edu.in</p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="text-center py-3">
          <a href="#" className="text-light mx-2"><FaFacebookF /></a>
          <a href="#" className="text-light mx-2"><FaTwitter /></a>
          <a href="#" className="text-light mx-2"><FaInstagram /></a>
          <a href="#" className="text-light mx-2"><FaLinkedinIn /></a>
          <a href="#" className="text-light mx-2"><FaYoutube /></a>
        </div>

        <hr className="border-light" />

        {/* Copyright */}
        <p className="text-center text-light mb-0 py-3">
          © Copyright 2025. Red &amp; White Education PVT LTD. All Rights Reserved.
        </p>
        <p className="text-center fw-bold">Certificate Verification</p>
      </div>
    </footer>
  );
};

export default Footer;
