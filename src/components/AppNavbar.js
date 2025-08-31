import React from "react";
import logo from "../assets/logo.png";

export default function AppNavbar() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-white border rounded-pill shadow-sm"
      style={{
        zIndex: 800,
        maxWidth: "800px",   // ✅ Reduce width
        margin: "10px auto",  // ✅ Center horizontally
        padding: "0.4rem 1.2rem", // ✅ Reduce height
      }}
    >
      {/* Logo */}
      <a className="navbar-brand fw-bold align-items-center" href="#">
        <img
          src={logo}
          alt="Logo"
          width="38"
          height="38"
          className="d-inline-block align-text-top"
        />
      </a>

      {/* Mobile Toggler */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNav"
        aria-controls="mainNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Navbar Links */}
      <div className="collapse navbar-collapse" id="mainNav">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center gap-lg-3">
          <li className="nav-item">
            <a className="nav-link fw-medium text-dark" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-medium text-dark" href="#">
              Find Jobs
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-medium text-dark" href="#">
              Find Talents
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-medium text-dark" href="#">
              About us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-medium text-dark" href="#">
              Testimonials
            </a>
          </li>
          <li className="nav-item ms-lg-2">
            {/* Gradient Button */}
            <button
              className="btn rounded-pill px-4 py-2 fw-semibold text-white border-0"
              style={{
                background: "linear-gradient(to bottom, #A128FF, #6100AD)",
              }}
              data-bs-toggle="modal"
              data-bs-target="#createJobModal"
            >
              Create Jobs
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
