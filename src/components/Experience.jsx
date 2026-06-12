import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const experiences = [
  {
    role: 'Data Analysis Intern',
    company: 'Cognifyz Technologies',
    duration: '2024',
    type: 'Internship',
    points: [
      'Performed data cleaning, exploration, and visualization on real-world datasets using Python and Pandas.',
      'Built a restaurant rating predictor model using scikit-learn achieving strong prediction accuracy.',
      'Created visual reports with Matplotlib and Seaborn to communicate insights to stakeholders.',
    ],
    tech: ['Python', 'Pandas', 'scikit-learn', 'Matplotlib', 'Seaborn'],
  },
  {
    role: 'IoT Intern',
    company: 'CodTech IT Solutions',
    duration: '2024',
    type: 'Internship',
    points: [
      'Developed a smart lighting system using IoT sensors and real-time Firebase integration.',
      'Programmed microcontrollers for automated room occupancy detection and light control.',
      'Documented system architecture and tested hardware-software integration end-to-end.',
    ],
    tech: ['IoT', 'Firebase', 'Arduino', 'C++', 'Sensors'],
  },
  {
    role: 'Automation Testing Intern',
    company: 'CS Tech Infosolutions',
    duration: '2025',
    type: 'Internship',
    points: [
      'Built a Selenium + TestNG + Java Maven automation framework using Page Object Model architecture.',
      'Automated end-to-end test cases for the Calley Teams web application.',
      'Submitted project via GitHub along with screen recording of test execution for HR review.',
    ],
    tech: ['Selenium', 'Java', 'TestNG', 'Maven', 'POM', 'GitHub'],
  },
];

const Experience = () => {
  useEffect(() => { AOS.init({ duration: 800, once: true }); }, []);

  return (
    <section id="experience" className="bg-black py-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">

        <div data-aos="fade-up" className="mb-16">
          <p className="text-[#ff2a2a] font-bold uppercase tracking-widest text-sm mb-2">My Journey</p>
          <h2 className="text-4xl md:text-6xl font-black text-white">Experience &amp; <span className="text-[#ff2a2a]">Internships</span></h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-white/10"></div>

          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => (
              <div key={exp.company} data-aos="fade-up" data-aos-delay={i * 150}
                className="relative pl-12 md:pl-24">

                {/* Timeline dot */}
                <div className="absolute left-2 md:left-6 top-2 w-5 h-5 rounded-full bg-[#ff2a2a] border-4 border-black shadow-lg shadow-[#ff2a2a]/30"></div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:border-[#ff2a2a]/40 transition-all duration-300">

                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-white text-xl font-bold">{exp.role}</h3>
                      <p className="text-[#ff2a2a] font-semibold">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="px-3 py-1 rounded-full bg-[#ff2a2a]/10 border border-[#ff2a2a]/20 text-[#ff2a2a] text-xs font-bold">
                        {exp.type}
                      </span>
                      <span className="text-white/40 text-sm">{exp.duration}</span>
                    </div>
                  </div>

                  <ul className="flex flex-col gap-2 mb-5">
                    {exp.points.map((point, j) => (
                      <li key={j} className="flex gap-3 text-white/60 text-sm leading-relaxed">
                        <span className="text-[#ff2a2a] mt-1 shrink-0">▹</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map(t => (
                      <span key={t} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 text-xs font-medium">
                        {t}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;