import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => { AOS.init({ duration: 800, once: true }); }, []);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/mzdqjlov', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          message: formData.message,
        }),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="bg-black py-24 px-6 md:px-12 relative overflow-hidden">

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[20vw] font-black text-white/[0.03] whitespace-nowrap">CONTACT</span>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">

        <div data-aos="fade-up" className="mb-16 text-center">
          <p className="text-[#ff2a2a] font-bold uppercase tracking-widest text-sm mb-2">Get In Touch</p>
          <h2 className="text-4xl md:text-6xl font-black text-white">Let's <span className="text-[#ff2a2a]">Connect</span></h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">Open to internship opportunities, collaborations, and freelance projects. Let's build something great together.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Left Info */}
          <div data-aos="fade-right" className="flex flex-col gap-8">

            <a href="mailto:nikhilkishore4220@gmail.com" className="flex items-center gap-5 group">
              <div className="w-14 h-14 rounded-2xl bg-[#ff2a2a]/10 border border-[#ff2a2a]/20 flex items-center justify-center group-hover:bg-[#ff2a2a] transition-all duration-300">
                <svg className="w-6 h-6 text-[#ff2a2a] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Email</p>
                <p className="text-white font-semibold group-hover:text-[#ff2a2a] transition-colors duration-300">nikhilkishore4220@gmail.com</p>
              </div>
            </a>

            <a href="https://in.linkedin.com/in/nikhil-kishore-m-905079357" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 group">
              <div className="w-14 h-14 rounded-2xl bg-[#ff2a2a]/10 border border-[#ff2a2a]/20 flex items-center justify-center group-hover:bg-[#ff2a2a] transition-all duration-300">
                <svg className="w-6 h-6 text-[#ff2a2a] group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-1">LinkedIn</p>
                <p className="text-white font-semibold group-hover:text-[#ff2a2a] transition-colors duration-300">Nikhil Kishore M</p>
              </div>
            </a>

            <a href="https://github.com/NikhilBtc" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 group">
              <div className="w-14 h-14 rounded-2xl bg-[#ff2a2a]/10 border border-[#ff2a2a]/20 flex items-center justify-center group-hover:bg-[#ff2a2a] transition-all duration-300">
                <svg className="w-6 h-6 text-[#ff2a2a] group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-1">GitHub</p>
                <p className="text-white font-semibold group-hover:text-[#ff2a2a] transition-colors duration-300">NikhilBtc</p>
              </div>
            </a>

          </div>

          {/* Right Form */}
          <div data-aos="fade-left" data-aos-delay="200">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-white/40 text-xs uppercase tracking-widest">First Name</label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="John" required
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#ff2a2a]/60 transition-colors duration-300" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white/40 text-xs uppercase tracking-widest">Last Name</label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Doe"
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#ff2a2a]/60 transition-colors duration-300" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-white/40 text-xs uppercase tracking-widest">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#ff2a2a]/60 transition-colors duration-300" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-white/40 text-xs uppercase tracking-widest">Message</label>
                <textarea rows="5" name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project..." required
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#ff2a2a]/60 transition-colors duration-300 resize-none"></textarea>
              </div>

              {/* Status Messages */}
              {status === 'success' && (
                <p className="text-green-400 text-sm font-semibold">✅ Message sent! I'll get back to you soon.</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-sm font-semibold">❌ Something went wrong. Try again!</p>
              )}

              <button type="submit" disabled={status === 'sending'}
                className="w-full py-4 rounded-xl bg-[#ff2a2a] text-white font-bold text-sm uppercase tracking-widest hover:bg-red-700 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed">
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;