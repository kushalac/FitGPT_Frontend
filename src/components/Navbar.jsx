// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/fitgpt">FitGPT</Link></li>
        <li><Link to="/workouts">Workouts</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
