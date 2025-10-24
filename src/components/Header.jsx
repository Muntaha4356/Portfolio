import React, {useState} from 'react';
import './Header.css';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
const Header = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <header className="header">
      <div className="logo" onClick={() => scrollToSection('about')}>
        Sidra tul Muntaha
      </div>
      <div className="hidden md:block">
        <nav className="nav-links">
        <button onClick={() => scrollToSection('about')}>About Me</button>
        <button onClick={() => scrollToSection('projects')}>Projects</button>
        <button onClick={() => scrollToSection('skills')}>Skills</button>
        <button onClick={() => scrollToSection('contact')}>Contact</button>
      </nav>
      </div>
      <div className="md:hidden"> {/* show only on small screens */}
      <div className="flex justify-between items-center p-4 text-white">

        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <RxCross2 className="h-6 w-6 text-white" />
          ) : (
            <RxHamburgerMenu className="h-6 w-6 text-white" />
          )}
        </button>
      </div>

      
    </div>
    
      
    </header>
    <div className="relative z-50">
      {/* Dropdown Menu */}
      {isOpen && (
        <nav className="absolute flex flex-col items-start text-white px-4 py-2 space-y-2">
          <button onClick={() => scrollToSection('about')}>About Me</button>
          <button onClick={() => scrollToSection('projects')}>Projects</button>
          <button onClick={() => scrollToSection('skills')}>Skills</button>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        </nav>
      )}
    </div>
    </>
    
  );
};

export default Header;
