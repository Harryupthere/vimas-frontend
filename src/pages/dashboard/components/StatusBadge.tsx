import { Badge } from '@/components/ui/badge';
import type { OrderStatus } from '../mockData';

const statusConfig: Record<OrderStatus, { label: string; className: string }> = {
  pending: { label: 'Pending', className: 'border-transparent bg-amber-500/15 text-amber-600 hover:bg-amber-500/15' },
  processing: { label: 'Processing', className: 'border-transparent bg-blue-500/15 text-blue-600 hover:bg-blue-500/15' },
  shipped: { label: 'Shipped', className: 'border-transparent bg-purple-500/15 text-purple-600 hover:bg-purple-500/15' },
  delivered: { label: 'Delivered', className: 'border-transparent bg-emerald-500/15 text-emerald-600 hover:bg-emerald-500/15' },
};

export default function StatusBadge({ status }: { status: OrderStatus }) {
  const config = statusConfig[status] ?? statusConfig.pending;
  return <Badge className={config.className}>{config.label}</Badge>;
}
