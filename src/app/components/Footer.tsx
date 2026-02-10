import React from 'react';
import { Twitter, Linkedin, Github } from 'lucide-react';
import { ButterflyLogo } from './ButterflyLogo';

export const Footer = () => {
  return (
    <footer className="bg-navy pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Logo Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <ButterflyLogo className="w-24 h-24" />

            </div>
            <p className="text-slate-500 text-[12px] font-medium uppercase tracking-widest mb-8">
              by TalentAI Labs
            </p>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-8">
              Visual pipeline builder for fintech automation. Connect stablecoins, payment APIs, and AI agents.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-slate-500 hover:text-white hover:border-white/20 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-slate-500 hover:text-white hover:border-white/20 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-slate-500 hover:text-white hover:border-white/20 transition-all">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Product</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#components" className="text-slate-400 hover:text-white transition-colors text-sm">Components</a></li>
              <li><a href="#use-cases" className="text-slate-400 hover:text-white transition-colors text-sm">Use Cases</a></li>
              <li><a href="#roadmap" className="text-slate-400 hover:text-white transition-colors text-sm">Roadmap</a></li>
              <li><a href="#faq" className="text-slate-400 hover:text-white transition-colors text-sm">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12">
          <div className="text-slate-600 text-[12px] text-center">
            © 2026 Mariposa by TalentAI Labs. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
