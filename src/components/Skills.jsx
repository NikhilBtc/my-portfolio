import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const skills = [
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', level: 90 },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', level: 80 },
  { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', level: 85 },
  { name: 'Selenium', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg', level: 82 },
  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', level: 75 },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', level: 80 },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', level: 70 },
  { name: 'Power BI', icon: 'https://img.icons8.com/color/96/power-bi.png', level: 85 },
];

const Skills = () => {
  useEffect(() => { AOS.init({ duration: 800, once: true }); }, []);

  return (
    <section id="skills" className="bg-black py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        <div data-aos="fade-up" className="mb-16">
          <p className="text-[#ff2a2a] font-bold uppercase tracking-widest text-sm mb-2">What I Know</p>
          <h2 className="text-4xl md:text-6xl font-black text-white">My <span className="text-[#ff2a2a]">Skills</span></h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <div key={skill.name} data-aos="zoom-in" data-aos-delay={i * 80}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center gap-4 hover:border-[#ff2a2a]/60 hover:bg-white/10 transition-all duration-300 group">
              <img src={skill.icon} alt={skill.name} className="w-14 h-14 object-contain group-hover:scale-110 transition-transform duration-300" />
              <p className="text-white font-semibold text-sm">{skill.name}</p>
              <div className="w-full bg-white/10 rounded-full h-1.5">
                <div className="h-1.5 rounded-full bg-[#ff2a2a] transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}></div>
              </div>
              <span className="text-white/40 text-xs">{skill.level}%</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;