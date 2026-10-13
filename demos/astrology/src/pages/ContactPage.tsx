import React from 'react';
import { ConsultationForm } from '../components/ConsultationForm';
import { MessageSquare, Phone, Clock, Globe } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div style={{ padding: '3.5rem 0 6rem', backgroundColor: '#180C1D' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="badge-orange" style={{ marginBottom: '0.85rem' }}>
            <MessageSquare size={13} />
            <span>Direct Desk</span>
          </div>
          <h1 className="section-title">
            Contact & Consultation <span className="gold-gradient-text">Enquiries</span>
          </h1>
          <div className="sacred-divider">
            <span className="sacred-symbol">॥ संपर्क सूत्रम् ॥</span>
          </div>
          <p className="section-desc">
            Reach out to discuss consultation availability, submit birth details, or inquire about family matrimonial matching. All communication is kept strictly confidential.
          </p>
        </div>

        {/* 2-Column: Contact Channels on Left, Form on Right */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '3rem',
          alignItems: 'start'
        }}>
          {/* Left Column: Contact Channels & Location Notes */}
          <div>
            <div style={{
              background: 'rgba(32, 16, 38, 0.85)',
              border: '1.5px solid var(--border-subtle)',
              borderRadius: '20px',
              padding: '2.5rem',
              marginBottom: '2rem'
            }}>
              <h3 style={{
                fontFamily: 'var(--font-cinzel)',
                fontSize: '1.35rem',
                color: '#FFFFFF',
                marginBottom: '1.25rem'
              }}>
                Consultation Channels
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(239, 112, 45, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--orange-burnished)',
                    flexShrink: 0
                  }}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--gold-antique)', fontWeight: 600 }}>
                      Direct Phone Call
                    </div>
                    <div style={{ fontSize: '0.95rem', color: '#FFFFFF', fontWeight: 600 }}>
                      +91 98765 43210 (Demo Placeholder)
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-light-soft)' }}>
                      To be configured with Shubham Dixit's official consultation SIM.
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(37, 211, 102, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#25D366',
                    flexShrink: 0
                  }}>
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: '#34D399', fontWeight: 600 }}>
                      Official WhatsApp Desk
                    </div>
                    <div style={{ fontSize: '0.95rem', color: '#FFFFFF', fontWeight: 600 }}>
                      Available for Initial Scheduling & Voice Calls
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-light-soft)' }}>
                      Average initial response within 30–60 minutes.
                    </div>
                    <a
                      href="https://wa.me/918279696707?text=Hi%20Vardan%2C%20mujhe%20aapki%20website%20bohot%20achhi%20lagi.%20Kya%20hum%20is%20website%20ke%20baare%20mein%20aur%20baat%20kar%20sakte%20hain%20aur%20aage%20proceed%20kar%20sakte%20hain%3F"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp btn-sm"
                      style={{ marginTop: '0.65rem' }}
                    >
                      <MessageSquare size={13} />
                      <span>Chat on WhatsApp (+91 8279696707)</span>
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(215, 181, 109, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gold-antique)',
                    flexShrink: 0
                  }}>
                    <Clock size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--gold-antique)', fontWeight: 600 }}>
                      Operating Windows
                    </div>
                    <div style={{ fontSize: '0.95rem', color: '#FFFFFF' }}>
                      09:30 AM – 08:30 PM (IST)
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-light-soft)' }}>
                      Special slots coordinated for US (EST/PST) & Gulf (GST) zones.
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(239, 112, 45, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--orange-burnished)',
                    flexShrink: 0
                  }}>
                    <Globe size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--gold-antique)', fontWeight: 600 }}>
                      Remote Reach
                    </div>
                    <div style={{ fontSize: '0.95rem', color: '#FFFFFF' }}>
                      Worldwide (Online Video & Audio)
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-light-soft)' }}>
                      Conducting sessions across India, USA, UAE, and Canada.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Graceful Location Placeholder Card (No fake maps embed) */}
            <div style={{
              background: 'rgba(24, 12, 29, 0.85)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '20px',
              padding: '2rem',
              marginBottom: '2rem'
            }}>
              <h4 style={{
                fontFamily: 'var(--font-cinzel)',
                fontSize: '1.2rem',
                color: 'var(--gold-antique)',
                marginBottom: '0.75rem'
              }}>
                Physical Practice / Office Presence
              </h4>

              <p style={{
                fontSize: '0.88rem',
                color: 'var(--text-light-soft)',
                lineHeight: 1.7,
                marginBottom: '1rem'
              }}>
                The client does not currently maintain a public Google Maps business profile or walk-in commercial address. Traditional family consultations have historically taken place offline with known yajmans, and modern consultations are arranged purely by prior appointment via remote digital video or private phone lines.
              </p>

              <div style={{
                background: 'rgba(215, 181, 109, 0.08)',
                border: '1px dashed var(--border-subtle)',
                borderRadius: '10px',
                padding: '0.85rem 1rem',
                fontSize: '0.8rem',
                color: 'var(--gold-pale)'
              }}>
                ✦ Physical consultation address and Google Business profile setup will be updated here once verified by Shubham Dixit.
              </div>
            </div>

            {/* Social Links Placeholders */}
            <div style={{
              background: 'rgba(24, 12, 29, 0.85)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '20px',
              padding: '2rem'
            }}>
              <h4 style={{
                fontFamily: 'var(--font-cinzel)',
                fontSize: '1.2rem',
                color: 'var(--gold-antique)',
                marginBottom: '0.75rem'
              }}>
                Social Channels (To Be Confirmed)
              </h4>

              <p style={{
                fontSize: '0.86rem',
                color: 'var(--text-light-soft)',
                lineHeight: 1.6,
                marginBottom: '1rem'
              }}>
                Official YouTube dispatches, Instagram insights, and community channels will be linked upon client approval.
              </p>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <span style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '0.35rem 0.75rem', borderRadius: '6px', fontSize: '0.78rem', color: 'var(--text-light-soft)' }}>
                  YouTube (Pending)
                </span>
                <span style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '0.35rem 0.75rem', borderRadius: '6px', fontSize: '0.78rem', color: 'var(--text-light-soft)' }}>
                  Instagram (Pending)
                </span>
                <span style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '0.35rem 0.75rem', borderRadius: '6px', fontSize: '0.78rem', color: 'var(--text-light-soft)' }}>
                  WhatsApp Channel (Pending)
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Enquiry Form */}
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{
                fontFamily: 'var(--font-cinzel)',
                fontSize: '1.45rem',
                color: '#FFFFFF',
                marginBottom: '0.35rem'
              }}>
                Send a Direct Message
              </h3>
              <p style={{ color: 'var(--text-light-soft)', fontSize: '0.88rem' }}>
                Simulate how a prospective client submits a consultation request through the website.
              </p>
            </div>

            <ConsultationForm />
          </div>
        </div>
      </div>
    </div>
  );
};
