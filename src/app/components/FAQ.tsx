import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const FAQ_ITEMS = [
  {
    q: "What is Mariposa?",
    a: "A visual pipeline builder for financial automation — like n8n or Zapier, but built specifically for fintech. Drag-and-drop stablecoins, payment APIs, AI agents, and wallet operations into automated workflows. Zero code."
  },
  {
    q: "Do I need a banking license?",
    a: "No. Mariposa is a software tool. You use your own API keys, wallets, and credentials. For regulated operations, connect through licensed providers or your own banking partners."
  },
  {
    q: "What blockchains are supported?",
    a: "Hedera, Solana, and Ethereum are live. Avalanche, Polygon, and additional chains are on our roadmap."
  },
  {
    q: "How is Mariposa different from n8n or Zapier?",
    a: "n8n and Zapier have zero native blockchain or fintech components. Mariposa is built specifically for financial operations — stablecoins, tokenization, wallets, payment APIs — with components that understand money."
  },
  {
    q: "What Web2 payment integrations are coming?",
    a: "We're building connectors for PayPal, Stripe, Revolut, Wise, and Open Banking PSD2 APIs. Sandbox integrations are in progress, with live production access planned for 2026-2027."
  }
];

const AccordionItem = ({ q, a, isOpen, onClick }: { q: string, a: string, isOpen: boolean, onClick: () => void }) => (
  <div className="bg-white border border-slate-200 rounded-lg overflow-hidden mb-4">
    <button 
      onClick={onClick}
      className="w-full px-8 py-6 flex items-center justify-between text-left group"
    >
      <span className="text-[18px] text-slate-900 font-bold group-hover:text-primary transition-colors">{q}</span>
      <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-8 pb-6 text-[16px] text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
            {a}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-surface py-32 lg:py-40">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left Side */}
          <div className="lg:w-[35%]">
            <h2 className="text-[36px] text-slate-900 font-bold leading-tight mb-6">
              Your questions, answered
            </h2>
            <p className="text-[16px] text-slate-600 leading-relaxed mb-8">
              Can't find what you're looking for?
            </p>
            <a href="#" className="text-primary font-bold hover:underline">
              Contact us →
            </a>
          </div>

          {/* Right Side - Accordions */}
          <div className="lg:w-[60%] flex-1">
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem 
                key={index}
                q={item.q}
                a={item.a}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
