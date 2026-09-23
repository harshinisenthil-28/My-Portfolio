import React from 'react';
import { Download, Send } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">Harshini S</h1>
          <p className="hero-role">Computer Science Engineering Student</p>
          <p className="hero-desc">
            Passionate software developer with strong foundations in Data Structures & Algorithms, Object-Oriented Programming, and building full-stack web applications with Spring Boot, React, Node.js, and Gemini AI.
          </p>
          <div className="hero-buttons">
            <button onClick={() => scrollToSection('projects')} className="btn btn-primary">
              View Projects
            </button>
            <a href="/assets/Harshini_S_Resume.pdf" download="Harshini_S_Resume.pdf" className="btn btn-outline">
              <Download size={16} /> Resume
            </a>
            <button onClick={() => scrollToSection('contact')} className="btn btn-outline">
              <Send size={16} /> Get in Touch
            </button>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-image-card">
            <img src="/assets/profile.jpg" alt="Harshini S" />
            {/* Instagram Style Active Green Badge */}
            <span className="status-dot-active" title="Active now"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
