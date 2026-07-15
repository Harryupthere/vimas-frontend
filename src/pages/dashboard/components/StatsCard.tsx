import type { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  subtitle?: string;
  accent?: 'brass' | 'gold' | 'charcoal';
  delay?: number;
}

const accentColors: Record<NonNullable<StatsCardProps['accent']>, string> = {
  brass: 'from-primary to-primary/70 text-primary-foreground',
  gold: 'from-amber-400 to-amber-600 text-white',
  charcoal: 'from-slate-700 to-slate-900 text-white',
};

export default function StatsCard({ icon: Icon, label, value, subtitle, accent = 'brass', delay = 0 }: StatsCardProps) {
  return (
    <div
      className="group animate-slide-up rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:shadow-md lg:p-6"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-muted-foreground">{label}</p>
          <p className="mt-2 text-2xl font-bold tracking-tight text-foreground lg:text-3xl">{value}</p>
          {subtitle && <p className="mt-1 text-xs text-muted-foreground">{subtitle}</p>}
        </div>
        <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${accentColors[accent]} shadow-sm transition-transform group-hover:scale-105 lg:h-12 lg:w-12`}>
          <Icon className="h-5 w-5 lg:h-6 lg:w-6" />
        </div>
      </div>
    </div>
  );
}
