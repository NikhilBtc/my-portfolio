import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';

const TagCard = ({ number, title, text, className, aosDelay, aosType, pathLength, containerRef }) => {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useMotionValueEvent(pathLength, "change", (latest) => {
    if (!ref.current || !containerRef.current) return;
    
    const cardRect = ref.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    
    const cardTopRelativeToContainer = cardRect.top - containerRect.top;
    const containerHeight = containerRect.height;
    
    const triggerY = cardTopRelativeToContainer + 50;
    const lineTipY = latest * containerHeight;
    
    if (lineTipY >= triggerY && !isActive) {
      setIsActive(true);
    } else if (lineTipY < triggerY && isActive) {
      setIsActive(false);
    }
  });

  return (
    <div 
      ref={ref}
      data-aos={aosType || "fade-up"} 
      data-aos-delay={aosDelay}
      className={`w-72 sm:w-80 rounded-[2rem] p-2 relative flex flex-col items-center hover:scale-[1.02] transition-all duration-700 z-10 ${className} ${
        isActive ? 'bg-[#ff2a2a] border-red-400 shadow-[0_20px_50px_rgba(255,42,42,0.4)]' : 'bg-white border border-gray-200 shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]'
      }`}
    >
      <div className="w-5 h-5 bg-gradient-to-br from-gray-300 to-gray-100 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] absolute top-4 border border-gray-300 z-10 flex items-center justify-center">
        <div className="w-2 h-2 bg-gray-800 rounded-full opacity-20"></div>
      </div>
      
      <div className={`w-full h-full rounded-[1.5rem] mt-8 p-8 flex flex-col min-h-[220px] transition-colors duration-700 ${
        isActive ? 'bg-red-700/50' : 'bg-[#f4f4f4]'
      }`}>
        <span className={`text-xl font-bold mb-2 font-serif italic transition-colors duration-700 ${
          isActive ? 'text-red-200' : 'text-gray-400'
        }`}>
          {number}
        </span>
        
        <h3 className={`text-2xl font-black mb-3 tracking-tight transition-colors duration-700 ${
          isActive ? 'text-white' : 'text-gray-900'
        }`}>
          {title}
        </h3>
        
        <p className={`text-sm leading-relaxed font-medium transition-colors duration-700 ${
          isActive ? 'text-red-100' : 'text-gray-500'
        }`}>
          {text}
        </p>
      </div>
    </div>
  );
};

const Services = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001
  });

  return (
    <section
      id="services"
      ref={containerRef}
      className="bg-white pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      {/* Rest of the Services component */}
    </section>
  );
};

export default Services;