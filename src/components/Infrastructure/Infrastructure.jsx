import React, { useState } from 'react';
import './Infrastructure.css';

function Infrastructure() {
  const [formData, setFormData] = useState({ name: '', email: '', project: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.project) return;
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', project: '' });
    }, 4000);
  };

  return (
    <section id="infrastructure" className="infra-container">
      <div className="infra-grid">
        {/* Lado A: Información del Servidor/Nube */}
        <div className="infra-info-side">
          <h2 className="infra-title">Enterprise-Grade Infrastructure</h2>
          <p className="infra-text">
            We deploy our clients' digital products exclusively on global content delivery networks (CDNs) 
            backed by AWS and Vercel edge routing. Your application scales automatically to handle traffic surges 
            with zero downtime locks, complete data mutation isolation, and native token-based encryption.
          </p>
          <div className="infra-specs">
            <div className="spec-item">🔒 SSL Certified</div>
            <div className="spec-item">⚡ Edge Routing</div>
            <div className="spec-item">🛡️ Fail-Safe Logs</div>
          </div>
        </div>

        {/* Lado B: El Formulario de Cotización para tu Agencia */}
        <div className="infra-form-side">
          <div className="form-box">
            <h3 className="form-box-title">Launch Your Digital Project</h3>
            
            {submitted ? (
              <div className="form-success-alert">
                🚀 Order Placed Successfully! Johan will analyze your infrastructure specs and reach out via email within 2 hours.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="project-form">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required 
                />
                <input 
                  type="email" 
                  placeholder="Corporate Email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required 
                />
                <textarea 
                  placeholder="Describe your website or software project needs..." 
                  value={formData.project}
                  onChange={(e) => setFormData({...formData, project: e.target.value})}
                  rows="4" 
                  required
                ></textarea>
                
                <button type="submit" className="form-submit-btn">Initialize Consultation</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Infrastructure;
