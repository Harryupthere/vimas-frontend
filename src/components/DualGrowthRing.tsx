import { useInViewAnimation } from '../hooks/useInViewAnimation';
import './GrowthRing.scss';

interface RingSpec {
  pct: number;
  radius: number;
  strokeWidth: number;
  color?: 'brass' | 'sage';
}

interface DualGrowthRingProps {
  outer: RingSpec;
  inner: RingSpec;
  size?: number;
  label?: string;
}

function useRingOffset(radius: number, pct: number) {
  const { ref, inView } = useInViewAnimation();
  const circumference = 2 * Math.PI * radius;
  const offset = inView ? circumference - (pct / 100) * circumference : circumference;
  return { ref, circumference, offset };
}

export default function DualGrowthRing({ outer, inner, size = 240, label }: DualGrowthRingProps) {
  const outerRing = useRingOffset(outer.radius, outer.pct);
  const innerRing = useRingOffset(inner.radius, inner.pct);

  return (
    <div className="ring-wrap">
      <svg viewBox={`0 0 ${size} ${size}`}>
        <circle className="ring-bg" cx={size / 2} cy={size / 2} r={outer.radius} strokeWidth={outer.strokeWidth} />
        <circle className="ring-bg" cx={size / 2} cy={size / 2} r={inner.radius} strokeWidth={inner.strokeWidth} />
        <circle
          ref={outerRing.ref}
          className={`ring-fill ring-fill--${outer.color ?? 'brass'}`}
          cx={size / 2}
          cy={size / 2}
          r={outer.radius}
          strokeWidth={outer.strokeWidth}
          style={{
            strokeDasharray: outerRing.circumference,
            strokeDashoffset: outerRing.offset,
            transition: 'stroke-dashoffset 1.1s cubic-bezier(.4,0,.2,1)',
          }}
        />
        <circle
          ref={innerRing.ref}
          className={`ring-fill ring-fill--${inner.color ?? 'sage'}`}
          cx={size / 2}
          cy={size / 2}
          r={inner.radius}
          strokeWidth={inner.strokeWidth}
          style={{
            strokeDasharray: innerRing.circumference,
            strokeDashoffset: innerRing.offset,
            transition: 'stroke-dashoffset 1.1s cubic-bezier(.4,0,.2,1)',
          }}
        />
      </svg>
      <div className="ring-center">
        <div className="num">{outer.pct}%</div>
        {label && <div className="lbl">{label}</div>}
      </div>
    </div>
  );
}
