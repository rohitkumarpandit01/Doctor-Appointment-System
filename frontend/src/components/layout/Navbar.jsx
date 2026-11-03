import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Stethoscope, User } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Find Doctors', path: '/doctors' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`mnav ${scrolled ? 'mnav-scrolled' : ''}`}>
      <div className="mnav-inner">
        {/* Logo */}
        <Link to="/" className="mnav-brand">
          <span className="mnav-brand-icon">
            <Stethoscope size={18} color="#ffffff" />
          </span>
          <span className="mnav-brand-text">MediCare+</span>
        </Link>

        {/* Desktop Links */}
        <ul className="mnav-links">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) => `mnav-link ${isActive ? 'mnav-link-active' : ''}`}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="mnav-actions">
          <Link to="/login" className="mnav-login">
            <User size={15} />
            Login
          </Link>
          <Link to="/register" className="mnav-register">
            Register
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="mnav-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mnav-mobile ${isOpen ? 'mnav-mobile-open' : ''}`}>
        <ul className="mnav-mobile-links">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                end={link.path === '/'}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => `mnav-mobile-link ${isActive ? 'mnav-link-active' : ''}`}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="mnav-mobile-actions">
          <Link to="/login" className="mnav-login mnav-mobile-login" onClick={() => setIsOpen(false)}>
            <User size={15} />
            Login
          </Link>
          <Link to="/register" className="mnav-register mnav-mobile-register" onClick={() => setIsOpen(false)}>
            Register
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;