import React from 'react';
import { motion } from 'motion/react';
import { Clock, Copy, Unlink, Workflow, RefreshCw, Layers } from 'lucide-react';

const ProblemCard = ({ icon: Icon, title, body, delay }: { 
  icon: any, 
  title: string, 
  body: string,
  delay: number 
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="bg-white p-8 rounded-lg border border-slate-200 shadow-premium flex flex-col sm:flex-row gap-8 group"
  >
    <div className="flex-shrink-0">
      <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
        <Icon className="w-6 h-6" />
      </div>
    </div>
    <div>
      <h3 className="text-[18px] text-slate-900 font-bold mb-3">{title}</h3>
      <p className="text-[14px] text-slate-600 leading-relaxed">
        {body}
      </p>
    </div>
  </motion.div>
);

export const Problem = () => {
  return (
    <section className="bg-surface py-32 lg:py-40">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Left - Sticky */}
          <div className="lg:w-[40%] lg:sticky lg:top-32 h-fit">
            <div className="text-[14px] text-primary font-bold uppercase tracking-[1.5px] mb-6">
              THE PROBLEM
            </div>
            <h2 className="text-[40px] text-slate-900 font-bold leading-[1.2] mb-8">
              Financial operations are stuck in the past
            </h2>
            <p className="text-[16px] text-slate-600 leading-relaxed max-w-sm">
              Every company — from crypto startups to traditional enterprises — wastes months building the same financial integrations from scratch. Manual processes, fragmented tools, and zero interoperability between crypto and fiat.
            </p>
          </div>

          {/* Right - Stacked Cards */}
          <div className="lg:w-[55%] flex flex-col gap-4">
            <ProblemCard 
              icon={Clock}
              title="Manual operations kill productivity"
              body="Finance teams spend 20% of their time on reconciliation, receipt chasing, and manual transfers. Stablecoin treasury operations? There are literally zero automation tools built for them."
              delay={0.1}
            />
            <ProblemCard 
              icon={RefreshCw}
              title="Every company rebuilds the same integrations"
              body="Whether it's connecting to payment processors, blockchain networks, or banking APIs — every fintech and every startup writes custom code for the same connections. Months of work, repeated thousands of times globally."
              delay={0.2}
            />
            <ProblemCard 
              icon={Layers}
              title="Crypto and traditional finance don't talk"
              body="Workflow tools like n8n and Zapier have zero blockchain support. Crypto tools ignore traditional banking. No platform connects stablecoins, wallets, payment processors, and bank APIs in one visual builder."
              delay={0.3}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
