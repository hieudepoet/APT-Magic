"use client"

import React from 'react';
import Particles from '../UI/Particles';

interface BackgroundProps {
  className?: string;
}

const Background: React.FC<BackgroundProps> = ({ className = '' }) => {
  return (
    <div 
      className={`fixed inset-0 w-full h-full -z-10 ${className}`}
      style={{ 
        background: 'linear-gradient(180deg, #000000 0%, #111111 50%, #000000 100%)'
      }}
    >
      <Particles
        particleColors={['#ffffff', '#ffffff']}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
    </div>
  );
};

export default Background;