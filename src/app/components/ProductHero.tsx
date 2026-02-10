import React from 'react';
import { motion } from 'motion/react';
import { WorkflowVisual } from './WorkflowVisual';
import { MousePointer2, Box, Key } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, text, borderColor, delay }: {
  icon: any,
  title: string,
  text: string,
  borderColor: string,
  delay: number
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="bg-navy-light p-6 md:p-8 rounded-lg border-t-4 flex flex-col gap-4 w-full"
    style={{ borderTopColor: borderColor }}
  >
    <div className="w-10 h-10 rounded-full bg-white/5 text-white flex items-center justify-center">
      <Icon className="w-5 h-5" />
    </div>
    <div className="flex flex-col gap-2">
      <h4 className="text-white font-bold text-lg">{title}</h4>
      <p className="text-slate-400 text-sm leading-relaxed">{text}</p>
    </div>
  </motion.div>
);

export const ProductHero = () => {
  return (
    <section id="product" className="bg-navy pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[14px] text-success font-bold uppercase tracking-widest mb-6">
            THE SOLUTION
          </div>
          <h2 className="text-3xl sm:text-[44px] lg:text-[52px] text-white font-bold leading-[1.2] mb-8">
            One pipeline builder.<br />Every financial operation.
          </h2>
          <p className="text-[18px] text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Drag components, connect them, deploy. Stablecoins, payment APIs, AI agents — all on one visual canvas. Configuration, not code.
          </p>
        </div>

        {/* Large Product Visual */}
        <div className="relative max-w-[960px] mx-auto mt-16 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative z-10"
          >
            {/* Subtle orange glow */}
            <div className="absolute -inset-10 bg-primary/20 rounded-[40px] blur-[80px] opacity-15 pointer-events-none" />
            <WorkflowVisual variant="full" />
          </motion.div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 max-w-5xl mx-auto">
          <FeatureCard 
            icon={MousePointer2}
            title="Visual Pipeline Builder"
            text="Drag-and-drop financial workflows. No code. Deploy in minutes, not months."
            borderColor="#F97316"
            delay={0.1}
          />
          <FeatureCard 
            icon={Box}
            title="100+ Components"
            text="Stablecoins, wallets, AI agents, payment APIs, bank connectors, data tools."
            borderColor="#3348F6"
            delay={0.2}
          />
          <FeatureCard 
            icon={Key}
            title="Your Keys, Your Rules"
            text="Mariposa never touches your money. Use your own API keys and credentials."
            borderColor="#8B5CF6"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};
