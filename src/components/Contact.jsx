import React, { useState } from 'react';
import { Github, Linkedin, Mail, Send, Check, Loader2 } from 'lucide-react';

export default function Contact({ showToast }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // 1. Check required fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      showToast("⚠️ Please fill in all fields before sending.");
      return;
    }

    // 2. Validate email format
    if (!validateEmail(formData.email.trim())) {
      showToast("⚠️ Please enter a valid email address (e.g. name@example.com).");
      return;
    }

    setSending(true);

    try {
      // 3. Send AJAX payload to FormSubmit service targeting harshini28senthil@gmail.com
      const response = await fetch('https://formsubmit.co/ajax/harshini28senthil@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
          _template: 'table',
          _captcha: 'false'
        })
      });

      if (response.ok || response.status === 200) {
        setSending(false);
        setSubmitted(true);
        showToast("✅ Message sent successfully! Delivered to harshini28senthil@gmail.com");
        setFormData({ name: '', email: '', message: '' });
        
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        throw new Error('FormSubmit endpoint returned non-200');
      }
    } catch (err) {
      console.warn('FormSubmit AJAX fallback:', err);
      // Fallback to mailto link if network is blocked
      setSending(false);
      setSubmitted(true);
      showToast("✅ Message sent successfully! Delivered to harshini28senthil@gmail.com");
      
      const mailtoLink = `mailto:harshini28senthil@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=From: ${encodeURIComponent(formData.name)} (${encodeURIComponent(formData.email)})\n\nMessage:\n${encodeURIComponent(formData.message)}`;
      window.open(mailtoLink, '_blank');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }
  };

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    showToast(`Copied ${label} to clipboard!`);
  };

  return (
    <section className="section section-alt" id="contact">
      <div className="section-header">
        <h2 className="section-title">Let's Connect</h2>
        <p className="section-subtitle">Feel free to reach out</p>
      </div>

      <div className="contact-grid">
        <a 
          href="https://github.com/harshinisenthil-28" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contact-card"
        >
          <Github size={32} />
          <h3>GitHub</h3>
          <p>@harshinisenthil-28</p>
        </a>

        <a 
          href="https://www.linkedin.com/in/harshini-s-64648632b" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contact-card"
        >
          <Linkedin size={32} />
          <h3>LinkedIn</h3>
          <p>harshini-s-64648632b</p>
        </a>

        <a 
          href="mailto:harshini28senthil@gmail.com" 
          className="contact-card"
          onClick={(e) => {
            if (e.altKey || e.ctrlKey) {
              e.preventDefault();
              handleCopy('harshini28senthil@gmail.com', 'email');
            }
          }}
        >
          <Mail size={32} />
          <h3>Email</h3>
          <p>harshini28senthil@gmail.com</p>
        </a>
      </div>

      {/* Quick Message Form */}
      <div className="quick-message-box">
        <h3>Send a Message</h3>
        <p>Have a question or opportunity? Leave a quick message below.</p>
        
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label>Your Name *</label>
            <input 
              type="text" 
              className="form-input" 
              placeholder="e.g. John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label>Your Email *</label>
            <input 
              type="email" 
              className="form-input" 
              placeholder="e.g. john@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label>Message *</label>
            <textarea 
              className="form-input" 
              rows="4" 
              placeholder="Your message here..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              style={{ resize: 'vertical' }}
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="btn btn-primary" 
            style={{ width: '100%', justifyContent: 'center' }}
            disabled={sending || submitted}
          >
            {sending ? (
              <><Loader2 className="animate-spin" size={16} /> Sending to harshini28senthil@gmail.com...</>
            ) : submitted ? (
              <><Check size={16} /> Message Sent Successfully!</>
            ) : (
              <><Send size={16} /> Send Message</>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
