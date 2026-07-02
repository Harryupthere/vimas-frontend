import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Register.scss';

const benefits = [
  { title: 'Free forever', body: 'No subscription and no purchase required to join. You\'re a member the moment you sign up.' },
  { title: 'Points that never expire', body: 'Every purchase earns points that sit in your account until you\'re ready to redeem them.' },
  { title: 'Group rewards', body: 'Your account tracks every buying group you\'re part of and unlocks bonuses the moment it hits target.' },
];

export default function Register() {
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!agreed) return;
    setSubmitted(true);
    const form = e.currentTarget;
    setTimeout(() => {
      setSubmitted(false);
      setAgreed(false);
      form.reset();
    }, 2600);
  };

  return (
    <>
      <Navbar />

      <section className="hero hero--rings register-hero">
        <div className="container register-hero__container">
          <span className="eyebrow">Create Your Account</span>
          <h1 className="register-hero__title">Set up your <em>Vimas</em> account in under a minute</h1>
          <p className="register-hero__lede">One account, every group you buy into. Add a password now — you can always upgrade to a merchant account later from your dashboard.</p>
        </div>
      </section>

      <section className="register-section">
        <div className="container register-grid">
          <div className="card">
            <form onSubmit={handleSubmit}>
              <div className="form-field">
                <label htmlFor="r-name">Full name</label>
                <input id="r-name" type="text" placeholder="Jane Doe" required />
              </div>
              <div className="form-field">
                <label htmlFor="r-email">Email address</label>
                <input id="r-email" type="email" placeholder="you@example.com" required />
              </div>
              <div className="form-field register-grid-2col">
                <div>
                  <label htmlFor="r-password">Password</label>
                  <input id="r-password" type="password" placeholder="At least 8 characters" minLength={8} required />
                </div>
                <div>
                  <label htmlFor="r-confirm">Confirm password</label>
                  <input id="r-confirm" type="password" placeholder="Retype your password" minLength={8} required />
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="r-ref">Referral code (optional)</label>
                <input id="r-ref" type="text" placeholder="vimasgv.com/r/yourfriend" />
              </div>
              <label className="register-terms">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  required
                />
                <span>I agree to the Vimas Terms and Rewards Policy.</span>
              </label>
              <button type="submit" className="btn btn-primary btn-lg register-submit" disabled={submitted}>
                {submitted ? 'Account created ✓' : 'Create My Account'}
              </button>
            </form>
            <p className="register-login-note">
              Applying as a merchant instead? <Link to="/join" className="register-login-link">Go to the Join page</Link>.
            </p>
          </div>

          <div>
            <span className="eyebrow">Why join Vimas</span>
            <h2 className="register-benefits__title">Everything comes with the account</h2>
            <div className="register-benefits__list">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="register-benefit">
                  <div className="badge-num register-benefit__badge">✓</div>
                  <div>
                    <h3 className="register-benefit__title">{benefit.title}</h3>
                    <p>{benefit.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
