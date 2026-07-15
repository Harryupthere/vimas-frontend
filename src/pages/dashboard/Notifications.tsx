import { useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import { Package, Gift, Tag, Bell, Check } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Notification {
  id: number;
  type: 'order' | 'reward' | 'promotion' | 'system';
  icon: LucideIcon;
  title: string;
  message: string;
  time: string;
  read: boolean;
  color: string;
}

const notifications: Notification[] = [
  { id: 1, type: 'order', icon: Package, title: 'Order Shipped', message: 'Your order #VGV20250710001 has been shipped and is on its way.', time: '2 hours ago', read: false, color: 'text-blue-600 bg-blue-500/10' },
  { id: 2, type: 'reward', icon: Gift, title: 'Points Expiring Soon', message: 'You have 320 points expiring on July 31, 2025. Redeem them now!', time: '5 hours ago', read: false, color: 'text-amber-600 bg-amber-500/10' },
  { id: 3, type: 'promotion', icon: Tag, title: 'Gold Member Exclusive Offer', message: 'Enjoy 20% off all premium rewards this week. Limited time only.', time: '1 day ago', read: false, color: 'text-emerald-600 bg-emerald-500/10' },
  { id: 4, type: 'order', icon: Package, title: 'Order Delivered', message: 'Your order #VGV20250628002 has been delivered. Enjoy!', time: '2 days ago', read: true, color: 'text-emerald-600 bg-emerald-500/10' },
  { id: 5, type: 'system', icon: Bell, title: 'Profile Updated', message: 'Your profile information has been successfully updated.', time: '3 days ago', read: true, color: 'text-slate-500 bg-slate-500/10' },
  { id: 6, type: 'reward', icon: Gift, title: 'Reward Redeemed', message: 'Your Premium Polo Shirt redemption is being processed.', time: '1 week ago', read: true, color: 'text-amber-600 bg-amber-500/10' },
];

const filters = [
  { id: 'all', label: 'All' },
  { id: 'order', label: 'Order Updates' },
  { id: 'reward', label: 'Rewards' },
  { id: 'promotion', label: 'Promotions' },
  { id: 'system', label: 'System' },
] as const;

export default function Notifications() {
  const [filter, setFilter] = useState<string>('all');

  const filtered = filter === 'all' ? notifications : notifications.filter((n) => n.type === filter);
  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Notifications</h1>
          <p className="text-sm text-muted-foreground">{unreadCount} unread notifications</p>
        </div>
        <Button variant="outline" className="gap-1.5">
          <Check className="h-4 w-4" /> Mark all read
        </Button>
      </div>

      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              filter === f.id ? 'bg-primary text-primary-foreground' : 'border border-border bg-card text-foreground hover:bg-muted'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {filtered.map((n) => (
          <Card key={n.id} className={`flex gap-4 rounded-2xl p-4 shadow-sm transition-colors hover:bg-muted/30 ${!n.read ? 'ring-1 ring-primary/10' : ''}`}>
            <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl ${n.color}`}>
              <n.icon className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold text-foreground">{n.title}</h3>
                {!n.read && <span className="h-2 w-2 flex-shrink-0 rounded-full bg-primary" />}
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{n.message}</p>
              <p className="mt-2 text-xs text-muted-foreground">{n.time}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
