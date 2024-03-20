import React, { useState } from "react";
import logo from "../assets/images/logo.webp";

const Header = () => {
  const [show, setshow] = useState(true);
  if (show === false) {
    document.body.classList.add("overflow_hidden");
  } else {
    document.body.classList.remove("overflow_hidden");
  }
  return (
    <header className="bg-img min-vh-lg-100 d-flex flex-column">
      <nav className="py-19">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <img src={logo} alt="Logo" className=" cursor-pointer" />
            <ul className={`${show ? "left_100" : "left_0"} nav_bar d-flex`}>
              <li onClick={() => setshow(!show)}>
                <a
                  href="#About Us"
                  className="gry ff-flex fs-xs navhover list-unstyled text-decoration-none fw-normal lh-24 nav_line position-relative"
                >
                  About Us
                </a>
              </li>
              <li onClick={() => setshow(!show)}>
                <a
                  className=" gry ff-flex fs-xs navhover list-unstyled text-decoration-none fw-normal lh-24 nav_line position-relative"
                  href="#OurTeam"
                >
                  Our Team
                </a>
              </li>
              <li onClick={() => setshow(!show)}>
                <a
                  className="gry ff-flex fs-xs navhover list-unstyled text-decoration-none fw-normal lh-24 nav_line position-relative"
                  href="#Roadmap"
                >
                  Roadmap
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-white ff-flex fs-sm lh-27 fw-bold text-decoration-none contact-btn"
                >
                  Contact Us
                </a>
              </li>
            </ul>
            <div
              onClick={() => setshow(!show)}
              className={`${show ? "" : "cross"} navline`}
            >
              <span className="crl-1"></span>
              <span className="crl-2"></span>
              <span className="crl-3"></span>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex-grow-1 py-lg-50 d-flex align-items-center">
        <div className="container">
          <p
            className="text-white fw-bold fs-lg lh-86 ff-flex text-center mb-0"
            data-aos="zoom-in"
          >
            Changing the way games <span className="d-block"> are made</span>
          </p>
          <p
            className="ff-flex lh-28 fw-normal text-white text-center fs-sm1 mb-0 pt-2"
            data-aos="zoom-in"
          >
            Redefining the future of play
          </p>
        </div>
      </div>
    </header>
  );
};
export default Header;
