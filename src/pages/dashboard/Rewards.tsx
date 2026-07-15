import { useState } from 'react';
import { Award, History, Check } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import RewardCard from './components/RewardCard';
import RewardRedeemDialog from './components/RewardRedeemDialog';
import { USER_POINTS, redemptionHistory, sampleRewards, type Reward } from './mockData';

const categories = [
  { id: 'all', label: 'All Rewards' },
  { id: 'apparel', label: 'Apparel' },
  { id: 'vouchers', label: 'Vouchers' },
  { id: 'lifestyle', label: 'Lifestyle' },
  { id: 'premium', label: 'Premium Rewards' },
] as const;

export default function Rewards() {
  const [selectedReward, setSelectedReward] = useState<Reward | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filtered = activeCategory === 'all' ? sampleRewards : sampleRewards.filter((r) => r.category === activeCategory);

  return (
    <div className="space-y-6">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0D1310] via-[#141C17] to-[#1B241E] p-6 lg:p-8">
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-[#EDE8DA]/80">Current Balance</p>
            <p className="mt-1 text-4xl font-bold text-white">{USER_POINTS.toLocaleString()} <span className="text-lg font-medium text-[#EDE8DA]/70">Points</span></p>
            <p className="mt-2 text-sm text-[#EDE8DA]/60">Earn 1 point for every RM1 spent</p>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-600">
              <Award className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-xs text-[#EDE8DA]/70">Your Tier</p>
              <p className="font-bold text-primary">Gold Member</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              activeCategory === cat.id ? 'bg-primary text-primary-foreground' : 'border border-border bg-card text-foreground hover:bg-muted'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((reward) => (
          <RewardCard key={reward.id} reward={reward} userPoints={USER_POINTS} onRedeem={setSelectedReward} />
        ))}
      </div>

      <Card className="rounded-2xl shadow-sm">
        <div className="flex items-center gap-2 border-b border-border p-5">
          <History className="h-5 w-5 text-muted-foreground" />
          <h2 className="text-lg font-semibold text-foreground">Redemption History</h2>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="px-5">Reward</TableHead>
              <TableHead className="px-5">Points Used</TableHead>
              <TableHead className="px-5">Date</TableHead>
              <TableHead className="px-5">Status</TableHead>
              <TableHead className="px-5">Tracking Number</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {redemptionHistory.map((r) => (
              <TableRow key={r.tracking}>
                <TableCell className="px-5 py-3 font-medium text-foreground">{r.reward}</TableCell>
                <TableCell className="px-5 py-3 text-amber-600">{r.points}</TableCell>
                <TableCell className="px-5 py-3 text-muted-foreground">{new Date(r.date).toLocaleDateString()}</TableCell>
                <TableCell className="px-5 py-3">
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-xs font-medium text-emerald-600">
                    <Check className="h-3 w-3" /> {r.status}
                  </span>
                </TableCell>
                <TableCell className="px-5 py-3 font-mono text-xs text-muted-foreground">{r.tracking}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      <RewardRedeemDialog
        reward={selectedReward}
        userPoints={USER_POINTS}
        onClose={() => setSelectedReward(null)}
        onConfirm={() => setSelectedReward(null)}
      />
    </div>
  );
}
