import React from "react";

const Navbar = () => {
  return (
    <>
    <div className="bg-danger p-3 d-flex">
  <div className="w-50">
    <select className="bg-danger text-light px-3 py-2 ms-5 border-1 border-light w-50">
      <option value="" selected disabled>
        Select City
      </option>
      <option value="">Surat</option>
      <option value="">Ahmedabad</option>
      <option value="">Bhavnager</option>
      <option value="">BHaruch</option>
      <option value="">Amreli</option>
      <option value="">Navsari</option>
      <option value="">Rajkot</option>
    </select>
  </div>

  <div className="w-50 align-content-center text-white text-lg fw-bold">
    <marquee behavior="infinite" scrollamount="5" direction="">
       RW1 (A K Road) : +91 79847 11520  RW2 (Yogi Chowk) : +91 63510 87408  RW3 (Sarthana) : +91 78787 80511  RW4 (Mota Varachha) : +91 63522 95143  RW5 (Ved Road) : +91 63554 43286  RW6 (Adajan) : +91 927 771 8777  RW8 (Dindoli) : +91 94848 42426  RW7 (Vesu) : +91 94 84 888 444

    </marquee>
  </div>
</div>


      <nav className="navbar navbar-expand-lg navbar-light shadow-sm sticky-top ">
        <div className="container-fluid px-4">
          {/* Brand Logo */}
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img
              src="rnw-logo.png"
              alt="RNW Logo"
              width="180"
              className="me-2"
            />
          </a>

          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Nav Links */}
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto fw-semibold">
              <li className="nav-item">
                <a className="nav-link active text-danger " href="#">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Std 10th & 12th
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="careerDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Career Course
                </a>
                <ul
                  className="dropdown-menu shadow border-0"
                  aria-labelledby="careerDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Coding & Programming
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Designing
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      AI / ML
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Courses
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Student Corner
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
