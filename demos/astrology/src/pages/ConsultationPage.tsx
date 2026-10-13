import React from 'react';
import { ConsultationForm } from '../components/ConsultationForm';
import { MessageSquare } from 'lucide-react';
import { FAQAccordion } from '../components/FAQAccordion';

export const ConsultationPage: React.FC = () => {
  return (
    <div style={{ padding: '3.5rem 0 6rem', backgroundColor: '#180C1D' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="badge-orange" style={{ marginBottom: '0.85rem' }}>
            <MessageSquare size={13} />
            <span>Consultation Booking</span>
          </div>
          <h1 className="section-title">
            Book a Personal <span className="gold-gradient-text">Vedic Reading</span>
          </h1>
          <div className="sacred-divider">
            <span className="sacred-symbol">॥ परामर्श आवेदन ॥</span>
          </div>
          <p className="section-desc">
            Connect directly with Shubham Dixit. Walk through the proposed enquiry flow below to see how prospective clients will request and schedule sessions.
          </p>
        </div>

        {/* 2-Column Layout: Journey Guide on Left, Form on Right */}
        <div 
          className="mobile-grid-1col"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '3rem',
            alignItems: 'start',
            marginBottom: '5rem'
          }}>
          {/* Left Column: Process & Expectations */}
          <div>
            <h3 style={{
              fontFamily: 'var(--font-cinzel)',
              fontSize: '1.5rem',
              color: '#FFFFFF',
              marginBottom: '1rem'
            }}>
              How Your Consultation is Handled
            </h3>

            <p style={{
              color: 'var(--text-light-soft)',
              fontSize: '0.95rem',
              lineHeight: 1.7,
              marginBottom: '2rem'
            }}>
              Consultations are conducted with thorough chart preparation beforehand. Unlike automated horoscopes, Shubham Dixit manually verifies planetary dasha balances, divisional charts, and transit coordinates before your call.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'rgba(239, 112, 45, 0.15)',
                  color: 'var(--orange-burnished)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  flexShrink: 0
                }}>
                  1
                </div>
                <div>
                  <h4 style={{ color: '#FFFFFF', fontSize: '1rem', marginBottom: '0.2rem' }}>
                    Submit Initial Details
                  </h4>
                  <p style={{ color: 'var(--text-light-soft)', fontSize: '0.86rem', lineHeight: 1.6 }}>
                    Fill out the enquiry form with your contact number, preferred consultation mode, and core focus area.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'rgba(239, 112, 45, 0.15)',
                  color: 'var(--orange-burnished)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  flexShrink: 0
                }}>
                  2
                </div>
                <div>
                  <h4 style={{ color: '#FFFFFF', fontSize: '1rem', marginBottom: '0.2rem' }}>
                    Appointment Confirmation
                  </h4>
                  <p style={{ color: 'var(--text-light-soft)', fontSize: '0.86rem', lineHeight: 1.6 }}>
                    Our desk coordinates an agreed time slot matching your local timezone (IST, EST, PST, or GST).
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'rgba(239, 112, 45, 0.15)',
                  color: 'var(--orange-burnished)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  flexShrink: 0
                }}>
                  3
                </div>
                <div>
                  <h4 style={{ color: '#FFFFFF', fontSize: '1rem', marginBottom: '0.2rem' }}>
                    Private 1-on-1 Session
                  </h4>
                  <p style={{ color: 'var(--text-light-soft)', fontSize: '0.86rem', lineHeight: 1.6 }}>
                    Join a dedicated 45–60 minute session via Google Meet, Zoom, or private phone call with ample time for your questions.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'rgba(239, 112, 45, 0.15)',
                  color: 'var(--orange-burnished)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  flexShrink: 0
                }}>
                  4
                </div>
                <div>
                  <h4 style={{ color: '#FFFFFF', fontSize: '1rem', marginBottom: '0.2rem' }}>
                    Satvik Remedial Plan
                  </h4>
                  <p style={{ color: 'var(--text-light-soft)', fontSize: '0.86rem', lineHeight: 1.6 }}>
                    Receive clear, non-commercial Vedic remedies and behavioral guidance to implement peacefully.
                  </p>
                </div>
              </div>
            </div>

            {/* Respectful Fee / Dakshina Notice */}
            <div style={{
              background: 'rgba(215, 181, 109, 0.08)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '14px',
              padding: '1.25rem',
              fontSize: '0.85rem',
              lineHeight: 1.6
            }}>
              <strong style={{ color: 'var(--gold-antique)', display: 'block', marginBottom: '0.35rem' }}>
                Consultation Dakshina / Fees:
              </strong>
              <span style={{ color: 'var(--text-light-soft)' }}>
                In this concept demo, fees are not arbitrarily invented. Consultation fees will be configured once finalized by Shubham Dixit based on session length and scope.
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div>
            <ConsultationForm />
          </div>
        </div>

        {/* Supporting FAQ */}
        <div className="container-narrow">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h3 style={{
              fontFamily: 'var(--font-cinzel)',
              fontSize: '1.6rem',
              color: '#FFFFFF',
              marginBottom: '0.5rem'
            }}>
              Frequently Asked Questions About Consultations
            </h3>
            <p style={{ color: 'var(--text-light-soft)', fontSize: '0.9rem' }}>
              Common questions regarding preparation, birth coordinates, and privacy.
            </p>
          </div>
          <FAQAccordion />
        </div>
      </div>
    </div>
  );
};
