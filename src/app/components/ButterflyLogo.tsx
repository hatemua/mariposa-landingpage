import image_fd0dab763cf974a5223bc1d1c9b42bd0426478cc from '../../assets/fd0dab763cf974a5223bc1d1c9b42bd0426478cc.png'
import image_55f94e31a68044fb1f6e5451706fc59ab6dae156 from '../../assets/55f94e31a68044fb1f6e5451706fc59ab6dae156.png'
import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logoImg from '../../assets/994c54e12af9b919494fb88f7ae13631a94118b2.png';

export const ButterflyLogo = ({ className, color }: { className?: string, color?: string }) => (
  <div className={`flex items-center ${className || 'h-14'}`}>
    <ImageWithFallback
      src={image_fd0dab763cf974a5223bc1d1c9b42bd0426478cc}
      alt="Mariposa Logo"
      className="h-full w-auto object-contain"
    />
  </div>
);
