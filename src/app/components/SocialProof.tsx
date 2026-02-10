import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const StatItem = ({ number, label, delay }: { number: string, label: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="text-center"
  >
    <div className="text-[48px] text-slate-900 font-bold mb-2 tracking-tight">{number}</div>
    <div className="text-[14px] text-slate-500 font-medium uppercase tracking-wider">{label}</div>
  </motion.div>
);

export const SocialProof = () => {
  return (
    <section className="bg-white py-32 lg:py-40">
      <div className="container mx-auto px-6">
        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-32">
          <StatItem number="12+" label="Years in Blockchain" delay={0.1} />
          <StatItem number="50+" label="Projects Delivered" delay={0.2} />
          <StatItem number="80+" label="Countries" delay={0.3} />
          <StatItem number="$50K" label="Hedera Grant" delay={0.4} />
        </div>

        {/* Quote Card */}
        
      </div>
    </section>
  );
};
