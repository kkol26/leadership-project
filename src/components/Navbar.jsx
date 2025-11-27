import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <Heart fill="var(--color-primary)" size={24} />
          <span>Leadership Project</span>
        </Link>

        <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <Link
              to="/"
              className={`navbar-link ${isActive('/') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/background"
              className={`navbar-link ${isActive('/background') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              The Issue
            </Link>
          </li>
          <li>
            <Link
              to="/tutorials"
              className={`navbar-link ${isActive('/tutorials') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              DIY Toys
            </Link>
          </li>
          <li>
            <Link
              to="/donate"
              className="btn btn-primary"
              style={{ padding: '0.5rem 1rem' }}
              onClick={closeMenu}
            >
              Donate
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
