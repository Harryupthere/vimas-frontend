import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FaqItem from '../components/FaqItem';
import './Faq.scss';

interface FaqEntry { question: string; answer: string; }
interface FaqGroup { heading: string; items: FaqEntry[]; }

const faqGroups: FaqGroup[] = [
  {
    heading: 'Group Buying & Targets',
    items: [
      {
        question: 'How is a group buying target set?',
        answer: "Each product listing has a target number of units or total sales value, set by the merchant when they list it. As shoppers buy in, the group's progress bar (the ring you see on product pages) fills toward that target. Merchants set realistic targets based on typical demand, so most groups close within days to a few weeks.",
      },
      {
        question: "What happens if a group doesn't hit its target?",
        answer: 'You still receive the product you purchased at the price shown at checkout, and you still earn your standard purchase points. The only thing you miss is the bonus group-target reward, which only unlocks once the full group goal is reached.',
      },
      {
        question: "Can I track my group's progress?",
        answer: "Yes. Every product page and your account dashboard show a live ring tracking total group progress and your personal contribution to it.",
      },
    ],
  },
  {
    heading: 'Points & Redemption',
    items: [
      {
        question: 'How many points do I earn per purchase?',
        answer: "Points are calculated as a percentage of the purchase price and shown on every product listing before you buy, so there's no guesswork at checkout.",
      },
      {
        question: 'Do points expire?',
        answer: "No. Points stay in your account until you redeem them — there's no clock running against your balance.",
      },
      {
        question: 'What can I redeem points for?',
        answer: "Points can be applied as a discount at checkout, converted to a cash payout on your monthly cycle, or saved toward a fully free product once your group's target bonus unlocks.",
      },
    ],
  },
  {
    heading: 'Hybrid Affiliate Structure',
    items: [
      {
        question: 'How does the hybrid structure work?',
        answer: "You earn points on your own purchases, plus a percentage of the points generated when people you personally referred (Tier 1) shop, and a smaller percentage when their referrals (Tier 2) shop. All network rewards are tied to real purchases made somewhere in the chain — there's no reward for recruitment alone.",
      },
      {
        question: 'Is there a cost to build a team?',
        answer: 'No. Joining and referring is free. You never have to buy inventory or pay a fee to earn network rewards.',
      },
      {
        question: 'Is there a limit to how many tiers I can earn from?',
        answer: 'The hybrid structure currently pays across two tiers — your direct referrals and their referrals — detailed with exact percentages on the Rewards page.',
      },
    ],
  },
  {
    heading: 'Payments & Payouts',
    items: [
      {
        question: 'When do cash rewards get paid out?',
        answer: 'Cash rewards are calculated and released on a fixed monthly payout cycle. You can see your pending and paid amounts anytime in your account dashboard.',
      },
      {
        question: 'How do merchants get paid?',
        answer: 'Merchant payouts follow order fulfillment and are released on a rolling schedule from the merchant dashboard, net of the applicable commission.',
      },
      {
        question: 'What payment methods are accepted?',
        answer: 'Checkout supports major debit and credit cards. Additional payout methods for cash rewards are managed in your account settings.',
      },
    ],
  },
];

export default function Faq() {
  const [openKey, setOpenKey] = useState<string>('0-0');

  return (
    <>
      <Navbar />

      <section className="hero faq-hero">
        <div className="container faq-hero__container">
          <span className="eyebrow">FAQs</span>
          <h1 className="faq-hero__title">Questions, <em>answered</em></h1>
          <p className="faq-hero__lede">Everything about group targets, points, the hybrid structure, and payouts.</p>
        </div>
      </section>

      <section className="faq-section">
        <div className="container faq-section__container">
          {faqGroups.map((group, gi) => (
            <div key={group.heading}>
              <h3 className="faq-group-heading">{group.heading}</h3>
              {group.items.map((item, ii) => {
                const key = `${gi}-${ii}`;
                return (
                  <FaqItem
                    key={key}
                    question={item.question}
                    answer={item.answer}
                    open={openKey === key}
                    onToggle={() => setOpenKey(openKey === key ? '' : key)}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="container">
          <div className="cta-insert">
            <h2>Still have a question?</h2>
            <Link to="/contact" className="btn btn-dark btn-lg">Contact Support</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
