import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './App.css';

function NavBar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <nav id="nav">
      <ul>
        <li><Link to="/" style={{ fontSize: '1.2em', fontWeight: 'bold' }}>Main</Link></li>
        <li
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <a href="#" className="dropdown-toggle" style={{ fontSize: '1.2em', fontWeight: 'bold' }}>about us</a>
          <ul className={`dropdown ${dropdownVisible ? 'visible' : ''}`}>
            <li><Link to="/members">동아리부원 소개</Link></li>
            <li><Link to="/members#meeting-place">모임장소</Link></li>
            <li><Link to="/members#our-goal">우리들의 목표</Link></li>
          </ul>
        </li>
        <li><Link to="/project" style={{ fontSize: '1.2em', fontWeight: 'bold' }}>Project</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
