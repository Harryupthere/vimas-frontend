import { useNavigate } from 'react-router-dom';
import { Search, Bell, Menu, ChevronDown } from 'lucide-react';
import { USER_INITIALS, USER_NAME, USER_POINTS } from '../mockData';

interface TopBarProps {
  onMenuClick: () => void;
}

export default function TopBar({ onMenuClick }: TopBarProps) {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-border bg-background/80 px-4 backdrop-blur-md lg:px-6">
      <button onClick={onMenuClick} className="lg:hidden">
        <Menu className="h-5 w-5 text-foreground" />
      </button>

      <div className="relative max-w-md flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search rewards, orders..."
          className="w-full rounded-lg border border-border bg-muted/50 py-2 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:bg-background focus:outline-none focus:ring-2 focus:ring-ring/40"
        />
      </div>

      <div className="flex items-center gap-2">
        <div className="hidden items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 ring-1 ring-primary/30 sm:flex">
          <span className="text-xs font-bold text-primary">{USER_POINTS.toLocaleString()} pts</span>
        </div>

        <button
          onClick={() => navigate('/dashboard/notifications')}
          className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-colors hover:bg-muted"
        >
          <Bell className="h-4 w-4" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-destructive ring-2 ring-background" />
        </button>

        <button
          onClick={() => navigate('/dashboard/profile')}
          className="flex items-center gap-2 rounded-lg border border-border bg-background py-1 pl-1 pr-2 transition-colors hover:bg-muted"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-xs font-bold text-primary-foreground">
            {USER_INITIALS}
          </div>
          <span className="hidden text-sm font-medium text-foreground sm:block">{USER_NAME}</span>
          <ChevronDown className="hidden h-3.5 w-3.5 text-muted-foreground sm:block" />
        </button>
      </div>
    </header>
  );
}
