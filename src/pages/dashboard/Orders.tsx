import { useState } from 'react';
import { Download, Truck, Eye } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import StatusBadge from './components/StatusBadge';
import { sampleOrders, type Order } from './mockData';

export default function Orders() {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Orders</h1>
        <p className="text-sm text-muted-foreground">Track and manage all your orders</p>
      </div>

      <Card className="overflow-hidden rounded-2xl shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="px-5">Order Number</TableHead>
              <TableHead className="px-5">Status</TableHead>
              <TableHead className="px-5">Date</TableHead>
              <TableHead className="px-5">Product</TableHead>
              <TableHead className="px-5">Total</TableHead>
              <TableHead className="px-5">Points</TableHead>
              <TableHead className="px-5 text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sampleOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="px-5 py-4 font-medium text-foreground">{order.order_number}</TableCell>
                <TableCell className="px-5 py-4"><StatusBadge status={order.status} /></TableCell>
                <TableCell className="px-5 py-4 text-muted-foreground">{new Date(order.date).toLocaleDateString()}</TableCell>
                <TableCell className="px-5 py-4 text-foreground">{order.product}</TableCell>
                <TableCell className="px-5 py-4 font-medium text-foreground">RM{order.total.toFixed(2)}</TableCell>
                <TableCell className="px-5 py-4 text-amber-600">+{order.points_earned}</TableCell>
                <TableCell className="px-5 py-4">
                  <div className="flex justify-end gap-1">
                    <button onClick={() => setSelectedOrder(order)} title="View Details" className="flex h-8 w-8 items-center justify-center rounded-lg border border-border hover:bg-muted">
                      <Eye className="h-3.5 w-3.5 text-muted-foreground" />
                    </button>
                    <button title="Download Invoice" className="flex h-8 w-8 items-center justify-center rounded-lg border border-border hover:bg-muted">
                      <Download className="h-3.5 w-3.5 text-muted-foreground" />
                    </button>
                    <button title="Track Shipment" className="flex h-8 w-8 items-center justify-center rounded-lg border border-border hover:bg-muted">
                      <Truck className="h-3.5 w-3.5 text-muted-foreground" />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      <Dialog open={!!selectedOrder} onOpenChange={(open) => !open && setSelectedOrder(null)}>
        <DialogContent className="max-w-lg bg-card">
          {selectedOrder && (
            <>
              <DialogHeader>
                <DialogTitle>Order Details</DialogTitle>
                <DialogDescription>#{selectedOrder.order_number}</DialogDescription>
              </DialogHeader>
              <div className="space-y-3">
                <div className="flex justify-between border-b border-border pb-3 text-sm">
                  <span className="text-muted-foreground">Product</span>
                  <span className="font-medium text-foreground">{selectedOrder.product}</span>
                </div>
                <div className="flex justify-between border-b border-border pb-3 text-sm">
                  <span className="text-muted-foreground">Date</span>
                  <span className="font-medium text-foreground">{new Date(selectedOrder.date).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between border-b border-border pb-3 text-sm">
                  <span className="text-muted-foreground">Status</span>
                  <StatusBadge status={selectedOrder.status} />
                </div>
                <div className="flex justify-between border-b border-border pb-3 text-sm">
                  <span className="text-muted-foreground">Total</span>
                  <span className="font-bold text-foreground">RM{selectedOrder.total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Points Earned</span>
                  <span className="font-medium text-amber-600">+{selectedOrder.points_earned} pts</span>
                </div>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1 gap-1.5">
                  <Download className="h-4 w-4" /> Invoice
                </Button>
                <Button className="flex-1 gap-1.5">
                  <Truck className="h-4 w-4" /> Track Shipment
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
