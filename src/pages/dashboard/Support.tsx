import { useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import { MessageCircle, HelpCircle, Ticket, Truck, Mail, Send } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface SupportOption {
  icon: LucideIcon;
  title: string;
  description: string;
  action: string;
  color: string;
}

const supportOptions: SupportOption[] = [
  { icon: MessageCircle, title: 'Live Chat', description: 'Chat with our support team in real-time', action: 'Start Chat', color: 'from-primary to-primary/70' },
  { icon: Ticket, title: 'Submit Ticket', description: 'Create a support ticket for any issue', action: 'Submit', color: 'from-amber-500 to-orange-600' },
  { icon: Truck, title: 'Order Assistance', description: 'Get help with your orders and deliveries', action: 'Track Order', color: 'from-blue-500 to-blue-700' },
  { icon: Mail, title: 'Contact Support', description: 'Reach us via email for any inquiries', action: 'Email Us', color: 'from-slate-600 to-slate-800' },
];

const faqs = [
  { q: 'How do I earn reward points?', a: 'You earn 1 reward point for every RM1 spent on purchases. Points are automatically credited to your account after each transaction.' },
  { q: 'How do I redeem my points?', a: 'Visit the Rewards page, browse available rewards, and click "Redeem Now" on any item. Points will be deducted from your balance immediately.' },
  { q: 'Do my points expire?', a: 'Yes, reward points expire 12 months after they are earned. You will receive a notification before any points are about to expire.' },
  { q: 'How can I track my order?', a: 'Go to the Orders page, find your order, and click the tracking icon. You will see real-time shipment updates.' },
  { q: 'What is the return policy?', a: 'Items can be returned within 14 days of delivery, provided they are in original condition. Contact support to initiate a return.' },
  { q: 'How do I upgrade my membership tier?', a: 'Membership tiers are based on your total points. Gold: 500+ pts, Platinum: 1,000+ pts, Diamond: 5,000+ pts. Keep shopping to level up!' },
];

export default function Support() {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Support Center</h1>
        <p className="text-sm text-muted-foreground">We're here to help. Choose an option below.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {supportOptions.map((opt) => (
          <Card key={opt.title} className="flex items-center gap-4 rounded-2xl p-5 shadow-sm transition-all hover:shadow-md">
            <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${opt.color} shadow-sm`}>
              <opt.icon className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground">{opt.title}</h3>
              <p className="text-sm text-muted-foreground">{opt.description}</p>
            </div>
            <Button variant="outline">{opt.action}</Button>
          </Card>
        ))}
      </div>

      <Card className="rounded-2xl shadow-sm">
        <div className="flex items-center gap-2 border-b border-border p-5">
          <HelpCircle className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-semibold text-foreground">Frequently Asked Questions</h2>
        </div>
        <Accordion type="single" collapsible className="px-5">
          {faqs.map((faq) => (
            <AccordionItem key={faq.q} value={faq.q}>
              <AccordionTrigger className="text-foreground">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Card>

      <Card className="rounded-2xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground">Send a Quick Message</h2>
        <p className="text-sm text-muted-foreground">We'll get back to you within 24 hours</p>
        <form
          className="mt-4 space-y-3"
          onSubmit={(e) => {
            e.preventDefault();
            setSubject('');
            setMessage('');
          }}
        >
          <div>
            <Label htmlFor="support-subject" className="sr-only">Subject</Label>
            <Input id="support-subject" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="support-message" className="sr-only">Message</Label>
            <Textarea id="support-message" rows={4} placeholder="Describe your issue..." value={message} onChange={(e) => setMessage(e.target.value)} />
          </div>
          <Button type="submit" className="gap-2">
            <Send className="h-4 w-4" /> Send Message
          </Button>
        </form>
      </Card>
    </div>
  );
}
