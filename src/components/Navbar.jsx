import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();

  // Consultation sahifasiga yo'naltiruvchi funksiya
  function handleConsultationClick() {
    navigate("/consultation");
  }

  return (
    <nav className="navbar glass-panel">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Prime<span>Estate</span>
        </Link>

        <ul className="nav-links">
          <li>
            <NavLink to="/">Asosiy</NavLink>
          </li>
          <li>
            <NavLink to="/about">Biz haqimizda</NavLink>
          </li>
          <li>
            <NavLink to="/properties">Obyektlar</NavLink>
          </li>
          <li>
            <NavLink to="/services">Xizmatlar</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Aloqa</NavLink>
          </li>
        </ul>

        {/* Tugmaga onClick hodisasini ulaymiz */}
        <button className="nav-btn" onClick={handleConsultationClick}>
          Consultation
        </button>
      </div>
    </nav>
  );
}
