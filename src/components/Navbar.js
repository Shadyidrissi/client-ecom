'use client';
import React, { useEffect, useState } from "react";
import "../app/globals.css";

function Navbar() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Function to handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);

      // Close the menu if the window is resized to larger than 589px
      if (width > 589 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    // Set initial window width
    handleResize();

    // Add resize listener
    window.addEventListener("resize", handleResize);

    // Clean up the resize listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  return (
    <nav className="navbar-container">
      <div>
        <li>
          <a href="/">

          <img
            id="logo-nav"
            src="https://i.postimg.cc/68rTSWTm/logo-bego.jpg"
            alt="Logo"
            />
            </a>
        </li>
      </div>
      <div className={`menu ${isMenuOpen ? "show" : ""}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/category">Category</a>
        </li>
        <li>
          <a href="/about">About US</a>
        </li>
        <li>
          <a href="/contact">Contact US</a>
        </li>
      </div>
      <div className="process-button-container">
        <button>
          <a href="/proccess">Process</a>
        </button>
      </div>

      {/* Toggle button for mobile view */}
      {windowWidth < 589 && (
        <div
          className="toggle-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </div>
      )}
    </nav>
  );
}

export default Navbar;
