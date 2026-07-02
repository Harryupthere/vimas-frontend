import { useMemo, useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Checkout.scss';

interface OrderItem {
  id: string;
  name: string;
  seller: string;
  qty: number;
  price: number;
  points: number;
}

const orderItems: OrderItem[] = [
  { id: 'p2', name: 'Wireless Earbuds Pro', seller: 'Circuit & Co.', qty: 1, price: 59.0, points: 118 },
  { id: 'p1', name: 'Woven Linen Overshirt', seller: 'Northfield Studio', qty: 1, price: 42.0, points: 84 },
];

const POINTS_BALANCE = 1280;
const POINTS_DISCOUNT = 5.0;
const POINTS_COST = 500;

export default function Checkout() {
  const [redeemPoints, setRedeemPoints] = useState(false);
  const [placed, setPlaced] = useState(false);

  const subtotal = useMemo(
    () => orderItems.reduce((sum, item) => sum + item.price * item.qty, 0),
    [],
  );
  const pointsEarned = useMemo(
    () => orderItems.reduce((sum, item) => sum + item.points * item.qty, 0),
    [],
  );
  const discount = redeemPoints ? POINTS_DISCOUNT : 0;
  const total = Math.max(subtotal - discount, 0);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPlaced(true);
  };

  const handlePlaceAnother = () => {
    setPlaced(false);
    setRedeemPoints(false);
  };

  if (placed) {
    return (
      <>
        <Navbar cartCount={0} />
        <section className="hero checkout-confirm">
          <div className="container checkout-confirm__container">
            <span className="pill">Order confirmed</span>
            <h1 className="checkout-confirm__title">You're in the group — <em>thank you</em></h1>
            <p className="checkout-confirm__lede">
              A confirmation has been sent to your email. You earned <strong>+{pointsEarned} points</strong> toward
              your next reward, and your order counts toward every group target it touches.
            </p>
            <div className="checkout-confirm__ctas">
              <Link to="/products" className="btn btn-primary btn-lg">Continue Shopping</Link>
              <button className="btn btn-outline btn-lg" onClick={handlePlaceAnother}>Place Another Order</button>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar cartCount={orderItems.length} />

      <section className="hero checkout-hero">
        <div className="container checkout-hero__container">
          <span className="eyebrow">Checkout</span>
          <h1 className="checkout-hero__title">Almost there — <em>lock in</em> your group buy</h1>
          <p className="checkout-hero__lede">Review your order, apply your points, and confirm shipping and payment details.</p>
        </div>
      </section>

      <section className="checkout-section">
        <div className="container checkout-grid">
          <form className="checkout-forms" onSubmit={handleSubmit}>
            <div className="card checkout-card">
              <h3>Shipping details</h3>
              <div className="form-field">
                <label htmlFor="co-name">Full name</label>
                <input id="co-name" type="text" placeholder="Jane Doe" required />
              </div>
              <div className="form-field">
                <label htmlFor="co-email">Email</label>
                <input id="co-email" type="email" placeholder="you@example.com" required />
              </div>
              <div className="form-field">
                <label htmlFor="co-address">Street address</label>
                <input id="co-address" type="text" placeholder="123 Market Street" required />
              </div>
              <div className="form-field checkout-row-3">
                <div>
                  <label htmlFor="co-city">City</label>
                  <input id="co-city" type="text" placeholder="Austin" required />
                </div>
                <div>
                  <label htmlFor="co-state">State</label>
                  <input id="co-state" type="text" placeholder="TX" required />
                </div>
                <div>
                  <label htmlFor="co-zip">ZIP</label>
                  <input id="co-zip" type="text" placeholder="73301" required />
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="co-country">Country</label>
                <select id="co-country" defaultValue="United States">
                  <option>United States</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                  <option>Australia</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="card checkout-card">
              <h3>Payment</h3>
              <div className="form-field">
                <label htmlFor="co-card-name">Name on card</label>
                <input id="co-card-name" type="text" placeholder="Jane Doe" required />
              </div>
              <div className="form-field">
                <label htmlFor="co-card-number">Card number</label>
                <input id="co-card-number" type="text" inputMode="numeric" placeholder="4242 4242 4242 4242" required />
              </div>
              <div className="form-field checkout-row-2">
                <div>
                  <label htmlFor="co-expiry">Expiry (MM/YY)</label>
                  <input id="co-expiry" type="text" placeholder="08/28" required />
                </div>
                <div>
                  <label htmlFor="co-cvc">CVC</label>
                  <input id="co-cvc" type="text" inputMode="numeric" placeholder="123" required />
                </div>
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-lg checkout-submit">
              Place Order — ${total.toFixed(2)}
            </button>
          </form>

          <aside className="checkout-summary">
            <div className="card checkout-card">
              <h3>Order summary</h3>
              <div className="checkout-items">
                {orderItems.map((item) => (
                  <div className="checkout-item" key={item.id}>
                    <div className="prod-img checkout-item__thumb">{item.name.split(' ')[0]}</div>
                    <div className="checkout-item__body">
                      <h4 className="checkout-item__name">{item.name}</h4>
                      <p className="checkout-item__seller">Sold by {item.seller} · Qty {item.qty}</p>
                    </div>
                    <div className="checkout-item__price">
                      <span>${(item.price * item.qty).toFixed(2)}</span>
                      <span className="prod-points">+{item.points * item.qty} pts</span>
                    </div>
                  </div>
                ))}
              </div>

              <hr className="divider-line checkout-divider" />

              <label className="checkout-redeem">
                <input
                  type="checkbox"
                  checked={redeemPoints}
                  onChange={(e) => setRedeemPoints(e.target.checked)}
                />
                <span>
                  Redeem {POINTS_COST} points for ${POINTS_DISCOUNT.toFixed(2)} off
                  <span className="checkout-redeem__balance"> · balance {POINTS_BALANCE.toLocaleString()} pts</span>
                </span>
              </label>

              <div className="checkout-totals">
                <div className="checkout-totals__row">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                {redeemPoints && (
                  <div className="checkout-totals__row checkout-totals__row--discount">
                    <span>Points discount</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="checkout-totals__row checkout-totals__row--total">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <p className="checkout-points-earn">You'll earn <strong>+{pointsEarned} points</strong> on this order.</p>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </>
  );
}
