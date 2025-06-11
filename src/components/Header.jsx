import React from 'react';
import './Header.css';

const Header = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="logo" onClick={() => scrollToSection('about')}>
        My Resume
      </div>
      <nav className="nav-links">
        <button onClick={() => scrollToSection('about')}>About Me</button>
        <button onClick={() => scrollToSection('projects')}>Projects</button>
        <button onClick={() => scrollToSection('skills')}>Skills</button>
        <button onClick={() => scrollToSection('contact')}>Contact</button>
      </nav>
    </header>
  );
};

export default Header;
