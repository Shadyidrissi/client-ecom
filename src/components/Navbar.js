import React from "react";
import "../app/globals.css";

function Navbar() {
  return (
    <nav>
      <div>
        <li>
          <img id="logo-nav" src="https://i.postimg.cc/68rTSWTm/logo-bego.jpg"alt="" />
        </li>
      </div>
      <div>
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
      <div>
        <button>
            <a href="/proccess">Process</a>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
