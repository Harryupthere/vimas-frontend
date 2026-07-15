import { useState } from 'react';
import { Search, Download } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import StatusBadge from './components/StatusBadge';
import { sampleOrders, type OrderStatus } from './mockData';

export default function PurchaseHistory() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<OrderStatus | 'all'>('all');

  const filtered = sampleOrders
    .filter((o) => !search || o.order_number.toLowerCase().includes(search.toLowerCase()) || o.product.toLowerCase().includes(search.toLowerCase()))
    .filter((o) => statusFilter === 'all' || o.status === statusFilter);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Purchase History</h1>
        <p className="text-sm text-muted-foreground">Track all your purchases in one place</p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by order number or product..."
            className="pl-10"
          />
        </div>
        <Select value={statusFilter} onValueChange={(value) => setStatusFilter(value as OrderStatus | 'all')}>
          <SelectTrigger className="sm:w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="processing">Processing</SelectItem>
            <SelectItem value="shipped">Shipped</SelectItem>
            <SelectItem value="delivered">Delivered</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {filtered.length === 0 ? (
        <Card className="rounded-2xl p-12 text-center">
          <p className="text-muted-foreground">No purchases found</p>
        </Card>
      ) : (
        <div className="relative space-y-4 before:absolute before:left-[19px] before:top-2 before:h-full before:w-px before:bg-border">
          {filtered.map((order, i) => (
            <div key={order.id} className="relative flex animate-slide-up gap-4" style={{ animationDelay: `${i * 0.05}s` }}>
              <div className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary bg-card">
                <div className="h-3 w-3 rounded-full bg-primary" />
              </div>
              <Card className="flex-1 rounded-2xl p-4 shadow-sm">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-foreground">{order.product}</h3>
                    <p className="text-sm text-muted-foreground">Order #{order.order_number}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-foreground">RM{order.total.toFixed(2)}</p>
                    <p className="text-sm font-medium text-amber-600">+{order.points_earned} pts</p>
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap items-center gap-3 border-t border-border pt-3">
                  <span className="text-sm text-muted-foreground">{new Date(order.date).toLocaleDateString()}</span>
                  <StatusBadge status={order.status} />
                  <button className="ml-auto flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80">
                    <Download className="h-3.5 w-3.5" /> Invoice
                  </button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
