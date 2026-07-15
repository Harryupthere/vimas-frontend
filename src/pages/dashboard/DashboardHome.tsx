import { useNavigate } from 'react-router-dom';
import { TrendingUp, Award, Package, Gift, Crown, ArrowRight, Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import StatsCard from './components/StatsCard';
import { MEMBER_SINCE, USER_NAME, USER_TIER, sampleOrders } from './mockData';

const featuredPromotions = [
  { title: 'New Arrivals', subtitle: 'Discover the latest premium products', gradient: 'from-primary to-primary/70', icon: Sparkles },
  { title: 'Limited Offers', subtitle: 'Exclusive deals for Gold Members', gradient: 'from-amber-500 to-orange-600', icon: Crown },
  { title: 'Seasonal Promotions', subtitle: 'Festive rewards await you', gradient: 'from-slate-700 to-slate-900', icon: Gift },
];

const recentOrders = sampleOrders.slice(0, 5);

export default function DashboardHome() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="relative animate-slide-up overflow-hidden rounded-2xl bg-gradient-to-br from-[#0D1310] via-[#141C17] to-[#1B241E] p-6 lg:p-8">
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative">
          <p className="text-sm font-medium text-[#EDE8DA]/80">Good Morning,</p>
          <h1 className="mt-1 text-2xl font-bold text-white lg:text-3xl">Welcome back, {USER_NAME}</h1>
          <div className="mt-4 flex flex-wrap gap-3">
            <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 ring-1 ring-white/10">
              <span className="text-xs font-medium text-[#EDE8DA]/70">Member Since</span>
              <span className="text-sm font-bold text-white">{MEMBER_SINCE}</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-primary/20 px-3 py-1.5 ring-1 ring-primary/30">
              <Crown className="h-3.5 w-3.5 text-primary" />
              <span className="text-sm font-bold text-primary">{USER_TIER}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard icon={TrendingUp} label="Total Purchases" value="48" subtitle="RM 12,450.00" accent="brass" delay={0.05} />
        <StatsCard icon={Award} label="Current Reward Points" value="2,450" subtitle="220 to Platinum" accent="gold" delay={0.1} />
        <StatsCard icon={Package} label="Orders Completed" value="42" subtitle="2 in transit" accent="charcoal" delay={0.15} />
        <StatsCard icon={Gift} label="Rewards Redeemed" value="12" subtitle="RM 850 value" accent="brass" delay={0.2} />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2 rounded-2xl p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-lg font-semibold text-foreground">Reward Progress</h2>
              <p className="text-sm text-muted-foreground">Track your journey to Platinum</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 shadow-sm">
              <Crown className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className="mt-6">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Current Points</p>
                <p className="text-3xl font-bold text-foreground">780 <span className="text-base font-medium text-muted-foreground">Points</span></p>
              </div>
              <p className="text-sm font-medium text-amber-600">220 Points until Platinum</p>
            </div>
            <Progress value={78} className="mt-4 h-3" />
            <div className="mt-2 flex justify-between text-xs text-muted-foreground">
              <span>Gold (780 pts)</span>
              <span>Platinum (1,000 pts)</span>
            </div>
          </div>
        </Card>

        <Card className="rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-foreground">Quick Actions</h2>
          <div className="mt-4 space-y-2">
            <button onClick={() => navigate('/dashboard/rewards')} className="flex w-full items-center justify-between rounded-xl border border-border p-3 transition-colors hover:bg-muted">
              <span className="text-sm font-medium text-foreground">Redeem Rewards</span>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
            </button>
            <button onClick={() => navigate('/dashboard/orders')} className="flex w-full items-center justify-between rounded-xl border border-border p-3 transition-colors hover:bg-muted">
              <span className="text-sm font-medium text-foreground">Track Orders</span>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
            </button>
            <button onClick={() => navigate('/dashboard/purchase-history')} className="flex w-full items-center justify-between rounded-xl border border-border p-3 transition-colors hover:bg-muted">
              <span className="text-sm font-medium text-foreground">Purchase History</span>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
            </button>
            <button onClick={() => navigate('/dashboard/support')} className="flex w-full items-center justify-between rounded-xl border border-border p-3 transition-colors hover:bg-muted">
              <span className="text-sm font-medium text-foreground">Get Support</span>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>
        </Card>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-foreground">Featured Promotions</h2>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPromotions.map((promo, i) => (
            <div
              key={promo.title}
              className={`relative animate-slide-up overflow-hidden rounded-2xl bg-gradient-to-br ${promo.gradient} p-6 shadow-sm`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="absolute right-4 top-4 opacity-20">
                <promo.icon className="h-16 w-16 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white">{promo.title}</h3>
              <p className="mt-1 text-sm text-white/80">{promo.subtitle}</p>
              <button className="mt-4 flex items-center gap-1.5 rounded-lg bg-white/15 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/25">
                Learn More <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <Card className="rounded-2xl shadow-sm">
        <div className="flex items-center justify-between border-b border-border p-5">
          <h2 className="text-lg font-semibold text-foreground">Recent Purchases</h2>
          <button onClick={() => navigate('/dashboard/purchase-history')} className="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80">
            View All <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="px-5">Order Number</TableHead>
              <TableHead className="px-5">Date</TableHead>
              <TableHead className="px-5">Product</TableHead>
              <TableHead className="px-5">Amount</TableHead>
              <TableHead className="px-5">Points Earned</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="px-5 py-3 font-medium text-foreground">{order.order_number}</TableCell>
                <TableCell className="px-5 py-3 text-muted-foreground">{new Date(order.date).toLocaleDateString()}</TableCell>
                <TableCell className="px-5 py-3 text-foreground">{order.product}</TableCell>
                <TableCell className="px-5 py-3 font-medium text-foreground">RM{order.total.toFixed(2)}</TableCell>
                <TableCell className="px-5 py-3"><span className="font-medium text-amber-600">+{order.points_earned}</span></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
