import React, { useState } from 'react';
import { Sparkles, Info, X, CheckCircle2 } from 'lucide-react';

export const DemoBanner: React.FC = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <>
      <aside 
        aria-label="Client demo preview notice"
        style={{
          background: 'linear-gradient(90deg, #1C0E22 0%, #301439 50%, #1C0E22 100%)',
          borderBottom: '1px solid rgba(239, 112, 45, 0.3)',
          color: '#F6EFDF',
          fontSize: '0.78rem',
          padding: '0.35rem 1rem',
          position: 'relative',
          zIndex: 999
        }}
      >
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.5rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
            <span style={{
              background: 'rgba(239, 112, 45, 0.2)',
              border: '1px solid rgba(239, 112, 45, 0.45)',
              color: '#FFA066',
              padding: '0.15rem 0.55rem',
              borderRadius: '9999px',
              fontSize: '0.7rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem'
            }}>
              <Sparkles size={11} />
              Concept Demo Preview
            </span>
            <span className="demo-banner-phone-subtext" style={{ color: 'var(--text-light-soft)' }}>
              Tailored for <strong>Shubham Dixit</strong> • Services, numbers & claims marked for final client verification.
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              onClick={() => setShowDetails(!showDetails)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--gold-antique)',
                cursor: 'pointer',
                fontSize: '0.75rem',
                textDecoration: 'underline',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.25rem'
              }}
            >
              <Info size={12} />
              <span>{showDetails ? 'Hide Demo Guide' : 'What is this Demo?'}</span>
            </button>

            <button
              onClick={() => setDismissed(true)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-light-soft)',
                cursor: 'pointer',
                opacity: 0.7,
                display: 'flex',
                alignItems: 'center'
              }}
              aria-label="Dismiss banner"
            >
              <X size={14} />
            </button>
          </div>
        </div>
      </aside>

      {/* Expandable Explanation Drawer */}
      {showDetails && (
        <div style={{
          backgroundColor: '#201026',
          borderBottom: '1px solid var(--border-subtle)',
          padding: '1.25rem 1.5rem',
          fontSize: '0.82rem',
          color: 'var(--text-light-soft)',
          animation: 'fadeIn 0.2s ease-out'
        }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
              <div>
                <strong style={{ color: '#FFF', display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.35rem' }}>
                  <CheckCircle2 size={14} style={{ color: 'var(--orange-burnished)' }} />
                  Purpose of this Presentation
                </strong>
                <p style={{ lineHeight: 1.6 }}>
                  Demonstrates how a sophisticated brand identity, editorial layout, and clear consultation journeys can elevate Shubham Dixit's family practice into an authoritative digital presence across India and the diaspora.
                </p>
              </div>

              <div>
                <strong style={{ color: '#FFF', display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.35rem' }}>
                  <CheckCircle2 size={14} style={{ color: 'var(--gold-antique)' }} />
                  Ethical Accuracy Commitment
                </strong>
                <p style={{ lineHeight: 1.6 }}>
                  No qualifications, office addresses, phone numbers, or reviews have been fabricated. All service items and lineage claims are clearly flagged as provisional demonstration content awaiting client confirmation.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
