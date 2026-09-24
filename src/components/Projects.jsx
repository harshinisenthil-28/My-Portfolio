import React, { useState } from 'react';
import { ShieldAlert, QrCode, ArrowRight, Layers, CheckCircle2 } from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'cyberbullying',
      title: 'AI Based Cyberbullying & Harmful Content Detection Platform',
      headerClass: 'cyberbullying-proj',
      icon: <ShieldAlert size={28} />,
      tags: ['React', 'Gemini API', 'SpringBoot', 'MySQL', 'Vercel', 'Render'],
      description: 'Developed a role-based full-stack web application using React.js and Spring Boot to detect cyberbullying and harmful content across multiple user roles. Integrated the Gemini API with a Spring Boot backend and MySQL database to analyze content, securely store user data, prediction history, and reports.',
      features: [
        'Role-Based Authorization & User Dashboard for multi-user safety monitoring',
        'Gemini AI API Integration for real-time text sentiment & toxicity classification',
        'Spring Boot REST backend with JPA / MySQL database storage for prediction logs & reports',
        'Frontend deployed on Vercel & Backend deployed on Render with CI/CD GitHub workflow'
      ]
    },
    {
      id: 'queue',
      title: 'Smart Queue Management System',
      headerClass: 'queue-proj',
      icon: <QrCode size={28} />,
      tags: ['HTML/CSS/JS', 'Node.js', 'Express.js', 'MongoDB Atlas', 'Vercel', 'Render'],
      description: 'Built a QR-based Smart Queue Management System that enables contactless registration, real-time queue tracking, and estimated wait-time updates. Developed RESTful APIs using Node.js and Express.js for user registration and queue management.',
      features: [
        'Contactless QR code scanner & digital token generation for seamless visitor entry',
        'Real-time queue position tracking & automated wait-time estimation algorithm',
        'Node.js & Express.js RESTful API architecture for high throughput operations',
        'MongoDB Atlas cloud database integration with Vercel and Render public deployment'
      ]
    }
  ];

  return (
    <section className="section section-alt" id="projects">
      <div className="section-header">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Things I've built</p>
      </div>

      <div className="masonry projects-masonry">
        {projects.map((proj) => (
          <div 
            key={proj.id} 
            className={`pin pin-project ${proj.id !== 'queue' ? 'pin-clickable' : ''}`}
            onClick={() => {
              if (proj.id !== 'queue') {
                setSelectedProject(proj);
              }
            }}
          >
            <div className={`project-header ${proj.headerClass}`}>
              <div className="project-icon">{proj.icon}</div>
            </div>
            <div className="pin-content">
              <div className="project-tags">
                {proj.tags.map((tag, idx) => (
                  <span key={idx} className="project-tag">{tag}</span>
                ))}
              </div>
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              
              {proj.id !== 'queue' && (
                <div style={{ marginTop: '16px', color: 'var(--accent)', fontSize: '13px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  View Project Details <ArrowRight size={14} />
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Innovative Architecture & Stack Pin */}
        <div className="pin pin-architecture">
          <div className="pin-content">
            <div className="pin-icon" style={{ background: '#6b9080' }}><Layers size={24} /></div>
            <h3>Development Workflow</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: 'var(--text-light)' }}>
                <CheckCircle2 size={16} color="var(--accent)" /> Frontend: React.js & Responsive UI
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: 'var(--text-light)' }}>
                <CheckCircle2 size={16} color="var(--accent)" /> Backend: Spring Boot & Node.js REST APIs
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: 'var(--text-light)' }}>
                <CheckCircle2 size={16} color="var(--accent)" /> Databases: MySQL & MongoDB Atlas
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: 'var(--text-light)' }}>
                <CheckCircle2 size={16} color="var(--accent)" /> AI Integration: Google Gemini API
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: 'var(--text-light)' }}>
                <CheckCircle2 size={16} color="var(--accent)" /> Cloud Hosting: Vercel & Render
              </div>
            </div>
          </div>
        </div>

        {/* Stats Card */}
        <div className="pin pin-stats">
          <div className="pin-content">
            <h3>By The Numbers</h3>
            <div className="stats-grid">
              <div className="stat">
                <span className="stat-number">450+</span>
                <span className="stat-label">LeetCode Solved</span>
              </div>
              <div className="stat">
                <span className="stat-number">2+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat">
                <span className="stat-number">8.67</span>
                <span className="stat-label">BE CGPA</span>
              </div>
              <div className="stat">
                <span className="stat-number">3+</span>
                <span className="stat-label">Certifications</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
}
