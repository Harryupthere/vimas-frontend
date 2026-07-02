import { useInViewAnimation } from '../hooks/useInViewAnimation';
import './GrowthRing.scss';

interface GrowthRingProps {
  pct: number;
  radius?: number;
  strokeWidth?: number;
  size?: number;
  color?: 'brass' | 'sage';
  label?: string;
  centerContent?: React.ReactNode;
}

export default function GrowthRing({
  pct,
  radius = 98,
  strokeWidth = 18,
  size = 240,
  color = 'brass',
  label,
  centerContent,
}: GrowthRingProps) {
  const { ref, inView } = useInViewAnimation();
  const circumference = 2 * Math.PI * radius;
  const offset = inView ? circumference - (pct / 100) * circumference : circumference;

  return (
    <div className="ring-wrap">
      <svg viewBox={`0 0 ${size} ${size}`}>
        <circle className="ring-bg" cx={size / 2} cy={size / 2} r={radius} strokeWidth={strokeWidth} />
        <circle
          ref={ref}
          className={`ring-fill ring-fill--${color}`}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: offset,
            transition: 'stroke-dashoffset 1.1s cubic-bezier(.4,0,.2,1)',
          }}
        />
      </svg>
      <div className="ring-center">
        {centerContent ?? <div className="num">{pct}%</div>}
        {label && <div className="lbl">{label}</div>}
      </div>
    </div>
  );
}
