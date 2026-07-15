import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import Products from './pages/Products';
import Rewards from './pages/Rewards';
import About from './pages/About';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import Join from './pages/Join';
import Register from './pages/Register';
import Checkout from './pages/Checkout';
import DashboardLayout from './pages/dashboard/DashboardLayout';
import DashboardHome from './pages/dashboard/DashboardHome';
import DashboardProducts from './pages/dashboard/Products';
import DashboardMall from './pages/dashboard/Mall';
import DashboardRewards from './pages/dashboard/Rewards';
import DashboardOrders from './pages/dashboard/Orders';
import DashboardPurchaseHistory from './pages/dashboard/PurchaseHistory';
import DashboardProfile from './pages/dashboard/Profile';
import DashboardNotifications from './pages/dashboard/Notifications';
import DashboardSupport from './pages/dashboard/Support';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/products" element={<Products />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/join" element={<Join />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="products" element={<DashboardProducts />} />
          <Route path="mall" element={<DashboardMall />} />
          <Route path="rewards" element={<DashboardRewards />} />
          <Route path="orders" element={<DashboardOrders />} />
          <Route path="purchase-history" element={<DashboardPurchaseHistory />} />
          <Route path="profile" element={<DashboardProfile />} />
          <Route path="notifications" element={<DashboardNotifications />} />
          <Route path="support" element={<DashboardSupport />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
