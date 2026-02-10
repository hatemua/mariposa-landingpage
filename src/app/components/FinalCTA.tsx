import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const FinalCTA = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-primary-dark py-32 lg:py-40">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[40px] lg:text-[48px] text-white font-bold leading-tight mb-6">
              Ready to automate your financial operations?
            </h2>
            <p className="text-[18px] text-white/80 leading-relaxed mb-12">
              Join the waitlist for early access or talk to our team
            </p>

            <div className="flex flex-col sm:flex-row items-stretch justify-center gap-0 max-w-[520px] mx-auto mb-10 overflow-hidden rounded-md border border-white/20">
              <input 
                type="email" 
                placeholder="Enter your work email"
                className="flex-1 px-6 py-4 bg-white text-slate-900 focus:outline-none text-base placeholder:text-slate-400"
              />
              <button className="bg-navy hover:bg-black text-white px-8 py-4 font-bold transition-all text-base whitespace-nowrap active:scale-95">
                Join Waitlist
              </button>
            </div>

            <div className="flex flex-col gap-6">
              <a href="https://calendly.com/hatemazaiez1/mariposa-demo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center text-white font-bold hover:underline gap-2 group text-base">
                or Book a Demo <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <div className="flex justify-center items-center gap-6 text-white/60 text-[12px] font-medium tracking-wide">
                <span>Free sandbox</span>
                <div className="w-1 h-1 rounded-full bg-white/30" />
                <span>No spam</span>
                <div className="w-1 h-1 rounded-full bg-white/30" />
                <span>Unsubscribe anytime</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
