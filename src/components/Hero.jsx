import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroVideo from '../assets/hero-video/hero-video.mp4';

const Hero = () => {
  const videoRef = useRef(null);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-out' });
  }, []);

  const handleEnter = () => {
    setEntered(true);
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.volume = 1.0;
      videoRef.current.play().catch(console.error);
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">

      {/* Video — NO muted attribute */}
      <video
        ref={videoRef}
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Click to Enter Splash */}
      {!entered && (
        <div
          onClick={handleEnter}
          className="absolute inset-0 z-30 flex flex-col items-center justify-center cursor-pointer bg-black/70 backdrop-blur-sm"
        >
          <div className="flex flex-col items-center gap-6 animate-pulse">
            <div className="w-24 h-24 rounded-full border-2 border-white/60 flex items-center justify-center">
              <svg className="w-10 h-10 text-white ml-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="text-white text-sm font-mono tracking-[0.3em] uppercase opacity-80">
              Click to Enter
            </p>
          </div>
        </div>
      )}

      {/* Main Content */}
      {entered && (
        <div className="absolute inset-0 z-20 px-6 pb-20 md:pb-[8%] md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end w-full">

          {/* Left: Text */}
          <div className="flex flex-col items-start max-w-2xl w-full">
            <h1
              data-aos="fade-up"
              className="text-white text-3xl md:text-5xl font-bold mb-4 tracking-tight"
            >
              Hi, I'm <br />
              <span className="text-transparent [-webkit-text-stroke:1.5px_white]">Nikhil</span>
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-white text-sm md:text-lg font-semibold mb-8 max-w-md drop-shadow-md"
            >
              BCA Student | Automation Tester | Data Analyst | IoT Developer
            </p>
            <div data-aos="fade-up" data-aos-delay="400" className="flex flex-row flex-wrap gap-3">
              <button className="px-4 py-2 md:px-6 md:py-2 text-xs md:text-base rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-105 shadow-md">
                View My Work
              </button>
              <button className="px-4 py-2 md:px-6 md:py-2 text-xs md:text-base rounded-full bg-black/40 border border-white text-white font-semibold hover:bg-black/60 transition-all duration-300 backdrop-blur-md">
                Contact Me
              </button>
            </div>
          </div>

          {/* Right: Play/Pause button */}
          <div
            data-aos="zoom-in"
            data-aos-delay="600"
            className="mt-8 md:mt-0 flex flex-row md:flex-col items-center gap-3 self-start md:self-auto"
          >
            <div className="flex flex-col items-center gap-2 cursor-pointer group">
              <div className="w-12 h-12 md:w-20 md:h-20 rounded-full border border-white/30 bg-black/20 backdrop-blur-md flex justify-center items-center group-hover:scale-110 group-hover:bg-[#ff2a2a] transition-all duration-500">
                <svg className="w-5 h-5 md:w-8 md:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="text-white text-[10px] md:text-xs font-bold tracking-widest uppercase opacity-70">
                Playing
              </span>
            </div>
          </div>

          {/* Scroll Down Arrow */}
          <div
            data-aos="fade-up"
            data-aos-delay="800"
            className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
          >
            <div className="animate-bounce">
              <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>

        </div>
      )}

    </section>
  );
};

export default Hero;