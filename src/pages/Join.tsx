import { useState, type FormEvent } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Join.scss';

type Path = 'shopper' | 'merchant';

export default function Join() {
  const [path, setPath] = useState<Path>('shopper');
  const [shopperSent, setShopperSent] = useState(false);
  const [merchantSent, setMerchantSent] = useState(false);

  const handleShopperSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShopperSent(true);
    const form = e.currentTarget;
    setTimeout(() => { setShopperSent(false); form.reset(); }, 2600);
  };

  const handleMerchantSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMerchantSent(true);
    const form = e.currentTarget;
    setTimeout(() => { setMerchantSent(false); form.reset(); }, 2600);
  };

  return (
    <>
      <Navbar />

      <section className="hero join-hero">
        <div className="container join-hero__container">
          <span className="eyebrow join-hero__eyebrow">Join the Club</span>
          <h1 className="join-hero__title">Ready to become a <em>Smart Vimas</em> affiliate member?</h1>
          <p className="join-hero__lede">Join Vimas free today and start unlocking bigger rewards — a smarter way to shop, share, and get paid.</p>
        </div>
      </section>

      <section className="join-section">
        <div className="container join-section__container">
          <div className="toggle-row">
            <button className={path === 'shopper' ? 'active' : ''} onClick={() => setPath('shopper')}>
              Shopper / Affiliate
            </button>
            <button className={path === 'merchant' ? 'active' : ''} onClick={() => setPath('merchant')}>
              Merchant
            </button>
          </div>

          {path === 'shopper' && (
            <div className="path-panel">
              <div className="card">
                <span className="pill">For Shoppers &amp; Affiliates</span>
                <h3 className="join-panel__title">Browse, buy, and earn</h3>
                <p>Get access to group-buy pricing, earn points on every order, and build your own referral network with the hybrid rewards structure.</p>
                <hr className="divider-line join-panel__divider" />
                <form onSubmit={handleShopperSubmit}>
                  <div className="form-field">
                    <label htmlFor="s-name">Full name</label>
                    <input id="s-name" type="text" placeholder="Jane Doe" required />
                  </div>
                  <div className="form-field">
                    <label htmlFor="s-email">Email address</label>
                    <input id="s-email" type="email" placeholder="you@example.com" required />
                  </div>
                  <div className="form-field">
                    <label htmlFor="s-ref">Referral link or code (optional)</label>
                    <input id="s-ref" type="text" placeholder="vimasgv.com/r/yourfriend" />
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg join-panel__submit" disabled={shopperSent}>
                    {shopperSent ? 'Application received ✓' : 'Create My Free Account'}
                  </button>
                </form>
                <p className="join-panel__terms">By joining you agree to the Vimas Terms and Rewards Policy.</p>
              </div>
            </div>
          )}

          {path === 'merchant' && (
            <div className="path-panel">
              <div className="card">
                <span className="pill">For Merchants</span>
                <h3 className="join-panel__title">List, manage, and sell</h3>
                <p>Get your products in front of an eager pool of group buyers. Manage listings, orders, and payouts from a single dashboard.</p>
                <hr className="divider-line join-panel__divider" />
                <form onSubmit={handleMerchantSubmit}>
                  <div className="form-field">
                    <label htmlFor="m-biz">Business name</label>
                    <input id="m-biz" type="text" placeholder="Northfield Studio" required />
                  </div>
                  <div className="form-field">
                    <label htmlFor="m-email">Business email</label>
                    <input id="m-email" type="email" placeholder="hello@yourbrand.com" required />
                  </div>
                  <div className="form-field">
                    <label htmlFor="m-cat">Primary category</label>
                    <select id="m-cat" defaultValue="Fashion">
                      <option>Fashion</option>
                      <option>Electronics</option>
                      <option>Handmade Goods</option>
                      <option>Groceries</option>
                      <option>Beauty</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="form-field">
                    <label htmlFor="m-plan">Plan</label>
                    <select id="m-plan" defaultValue="Starter — pay per sale (12% commission)">
                      <option>Starter — pay per sale (12% commission)</option>
                      <option>Growth — $29/mo + 8% commission</option>
                      <option>Pro — $79/mo + 5% commission + featured listings</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg join-panel__submit" disabled={merchantSent}>
                    {merchantSent ? 'Application received ✓' : 'Apply as a Merchant'}
                  </button>
                </form>
                <p className="join-panel__terms">Applications are reviewed within 2 business days.</p>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
