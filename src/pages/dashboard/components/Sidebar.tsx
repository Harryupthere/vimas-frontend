import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, ShoppingBag, Store, Gift, History, Package, User, Bell, LifeBuoy, LogOut, X } from 'lucide-react';
import { USER_TIER, MEMBER_SINCE } from '../mockData';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/dashboard/products', label: 'Products', icon: ShoppingBag },
  { to: '/dashboard/mall', label: 'Mall', icon: Store },
  { to: '/dashboard/rewards', label: 'Rewards', icon: Gift },
  { to: '/dashboard/purchase-history', label: 'Purchase History', icon: History },
  { to: '/dashboard/orders', label: 'Orders', icon: Package },
  { to: '/dashboard/profile', label: 'Profile', icon: User },
  { to: '/dashboard/notifications', label: 'Notifications', icon: Bell },
  { to: '/dashboard/support', label: 'Support', icon: LifeBuoy },
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const navigate = useNavigate();

  return (
    <>
      {isOpen && <div className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm lg:hidden" onClick={onClose} />}
      <aside
        className={`fixed left-0 top-0 z-40 flex h-screen w-64 flex-col bg-gradient-to-b from-[#0D1310] via-[#141C17] to-[#1B241E] transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-5 py-5">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#1B241E] to-[#0D1310] ring-1 ring-[#C6A15B]/30">
              <span className="text-lg font-bold text-[#C6A15B]">V</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-base font-bold tracking-tight text-white">Vimas</span>
              <span className="text-[10px] font-medium tracking-wider text-[#C6A15B]/70">MEMBERSHIP PORTAL</span>
            </div>
          </div>
          <button onClick={onClose} className="text-white/60 hover:text-white lg:hidden">
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/dashboard'}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-white/10 text-white shadow-sm ring-1 ring-[#C6A15B]/30'
                    : 'text-[#EDE8DA]/70 hover:bg-white/5 hover:text-white'
                }`
              }
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="border-t border-white/10 p-3">
          <div className="mb-3 rounded-xl bg-white/5 p-3 ring-1 ring-[#C6A15B]/20">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#C6A15B]">
                <span className="text-xs font-bold text-[#0D1310]">G</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-white">{USER_TIER}</p>
                <p className="text-[10px] text-[#EDE8DA]/60">Since {MEMBER_SINCE}</p>
              </div>
            </div>
          </div>
          <button
            onClick={() => navigate('/')}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-[#EDE8DA]/70 transition-colors hover:bg-white/5 hover:text-white"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}
