import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import Products from './pages/Products';
import Rewards from './pages/Rewards';
import About from './pages/About';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import Join from './pages/Join';

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
      </Routes>
    </BrowserRouter>
  );
}
