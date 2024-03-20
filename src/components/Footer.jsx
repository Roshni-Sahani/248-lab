import React from "react";
import logo from "../assets/images/logo.webp";
import { Facebook, Instagram, Link, Twitter } from "./Icon";

const Footer = () => {
  return (
    <div className="position-relative z-1 overflow-x-clip">
      <div className="container pt-5 pt-lg-0" data-aos="zoom-in">
        <div className="d-flex justify-content-center">
          <img src={logo} alt="logo" />
        </div>
        <ul className="d-flex justify-content-center gap-24 mt-3">
          <li>
            <a
              href=""
              className="text-white op-70 fs-xs lh-18 text-decoration-none nav_line position-relative"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href=""
              className="text-white op-70 fs-xs lh-18 text-decoration-none nav_line position-relative"
            >
              Roadmap
            </a>
          </li>
          <li>
            <a
              href=""
              className="text-white op-70 fs-xs lh-18 text-decoration-none nav_line position-relative"
            >
              Team
            </a>
          </li>
          <li>
            <a
              href=""
              className="text-white op-70 fs-xs lh-18 text-decoration-none nav_line position-relative"
            >
              About Us
            </a>
          </li>
        </ul>
        <div className="d-flex justify-content-center gap-3 my-4">
          <a
            href="https://twitter.com/i/flow/login"
            target="_blank"
            className="icon-hover"
          >
            <Twitter />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            className="icon-hover"
          >
            <Facebook />
          </a>
          <a
            href="https://www.instagram.com/accounts/login/"
            target="_blank"
            className="icon-hover"
          >
            <Instagram />
          </a>
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            className="icon-hover"
          >
            <Link />
          </a>
        </div>
      </div>
      <div className="line"></div>
      <p className="fs-s lh-16 fw-normal ff-flex py-2 text-center text-white op-70 mb-0">
        © 2023 248 Labs. All rights reserved
      </p>
      <div className="purple-ellipse4 d-none d-md-block"></div>
      <div className="orange-ellipse1 d-none d-md-block"></div>
    </div>
  );
};
export default Footer;
