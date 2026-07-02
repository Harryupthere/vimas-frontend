import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

interface NavbarProps {
  showLogin?: boolean;
  cartCount?: number;
  onCartClick?: () => void;
}

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/products', label: 'Marketplace' },
  { to: '/rewards', label: 'Rewards' },
  { to: '/about', label: 'About' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar({ showLogin, cartCount, onCartClick }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav-inner">
        <Link to="/" className="logo">Vimas<span className="dot" /></Link>
        <nav className={`nav-links ${open ? 'nav-links--open' : ''}`}>
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} onClick={() => setOpen(false)}>{link.label}</Link>
          ))}
        </nav>
        <div className="nav-cta">
          {cartCount !== undefined && (
            <button className="btn btn-outline cart-btn" onClick={onCartClick}>
              Cart<span className="cart-count">{cartCount}</span>
            </button>
          )}
          {showLogin && <Link to="/join" className="btn btn-outline nav-cta__login">Log In</Link>}
          <Link to="/join" className="btn btn-primary nav-cta__join">Join Free</Link>
        </div>
        <button className="nav-toggle" aria-label="Menu" onClick={() => setOpen((o) => !o)}>☰</button>
      </div>
    </header>
  );
}
