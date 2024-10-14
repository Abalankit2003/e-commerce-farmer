import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import {FaSearch} from "react-icons/fa"
import {Link} from 'react-router-dom';


function Header({ title }) {
  return (
    <header className="flex justify-between items-center p-4 bg-[#4CAF50]">
      <strong>{title}</strong>
      <div className="relative flex items-center w-1/3">
        <input
          type="search"
          className="border rounded-lg p-3 w-full"
          placeholder="Search..."
        />
        <FaSearch className="absolute right-4" />
      </div>

      <ul className="flex gap-5 items-center">
        <Link to="/cart">
          <FaCartShopping />
        </Link>
        <Link to="/profile">
          <ol>Profile</ol>
        </Link>
      </ul>
    </header>
  );
}

export default Header;
