import React from 'react';
import { motion } from 'motion/react';
import { 
  FileText, 
  Cpu, 
  Wallet, 
  CheckCircle2, 
  MessageSquare, 
  Split,
  Settings,
  MoreHorizontal,
  CreditCard,
  Table
} from 'lucide-react';

interface NodeProps {
  icon: React.ReactNode;
  label: string;
  type: string;
  color: string;
  x: number;
  y: number;
}

const WorkflowNode = ({ icon, label, type, color, x, y }: NodeProps) => (
  <motion.div
    style={{ left: x, top: y }}
    className="absolute bg-white border border-slate-200 rounded-xl p-3 shadow-premium w-52 flex items-center gap-3 group z-10 scale-90 origin-top-left"
  >
    <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-xl ${color}`} />
    <div className={`p-2 rounded-lg bg-opacity-10 ${color.replace('bg-', 'text-')} bg-current flex items-center justify-center`}>
      <div className="opacity-100">{icon}</div>
    </div>
    <div className="flex flex-col min-w-0">
      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider leading-none mb-1">{type}</span>
      <span className="text-xs font-bold text-slate-900 truncate">{label}</span>
    </div>
    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
      <Settings className="w-3 h-3 text-slate-400" />
    </div>
  </motion.div>
);

const Connection = ({ start, end, active = false }: { start: [number, number], end: [number, number], active?: boolean }) => {
  const dx = end[0] - start[0];
  const dy = end[1] - start[1];
  const curve = dx * 0.5;
  
  const path = `M ${start[0]} ${start[1]} C ${start[0] + curve} ${start[1]}, ${end[0] - curve} ${end[1]}, ${end[0]} ${end[1]}`;

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible m-[0px]">
      <path
        d={path}
        fill="none"
        stroke={active ? "#F97316" : "#E2E8F0"}
        strokeWidth="2.25"
        strokeLinecap="round"
        className={active ? "opacity-40" : "opacity-20"}
      />
      {active && (
        <motion.circle
          r="4.5"
          fill="#F97316"
          animate={{
            offsetDistance: ["0%", "100%"]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ offsetPath: `path("${path}")` }}
        />
      )}
    </svg>
  );
};

export const WorkflowVisual = ({ variant = 'hero' }: { variant?: 'hero' | 'full' }) => {
  return (
    <div className={`relative w-full ${variant === 'hero' ? 'aspect-[4/3] sm:aspect-[16/11]' : 'aspect-[16/5]'} bg-[#111827] rounded-xl border border-slate-800 overflow-hidden shadow-2xl`}>
      {/* Canvas Grid */}
      <div className="absolute inset-0 opacity-10" style={{ 
        backgroundImage: `radial-gradient(#475569 1px, transparent 1px)`,
        backgroundSize: '24px 24px'
      }} />

      {/* App Header (UI) */}
      <div className="absolute top-0 left-0 right-0 h-10 border-b border-slate-800 bg-[#111827] flex items-center px-4 gap-2 z-20">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/30" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/30" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/30" />
        </div>
        <div className="mx-auto text-[10px] text-slate-500 font-mono tracking-tight">
          mariposa_editor / invoice_pipeline.v3
        </div>
        <MoreHorizontal className="w-4 h-4 text-slate-700" />
      </div>

      {/* Nodes & Connections */}
      <div className="absolute inset-0 pt-10 px-6 scale-[0.42] origin-top-left sm:scale-[0.55] md:scale-75 lg:scale-100">
        {variant === 'hero' ? (
          <>
            <Connection start={[220, 110]} end={[280, 160]} active />
            <Connection start={[480, 160]} end={[540, 110]} active />
            <Connection start={[480, 160]} end={[540, 210]} active />

            <WorkflowNode x={20} y={90} icon={<FileText className="w-4 h-4" />} label="Invoice Received" type="Trigger" color="bg-slate-500" />
            <WorkflowNode x={280} y={140} icon={<Cpu className="w-4 h-4" />} label="AI Classifier" type="AI Agent" color="bg-primary" />
            <WorkflowNode x={540} y={90} icon={<Wallet className="w-4 h-4" />} label="USDC Transfer" type="Action" color="bg-primary" />
            <WorkflowNode x={540} y={190} icon={<CreditCard className="w-4 h-4" />} label="PayPal Payment" type="Action" color="bg-accent-blue" />
          </>
        ) : (
          <>
            <Connection start={[220, 120]} end={[280, 120]} active />
            <Connection start={[480, 120]} end={[540, 120]} active />
            <Connection start={[740, 120]} end={[800, 90]} active />
            <Connection start={[740, 120]} end={[800, 150]} active />
            <Connection start={[1000, 90]} end={[1060, 90]} active />
            
            <WorkflowNode x={20} y={100} icon={<FileText className="w-4 h-4" />} label="Invoice Trigger" type="Trigger" color="bg-slate-500" />
            <WorkflowNode x={280} y={100} icon={<Cpu className="w-4 h-4" />} label="AI Classifier" type="AI Agent" color="bg-primary" />
            <WorkflowNode x={540} y={100} icon={<Split className="w-4 h-4" />} label="Condition" type="Condition" color="bg-amber-500" />
            
            <WorkflowNode x={800} y={70} icon={<Wallet className="w-4 h-4" />} label="USDC Transfer" type="Action" color="bg-primary" />
            <WorkflowNode x={800} y={130} icon={<CreditCard className="w-4 h-4" />} label="PayPal Payment" type="Action" color="bg-accent-blue" />
            
            <WorkflowNode x={1060} y={70} icon={<Table className="w-4 h-4" />} label="Excel Log" type="Action" color="bg-emerald-500" />
          </>
        )}
      </div>
    </div>
  );
};
