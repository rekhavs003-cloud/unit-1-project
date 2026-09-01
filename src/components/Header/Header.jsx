
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

function Header({ loggedInUser, onLogout }) {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  function handleLogout() {
    setShowMenu(false);
    onLogout();
    navigate("/login");
  }

  return (
    <header className="header">
      <div className="header-container">

        <Link to="/home" className="logo">
          🌿 Mood Tracker
        </Link>

        <nav
          className="navigation"
          aria-label="Main navigation"
        >
          <Link to="/home">Home</Link>
          <Link to="/journal">Journal</Link>
          <Link to="/calendar">Mood Tracker</Link>
          <Link to="/about">About</Link>
        </nav>

        {loggedInUser && (
          <div className="profile-container">

            <button
              type="button"
              className="profile-button"
              onClick={() => setShowMenu((current) => !current)}
              aria-expanded={showMenu}
            >
              <span>👤 {loggedInUser}</span>
              <span className="profile-arrow">▼</span>
            </button>

            {showMenu && (
              <div className="profile-dropdown">
                <button
                  type="button"
                  className="logout-button"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}

          </div>
        )}

      </div>
    </header>
  );
}

export default Header;
