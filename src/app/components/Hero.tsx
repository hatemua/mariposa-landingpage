import React from 'react';
import { motion } from 'motion/react';
import { WorkflowVisual } from './WorkflowVisual';
import { ButterflyLogo } from './ButterflyLogo';

export const Hero = () => {
  return (
    <section className="relative bg-navy pt-24 pb-12 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-24">
          {/* Left Content */}
          <div className="lg:w-[52%]">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-primary text-[12px] font-semibold tracking-wide uppercase">
                  Now in Beta · Blockchain components live
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-[84px] font-bold text-white leading-[1.05] tracking-tight mx-[0px] mt-[0px] mb-6 lg:mb-[32px]">Automate your<br />money flows.<br /><span className="text-primary">Zero code.</span></h1>
              
              <p className="text-slate-400 text-base lg:text-xl mb-8 lg:mb-12 max-w-[520px] leading-relaxed">
                Mariposa is the visual pipeline builder for fintech. Connect stablecoins, wallets, bank APIs, and AI agents in drag-and-drop workflows. Deploy in minutes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8 lg:mb-12">
                <a href="https://calendly.com/hatemazaiez1/mariposa-demo" target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-md font-bold transition-all shadow-2xl shadow-primary/40 active:scale-95 text-lg text-center">
                  Book a Demo
                </a>
                <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-10 py-5 rounded-md font-bold transition-all active:scale-95 text-lg backdrop-blur-sm">
                  Documentation →
                </button>
              </div>

              <div className="flex items-center gap-8 text-slate-500 text-[13px] font-medium tracking-wide">
                <span className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-primary" />
                  Free sandbox
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-primary" />
                  No credit card
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-primary" />
                  API-first
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Visual */}
          <div className="lg:w-[48%] w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Complex glow effects */}
              <div className="absolute -inset-20 bg-primary/20 rounded-full blur-[120px] opacity-20 pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full aspect-square bg-primary/5 rounded-full blur-[160px] pointer-events-none m-[0px]" />
              
              <div className="relative z-10 transform transition-transform duration-700 hover:scale-[1.01]">
                <WorkflowVisual variant="hero" />
              </div>
              
              {/* Floating UI Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-navy-light border border-slate-800 rounded-xl shadow-2xl z-20 hidden lg:flex items-center justify-center animate-bounce-slow">
                <div className="text-primary font-bold text-2xl">100+</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
