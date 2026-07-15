import { Gift } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import type { Reward } from '../mockData';

interface RewardRedeemDialogProps {
  reward: Reward | null;
  userPoints: number;
  onClose: () => void;
  onConfirm: (reward: Reward) => void;
}

export default function RewardRedeemDialog({ reward, userPoints, onClose, onConfirm }: RewardRedeemDialogProps) {
  if (!reward) return null;
  const remaining = userPoints - reward.required_points;

  return (
    <Dialog open={!!reward} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md bg-card">
        <div className="flex flex-col items-center text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 shadow-lg">
            <Gift className="h-8 w-8 text-white" />
          </div>
          <h3 className="mt-4 text-xl font-bold text-foreground">Redeem {reward.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{reward.description}</p>
        </div>

        <div className="mt-2 space-y-3 rounded-xl bg-muted p-4">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Cost</span>
            <span className="font-semibold text-foreground">{reward.required_points} Points</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Current Balance</span>
            <span className="font-semibold text-foreground">{userPoints.toLocaleString()} Points</span>
          </div>
          <div className="h-px bg-border" />
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Remaining After Redemption</span>
            <span className="font-bold text-primary">{remaining.toLocaleString()} Points</span>
          </div>
        </div>

        <div className="mt-2 flex gap-3">
          <Button variant="outline" onClick={onClose} className="flex-1">
            Cancel
          </Button>
          <Button onClick={() => onConfirm(reward)} className="flex-1">
            Redeem Now
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
