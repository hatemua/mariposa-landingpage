import React from 'react';
import { motion } from 'motion/react';

const RoadmapCard = ({ badge, badgeColor, title, items, borderColor, delay }: {
  badge: string,
  badgeColor: string,
  title: string,
  items: string[],
  borderColor: string,
  delay: number
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="bg-navy-light p-8 rounded-lg border-b-4 relative group flex flex-col h-full overflow-hidden"
    style={{ borderBottomColor: borderColor }}
  >
    {/* Subtle glow matching border */}
    <div className={`absolute -bottom-10 left-1/2 -translate-x-1/2 w-32 h-32 blur-3xl opacity-10 pointer-events-none`} style={{ backgroundColor: borderColor }} />
    
    <div className="mb-8">
      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white`} style={{ backgroundColor: badgeColor }}>
        {badge}
      </span>
    </div>
    
    <h3 className="text-[20px] text-white font-bold mb-6">{title}</h3>
    
    <ul className="flex flex-col gap-3 mt-auto">
      {items.map((item) => (
        <li key={item} className="text-[14px] text-slate-400 flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full opacity-40" style={{ backgroundColor: borderColor }} />
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

export const Roadmap = () => {
  return (
    <section id="roadmap" className="bg-navy py-32 lg:py-40">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-[14px] text-primary font-bold uppercase tracking-widest mb-6">
            ROADMAP
          </div>
          <h2 className="text-[40px] text-white font-bold mb-6">
            Built for blockchain today.<br />
            <span className="text-primary">Expanding to all of finance.</span>
          </h2>
          <p className="text-[16px] text-slate-400 leading-relaxed max-w-2xl mx-auto">
            We started with Web3 because we know it best. Now we're building the bridge to traditional finance — connecting every payment rail in one platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <RoadmapCard 
            badge="LIVE"
            badgeColor="#10B981"
            title="Web3 Finance"
            items={['Stablecoin automation', 'Token creation & distribution', 'Wallet & vault management', 'AI agent pipelines', 'Onramp / Offramp (MoonPay, Transak)']}
            borderColor="#10B981"
            delay={0.1}
          />
          <RoadmapCard 
            badge="IN PROGRESS"
            badgeColor="#F97316"
            title="Payment & Banking APIs"
            items={['PayPal Business API', 'Stripe Payment API', 'Revolut Business API', 'Wise Transfer API', 'Open Banking sandboxes (PSD2)']}
            borderColor="#F97316"
            delay={0.2}
          />
          <RoadmapCard 
            badge="2026-2027"
            badgeColor="#8B5CF6"
            title="Full Finance Automation"
            items={['Live Open Banking (PSD2/PSD3)', 'ERP integrations (SAP, QuickBooks, Xero)', 'Payroll systems', 'Multi-bank connectivity', 'White-label & licensing']}
            borderColor="#8B5CF6"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};
