import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          🌿 Mood Tracker
        </Link>

        <nav className="navigation" aria-label="Main navigation">
          <Link to="/">Home</Link>
          <Link to="/journal">Journal</Link>
          <Link to="/calendar">Calendar</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;