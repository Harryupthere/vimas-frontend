import { Link } from 'react-router-dom';
import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="logo footer-logo">Vimas<span className="dot" /></div>
            <p>Group buying, made rewarding. Shop together, hit the target, share the reward.</p>
            <div className="social-row">
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="Instagram">ig</a>
              <a href="#" aria-label="X">x</a>
              <a href="#" aria-label="TikTok">tt</a>
            </div>
          </div>
          <div>
            <h4>Explore</h4>
            <Link to="/products">Marketplace</Link>
            <Link to="/how-it-works">How It Works</Link>
            <Link to="/rewards">Rewards Program</Link>
            <Link to="/join">Join the Club</Link>
          </div>
          <div>
            <h4>Company</h4>
            <Link to="/about">About Us</Link>
            <Link to="/faq">FAQs</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div>
            <h4>Get Started</h4>
            <Link to="/register">Create an Account</Link>
            <Link to="/join">Become a Merchant</Link>
            <Link to="/checkout">Checkout</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Vimas. All rights reserved.</span>
          <span>vimasgv.com · support@vimasclub.com</span>
        </div>
      </div>
    </footer>
  );
}
