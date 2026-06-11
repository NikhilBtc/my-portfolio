import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import photo from '../assets/about/photo.jpeg';
import skill1 from '../assets/about/python.png';
import skill2 from '../assets/about/powerbi.png';
import skill3 from '../assets/about/java.png';

const About = () => {
  useEffect(() => { AOS.init({ duration: 1000, once: true }); }, []);
  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 z-0"></div>
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-md"></div>
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-2xl relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800">
                <img src={photo} alt="Nikhil" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">Hello!</h2>
          <p className="text-lg font-bold mb-12 leading-relaxed max-w-3xl text-red-50">
            Hi, my name is <span className="text-black text-xl font-black mx-1 tracking-wide uppercase">Nikhil</span>, a BCA student at Jain University, Bengaluru. I'm passionate about Automation Testing, Data Analysis, IoT, and building real-world tech solutions.
          </p>
          <div className="flex items-center gap-10 mt-8">
            <img data-aos="zoom-in" data-aos-delay="300" src={skill1} alt="Python" className="w-20 h-20 md:w-24 md:h-24 object-contain hover:scale-110 transition-transform duration-300 drop-shadow-2xl" />
            <img data-aos="zoom-in" data-aos-delay="450" src={skill2} alt="Power BI" className="w-20 h-20 md:w-24 md:h-24 object-contain hover:scale-110 transition-transform duration-300 drop-shadow-2xl" />
            <img data-aos="zoom-in" data-aos-delay="600" src={skill3} alt="Java" className="w-20 h-20 md:w-24 md:h-24 object-contain hover:scale-110 transition-transform duration-300 drop-shadow-2xl" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};
export default About;