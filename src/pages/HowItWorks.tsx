import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DualGrowthRing from '../components/DualGrowthRing';
import './HowItWorks.scss';

const steps = [
  {
    num: '01',
    title: 'Join Vimas — it\'s free',
    body: "Create an account in under a minute. No subscription, no purchase required to join. You're in the club the moment you sign up.",
  },
  {
    num: '02',
    title: 'Shop and earn reward points',
    body: 'Every purchase through Vimas earns points based on what you spend. Points accumulate in your account and are redeemable for discounts, cash bonuses, or free products — you get paid back for shopping you were already doing.',
  },
  {
    num: '03',
    title: 'Invite, share, and grow your group',
    body: 'Share your personal referral link with friends, family, or your audience. When someone joins and shops through your link, you both benefit — they get access to group-buy pricing, you earn referral points.',
  },
  {
    num: '04',
    title: 'Unlock rewards when the group hits target',
    body: "Group buying works because everyone shops toward a shared goal. Once your group's collective purchases reach the target size, the group unlocks its next tier of rewards — redeemable for free products, not just points.",
  },
];

export default function HowItWorks() {
  return (
    <>
      <Navbar showLogin />

      <section className="hero hiw-hero">
        <div className="container hiw-hero__container">
          <span className="eyebrow">How It Works</span>
          <h1 className="hiw-hero__title">Turn your shopping into <em>income</em> — step by step</h1>
          <p className="hiw-hero__lede">No hidden mechanics. Here's exactly how a purchase becomes points, how points become rewards, and how your network multiplies both.</p>
        </div>
      </section>

      <section className="hiw-steps">
        <div className="container hiw-steps__container">
          {steps.map((step) => (
            <div className="step-row" key={step.num}>
              <div className="step-num">{step.num}</div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </div>
          ))}

          <div className="step-row">
            <div className="step-num">05</div>
            <div>
              <h3>Grow your network with the Hybrid Structure</h3>
              <p>Beyond individual purchases, Vimas rewards the people who help the club grow. As your referrals refer their own network, you can earn cash rewards across multiple tiers of that structure — paid out on a fixed monthly cycle. See the <Link to="/rewards" className="hiw-link">Rewards Program</Link> page for the full tier breakdown.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="container hiw-visual">
          <div>
            <span className="eyebrow">Group target, visualized</span>
            <h2>Watch your group close in on its reward</h2>
            <p>Every product page shows a live ring for its buying group. The outer ring tracks total group sales against the target; the inner ring tracks your personal contribution. When the outer ring closes, rewards release to everyone in the group.</p>
            <Link to="/products" className="btn btn-dark">See it on a product</Link>
          </div>
          <div className="hiw-visual__ring-box">
            <div className="hiw-visual__ring-wrap">
              <DualGrowthRing
                outer={{ pct: 92, radius: 98, strokeWidth: 16, color: 'brass' }}
                inner={{ pct: 60, radius: 72, strokeWidth: 16, color: 'sage' }}
                label="group target"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="cta-insert">
            <h2>Your first group starts with your first order</h2>
            <Link to="/join" className="btn btn-dark btn-lg">Join the Club — Free</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
