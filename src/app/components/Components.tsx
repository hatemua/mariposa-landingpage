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

const ComponentCard = ({ icon: Icon, title, body, color, delay }: {
  icon: any,
  title: string,
  body: string,
  color: string,
  delay: number
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-white border border-slate-200 rounded-lg p-8 relative group hover:-translate-y-1 hover:shadow-xl transition-all h-full flex flex-col"
  >
    <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-lg`} style={{ backgroundColor: color }} />
    
    <div className="w-10 h-10 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: `${color}10`, color: color }}>
      <Icon className="w-5 h-5" />
    </div>
    
    <h3 className="text-[16px] text-slate-900 font-bold mb-3">{title}</h3>
    <p className="text-[14px] text-slate-600 leading-relaxed mb-6 flex-grow">
      {body}
    </p>
    
    <a href="#" className="inline-flex items-center text-[14px] text-primary font-bold hover:gap-2 transition-all group-hover:text-primary-dark">
      Learn more <ArrowRight className="w-4 h-4 ml-1" />
    </a>
  </motion.div>
);

export const Components = () => {
  return (
    <section id="components" className="bg-white py-32 lg:py-40">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="text-[14px] text-primary font-bold uppercase tracking-widest mb-6">
            COMPONENTS
          </div>
          <h2 className="text-[40px] text-slate-900 font-bold mb-6">
            Components for every financial operation
          </h2>
          <p className="text-[16px] text-slate-600 leading-relaxed">
            Pre-built, tested, ready to drag into your pipeline
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1080px] mx-auto">
          <ComponentCard 
            icon={Coins}
            title="Stablecoin Automation"
            body="Send, receive, split, and schedule USDC, USDT transactions. Automate treasury operations across Hedera, Solana, and Ethereum."
            color="#10B981"
            delay={0.1}
          />
          <ComponentCard 
            icon={Layers}
            title="Deposit Tokenization"
            body="Tokenize financial deposits on blockchain. Proven components built from enterprise advisory experience."
            color="#3348F6"
            delay={0.2}
          />
          <ComponentCard 
            icon={Wallet}
            title="Wallet & Vault Management"
            body="Create wallets, configure multisig, manage secure vaults. Enterprise-grade security with visual configuration."
            color="#8B5CF6"
            delay={0.3}
          />
          <ComponentCard 
            icon={BrainCircuit}
            title="AI Agent Components"
            body="Plug Claude, OpenAI, or TogetherAI into your pipeline. Read invoices, classify transactions, route payments automatically."
            color="#F97316"
            delay={0.4}
          />
          <ComponentCard 
            icon={ArrowLeftRight}
            title="Onramp / Offramp"
            body="Convert fiat to crypto and back through licensed providers. They handle KYC and compliance — you automate the flow."
            color="#0891B2"
            delay={0.5}
          />
          <ComponentCard 
            icon={Cable}
            title="General Connectors"
            body="Excel, REST APIs, webhooks, triggers, conditions, loops. Connect any external system to your financial pipeline."
            color="#E11D48"
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
};
