import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const projects = [
  {
    title: 'Restaurant Rating Predictor',
    description: 'A machine learning model that predicts restaurant ratings based on location, cuisine, and pricing data. Built with Python and scikit-learn.',
    tech: ['Python', 'Pandas', 'scikit-learn', 'Matplotlib'],
    github: 'https://github.com/NikhilBtc/COGNIFYZ-DATA-ANALYSIS-INTERN',
  },
  {
    title: 'E-Commerce Sales Analysis',
    description: 'Interactive sales analysis dashboard visualizing KPIs, trends, and regional performance for data-driven business decisions.',
    tech: ['Power BI', 'SQL', 'Excel', 'DAX'],
    github: 'https://github.com/NikhilBtc/E-COMMERCE-SALES-ANALYSIS',
  },
  {
    title: 'Smart Light Control',
    description: 'IoT-based smart lighting system using sensors and Firebase for real-time control and automation of lights based on room occupancy.',
    tech: ['IoT', 'Firebase', 'Arduino', 'C++'],
    github: 'https://github.com/NikhilBtc/SMART-LIGHT-CONTROL',
  },
];

const Projects = () => {
  useEffect(() => { AOS.init({ duration: 800, once: true }); }, []);

  return (
    <section id="projects" className="bg-[#0a0a0a] py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        <div data-aos="fade-up" className="mb-16">
          <p className="text-[#ff2a2a] font-bold uppercase tracking-widest text-sm mb-2">What I've Built</p>
          <h2 className="text-4xl md:text-6xl font-black text-white">My <span className="text-[#ff2a2a]">Projects</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div key={project.title} data-aos="fade-up" data-aos-delay={i * 100}
              className="relative bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col gap-4 hover:border-[#ff2a2a]/50 hover:bg-white/8 hover:-translate-y-1 transition-all duration-300 group overflow-hidden">

              {/* Glow sweep effect */}
              <div className="pointer-events-none absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(circle at 50% 0%, rgba(255,42,42,0.15), transparent 60%)'
                }}
              />

              <div className="relative flex items-start justify-between">
                <h3 className="text-white text-xl font-bold group-hover:text-[#ff2a2a] transition-colors duration-300 leading-tight max-w-[75%]">
                  {project.title}
                </h3>
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  className="text-white/40 hover:text-white transition-all duration-300 shrink-0 mt-1 group-hover:rotate-6">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
              </div>

              <p className="relative text-white/60 text-sm leading-relaxed">{project.description}</p>

              <div className="relative flex flex-wrap gap-2 mt-auto pt-2">
                {project.tech.map((t, ti) => (
                  <span key={t}
                    className="px-3 py-1 rounded-full bg-[#ff2a2a]/10 border border-[#ff2a2a]/20 text-[#ff2a2a] text-xs font-semibold transition-all duration-300 group-hover:bg-[#ff2a2a]/20 group-hover:border-[#ff2a2a]/40"
                    style={{ transitionDelay: `${ti * 40}ms` }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a href={project.github} target="_blank" rel="noopener noreferrer"
                className="relative mt-2 w-full py-3 rounded-xl border border-white/10 text-white/60 text-sm font-semibold text-center hover:border-[#ff2a2a]/50 hover:text-white transition-all duration-300">
                View on GitHub →
              </a>

            </div>
          ))}
        </div>

        <div data-aos="fade-up" className="mt-12 text-center">
          <a href="https://github.com/NikhilBtc" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            View All Projects on GitHub
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;