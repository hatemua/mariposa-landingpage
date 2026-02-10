import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Database, 
  Cpu, 
  Wallet, 
  FileText, 
  CheckCircle2,
  Table,
  Settings
} from 'lucide-react';

interface NodeProps {
  icon: React.ReactNode;
  label: string;
  type: string;
  color: string;
  delay?: number;
  isDark?: boolean;
}

const Node = ({ icon, label, type, color, delay = 0, isDark = false }: NodeProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9, y: 10 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className={`${isDark ? 'bg-[#1E293B] border-slate-700/50' : 'bg-white border-slate-200 shadow-lg'} border rounded-xl p-4 flex items-center gap-4 w-64 group hover:border-orange-400 transition-colors cursor-pointer`}
  >
    <div className={`p-2.5 rounded-lg ${color} bg-opacity-10 flex items-center justify-center`}>
      {icon}
    </div>
    <div className="flex flex-col">
      <span className={`text-[10px] ${isDark ? 'text-slate-400' : 'text-slate-500'} font-bold uppercase tracking-wider`}>{type}</span>
      <span className={`text-sm ${isDark ? 'text-white' : 'text-slate-900'} font-bold`}>{label}</span>
    </div>
    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
      <Settings className="w-4 h-4 text-slate-400" />
    </div>
  </motion.div>
);

const Connection = ({ delay = 0, isDark = false }: { delay?: number, isDark?: boolean }) => (
  <div className="flex items-center justify-center w-12 h-20">
    <motion.div 
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      className={`h-0.5 w-full ${isDark ? 'bg-slate-700' : 'bg-slate-200'} origin-left relative`}
    >
      <motion.div
        animate={{ left: ['0%', '100%'], opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: delay + 0.5 }}
        className="absolute top-1/2 -translate-y-1/2 w-4 h-1 bg-orange-400 blur-sm rounded-full"
      />
    </motion.div>
  </div>
);

export const PipelineVisual = ({ variant = 'full', isDark = false }: { variant?: 'full' | 'simple', isDark?: boolean }) => {
  return (
    <div className={`relative p-8 ${isDark ? 'bg-[#0F172A] border-slate-800' : 'bg-white border-slate-100'} rounded-2xl border shadow-2xl overflow-hidden min-h-[500px] flex items-center justify-center`}>
      {/* Background Grid */}
      <div className={`absolute inset-0 ${isDark ? 'opacity-10' : 'opacity-5'}`} style={{ 
        backgroundImage: `radial-gradient(${isDark ? '#475569' : '#94A3B8'} 1px, transparent 1px)`,
        backgroundSize: '24px 24px'
      }} />
      
      {/* Visual Canvas Elements */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-2 max-w-full">
        {variant === 'full' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
            {/* Column 1 */}
            <div className="flex flex-col gap-8">
              <Node icon={<FileText className="w-5 h-5 text-orange-500" />} label="New Invoice" type="Trigger" color="bg-orange-500" delay={0.1} isDark={isDark} />
              <Node icon={<Wallet className="w-5 h-5 text-emerald-500" />} label="USDC Transfer" type="Action" color="bg-emerald-500" delay={0.2} isDark={isDark} />
            </div>
            
            {/* Column 2 */}
            <div className="flex flex-col gap-8">
              <Node icon={<Cpu className="w-5 h-5 text-orange-600" />} label="AI Invoice Reader" type="AI Agent" color="bg-orange-600" delay={0.3} isDark={isDark} />
              <Node icon={<Database className="w-5 h-5 text-blue-500" />} label="Revolut API" type="Integration" color="bg-blue-500" delay={0.4} isDark={isDark} />
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-8">
              <Node icon={<CheckCircle2 className="w-5 h-5 text-purple-500" />} label="Multisig Vault" type="Approval" color="bg-purple-600" delay={0.5} isDark={isDark} />
              <Node icon={<Table className="w-5 h-5 text-teal-500" />} label="Excel Export" type="Data" color="bg-teal-500" delay={0.6} isDark={isDark} />
            </div>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row items-center">
            <Node icon={<FileText className="w-5 h-5 text-orange-500" />} label="New Invoice" type="Trigger" color="bg-orange-500" delay={0.1} isDark={isDark} />
            <Connection delay={0.3} isDark={isDark} />
            <Node icon={<Cpu className="w-5 h-5 text-orange-600" />} label="AI Classifier" type="AI Agent" color="bg-orange-600" delay={0.5} isDark={isDark} />
            <Connection delay={0.7} isDark={isDark} />
            <Node icon={<Wallet className="w-5 h-5 text-emerald-500" />} label="USDC Payment" type="Action" color="bg-emerald-500" delay={0.9} isDark={isDark} />
          </div>
        )}
      </div>

      {/* Decorative floating elements */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute top-10 right-10 ${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'} backdrop-blur-md border p-3 rounded-lg flex items-center gap-2 shadow-lg`}
      >
        <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
        <span className={`text-[10px] ${isDark ? 'text-slate-300' : 'text-slate-500'} font-mono tracking-tight uppercase`}>Pipeline Active: Live</span>
      </motion.div>
    </div>
  );
};
