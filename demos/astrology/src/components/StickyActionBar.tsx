import React, { useState } from 'react';
import { Phone, MessageSquare, Sparkles, AlertCircle, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const StickyActionBar: React.FC = () => {
  const [showConfigNotice, setShowConfigNotice] = useState(false);

  return (
    <>
      <aside className="sticky-action-bar" role="complementary" aria-label="Quick consultation enquiries">
        <div className="sticky-bar-inner">
          {/* Left Text */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} className="sticky-bar-text">
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: 'rgba(239, 112, 45, 0.15)',
              border: '1px solid rgba(239, 112, 45, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--orange-burnished)',
              flexShrink: 0
            }}>
              <Sparkles size={16} />
            </div>
            <div>
              <div style={{
                fontSize: '0.92rem',
                fontWeight: 700,
                color: '#FFFFFF',
                letterSpacing: '0.01em'
              }}>
                Considering a Vedic consultation with Shubham Dixit?
              </div>
              <div style={{
                fontSize: '0.76rem',
                color: 'var(--text-light-soft)'
              }}>
                Enquire online or connect via WhatsApp • Direct 1-on-1 guidance
              </div>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
          }} className="sticky-bar-actions">
            {/* Phone Call (with config notice) */}
            <button
              onClick={() => setShowConfigNotice(true)}
              className="btn btn-call btn-sm"
              style={{ fontWeight: 600 }}
              title="Official phone number to be configured by client"
            >
              <Phone size={14} style={{ color: 'var(--gold-antique)' }} />
              <span>Call (Demo)</span>
            </button>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/918279696707?text=Hi%20Vardan%2C%20mujhe%20aapki%20website%20bohot%20achhi%20lagi.%20Kya%20hum%20is%20website%20ke%20baare%20mein%20aur%20baat%20kar%20sakte%20hain%20aur%20aage%20proceed%20kar%20sakte%20hain%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-sm"
            >
              <MessageSquare size={14} />
              <span>WhatsApp Inquiry</span>
            </a>

            {/* Route to Full Consultation Page */}
            <Link
              to="/consultation"
              className="btn btn-primary-orange btn-sm"
              style={{ display: 'none' }}
              id="sticky-form-link"
            >
              <span>Online Form</span>
            </Link>
          </div>
        </div>

        <style>{`
          @media (min-width: 960px) {
            #sticky-form-link {
              display: inline-flex !important;
            }
          }
        `}</style>
      </aside>

      {/* Contact Configuration Notice Modal */}
      {showConfigNotice && (
        <div className="modal-overlay" onClick={() => setShowConfigNotice(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '480px' }}>
            <button className="modal-close-btn" onClick={() => setShowConfigNotice(false)}>
              <X size={18} />
            </button>

            <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: 'rgba(239, 112, 45, 0.15)',
                color: 'var(--orange-burnished)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem'
              }}>
                <AlertCircle size={24} />
              </div>

              <h4 style={{
                fontFamily: 'var(--font-cinzel)',
                fontSize: '1.25rem',
                color: '#FFFFFF',
                marginBottom: '0.45rem'
              }}>
                Contact Channel Verification Note
              </h4>

              <p style={{
                fontSize: '0.86rem',
                color: 'var(--text-light-soft)',
                lineHeight: 1.6
              }}>
                During initial onboarding materials, multiple numbers appeared. In this sales demo, the direct call trigger is linked to a placeholder (<code>+91 98765 43210</code>) until Shubham Dixit formally approves his official public consultation SIM.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
              <Link
                to="/consultation"
                onClick={() => setShowConfigNotice(false)}
                className="btn btn-primary-orange"
                style={{ flex: 1, fontSize: '0.85rem' }}
              >
                Use Online Form
              </Link>
              <button
                onClick={() => setShowConfigNotice(false)}
                className="btn btn-outline-gold"
                style={{ flex: 1, fontSize: '0.85rem' }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
