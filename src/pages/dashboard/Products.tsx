import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ProductCard from './components/ProductCard';
import { sampleProducts } from './mockData';

const categories = [
  { id: 'all', label: 'All Categories' },
  { id: 'fashion', label: 'Fashion' },
  { id: 'electronics', label: 'Electronics' },
  { id: 'handmade', label: 'Handmade' },
  { id: 'groceries', label: 'Groceries' },
  { id: 'beauty', label: 'Beauty' },
];

const sortOptions = [
  { id: 'default', label: 'Default' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'points', label: 'Most Points' },
];

export default function Products() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [sortBy, setSortBy] = useState('default');

  const filtered = useMemo(() => {
    let result = sampleProducts
      .filter((p) => !search || p.name.toLowerCase().includes(search.toLowerCase()))
      .filter((p) => category === 'all' || p.category === category);

    if (sortBy === 'price-asc') result = [...result].sort((a, b) => a.price - b.price);
    if (sortBy === 'price-desc') result = [...result].sort((a, b) => b.price - a.price);
    if (sortBy === 'points') result = [...result].sort((a, b) => b.reward_points - a.reward_points);

    return result;
  }, [search, category, sortBy]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Products</h1>
        <p className="text-sm text-muted-foreground">Browse the marketplace and earn points on every purchase</p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search products..." className="pl-10" />
        </div>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="sm:w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {categories.map((c) => (
              <SelectItem key={c.id} value={c.id}>{c.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="sm:w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map((s) => (
              <SelectItem key={s.id} value={s.id}>{s.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {filtered.length === 0 ? (
        <p className="py-12 text-center text-muted-foreground">No products found</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
