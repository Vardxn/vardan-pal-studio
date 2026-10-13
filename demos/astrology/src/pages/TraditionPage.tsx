import React from 'react';
import { Link } from 'react-router-dom';
import { traditionOverview } from '../data/lineage';
import { Compass, AlertCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { getAssetPath } from '../utils/assets';

export const TraditionPage: React.FC = () => {
  return (
    <div style={{ padding: '3.5rem 0 6rem', backgroundColor: '#180C1D' }}>
      <div className="container">
        {/* Breadcrumb & Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="badge-orange" style={{ marginBottom: '0.85rem' }}>
            <Compass size={13} />
            <span>Parampara & Heritage</span>
          </div>
          <h1 className="section-title">
            Our Ancestral <span className="gold-gradient-text">Astrology Tradition</span>
          </h1>
          <div className="sacred-divider">
            <span className="sacred-symbol">॥ गुरु परम्परा ॥</span>
          </div>
          <p className="section-desc">
            An unbroken lineage of classical Vedic Jyotish, preserved through generations of traditional yajman counsel and transitioning thoughtfully into modern global consultation.
          </p>
        </div>

        {/* Client Confirmation Notice Box */}
        <div style={{
          background: 'rgba(239, 112, 45, 0.08)',
          border: '1px dashed rgba(239, 112, 45, 0.4)',
          borderRadius: '16px',
          padding: '1.5rem 2rem',
          marginBottom: '3.5rem',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '1rem',
          fontSize: '0.88rem',
          color: '#FFA77A',
          lineHeight: 1.7
        }}>
          <AlertCircle size={22} style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <strong>Client-Provided Lineage Context (Pending Final Approval):</strong>
            <p style={{ marginTop: '0.25rem' }}>
              The client describes the family's astrology tradition as approximately <strong>500+ years old</strong>, historically functioning offline in a traditional teacher-disciple (guru-shishya) and yajman relationship. Specific ancestral origin dates, texts, and scholarly credentials are being gathered from Shubham Dixit for formal verification before final public release.
            </p>
          </div>
        </div>

        {/* Detailed Dual Bios */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem', marginBottom: '4.5rem' }}>
          {traditionOverview.profiles.map((profile, idx) => (
            <div 
              key={profile.name}
              className="glass-card profile-row"
              style={{
                padding: '2.5rem',
                borderRadius: '24px',
                border: '1.5px solid var(--border-subtle)',
                display: 'grid',
                gridTemplateColumns: idx % 2 === 0 ? '1fr 1.35fr' : '1.35fr 1fr',
                gap: '2.5rem',
                alignItems: 'center'
              }}
            >
              {/* Photo Area */}
              <div style={{ order: idx % 2 === 0 ? 1 : 2 }}>
                <div style={{
                  borderRadius: '18px',
                  overflow: 'hidden',
                  position: 'relative',
                  backgroundColor: '#201026',
                  border: '1px solid rgba(215, 181, 109, 0.3)'
                }}>
                  <img 
                    src={getAssetPath(profile.image)} 
                    alt={profile.name} 
                    style={{ width: '100%', height: '360px', objectFit: 'cover', objectPosition: 'top center' }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'rgba(24, 12, 29, 0.88)',
                    padding: '0.65rem 1rem',
                    fontSize: '0.72rem',
                    color: 'var(--gold-pale)',
                    textAlign: 'center'
                  }}>
                    {profile.imageCaption}
                  </div>
                </div>
              </div>

              {/* Bio Content Area */}
              <div style={{ order: idx % 2 === 0 ? 2 : 1 }}>
                <div style={{
                  display: 'inline-block',
                  background: 'rgba(215, 181, 109, 0.1)',
                  color: 'var(--gold-antique)',
                  fontSize: '0.76rem',
                  fontWeight: 600,
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  marginBottom: '0.75rem'
                }}>
                  {profile.relationshipNote}
                </div>

                <h2 style={{
                  fontFamily: 'var(--font-cinzel)',
                  fontSize: '2rem',
                  color: '#FFFFFF',
                  marginBottom: '0.35rem',
                  lineHeight: 1.2
                }}>
                  {profile.name}
                </h2>

                <div style={{
                  fontSize: '0.9rem',
                  color: 'var(--orange-burnished)',
                  fontWeight: 600,
                  marginBottom: '1.25rem'
                }}>
                  {profile.role}
                </div>

                <p style={{
                  color: 'var(--text-light-soft)',
                  fontSize: '0.95rem',
                  lineHeight: 1.75,
                  marginBottom: '1.5rem'
                }}>
                  {profile.background}
                </p>

                {/* Focus Areas */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', color: '#FFF', marginBottom: '0.65rem' }}>
                    Core Pillars of Practice:
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                    {profile.focusAreas.map((f, fIdx) => (
                      <div key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.86rem', color: 'var(--text-light-soft)' }}>
                        <CheckCircle2 size={14} style={{ color: 'var(--orange-burnished)', flexShrink: 0, marginTop: '3px' }} />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Shastric Quote */}
                <blockquote style={{
                  borderLeft: '3px solid var(--orange-burnished)',
                  paddingLeft: '1.25rem',
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontSize: '0.98rem',
                  color: 'var(--gold-pale)',
                  lineHeight: 1.6
                }}>
                  "{profile.quote}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>

        {/* Family Tradition Proposed Timeline */}
        <div style={{
          background: 'rgba(32, 16, 38, 0.8)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '24px',
          padding: '3rem 2.5rem',
          marginBottom: '4rem'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h3 style={{
              fontFamily: 'var(--font-cinzel)',
              fontSize: '1.65rem',
              color: '#FFFFFF',
              marginBottom: '0.5rem'
            }}>
              Tradition Evolution Timeline (Provisional Framework)
            </h3>
            <p style={{ color: 'var(--text-light-soft)', fontSize: '0.9rem' }}>
              Illustrates the generational transition from traditional offline yajman counseling to a contemporary digital consultation practice.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2rem'
          }}>
            <div style={{ borderLeft: '2px solid var(--gold-antique)', paddingLeft: '1.25rem' }}>
              <div style={{ color: 'var(--orange-burnished)', fontWeight: 700, fontSize: '0.85rem' }}>
                Historical Lineage Era
              </div>
              <h4 style={{ color: '#FFFFFF', fontSize: '1.15rem', margin: '0.35rem 0' }}>
                Traditional Shastric Foundation
              </h4>
              <p style={{ color: 'var(--text-light-soft)', fontSize: '0.86rem', lineHeight: 1.65 }}>
                Ancestral practice centered on Sanskrit treatise study, sandhyavandanam, manual planetary panchang calculations, and sacred community yajman counseling.
              </p>
            </div>

            <div style={{ borderLeft: '2px solid var(--gold-antique)', paddingLeft: '1.25rem' }}>
              <div style={{ color: 'var(--orange-burnished)', fontWeight: 700, fontSize: '0.85rem' }}>
                Generational Continuity
              </div>
              <h4 style={{ color: '#FFFFFF', fontSize: '1.15rem', margin: '0.35rem 0' }}>
                Mentorship of Dada Guru
              </h4>
              <p style={{ color: 'var(--text-light-soft)', fontSize: '0.86rem', lineHeight: 1.65 }}>
                Pt. Ganesh Shankar Acharya Ji upholds the scholarly core, guiding seekers through life crossroads while instructing the next generation in deep textual discernment.
              </p>
            </div>

            <div style={{ borderLeft: '2px solid var(--gold-antique)', paddingLeft: '1.25rem' }}>
              <div style={{ color: 'var(--orange-burnished)', fontWeight: 700, fontSize: '0.85rem' }}>
                Present & Future
              </div>
              <h4 style={{ color: '#FFFFFF', fontSize: '1.15rem', margin: '0.35rem 0' }}>
                Global Digital Practice
              </h4>
              <p style={{ color: 'var(--text-light-soft)', fontSize: '0.86rem', lineHeight: 1.65 }}>
                Shubham Dixit brings traditional chart analysis to contemporary seekers across India, the US, UAE, and Canada through clear, accessible remote consultations.
              </p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div style={{ textAlign: 'center' }}>
          <Link to="/consultation" className="btn btn-primary-orange btn-lg">
            <span>Enquire for a Personal Session</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .profile-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
