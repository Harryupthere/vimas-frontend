import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Contact.scss';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    const form = e.currentTarget;
    setTimeout(() => {
      setSent(false);
      form.reset();
    }, 2600);
  };

  return (
    <>
      <Navbar />

      <section className="hero contact-hero">
        <div className="container contact-hero__container">
          <span className="eyebrow">Contact Us</span>
          <h1 className="contact-hero__title">Have questions, feedback, or just want to say <em>hi</em>?</h1>
          <p className="contact-hero__lede">We'd love to hear from you. Send a message and we'll get back to you within 24–48 hours.</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container contact-grid">
          <div className="card">
            <form onSubmit={handleSubmit}>
              <div className="form-field">
                <label htmlFor="c-name">Name</label>
                <input id="c-name" type="text" placeholder="Your name" required />
              </div>
              <div className="form-field">
                <label htmlFor="c-email">Email</label>
                <input id="c-email" type="email" placeholder="you@example.com" required />
              </div>
              <div className="form-field">
                <label htmlFor="c-msg">Message</label>
                <textarea id="c-msg" placeholder="How can we help?" required />
              </div>
              <button type="submit" className="btn btn-primary btn-lg contact-submit" disabled={sent}>
                {sent ? 'Message sent' : 'Send Message'}
              </button>
            </form>
            <p className="contact-note">We reply within 24–48 hours, Monday through Friday.</p>
          </div>

          <div>
            <h3>Reach us directly</h3>
            <p className="contact-email">support@vimasclub.com</p>

            <h3>Follow the club</h3>
            <div className="social-row contact-social">
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="Instagram">ig</a>
              <a href="#" aria-label="X">x</a>
              <a href="#" aria-label="TikTok">tt</a>
            </div>

            <h3 className="contact-faq-heading">Looking for something specific?</h3>
            <p>Check the <Link to="/faq" className="contact-faq-link">FAQ page</Link> for quick answers on group targets, points redemption, and payout cycles — most questions are answered there instantly.</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
