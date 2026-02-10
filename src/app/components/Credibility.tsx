import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const StatItem = ({ number, label, delay }: { number: string, label: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="text-center"
  >
    <div className="text-5xl lg:text-6xl font-extrabold text-orange-600 mb-4 tracking-tight">{number}</div>
    <div className="text-slate-500 font-medium">{label}</div>
  </motion.div>
);

export const Credibility = () => {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container mx-auto px-6">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-32">
          <StatItem number="12+" label="Years of Blockchain Expertise" delay={0.1} />
          <StatItem number="50+" label="Web3 Projects Delivered" delay={0.2} />
          <StatItem number="80+" label="Countries Reached" delay={0.3} />
          <StatItem number="$50K" label="Hedera Foundation Grant" delay={0.4} />
        </div>

        {/* Quote Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-slate-50 rounded-[40px] p-8 lg:p-16 border border-slate-100 flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden shadow-2xl shadow-orange-500/5"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100 rounded-full blur-3xl -mr-32 -mt-32 opacity-30" />
          
          <div className="lg:w-1/3 relative">
            <div className="w-full aspect-square rounded-[32px] overflow-hidden shadow-2xl relative z-10 border-4 border-white">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1622169804256-0eb6873ff441?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBoZWFkc2hvdCUyMHRlY2glMjBleGVjdXRpdmV8ZW58MXx8fHwxNzcwNzA4MjA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="Hatem Azaiez" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-500 rounded-2xl flex items-center justify-center text-white z-20 shadow-xl">
              <Quote className="w-10 h-10" />
            </div>
          </div>

          <div className="lg:w-2/3">
            <blockquote className="text-2xl lg:text-3xl font-medium text-slate-900 leading-tight mb-8 italic">
              "From advising Saudi Central Bank on deposit tokenization to organizing the world's largest blockchain hackathon — we build real financial infrastructure."
            </blockquote>
            <div>
              <div className="text-xl font-bold text-slate-900">Hatem Azaiez</div>
              <div className="text-slate-500 font-medium">CTO & Co-Founder, Mariposa Labs</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
