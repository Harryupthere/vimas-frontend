import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MemberCard from '../components/MemberCard';
import './Home.scss';

export default function Home() {
  return (
    <>
      <Navbar showLogin />

      <section className="hero">
        <div className="hero-media">
          <img
            src="https://images.pexels.com/photos/13753893/pexels-photo-13753893.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="A bustling crowd of people shopping together inside a busy retail store"
          />
        </div>
        <div className="container hero-inner">
          <div>
            <span className="eyebrow">A Group Buying Club</span>
            <h1>Shop smart.<br />Earn smart.<br /><em>Grow</em> smart.</h1>
            <p className="home-hero__lede">
              Every purchase earns points toward free products. Every friend you invite grows the group.
              Every group that hits its target unlocks rewards for every member in it.
            </p>
            <div className="home-hero__ctas">
              <Link to="/join" className="btn btn-primary btn-lg">Join the Club — Free</Link>
              <Link to="/products" className="btn btn-outline btn-lg">Explore Products</Link>
            </div>
            <div className="home-hero__stats">
              <div><div className="stat-num">120K+</div><div className="stat-lbl">Members</div></div>
              <div><div className="stat-num">$2.1M</div><div className="stat-lbl">Rewards paid</div></div>
              <div><div className="stat-num">4,300+</div><div className="stat-lbl">Merchants</div></div>
            </div>
          </div>

          <MemberCard />
        </div>
      </section>

      <section className="trust-strip">
        <div className="container trust-strip__row">
          <span className="pill">Free to join</span>
          <span className="pill">Verified merchants only</span>
          <span className="pill">Points never expire</span>
          <span className="pill">Fixed monthly payouts</span>
          <span className="pill">Secure checkout</span>
        </div>
      </section>

      <section>
        <div className="container">
          <span className="eyebrow">The Vimas Loop</span>
          <h2 className="home-loop__title">One purchase feeds the whole group — and the group feeds you back</h2>
          <p className="home-loop__lede">
            You're never shopping alone. Every order counts toward a shared target, and hitting that target is what
            unlocks the reward.
          </p>

          <div className="grid-3 home-loop__grid">
            <div className="card">
              <div className="badge-num">1</div>
              <h3>Shop the marketplace</h3>
              <p>Buy fashion, electronics, beauty, groceries, and handmade goods from verified merchants at group-buy prices.</p>
            </div>
            <div className="card">
              <div className="badge-num">2</div>
              <h3>Earn points automatically</h3>
              <p>Every dollar spent earns reward points. Refer friends and earn bonus points when they shop too.</p>
            </div>
            <div className="card">
              <div className="badge-num">3</div>
              <h3>Group hits its target</h3>
              <p>Once your buying group reaches its collective sales goal, everyone in it unlocks a bonus reward — redeemable for free products.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="container">
          <span className="eyebrow">Two ways in</span>
          <h2>Come to shop. Stay to earn. Or come to sell.</h2>
          <div className="grid-2 home-split__grid">
            <div className="card">
              <span className="pill">For Shoppers &amp; Affiliates</span>
              <h3>Turn your everyday shopping into an income stream</h3>
              <p>Browse the marketplace, earn points on every order, and build a referral network with our hybrid rewards structure. The more your group grows, the more everyone in it earns.</p>
              <Link to="/join" className="btn btn-dark">Join as a Shopper</Link>
            </div>
            <div className="card">
              <span className="pill">For Merchants</span>
              <h3>Sell to a buyer pool that shows up ready to shop</h3>
              <p>List your products, manage orders from one dashboard, and reach shoppers actively hunting for group-buy deals — with analytics to track every sale.</p>
              <Link to="/join" className="btn btn-outline home-split__merchant-btn">Become a Merchant</Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="cta-insert">
            <span className="eyebrow home-cta__eyebrow">
              <span className="home-cta__eyebrow-line" />
              Membership is free
            </span>
            <h2>Ready to shop smart and start earning?</h2>
            <p>Your first group starts the moment you make your first purchase.</p>
            <Link to="/join" className="btn btn-dark btn-lg">Join the Club — Free</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
