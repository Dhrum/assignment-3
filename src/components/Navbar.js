import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Import CSS for Navbar styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        {/* Add the logo image */}
        <img src="/favicon.ico" alt="Logo" className="logo-image" />
        <div className="logo-text">Chapters & Charms</div>
      </div>
      <ul className="nav-links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/faq">FAQ</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
      </ul>
      <div className="buttons">
        <button>Buy Book</button>
        <button>Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;

