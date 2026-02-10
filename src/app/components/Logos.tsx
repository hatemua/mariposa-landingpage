import React from 'react';

const LOGOS = [
  { name: 'Hedera', src: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Hedera_Logo.svg' },
  { name: 'Solana', src: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.svg' },
  { name: 'Ethereum', src: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Ethereum_logo_2014.svg' },
  { name: 'MoonPay', src: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/MoonPay_Logo.svg' },
  { name: 'Transak', src: 'https://transak.com/static/media/transak-logo-blue.e77f0d0e.svg' },
  { name: 'OpenAI', src: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg' },
];

export const Logos = () => {
  return (
    <section className="bg-[#F8FAFC] py-12 border-y border-slate-100">
      <div className="container mx-auto px-6">
        <p className="text-center text-slate-400 text-sm font-semibold uppercase tracking-widest mb-10">
          Built on the chains and platforms you trust
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-50">
          {LOGOS.map((logo) => (
            <div 
              key={logo.name} 
              className="h-8 lg:h-10 transition-all duration-300 grayscale hover:grayscale-0 hover:opacity-100 flex items-center justify-center"
            >
              {/* Using a placeholder text for logos that might not load correctly, but trying to use real ones where possible */}
              {logo.name === 'Transak' ? (
                <span className="font-bold text-slate-800 text-xl">{logo.name}</span>
              ) : (
                <img 
                  src={logo.src} 
                  alt={logo.name} 
                  className="h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).parentElement!.innerHTML = `<span class="font-bold text-slate-800 text-xl">${logo.name}</span>`;
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
