import React from 'react';
import { motion } from 'motion/react';
import { Clock, Repeat, Link2Off } from 'lucide-react';

const ProblemCard = ({ icon: Icon, title, text, delay }: { icon: any, title: string, text: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex gap-6 group hover:shadow-xl hover:-translate-y-1 transition-all"
  >
    <div className="w-1.5 h-full bg-orange-500 absolute left-0 top-0 rounded-l-2xl group-hover:w-2 transition-all" />
    <div className="flex-shrink-0">
      <div className="p-3 bg-orange-50 rounded-xl text-orange-600">
        <Icon className="w-6 h-6" />
      </div>
    </div>
    <div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed text-sm lg:text-base">
        {text}
      </p>
    </div>
  </motion.div>
);

export const ProblemStatement = () => {
  return (
    <section className="bg-slate-50 py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Left Side - Sticky Header */}
          <div className="lg:w-2/5 lg:sticky lg:top-32 h-fit">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Finance teams are drowning in manual work
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              From stablecoin transfers to bank reconciliation, every operation is rebuilt from scratch. Every time.
            </p>
          </div>

          {/* Right Side - Stacked Cards */}
          <div className="lg:w-3/5 flex flex-col gap-6">
            <ProblemCard 
              icon={Clock}
              title="20% of time wasted on reconciliation"
              text="Finance teams manually match transactions, chase receipts, and reconcile across systems. Stablecoin operations? Even worse — there are zero automation tools built for crypto treasury."
              delay={0.1}
            />
            <ProblemCard 
              icon={Repeat}
              title="277 fintechs. All building the same integrations."
              text="Lithuania alone has 277 licensed fintechs. Each one writes custom code to connect to banks, payment processors, and blockchain networks. Months of development work, duplicated across the entire ecosystem."
              delay={0.2}
            />
            <ProblemCard 
              icon={Link2Off}
              title="Crypto and fiat live in separate worlds"
              text="n8n automates workflows but has zero blockchain support. Crypto tools ignore traditional banking. No platform connects stablecoins, wallets, bank APIs, and AI agents in one visual builder — until now."
              delay={0.3}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
