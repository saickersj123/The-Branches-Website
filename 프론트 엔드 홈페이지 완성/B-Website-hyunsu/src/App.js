import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Members from './components/Members';
import ProjectPage from './components/ProjectPage';
import './App.css';

function App() {
  const [aboutDropdownVisible, setAboutDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setAboutDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setAboutDropdownVisible(false);
  };

  return (
    <Router>
      <div>
        <nav id="nav">
          <ul>
            <li><Link to="/" className="nav-button">Main</Link></li>
            <li
              className="nav-button dropdown-toggle"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              about us
              <ul className={`dropdown ${aboutDropdownVisible ? 'visible' : ''}`}>
                <li><Link to="/members">동아리 부원 소개</Link></li>
                <li><Link to="/members#meeting-place">모임 장소</Link></li>
                <li><Link to="/members#our-goal">우리들의 목표</Link></li>
              </ul>
            </li>
            <li><Link to="/project" className="nav-button">Project</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/members" element={<Members />} />
          <Route path="/project" element={<ProjectPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
