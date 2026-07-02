import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GrowthRing from '../components/GrowthRing';
import './Rewards.scss';

export default function Rewards() {
  return (
    <>
      <Navbar showLogin />

      <section className="hero hero--rings rewards-hero">
        <div className="container rewards-hero__container">
          <span className="eyebrow">Rewards Program</span>
          <h1 className="rewards-hero__title">Earn more with every <em>purchase</em></h1>
          <p className="rewards-hero__lede">Shopping doesn't just save you money — it earns you money too. Here's every way points and cash flow back to you.</p>
        </div>
      </section>

      <section className="rewards-ways">
        <div className="container">
          <div className="grid-3">
            <div className="card">
              <span className="pill">Way 1</span>
              <h3>Make a purchase</h3>
              <p>Earn reward points for every dollar you spend across the marketplace. Points post to your account automatically at checkout and never expire.</p>
            </div>
            <div className="card">
              <span className="pill">Way 2</span>
              <h3>Refer a friend</h3>
              <p>Share your personal referral link. When someone joins through it and shops, you earn bonus points — on top of what you already earn from your own purchases.</p>
            </div>
            <div className="card">
              <span className="pill">Way 3</span>
              <h3>Hybrid structure cash rewards</h3>
              <p>Build a team through the Vimas network. As your direct referrals bring in their own referrals, you earn cash across multiple tiers of that structure — paid out on your monthly cycle.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="container">
          <span className="eyebrow">Hybrid Structure, explained</span>
          <h2 className="rewards-hybrid__title">How team-building rewards actually work</h2>
          <p className="rewards-hybrid__lede">
            Vimas pays two kinds of rewards side by side: <strong>shopping rewards</strong>, earned on your own purchases,
            and <strong>network rewards</strong>, earned from the buying activity of the team you build. Network rewards
            require real purchases somewhere in the chain — points and cash are tied to actual group buying activity,
            not to recruitment on its own.
          </p>

          <div className="grid-3 rewards-hybrid__grid">
            <div className="card">
              <h3>Tier 1 — Direct team</h3>
              <p>Earn a percentage of the points generated when someone you personally referred makes a purchase.</p>
            </div>
            <div className="card">
              <h3>Tier 2 — Extended team</h3>
              <p>Earn a smaller percentage when someone in your direct team's network makes a purchase, extending your earning reach.</p>
            </div>
            <div className="card">
              <h3>Group target bonus</h3>
              <p>When your whole buying group collectively hits its sales target, every member — regardless of tier — unlocks a shared bonus redeemable for free products.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container rewards-redeem">
          <div className="rewards-redeem__ring-box">
            <div className="rewards-redeem__ring-wrap">
              <GrowthRing pct={64} centerContent={<div className="num">1,280</div>} label="points balance" />
            </div>
          </div>
          <div>
            <span className="eyebrow">Redeeming points</span>
            <h2>Points become discounts, cash, or free products</h2>
            <p>Redeem your balance at checkout for an instant discount, request a cash payout on your monthly cycle, or save up for a fully free product once your group unlocks its target bonus. Your points dashboard shows exactly what's redeemable right now.</p>
            <Link to="/join" className="btn btn-primary">Start Earning Points</Link>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="cta-insert">
            <h2>Your rewards start with your very first order</h2>
            <Link to="/join" className="btn btn-dark btn-lg">Join the Club — Free</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
