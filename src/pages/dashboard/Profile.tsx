import { useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import { User, MapPin, Phone, Mail, Lock, Bell, CreditCard, Award, Calendar, Gift, Edit3, Copy } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { USER_INITIALS, USER_NAME, MEMBER_SINCE, USER_POINTS, pointsHistory } from './mockData';

const communicationPrefs = ['Email Notifications', 'SMS Alerts', 'Promotional Offers', 'Order Updates'];

export default function Profile() {
  const [editing, setEditing] = useState(false);
  const [prefs, setPrefs] = useState([true, true, true, false]);

  return (
    <div className="space-y-6">
      <Card className="relative overflow-hidden rounded-2xl p-6 shadow-sm">
        <div className="absolute inset-0 h-24 bg-gradient-to-r from-[#0D1310] to-[#141C17]" />
        <div className="relative flex flex-col gap-4 pt-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
            <Avatar className="h-20 w-20 rounded-2xl ring-4 ring-card">
              <AvatarFallback className="rounded-2xl bg-gradient-to-br from-primary to-primary/70 text-2xl font-bold text-primary-foreground">
                {USER_INITIALS}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-xl font-bold text-foreground">{USER_NAME}</h1>
              <div className="mt-1 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/15 px-2.5 py-0.5 text-xs font-medium text-amber-600">
                  <Award className="h-3 w-3" /> Gold Member
                </span>
                <span className="text-xs text-muted-foreground">Member since {MEMBER_SINCE}</span>
              </div>
            </div>
          </div>
          <Button variant="outline" onClick={() => setEditing(!editing)} className="gap-2">
            <Edit3 className="h-4 w-4" /> {editing ? 'Save Changes' : 'Edit Profile'}
          </Button>
        </div>
      </Card>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <Card className="rounded-2xl p-6 shadow-sm">
            <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
              <User className="h-5 w-5 text-primary" /> Personal Information
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <ProfileField icon={User} label="Full Name" value={USER_NAME} editing={editing} />
              <ProfileField icon={Mail} label="Email" value="john.tan@vimasgv.com" editing={editing} />
              <ProfileField icon={Phone} label="Phone Number" value="+60 12-345 6789" editing={editing} />
              <ProfileField icon={MapPin} label="Address" value="123 Jalan Bukit Bintang, Kuala Lumpur, 55100" editing={editing} />
            </div>
          </Card>

          <Card className="rounded-2xl p-6 shadow-sm">
            <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
              <Lock className="h-5 w-5 text-primary" /> Security
            </h2>
            <div className="mt-4 space-y-4">
              <ProfileField icon={Lock} label="Password" value="••••••••••" editing={editing} />
              <ProfileField icon={CreditCard} label="Saved Payment Method" value="Visa ending in 4242" editing={editing} />
            </div>
          </Card>

          <Card className="rounded-2xl p-6 shadow-sm">
            <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
              <Bell className="h-5 w-5 text-primary" /> Communication Preferences
            </h2>
            <div className="mt-4 space-y-3">
              {communicationPrefs.map((pref, i) => (
                <div key={pref} className="flex items-center justify-between">
                  <span className="text-sm text-foreground">{pref}</span>
                  <Switch
                    checked={prefs[i]}
                    onCheckedChange={(checked) => setPrefs((p) => p.map((v, idx) => (idx === i ? checked : v)))}
                  />
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="rounded-2xl p-6 shadow-sm">
            <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
              <Award className="h-5 w-5 text-amber-600" /> Membership
            </h2>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm text-muted-foreground"><Calendar className="h-4 w-4" /> Member Since</span>
                <span className="text-sm font-medium text-foreground">{MEMBER_SINCE}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm text-muted-foreground"><Award className="h-4 w-4" /> Current Tier</span>
                <span className="text-sm font-medium text-amber-600">Gold</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm text-muted-foreground"><Gift className="h-4 w-4" /> Points Balance</span>
                <span className="text-sm font-bold text-foreground">{USER_POINTS.toLocaleString()} pts</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm text-muted-foreground"><CreditCard className="h-4 w-4" /> Referral Code</span>
                <button className="flex items-center gap-1 text-sm font-medium text-primary">
                  VIMAS-JT2025 <Copy className="h-3 w-3" />
                </button>
              </div>
            </div>
          </Card>

          <Card className="rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-foreground">Points History</h2>
            <div className="mt-4 space-y-3">
              {pointsHistory.map((p) => (
                <div key={p.date + p.description} className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0">
                  <div>
                    <p className="text-sm font-medium text-foreground">{p.description}</p>
                    <p className="text-xs text-muted-foreground">{new Date(p.date).toLocaleDateString()}</p>
                  </div>
                  <span className={`text-sm font-bold ${p.points > 0 ? 'text-emerald-600' : 'text-red-500'}`}>
                    {p.points > 0 ? '+' : ''}{p.points}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

interface ProfileFieldProps {
  icon: LucideIcon;
  label: string;
  value: string;
  editing: boolean;
}

function ProfileField({ icon: Icon, label, value, editing }: ProfileFieldProps) {
  return (
    <div>
      <Label className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
        <Icon className="h-3.5 w-3.5" /> {label}
      </Label>
      {editing ? (
        <Input defaultValue={value} className="mt-1" />
      ) : (
        <p className="mt-1 text-sm font-medium text-foreground">{value}</p>
      )}
    </div>
  );
}
