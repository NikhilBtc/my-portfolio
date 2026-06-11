import React, { useState, useEffect } from 'react';

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-opacity duration-700">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
        <p className="text-white text-sm font-mono tracking-widest uppercase opacity-60">Loading...</p>
      </div>
    </div>
  );
};

export default Preloader;