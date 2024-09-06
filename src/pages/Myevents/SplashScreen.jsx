import React, { useEffect } from 'react';
import Vite from './vite.svg'

const SplashScreen = ({ isLoading, onLoadComplete }) => {
  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => onLoadComplete(), 7000); // 3 seconds
      return () => clearTimeout(timer);
    }
  }, [isLoading, onLoadComplete]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-[#024DDF] transition-opacity ${
        isLoading ? 'opacity-100' : 'opacity-0 h-0'
      }`}
      style={{ zIndex: 9999, transition: 'opacity 0.5s ease' }}
    >
      <h1 className="text-white text-6xl font-bold">
      <img src={Vite} alt="Ticket Icon" width={150} height={150}/>
      </h1>
    </div>
  );
};

export default SplashScreen;
