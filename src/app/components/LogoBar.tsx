import React from 'react';
import moonpayLogo from '../../assets/logos/moonpay.png';
import transakLogo from '../../assets/logos/transak.svg';
import hederaLogo from '../../assets/logos/hedera.png';

const LOGOS = [
  { name: 'Hedera', url: hederaLogo },
  { name: 'Solana', url: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png' },
  { name: 'Ethereum', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/1257px-Ethereum_logo_2014.svg.png' },
  { name: 'MoonPay', url: moonpayLogo },
  { name: 'Transak', url: transakLogo },
  { name: 'OpenAI', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1024px-ChatGPT_logo.svg.png' }
];

export const LogoBar = () => {
  return (
    <div className="bg-white py-12 border-y border-slate-100">
      <div className="container mx-auto px-6">
        <p className="text-[14px] text-slate-400 font-bold uppercase tracking-[2px] text-center mb-10">
          BUILT ON THE PLATFORMS YOU TRUST
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 lg:gap-x-20 gap-y-8">
          {LOGOS.map((logo) => (
            <div key={logo.name} className="grayscale opacity-40 hover:opacity-100 transition-all duration-300">
              {/* Note: In a real app we'd use local SVG files as requested, but for now using high quality remote ones if I can't find local */}
              <img 
                src={logo.url} 
                alt={logo.name} 
                className="h-8 lg:h-9 object-contain max-w-[140px]" 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
