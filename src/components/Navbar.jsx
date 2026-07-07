import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // Burger menyu holati

  // Menyuni ochish/yopish funksiyasi
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Linklar bosilganda menyuni yopish
  const closeMenu = () => {
    setIsOpen(false);
  };

  function handleConsultationClick() {
    closeMenu();
    navigate("/consultation");
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          Prime<span>Estate</span>
        </Link>

        {/* Burger lkonkasi */}
        <div
          className={`burger-menu ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>

        {/* Navigatsiya linklari */}
        <ul className={`nav-links ${isOpen ? "nav-active" : ""}`}>
          <li>
            <NavLink to="/" onClick={closeMenu}>
              Asosiy
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeMenu}>
              Biz haqimizda
            </NavLink>
          </li>
          <li>
            <NavLink to="/properties" onClick={closeMenu}>
              Obyektlar
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" onClick={closeMenu}>
              Xizmatlar
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={closeMenu}>
              Aloqa
            </NavLink>
          </li>
          {/* Mobil versiya uchun tugma (menyu ichida joylashadi) */}
          <li className="mobile-btn-container">
            <button
              className="nav-btn mobile-btn"
              onClick={handleConsultationClick}
            >
              Consultation
            </button>
          </li>
        </ul>

        {/* Desktop versiya uchun tugma */}
        <button
          className="nav-btn desktop-btn"
          onClick={handleConsultationClick}
        >
          Consultation
        </button>
      </div>
    </nav>
  );
}
