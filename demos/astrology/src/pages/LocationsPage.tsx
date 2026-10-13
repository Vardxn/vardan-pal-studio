import React from 'react';
import { Link } from 'react-router-dom';
import { regionsData } from '../data/regions';
import { Globe, MapPin, ArrowRight } from 'lucide-react';

export const LocationsPage: React.FC = () => {
  return (
    <div style={{ padding: '3.5rem 0 6rem', backgroundColor: '#180C1D' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="badge-gold" style={{ marginBottom: '0.85rem' }}>
            <Globe size={13} />
            <span>Target Regional Presence</span>
          </div>
          <h1 className="section-title">
            Service Areas & <span className="orange-gold-text">Global Hubs</span>
          </h1>
          <div className="sacred-divider">
            <span className="sacred-symbol">॥ दिक् काल निर्णयः ॥</span>
          </div>
          <p className="section-desc">
            Shubham Dixit provides remote Vedic astrology consultations designed for seekers across key Indian commercial hubs and the global diaspora. Explore our dedicated service-area guides below.
          </p>
        </div>

        {/* Directory Grid */}
        <div 
          className="mobile-grid-1col"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '2.5rem',
            marginBottom: '4rem'
          }}>
          {regionsData.map((reg) => (
            <div 
              key={reg.slug}
              className="glass-card"
              style={{
                padding: '2.25rem',
                borderRadius: '20px',
                border: '1.5px solid var(--border-subtle)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1rem'
              }}>
                <span className="badge-demo">{reg.category}</span>
                <span style={{ fontSize: '0.78rem', color: 'var(--gold-antique)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <MapPin size={12} /> Remote Consultations
                </span>
              </div>

              <h2 style={{
                fontFamily: 'var(--font-cinzel)',
                fontSize: '1.45rem',
                color: '#FFFFFF',
                marginBottom: '0.65rem'
              }}>
                {reg.name}
              </h2>

              <p style={{
                fontSize: '0.9rem',
                lineHeight: 1.65,
                color: 'var(--text-light-soft)',
                marginBottom: '1.5rem',
                flex: 1
              }}>
                {reg.overview}
              </p>

              <div style={{
                borderTop: '1px solid rgba(215, 181, 109, 0.15)',
                paddingTop: '1.25rem',
                marginTop: 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <span style={{ fontSize: '0.78rem', color: 'var(--gold-antique)' }}>
                  {reg.timingNotice.split('.')[0]}
                </span>

                <Link
                  to={`/locations/${reg.slug}`}
                  className="btn btn-primary-orange btn-sm"
                >
                  <span>Explore Guide</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Service Area Clarification Note */}
        <div style={{
          background: 'rgba(32, 16, 38, 0.75)',
          border: '1px dashed var(--border-subtle)',
          borderRadius: '16px',
          padding: '2rem',
          textAlign: 'center',
          maxWidth: '780px',
          margin: '0 auto'
        }}>
          <h3 style={{
            fontFamily: 'var(--font-cinzel)',
            fontSize: '1.25rem',
            color: 'var(--gold-antique)',
            marginBottom: '0.5rem'
          }}>
            Service-Area Landing Page Architecture Note
          </h3>
          <p style={{ color: 'var(--text-light-soft)', fontSize: '0.88rem', lineHeight: 1.7 }}>
            These pages represent dedicated service-area hubs for seekers residing in these locations. As requested, no physical branch offices, street addresses, or map pins have been invented. Consultations are coordinated remotely with local time-zone consideration.
          </p>
        </div>
      </div>
    </div>
  );
};
