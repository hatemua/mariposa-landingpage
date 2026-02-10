import React from 'react';
import { motion } from 'motion/react';
import { MousePointer2, Box, ShieldCheck } from 'lucide-react';
import { PipelineVisual } from './PipelineVisual';

const FeatureItem = ({ icon: Icon, title, text, color }: { icon: any, title: string, text: string, color: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="bg-white border-t-4 p-8 rounded-2xl border-slate-100 hover:shadow-xl transition-all"
    style={{ borderTopColor: color }}
  >
    <div className="mb-6 p-3 w-fit rounded-xl" style={{ backgroundColor: `${color}10`, color: color }}>
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>
    <p className="text-slate-600 leading-relaxed text-sm">
      {text}
    </p>
  </motion.div>
);

export const ProductShowcase = () => {
  return (
    <section className="bg-white py-24 lg:py-32 border-y border-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
            <span className="text-orange-600 text-xs font-bold uppercase tracking-wider">How Mariposa Works</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            One pipeline builder. Every financial operation.
          </h2>
          <p className="text-slate-600 text-lg">
            Drag components onto the canvas. Connect them. Deploy. Your financial workflow runs automatically — stablecoins, fiat, AI, all in one pipeline.
          </p>
        </div>

        {/* Centerpiece Visual */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-2xl shadow-orange-500/5"
          >
            <div className="bg-slate-50 px-6 py-3 border-b border-slate-200 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/50" />
              </div>
              <div className="mx-auto text-xs text-slate-400 font-mono">mariposa_cloud / invoice_automation_v2</div>
            </div>
            <div className="p-4 lg:p-12">
              <PipelineVisual />
            </div>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureItem 
            icon={MousePointer2}
            title="Visual Pipeline Builder"
            text="Build complex financial workflows by dragging and dropping components. No code required. Deploy in minutes, not months."
            color="#F97316"
          />
          <FeatureItem 
            icon={Box}
            title="100+ Ready-Made Components"
            text="Stablecoin transfers, wallet management, AI agents, bank APIs, Excel connectors, and more. Each component is pre-built and tested."
            color="#F59E0B"
          />
          <FeatureItem 
            icon={ShieldCheck}
            title="Your Keys. Your Rules."
            text="Mariposa never touches your money or data. Use your own API keys, wallets, and credentials. We provide the builder — you own the pipeline."
            color="#A855F7"
          />
        </div>
      </div>
    </section>
  );
};
