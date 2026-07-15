import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Reward } from '../mockData';

interface RewardCardProps {
  reward: Reward;
  onRedeem: (reward: Reward) => void;
  userPoints: number;
}

export default function RewardCard({ reward, onRedeem, userPoints }: RewardCardProps) {
  const canRedeem = userPoints >= reward.required_points && reward.available !== false;
  const deficit = reward.required_points - userPoints;

  return (
    <Card className="group flex flex-col overflow-hidden rounded-2xl shadow-sm transition-all hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img src={reward.image_url} alt={reward.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-3 left-3 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
          {reward.required_points} pts
        </div>
        {reward.available === false && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <span className="rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-slate-900">Out of Stock</span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-semibold text-foreground">{reward.name}</h3>
        <p className="mt-1 flex-1 text-sm text-muted-foreground">{reward.description}</p>
        <Button onClick={() => onRedeem(reward)} disabled={!canRedeem} className="mt-4 w-full">
          {canRedeem ? 'Redeem Now' : `Need ${deficit} more pts`}
        </Button>
      </div>
    </Card>
  );
}
