import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { WorkflowVisual } from './WorkflowVisual';

const TABS = [
  { 
    id: 'payroll', 
    label: 'Crypto Payroll',
    title: 'Pay your global team in stablecoins. Automatically.',
    body: 'Connect your team roster, configure payment schedules, and let Mariposa distribute stablecoins to wallets across 80+ countries on payday. No manual transfers, no spreadsheets, no errors.',
    bullets: ['Multi-currency support', 'Gas optimization', 'Payment receipts', 'Full audit trail']
  },
  { 
    id: 'treasury', 
    label: 'Treasury Management',
    title: 'Manage crypto treasury on autopilot.',
    body: 'Configure multisig vaults, set rebalancing rules, and monitor stablecoin reserves with AI alerts. Your treasury operations — automated and auditable.'
  },
  { 
    id: 'invoice', 
    label: 'Invoice Automation',
    title: 'AI reads invoices. Mariposa pays them.',
    body: 'Receive invoices via API or upload. AI extracts data, classifies, and routes to the right payment method. Stablecoin or fiat — the pipeline decides.'
  },
  { 
    id: 'token', 
    label: 'Token Launch',
    title: 'Launch, distribute, and manage tokens.',
    body: 'Deploy tokens, build distribution pipelines, and automate liquidity provisioning. One visual pipeline for the entire token lifecycle.'
  }
];

export const UseCases = () => {
  const [activeTab, setActiveTab] = useState(TABS[0].id);

  const activeData = TABS.find(t => t.id === activeTab) || TABS[0];

  return (
    <section id="use-cases" className="bg-surface py-32 lg:py-40 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-[14px] text-primary font-bold uppercase tracking-widest mb-6">
            USE CASES
          </div>
          <h2 className="text-[40px] text-slate-900 font-bold mb-6">
            Templates for every workflow
          </h2>
          <p className="text-[16px] text-slate-600 leading-relaxed">
            Don't start from scratch. Pick a template, customize, deploy.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-20 p-1.5 bg-slate-100 rounded-full w-fit mx-auto">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                activeTab === tab.id 
                  ? 'bg-primary text-white shadow-lg' 
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24"
          >
            <div className="lg:w-1/2">
              <h3 className="text-[28px] text-slate-900 font-bold mb-6 leading-tight">
                {activeData.title}
              </h3>
              <p className="text-[16px] text-slate-600 leading-relaxed mb-8">
                {activeData.body}
              </p>
              
              {activeData.bullets && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {activeData.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-success" />
                      <span className="text-sm font-medium text-slate-700">{bullet}</span>
                    </div>
                  ))}
                </div>
              )}

              <a href="#" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                See template <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-premium">
                <WorkflowVisual variant="hero" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
