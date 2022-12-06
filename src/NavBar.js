import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
      <ul className="sidebar">
        <li><a href="#Projects">Projects</a></li>
        <li><a href="#YouTube">YouTube</a></li>
        <li><a href="#Employment">Employment</a></li>
        <li><a href="#Footer">Contact me!</a></li>
      </ul>
  );
}

export default NavBar;
