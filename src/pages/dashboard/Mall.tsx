import { Sparkles, Crown, Gift } from 'lucide-react';
import ProductCard from './components/ProductCard';
import { sampleProducts } from './mockData';

const collections = [
  { title: 'New Arrivals', subtitle: 'Discover the latest premium products', gradient: 'from-primary to-primary/70', icon: Sparkles },
  { title: 'Limited Offers', subtitle: 'Exclusive deals for Gold Members', gradient: 'from-amber-500 to-orange-600', icon: Crown },
  { title: 'Seasonal Promotions', subtitle: 'Festive rewards await you', gradient: 'from-slate-700 to-slate-900', icon: Gift },
];

export default function Mall() {
  const newArrivals = sampleProducts.filter((p) => p.new_arrival).slice(0, 4);
  const bestSellers = sampleProducts.filter((p) => p.best_seller).slice(0, 4);

  return (
    <div className="space-y-8">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0D1310] via-[#141C17] to-[#1B241E] p-6 lg:p-8">
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative">
          <p className="text-sm font-medium text-[#EDE8DA]/80">Vimas Mall</p>
          <h1 className="mt-1 text-2xl font-bold text-white lg:text-3xl">Curated collections, just for Gold Members</h1>
          <p className="mt-2 max-w-xl text-sm text-[#EDE8DA]/70">Shop featured drops and earn reward points on every purchase.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {collections.map((c) => (
          <div key={c.title} className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${c.gradient} p-6 shadow-sm`}>
            <div className="absolute right-4 top-4 opacity-20">
              <c.icon className="h-16 w-16 text-white" />
            </div>
            <h3 className="text-lg font-bold text-white">{c.title}</h3>
            <p className="mt-1 text-sm text-white/80">{c.subtitle}</p>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-lg font-semibold text-foreground">New Arrivals</h2>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-foreground">Best Sellers</h2>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-foreground">All Products</h2>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sampleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
