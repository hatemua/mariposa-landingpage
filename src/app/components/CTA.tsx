import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Send } from 'lucide-react';

export const CTA = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Orange Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F97316] to-[#EA580C]" />
      
      {/* Decorative floating shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to automate your financial operations?
          </h2>
          <p className="text-orange-50 text-lg lg:text-xl mb-12 opacity-90">
            Join the waitlist for early access or book a demo with our team
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto mb-8">
            <div className="relative w-full">
              <input 
                type="email" 
                placeholder="Enter your work email"
                className="w-full px-6 py-4 rounded-full bg-white text-slate-900 focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium"
              />
            </div>
            <button className="w-full sm:w-auto flex-shrink-0 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-black transition-all shadow-xl active:scale-95 flex items-center justify-center gap-2">
              Join Waitlist <Send className="w-4 h-4" />
            </button>
          </div>

          <div className="flex flex-col gap-6">
            <a href="https://calendly.com/hatemazaiez1/mariposa-demo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center text-white font-bold hover:underline transition-all">
              Book a Demo <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-orange-100/70 text-sm">
              <span>Free sandbox access</span>
              <span>No credit card</span>
              <span>API documentation available</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
