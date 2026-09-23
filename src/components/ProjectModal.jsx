import React from 'react';
import { X, ExternalLink } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">{project.title}</h3>
          <button className="modal-close" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          <div className="project-tags" style={{ marginBottom: '16px' }}>
            {project.tags.map((tag, i) => (
              <span key={i} className="project-tag">{tag}</span>
            ))}
          </div>

          <p style={{ fontSize: '15px', color: 'var(--text-light)', marginBottom: '20px', lineHeight: '1.7' }}>
            {project.description}
          </p>

          <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '10px' }}>Key Architecture & Features</h4>
          <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: 'var(--text-light)', fontSize: '14px', marginBottom: '24px' }}>
            {project.features.map((feat, idx) => (
              <li key={idx} style={{ marginBottom: '8px', lineHeight: '1.6' }}>{feat}</li>
            ))}
          </ul>

          <div style={{ marginTop: '24px', display: 'flex', gap: '12px' }}>
            <a 
              href="https://github.com/harshinisenthil-28" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
              style={{ fontSize: '13px', padding: '10px 24px' }}
            >
              <ExternalLink size={14} /> View GitHub Code Repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
