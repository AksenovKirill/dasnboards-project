import React from "react";

const Footer = () => {
  return (
    <div className="footer py-4 d-flex mt-5" id="kt_footer">
      <div className="container-xxl d-flex flex-column justify-content-center align-items-center">
        <div className="text-dark order-2 order-md-1">
          <span className="text-muted fw-semibold me-1">2022©</span>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="text-gray-800 text-hover-primary">
            Keenthemes
          </a>
        </div>
        <ul className="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
          <li className="menu-item">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="menu-link px-2">
              About
            </a>
          </li>
          <li className="menu-item">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="menu-link px-2">
              Support
            </a>
          </li>
          <li className="menu-item">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="menu-link px-2">
              Purchase
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
