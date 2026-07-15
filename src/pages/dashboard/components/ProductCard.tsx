import { useState } from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Product } from '../mockData';

export default function ProductCard({ product }: { product: Product }) {
  const [wishlisted, setWishlisted] = useState(false);
  const [added, setAdded] = useState(false);
  const outOfStock = product.stock_status === 'out_of_stock';

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1100);
  };

  return (
    <Card className="group flex flex-col overflow-hidden rounded-2xl shadow-sm transition-all hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img src={product.image_url} alt={product.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <button
          onClick={() => setWishlisted((w) => !w)}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm transition-colors hover:bg-black/60"
        >
          <Heart className={`h-4 w-4 ${wishlisted ? 'fill-red-500 text-red-500' : 'text-white'}`} />
        </button>
        {product.stock_status === 'low_stock' && (
          <Badge className="absolute bottom-3 left-3 border-transparent bg-amber-500/90 text-white hover:bg-amber-500/90">Low Stock</Badge>
        )}
        {outOfStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <span className="rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-slate-900">Out of Stock</span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-semibold text-foreground">{product.name}</h3>
        <p className="mt-1 flex-1 text-sm text-muted-foreground">{product.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-bold text-foreground">${product.price.toFixed(2)}</span>
          <span className="text-xs font-medium text-amber-600">+{product.reward_points} pts</span>
        </div>
        <Button onClick={handleAddToCart} disabled={outOfStock} className="mt-3 w-full gap-2">
          <ShoppingCart className="h-4 w-4" /> {added ? 'Added ✓' : 'Add to Cart'}
        </Button>
      </div>
    </Card>
  );
}
