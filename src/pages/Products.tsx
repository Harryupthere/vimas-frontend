import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GrowthRing from '../components/GrowthRing';
import './Products.scss';

interface Product {
  id: string;
  name: string;
  seller: string;
  price: string;
  points: string;
  category: string;
  categoryLabel: string;
}

const categories = [
  { key: 'all', label: 'All' },
  { key: 'fashion', label: 'Fashion' },
  { key: 'electronics', label: 'Electronics' },
  { key: 'handmade', label: 'Handmade Goods' },
  { key: 'groceries', label: 'Groceries' },
  { key: 'beauty', label: 'Beauty' },
];

const products: Product[] = [
  { id: 'p1', name: 'Woven Linen Overshirt', seller: 'Northfield Studio', price: '$42.00', points: '+84 pts', category: 'fashion', categoryLabel: 'Fashion' },
  { id: 'p2', name: 'Wireless Earbuds Pro', seller: 'Circuit & Co.', price: '$59.00', points: '+118 pts', category: 'electronics', categoryLabel: 'Electronics' },
  { id: 'p3', name: 'Stoneware Pour-Over Set', seller: 'Kiln & Clay', price: '$36.00', points: '+72 pts', category: 'handmade', categoryLabel: 'Handmade' },
  { id: 'p4', name: 'Cold-Pressed Olive Oil, 1L', seller: 'Harvest Table Co-op', price: '$19.00', points: '+38 pts', category: 'groceries', categoryLabel: 'Groceries' },
  { id: 'p5', name: 'Vitamin C Serum', seller: 'Lumen Skin Lab', price: '$28.00', points: '+56 pts', category: 'beauty', categoryLabel: 'Beauty' },
  { id: 'p6', name: 'Recycled Wool Scarf', seller: 'Northfield Studio', price: '$24.00', points: '+48 pts', category: 'fashion', categoryLabel: 'Fashion' },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [cartCount, setCartCount] = useState(0);
  const [addedId, setAddedId] = useState<string | null>(null);

  const visibleProducts = activeCategory === 'all'
    ? products
    : products.filter((p) => p.category === activeCategory);

  const handleAddToCart = (id: string) => {
    setCartCount((c) => c + 1);
    setAddedId(id);
    setTimeout(() => setAddedId(null), 1100);
  };

  return (
    <>
      <Navbar cartCount={cartCount} />

      <section className="hero products-hero">
        <div className="container products-hero__container">
          <span className="eyebrow">Marketplace</span>
          <h1 className="products-hero__title">Group-buy pricing, one shared target at a time</h1>
          <p className="products-hero__lede">Every listing shows the group's progress toward its buying target in real time. Buy in, earn points, and watch the ring fill.</p>
        </div>
      </section>

      <section className="products-section">
        <div className="container">
          <div className="tag-nav">
            {categories.map((cat) => (
              <button
                key={cat.key}
                className={activeCategory === cat.key ? 'active' : ''}
                onClick={() => setActiveCategory(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid-3 products-grid">
            {visibleProducts.map((product) => (
              <div className="prod-card" key={product.id}>
                <div className="prod-img">{product.categoryLabel}</div>
                <div className="prod-body">
                  <h3 className="prod-body__title">{product.name}</h3>
                  <p className="prod-body__seller">Sold by {product.seller}</p>
                  <div className="prod-body__row">
                    <span className="prod-body__price">{product.price}</span>
                    <span className="prod-points">{product.points}</span>
                  </div>
                  <button className="btn btn-primary add-cart" onClick={() => handleAddToCart(product.id)}>
                    {addedId === product.id ? 'Added ✓' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="container products-detail">
          <div className="prod-img products-detail__img">Wireless Earbuds Pro</div>
          <div>
            <span className="pill">Group buy in progress</span>
            <h2 className="products-detail__title">Wireless Earbuds Pro</h2>
            <p>214 shoppers in this group so far. Once the group reaches 300 units sold, every buyer in it unlocks a bonus 150 points.</p>
            <div className="products-detail__stats">
              <div className="products-detail__ring">
                <GrowthRing pct={71} strokeWidth={20} centerContent={<div className="num products-detail__ring-num">71%</div>} />
              </div>
              <div>
                <div className="products-detail__price">$59.00</div>
                <div className="prod-points">+118 points on purchase</div>
              </div>
            </div>
            <button
              className="btn btn-dark btn-lg add-cart"
              onClick={() => handleAddToCart('earbuds-detail')}
            >
              {addedId === 'earbuds-detail' ? 'Added ✓' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="container products-merchant-cta">
          <span className="eyebrow products-merchant-cta__eyebrow">Selling on Vimas</span>
          <h2>Have products to sell? Reach a buyer pool that shows up ready.</h2>
          <p>Register as a merchant to list products, manage orders, and track sales performance from a dedicated dashboard.</p>
          <Link to="/join" className="btn btn-outline btn-lg">Start Selling</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
