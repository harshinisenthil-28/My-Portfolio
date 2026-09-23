import React, { useState } from 'react';
import { User, GraduationCap, Code2, Briefcase, Trophy, Quote, Zap, Target } from 'lucide-react';

export default function About() {
  const [skillCategory, setSkillCategory] = useState('all');

  const skillsData = [
    { name: 'Java', cat: 'lang' },
    { name: 'C++', cat: 'lang' },
    { name: 'Python', cat: 'lang' },
    { name: 'C', cat: 'lang' },
    { name: 'Spring Boot', cat: 'backend' },
    { name: 'REST APIs', cat: 'backend' },
    { name: 'Node.js', cat: 'backend' },
    { name: 'Express.js', cat: 'backend' },
    { name: 'JDBC & Hibernate', cat: 'backend' },
    { name: 'React.js', cat: 'frontend' },
    { name: 'JavaScript', cat: 'frontend' },
    { name: 'HTML5 & CSS3', cat: 'frontend' },
    { name: 'MySQL', cat: 'db' },
    { name: 'MongoDB', cat: 'db' },
    { name: 'Gemini API', cat: 'ai' },
    { name: 'Git & GitHub', cat: 'tools' },
    { name: 'Postman', cat: 'tools' },
    { name: 'Maven', cat: 'tools' },
    { name: 'Vercel', cat: 'tools' },
    { name: 'Render', cat: 'tools' },
  ];

  const filteredSkills = skillCategory === 'all' 
    ? skillsData 
    : skillsData.filter(s => s.cat === skillCategory);

  return (
    <section className="section" id="about">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">A little more about who I am</p>
      </div>

      <div className="masonry about-masonry">
        {/* Who I Am Card */}
        <div className="pin pin-about">
          <div className="pin-content">
            <div className="pin-icon"><User size={24} /></div>
            <h3>Who I Am</h3>
            <p>
              I am a B.E. Computer Science and Engineering student at Karpagam College of Engineering, Coimbatore. I have strong foundations in Data Structures & Algorithms, Object-Oriented Programming, and database systems. I'm passionate about building full-stack applications with Spring Boot, React, Node.js, and integrating AI services to solve real-world problems.
            </p>
          </div>
        </div>

        {/* Education Card */}
        <div className="pin pin-education">
          <div className="pin-content">
            <div className="pin-icon"><GraduationCap size={24} /></div>
            <h3>Education</h3>
            <div className="edu-item">
              <span className="edu-degree">B.E. - Computer Science & Engineering</span>
              <span className="edu-school">Karpagam College of Engineering, Coimbatore</span>
              <span className="edu-year">2024 - 2028 <span className="edu-score">CGPA: 8.67/10</span></span>
            </div>
            <div className="edu-item">
              <span className="edu-degree">Higher Secondary Certificate (HSC)</span>
              <span className="edu-school">KMC Public Senior Secondary School (CBSE), Tirupur</span>
              <span className="edu-year">2024 <span className="edu-score">Score: 77%</span></span>
            </div>
          </div>
        </div>

        {/* Innovative Core Strengths Pin (Replacing Photo Pin) */}
        <div className="pin pin-strengths">
          <div className="pin-content">
            <div className="pin-icon" style={{ background: '#c1694f' }}><Zap size={24} /></div>
            <h3>Problem Solving & Focus</h3>
            <div className="strengths-list" style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '12px' }}>
              <div className="strength-badge" style={{ padding: '10px 14px', background: 'var(--bg-alt)', borderRadius: '12px', borderLeft: '4px solid var(--accent)' }}>
                <strong style={{ fontSize: '14px', display: 'block', color: 'var(--text)' }}>Data Structures & Algorithms</strong>
                <span style={{ fontSize: '12px', color: 'var(--text-light)' }}>Solved 450+ LeetCode problems covering trees, graphs, dynamic programming, and sorting.</span>
              </div>
              <div className="strength-badge" style={{ padding: '10px 14px', background: 'var(--bg-alt)', borderRadius: '12px', borderLeft: '4px solid var(--warm-4)' }}>
                <strong style={{ fontSize: '14px', display: 'block', color: 'var(--text)' }}>Full-Stack Web Architecture</strong>
                <span style={{ fontSize: '12px', color: 'var(--text-light)' }}>End-to-end development with Spring Boot backend, React frontend, RESTful APIs, and Cloud deployments.</span>
              </div>
              <div className="strength-badge" style={{ padding: '10px 14px', background: 'var(--bg-alt)', borderRadius: '12px', borderLeft: '4px solid var(--warm-2)' }}>
                <strong style={{ fontSize: '14px', display: 'block', color: 'var(--text)' }}>Generative AI Integration</strong>
                <span style={{ fontSize: '12px', color: 'var(--text-light)' }}>Microsoft GenAI certified; experienced in integrating Google Gemini API into full-stack web platforms.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Card */}
        <div className="pin pin-skills">
          <div className="pin-content">
            <div className="pin-icon"><Code2 size={24} /></div>
            <h3>Tech Stack</h3>
            
            <div className="skill-filter-btns">
              {[
                { label: 'All', id: 'all' },
                { label: 'Languages', id: 'lang' },
                { label: 'Backend', id: 'backend' },
                { label: 'Frontend', id: 'frontend' },
                { label: 'DB & Tools', id: 'tools' },
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setSkillCategory(btn.id)}
                  className={`skill-filter-btn ${skillCategory === btn.id ? 'active' : ''}`}
                >
                  {btn.label}
                </button>
              ))}
            </div>

            <div className="skill-tags">
              {filteredSkills.map((skill, idx) => (
                <span key={idx} className="skill-tag">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Experience & Leadership Card */}
        <div className="pin pin-experience">
          <div className="pin-content">
            <div className="pin-icon"><Briefcase size={24} /></div>
            <h3>Experience & Leadership</h3>
            
            <div className="exp-item">
              <span className="exp-role">Software Intern</span>
              <span className="exp-company">Assitanz Networks Pvt. Ltd.</span>
              <span className="exp-period">Industrial Exposure Internship</span>
              <p className="exp-desc">Completed a 1-week industrial exposure internship gaining practical exposure to software development workflow.</p>
            </div>

            <div className="exp-item">
              <span className="exp-role">Communication Chair Head</span>
              <span className="exp-company">AURA Association, KCE</span>
              <p className="exp-desc">Leading communication initiatives and coordinating student activities across departments.</p>
            </div>

            <div className="exp-item">
              <span className="exp-role">Master of Ceremonies (MC)</span>
              <span className="exp-company">College Events</span>
              <p className="exp-desc">Demonstrated public speaking, communication, and event coordination skills for major college events.</p>
            </div>
          </div>
        </div>

        {/* Achievements Card */}
        <div className="pin pin-achievements">
          <div className="pin-content">
            <div className="pin-icon"><Trophy size={24} /></div>
            <h3>Achievements</h3>
            <ul className="achievement-list">
              <li><strong>LeetCode Champion</strong> - Solved 450+ Data Structures & Algorithms problems</li>
              <li><strong>Microsoft Certified</strong> - Microsoft Generative AI Certification</li>
              <li><strong>NPTEL Certified</strong> - Competitive Programming & Introduction to Internet of Things (IoT)</li>
              <li><strong>Smart India Hackathon (SIH)</strong> - Selected by KCE to submit project proposal</li>
            </ul>
          </div>
        </div>

        {/* Quote Card */}
        <div className="pin pin-quote">
          <div className="pin-content">
            <Quote className="quote-icon" size={32} />
            <p className="quote-text">
              Transforming complex algorithmic logic into seamless, high-performance full-stack web applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
