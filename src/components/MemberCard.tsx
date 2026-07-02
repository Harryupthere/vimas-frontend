import GrowthRing from './GrowthRing';
import './MemberCard.scss';

export default function MemberCard() {
  return (
    <div className="member-card">
      <div className="mc-top">
        <div className="mc-brand">Vimas</div>
        <div className="mc-tier">Founding Member</div>
      </div>
      <div className="mc-mid">
        <div className="mc-ring">
          <GrowthRing pct={78} radius={98} strokeWidth={18} centerContent={<div className="num mc-ring-num">78%</div>} />
        </div>
        <div>
          <div className="mc-label">Group Target</div>
          <div className="mc-number">234 / 300 units</div>
          <div className="mc-label" style={{ marginTop: 10 }}>Points Balance</div>
          <div className="mc-number">1,280 pts</div>
        </div>
      </div>
      <div className="mc-bottom">
        <div className="mc-number">No. 004821</div>
        <div className="mc-url">vimasgv.com</div>
      </div>
    </div>
  );
}
