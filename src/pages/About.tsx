import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './About.scss';

export default function About() {
  return (
    <>
      <Navbar />

      <section className="hero hero--rings about-hero">
        <div className="container about-hero__container">
          <span className="eyebrow">About Us</span>
          <h1 className="about-hero__title">Shopping is better when it's <em>shared</em></h1>
          <p className="about-hero__lede">
            Vimas was built on one simple belief: you and your teammates should get something back for shopping together.
          </p>
        </div>
      </section>

      <section className="about-body">
        <div className="container about-body__container">
          <p>Most rewards programs treat you as a single data point — one purchase, one point balance, one transaction at a time. Vimas started from a different question: what happens if shopping wasn't a solo activity? What if the people you already tell about a good deal could actually share in the upside of that deal?</p>
          <p>That question became a group-buying model. Instead of setting prices and rewards purchase by purchase, Vimas sets them group by group. When enough people in your circle buy the same product, the group unlocks pricing and bonus rewards that no individual shopper could get alone. Your invite isn't just a favor to a friend — it's what moves the group closer to its target.</p>
          <p>We paired that group-buying core with a rewards structure that recognizes two kinds of contribution: the purchases you make yourself, and the community you help build around the club. Both are real value, so both are rewarded — through points on your own orders and through a multi-tier network structure when the people you bring in shop too.</p>
          <p>Today, Vimas connects thousands of independent merchants — from small handmade-goods studios to established electronics brands — with a community of shoppers who are actively looking for a better deal and a reason to share it. Every order strengthens both sides: merchants reach buyers who show up ready to purchase, and shoppers turn everyday spending into points, discounts, and income.</p>
          <p>We're still early. But the belief hasn't changed: group buying should feel like a club you're glad to be part of, not a transaction you forget the moment it's over.</p>
        </div>
      </section>

      <section className="section-light">
        <div className="container">
          <span className="eyebrow">What we stand for</span>
          <div className="grid-3 about-values">
            <div className="card">
              <h3>Real products, real merchants</h3>
              <p>Every merchant on Vimas is verified before listing. Rewards are tied to actual purchases — never to recruitment alone.</p>
            </div>
            <div className="card">
              <h3>Transparent rewards</h3>
              <p>Point values, tier percentages, and payout cycles are published on the Rewards page — no fine print, no surprises.</p>
            </div>
            <div className="card">
              <h3>Community over competition</h3>
              <p>Group targets mean your neighbor's purchase helps you too. We built the mechanics so that growth is shared, not zero-sum.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="cta-insert">
            <h2>Come shop with the club</h2>
            <Link to="/join" className="btn btn-dark btn-lg">Join the Club — Free</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
