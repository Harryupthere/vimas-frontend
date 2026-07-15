// Placeholder member data for the dashboard UI. Replace with real API data
// once the account/orders/rewards backend exists.

export const USER_NAME = 'John Tan';
export const USER_INITIALS = 'JT';
export const USER_POINTS = 2450;
export const USER_TIER = 'Gold Member';
export const MEMBER_SINCE = 'Jan 2025';

export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered';

export interface Order {
  id: string;
  order_number: string;
  status: OrderStatus;
  date: string;
  product: string;
  total: number;
  points_earned: number;
}

export const sampleOrders: Order[] = [
  { id: 'o1', order_number: 'VGV20250710001', status: 'shipped', date: '2025-07-10', product: 'Wireless Headphones', total: 249.0, points_earned: 250 },
  { id: 'o2', order_number: 'VGV20250628002', status: 'delivered', date: '2025-06-28', product: 'Smart Watch', total: 450.0, points_earned: 450 },
  { id: 'o3', order_number: 'VGV20250615003', status: 'delivered', date: '2025-06-15', product: 'Premium Polo Shirt', total: 89.0, points_earned: 89 },
  { id: 'o4', order_number: 'VGV20250602004', status: 'processing', date: '2025-06-02', product: 'Stoneware Pour-Over Set', total: 36.0, points_earned: 36 },
  { id: 'o5', order_number: 'VGV20250520005', status: 'delivered', date: '2025-05-20', product: 'Cold-Pressed Olive Oil, 1L', total: 19.0, points_earned: 19 },
  { id: 'o6', order_number: 'VGV20250501006', status: 'pending', date: '2025-05-01', product: 'Vitamin C Serum', total: 28.0, points_earned: 28 },
];

export interface Reward {
  id: string;
  name: string;
  description: string;
  image_url: string;
  required_points: number;
  category: 'apparel' | 'vouchers' | 'lifestyle' | 'premium';
  available: boolean;
}

export const sampleRewards: Reward[] = [
  { id: 'r1', name: 'Premium Polo Shirt', description: 'Embroidered gold-member polo, available in 4 colors.', image_url: 'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=600', required_points: 500, category: 'apparel', available: true },
  { id: 'r2', name: 'RM50 Voucher', description: 'Redeemable on any purchase across the marketplace.', image_url: 'https://images.pexels.com/photos/6863515/pexels-photo-6863515.jpeg?auto=compress&cs=tinysrgb&w=600', required_points: 50, category: 'vouchers', available: true },
  { id: 'r3', name: 'Insulated Water Bottle', description: 'Double-wall stainless steel, keeps drinks cold 24h.', image_url: 'https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg?auto=compress&cs=tinysrgb&w=600', required_points: 200, category: 'lifestyle', available: true },
  { id: 'r4', name: 'Wireless Earbuds Pro', description: 'Noise-cancelling earbuds with charging case.', image_url: 'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=600', required_points: 3200, category: 'premium', available: true },
  { id: 'r5', name: 'Weekend Getaway Voucher', description: 'Two-night stay at a partner resort.', image_url: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=600', required_points: 5000, category: 'premium', available: false },
  { id: 'r6', name: 'Recycled Wool Scarf', description: 'Handwoven scarf from recycled merino wool.', image_url: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600', required_points: 350, category: 'apparel', available: true },
  { id: 'r7', name: 'RM100 Voucher', description: 'Redeemable on any purchase across the marketplace.', image_url: 'https://images.pexels.com/photos/6863515/pexels-photo-6863515.jpeg?auto=compress&cs=tinysrgb&w=600', required_points: 100, category: 'vouchers', available: true },
  { id: 'r8', name: 'Ceramic Diffuser Set', description: 'Aromatherapy diffuser with 3 essential oils.', image_url: 'https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg?auto=compress&cs=tinysrgb&w=600', required_points: 650, category: 'lifestyle', available: true },
];

export const redemptionHistory = [
  { reward: 'Premium Polo Shirt', points: 500, date: '2025-06-15', status: 'Delivered', tracking: 'VGV20250615001' },
  { reward: 'RM50 Voucher', points: 50, date: '2025-05-20', status: 'Delivered', tracking: 'VGV20250520002' },
  { reward: 'Water Bottle', points: 200, date: '2025-04-10', status: 'Delivered', tracking: 'VGV20250410003' },
];

export interface Product {
  id: string;
  name: string;
  description: string;
  image_url: string;
  category: 'fashion' | 'electronics' | 'handmade' | 'groceries' | 'beauty';
  price: number;
  reward_points: number;
  stock_status: 'in_stock' | 'low_stock' | 'out_of_stock';
  new_arrival: boolean;
  best_seller: boolean;
}

export const sampleProducts: Product[] = [
  { id: 'p1', name: 'Woven Linen Overshirt', description: 'Breathable linen overshirt, relaxed fit.', image_url: 'https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'fashion', price: 42.0, reward_points: 84, stock_status: 'in_stock', new_arrival: true, best_seller: false },
  { id: 'p2', name: 'Wireless Earbuds Pro', description: 'Noise-cancelling earbuds with charging case.', image_url: 'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'electronics', price: 59.0, reward_points: 118, stock_status: 'in_stock', new_arrival: false, best_seller: true },
  { id: 'p3', name: 'Stoneware Pour-Over Set', description: 'Hand-thrown ceramic pour-over coffee set.', image_url: 'https://images.pexels.com/photos/302897/pexels-photo-302897.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'handmade', price: 36.0, reward_points: 72, stock_status: 'low_stock', new_arrival: true, best_seller: false },
  { id: 'p4', name: 'Cold-Pressed Olive Oil, 1L', description: 'Single-origin extra virgin olive oil.', image_url: 'https://images.pexels.com/photos/1618223/pexels-photo-1618223.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'groceries', price: 19.0, reward_points: 38, stock_status: 'in_stock', new_arrival: false, best_seller: true },
  { id: 'p5', name: 'Vitamin C Serum', description: 'Brightening serum with 15% vitamin C.', image_url: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'beauty', price: 28.0, reward_points: 56, stock_status: 'in_stock', new_arrival: false, best_seller: false },
  { id: 'p6', name: 'Recycled Wool Scarf', description: 'Handwoven scarf from recycled merino wool.', image_url: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'fashion', price: 24.0, reward_points: 48, stock_status: 'in_stock', new_arrival: true, best_seller: false },
  { id: 'p7', name: 'Smart Watch', description: 'Fitness tracking watch with heart-rate monitor.', image_url: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'electronics', price: 149.0, reward_points: 298, stock_status: 'out_of_stock', new_arrival: false, best_seller: true },
  { id: 'p8', name: 'Ceramic Diffuser Set', description: 'Aromatherapy diffuser with 3 essential oils.', image_url: 'https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'handmade', price: 32.0, reward_points: 64, stock_status: 'in_stock', new_arrival: true, best_seller: false },
];

export const pointsHistory = [
  { date: '2025-07-10', description: 'Purchase - Wireless Headphones', points: 250, type: 'earned' as const },
  { date: '2025-06-15', description: 'Redeemed - Premium Polo Shirt', points: -500, type: 'redeemed' as const },
  { date: '2025-06-01', description: 'Purchase - Smart Watch', points: 450, type: 'earned' as const },
  { date: '2025-05-20', description: 'Redeemed - RM50 Voucher', points: -50, type: 'redeemed' as const },
];
