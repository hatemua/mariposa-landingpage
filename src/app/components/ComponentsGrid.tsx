import React from 'react';
import { motion } from 'motion/react';
import { 
  Coins, 
  Layers, 
  Wallet, 
  BrainCircuit, 
  ArrowLeftRight, 
  Cable,
  ArrowRight
} from 'lucide-react';

const ComponentCard = ({ icon: Icon, title, description, color, delay }: { 
  icon: any, 
  title: string, 
  description: string, 
  color: string,
  delay: number
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-white p-8 rounded-2xl border border-slate-100 relative group overflow-hidden hover:shadow-xl transition-all"
  >
    <div className={`absolute left-0 top-0 bottom-0 w-1 ${color}`} />
    <div className="flex items-start gap-5">
      <div className={`p-3 rounded-xl bg-opacity-10 flex items-center justify-center`} style={{ backgroundColor: `${color.replace('bg-', '')}10` }}>
        <Icon className={`w-6 h-6`} style={{ color: color.replace('bg-', '') }} />
      </div>
      <div>
        <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">{title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">
          {description}
        </p>
        <a href="#" className="inline-flex items-center text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors">
          Learn more <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  </motion.div>
);

export const ComponentsGrid = () => {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Components for every financial operation
          </h2>
          <p className="text-slate-600 text-lg">
            Pre-built, tested, and ready to drag into your pipeline
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ComponentCard 
            icon={Coins}
            title="Stablecoin Automation"
            description="Send, receive, split, and schedule USDC, USDT, and stablecoin transactions. Automate treasury operations across Hedera, Solana, and Ethereum."
            color="#F97316"
            delay={0.1}
          />
          <ComponentCard 
            icon={Layers}
            title="Deposit Tokenization"
            description="Tokenize financial deposits on blockchain with battle-tested components. Built from real-world experience advising Saudi Central Bank."
            color="#F59E0B"
            delay={0.2}
          />
          <ComponentCard 
            icon={Wallet}
            title="Wallet & Vault Management"
            description="Create wallets, configure multisig approvals, and manage secure vaults. Enterprise-grade security with visual configuration."
            color="#8B5CF6"
            delay={0.3}
          />
          <ComponentCard 
            icon={BrainCircuit}
            title="AI Agent Components"
            description="Plug Claude, OpenAI, or TogetherAI into your pipeline. Read invoices, classify transactions, make routing decisions automatically."
            color="#F97316"
            delay={0.4}
          />
          <ComponentCard 
            icon={ArrowLeftRight}
            title="Onramp / Offramp"
            description="Convert fiat to crypto and back through licensed providers like MoonPay and Transak. They handle KYC — you automate the flow."
            color="#06B6D4"
            delay={0.5}
          />
          <ComponentCard 
            icon={Cable}
            title="General Connectors"
            description="Excel import/export, REST API connectors, webhooks, triggers, conditions, loops. Connect any data source to your financial pipeline."
            color="#EF4444"
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
};
