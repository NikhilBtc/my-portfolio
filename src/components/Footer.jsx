import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-[#d4d4d4] py-16 px-6 md:px-12 w-full font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full font-medium">
        <div className="flex flex-col gap-1">
          <p>BCA Student | Jain University</p>
          <p>Automation Testing | Data Analysis</p>
          <p>IoT Development</p>
        </div>
        <div className="flex flex-col gap-1 md:items-center">
          <p>Open to opportunities</p>
          <a href="#about" className="underline hover:text-white transition-colors mt-1 underline-offset-4 decoration-1">About Me</a>
        </div>
        <div className="flex flex-col gap-1 md:items-end">
          <p>Bengaluru, India</p>
          <p>{new Date().getFullYear()}</p>
        </div>
      </div>
      <div className="w-full flex justify-center items-center py-20 md:py-24 overflow-hidden">
        <h2 className="text-[18vw] md:text-[16vw] leading-none font-sans font-bold tracking-tighter lowercase select-none text-[#f4f4f4] w-full text-center">
          nikhil
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full items-end font-medium">
        <div className="flex flex-col gap-6">
          <a href="#contact" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 font-bold">Contact</a>
          <p className="text-white/60 font-mono text-[9px] md:text-[10px]">&copy; {new Date().getFullYear()} Nikhil | Built with React</p>
        </div>
        <div className="flex flex-col gap-1 md:items-center">
          <a href="mailto:nikhilkishore4220@gmail.com" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 lowercase">your@email.com</a>
        </div>
        <div className="flex flex-col gap-1 md:items-end">
          <a href="#" className="underline hover:text-white transition-colors underline-offset-4 decoration-1">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;