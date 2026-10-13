import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';
import { Sparkles, CheckCircle2, ArrowRight, MessageSquare, AlertCircle } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Chart Analysis', 'Relationships', 'Career & Life', 'Vastu & Space', 'Specific Queries'];

  const filteredServices = selectedCategory === 'All'
    ? servicesData
    : servicesData.filter(s => s.category === selectedCategory);

  return (
    <div style={{ padding: '3.5rem 0 6rem', backgroundColor: '#180C1D' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="badge-gold" style={{ marginBottom: '0.85rem' }}>
            <Sparkles size={13} />
            <span>Consultation Catalog</span>
          </div>
          <h1 className="section-title">
            Astrological Guidance & <span className="orange-gold-text">Services</span>
          </h1>
          <div className="sacred-divider">
            <span className="sacred-symbol">॥ शास्त्रानुमोदित सेवा ॥</span>
          </div>
          <p className="section-desc">
            Structured consultation offerings for life's pivotal decisions. The service categories and descriptions below represent provisional demonstration content designed for client review and final approval.
          </p>
        </div>

        {/* Demo Content Notice */}
        <div style={{
          background: 'rgba(239, 112, 45, 0.08)',
          border: '1px dashed rgba(239, 112, 45, 0.35)',
          borderRadius: '12px',
          padding: '1rem 1.5rem',
          marginBottom: '2.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          fontSize: '0.85rem',
          color: '#FFA77A'
        }}>
          <AlertCircle size={18} style={{ flexShrink: 0 }} />
          <div>
            <strong>Editable Service Demonstration:</strong> These services illustrate proposed consultation packages. Shubham Dixit can add, modify, re-name, or remove services during final client onboarding without requiring site redesign.
          </div>
        </div>

        {/* Category Filter Pills */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.65rem',
          flexWrap: 'wrap',
          marginBottom: '3rem'
        }}>
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  background: isSelected ? 'var(--orange-burnished)' : 'rgba(32, 16, 38, 0.7)',
                  border: isSelected ? '1px solid var(--orange-burnished)' : '1px solid var(--border-subtle)',
                  color: isSelected ? '#FFFFFF' : 'var(--text-light-soft)',
                  padding: '0.55rem 1.25rem',
                  borderRadius: '9999px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'var(--transition-smooth)'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <div 
          className="mobile-grid-1col"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '2.5rem',
          marginBottom: '4rem'
        }}>
          {filteredServices.map((service) => (
            <div 
              key={service.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '2.5rem',
                borderRadius: '20px',
                border: '1.5px solid var(--border-subtle)'
              }}
            >
              {/* Category & Sanskrit Term */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1rem'
              }}>
                <span className="badge-demo">{service.category}</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--gold-antique)', fontStyle: 'italic' }}>
                  {service.sanskritTerm}
                </span>
              </div>

              {/* Service Title */}
              <h2 style={{
                fontFamily: 'var(--font-cinzel)',
                fontSize: '1.45rem',
                color: '#FFFFFF',
                marginBottom: '0.85rem',
                lineHeight: 1.3
              }}>
                {service.title}
              </h2>

              {/* Summary */}
              <p style={{
                fontSize: '0.92rem',
                lineHeight: 1.7,
                color: 'var(--text-light-soft)',
                marginBottom: '1.5rem'
              }}>
                {service.summary}
              </p>

              {/* Scope Inclusions */}
              <div style={{ marginBottom: '1.75rem', flex: 1 }}>
                <div style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: 'var(--gold-antique)',
                  marginBottom: '0.75rem'
                }}>
                  What this session includes:
                </div>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {service.scope.map((pt, sIdx) => (
                    <li key={sIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: 'var(--text-light-soft)', lineHeight: 1.5 }}>
                      <CheckCircle2 size={15} style={{ color: 'var(--orange-burnished)', flexShrink: 0, marginTop: '2px' }} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Format & Suitable For */}
              <div style={{
                background: 'rgba(24, 12, 29, 0.6)',
                border: '1px solid rgba(215, 181, 109, 0.15)',
                borderRadius: '12px',
                padding: '1rem',
                marginBottom: '1.5rem',
                fontSize: '0.82rem',
                lineHeight: 1.6
              }}>
                <div style={{ color: 'var(--gold-antique)', marginBottom: '0.25rem' }}>
                  <strong>Format:</strong> {service.format}
                </div>
                <div style={{ color: 'var(--text-light-soft)' }}>
                  <strong>Suitable For:</strong> {service.suitableFor}
                </div>
              </div>

              {/* Action CTAs */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.75rem',
                marginTop: 'auto'
              }}>
                <Link
                  to="/consultation"
                  className="btn btn-primary-orange btn-sm"
                >
                  <span>Enquire Now</span>
                  <ArrowRight size={13} />
                </Link>

                <a
                  href={`https://wa.me/918279696707?text=${encodeURIComponent(service.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-sm"
                >
                  <MessageSquare size={13} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Service Inquiry Callout */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(53, 24, 63, 0.8) 0%, rgba(32, 16, 38, 0.9) 100%)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '20px',
          padding: '2.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}>
          <div>
            <h3 style={{
              fontFamily: 'var(--font-cinzel)',
              fontSize: '1.4rem',
              color: '#FFFFFF',
              marginBottom: '0.35rem'
            }}>
              Have a Specific or Unlisted Astrological Question?
            </h3>
            <p style={{ color: 'var(--text-light-soft)', fontSize: '0.92rem' }}>
              Shubham Dixit handles specialized family requirements, corporate timing, and birth chart rectifications on request.
            </p>
          </div>

          <Link to="/consultation" className="btn btn-outline-gold">
            <span>Discuss Custom Requirement</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
};
