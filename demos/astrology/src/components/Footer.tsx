import { Link } from 'react-router-dom';
import {
  Phone,
  MessageSquare,
  Globe,
  Sparkles,
  Clock,
  ExternalLink,
  ShieldCheck,
  Handshake,
  Compass,
  Info
} from 'lucide-react';
import { regionsData } from '../data/regions';
import { getAssetPath } from '../utils/assets';

export const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#140A18',
      borderTop: '1px solid var(--border-subtle)',
      paddingTop: '4.5rem',
      paddingBottom: '6.5rem', // Space for fixed sticky action bar
      color: 'var(--text-light-soft)',
      position: 'relative'
    }}>
      <div className="container">
        {/* Practice Overview 4-Column Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3rem'
        }}>
          {/* Column 1: Brand & Practice Identity */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
              <div style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '1px solid var(--gold-antique)'
              }}>
                <img src={getAssetPath('/images/sri-yantra.jpg')} alt="Vedic Yantra Seal" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span style={{
                fontFamily: 'var(--font-cinzel)',
                fontSize: '1.15rem',
                fontWeight: 700,
                color: '#FFFFFF',
                letterSpacing: '0.04em'
              }}>
                SHUBHAM DIXIT
              </span>
            </div>

            <p style={{
              fontSize: '0.86rem',
              lineHeight: 1.7,
              color: 'var(--text-light-soft)',
              marginBottom: '1.25rem'
            }}>
              Authentic Vedic Astrology consultations carrying forward the ancestral traditions of <strong>Pt. Ganesh Shankar Acharya Ji (Dada Guru)</strong>. Compassionate, chart-grounded guidance for modern decisions.
            </p>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              background: 'rgba(239, 112, 45, 0.1)',
              border: '1px solid rgba(239, 112, 45, 0.25)',
              padding: '0.35rem 0.75rem',
              borderRadius: '6px',
              fontSize: '0.74rem',
              color: '#FFA066'
            }}>
              <Sparkles size={12} />
              <span>Ancestral Jyotish Practice</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-cinzel)',
              fontSize: '1rem',
              color: 'var(--gold-antique)',
              marginBottom: '1.15rem',
              letterSpacing: '0.04em'
            }}>
              Explore the Practice
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem' }}>
              <li>
                <Link to="/" style={{ color: 'var(--text-light-soft)', textDecoration: 'none' }}>Home</Link>
              </li>
              <li>
                <Link to="/tradition" style={{ color: 'var(--text-light-soft)', textDecoration: 'none' }}>Our Tradition &amp; Parampara</Link>
              </li>
              <li>
                <Link to="/services" style={{ color: 'var(--text-light-soft)', textDecoration: 'none' }}>Astrology Services</Link>
              </li>
              <li>
                <Link to="/consultation" style={{ color: 'var(--text-light-soft)', textDecoration: 'none' }}>Book a Consultation</Link>
              </li>
              <li>
                <Link to="/blog" style={{ color: 'var(--text-light-soft)', textDecoration: 'none' }}>Daily Blog, Panchang &amp; Desk</Link>
              </li>
              <li>
                <Link to="/locations" style={{ color: 'var(--text-light-soft)', textDecoration: 'none' }}>Regional Coverage Directory</Link>
              </li>
              <li>
                <Link to="/contact" style={{ color: 'var(--text-light-soft)', textDecoration: 'none' }}>Contact &amp; Enquiries</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Regional Hubs */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-cinzel)',
              fontSize: '1rem',
              color: 'var(--gold-antique)',
              marginBottom: '1.15rem',
              letterSpacing: '0.04em'
            }}>
              Target Regional Hubs
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.86rem' }}>
              {regionsData.map((reg) => (
                <li key={reg.slug}>
                  <Link to={`/locations/${reg.slug}`} style={{ color: 'var(--text-light-soft)', textDecoration: 'none' }}>
                    {reg.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Availability Placeholder */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-cinzel)',
              fontSize: '1rem',
              color: 'var(--gold-antique)',
              marginBottom: '1.15rem',
              letterSpacing: '0.04em'
            }}>
              Consultation Desk
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.86rem', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={14} style={{ color: 'var(--orange-burnished)' }} />
                <span>+91 98765 43210 (Demo Placeholder)</span>
              </div>
              <a
                href="https://wa.me/918279696707?text=Hi%20Vardan%2C%20mujhe%20aapki%20website%20bohot%20achhi%20lagi.%20Kya%20hum%20is%20website%20ke%20baare%20mein%20aur%20baat%20kar%20sakte%20hain%20aur%20aage%20proceed%20kar%20sakte%20hain%3F"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#25D366', textDecoration: 'none', fontWeight: 600 }}
              >
                <MessageSquare size={14} style={{ color: '#25D366' }} />
                <span>WhatsApp: +91 8279696707</span>
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Clock size={14} style={{ color: 'var(--gold-antique)' }} />
                <span>Appointment Hours: 9:30 AM – 8:30 PM IST</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Globe size={14} style={{ color: 'var(--orange-burnished)' }} />
                <span>Remote Consultations Worldwide</span>
              </div>
            </div>

            <Link
              to="/consultation"
              className="btn btn-primary-orange btn-sm"
              style={{ width: '100%' }}
            >
              Enquire for Appointment
            </Link>
          </div>
        </div>

        {/* ==========================================================================
            VARDAN PAL STUDIO CONCEPT SHOWCASE & CLIENT ACQUISITION PORTAL
            ========================================================================== */}
        <div style={{
          margin: '3.5rem 0 2.5rem 0',
          padding: '2.5rem',
          borderRadius: '16px',
          background: 'linear-gradient(180deg, rgba(40, 21, 47, 0.95) 0%, rgba(24, 12, 29, 0.98) 100%)',
          border: '1px solid rgba(215, 181, 109, 0.35)',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(215, 181, 109, 0.2)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Subtle Atmospheric Radial Glows */}
          <div style={{
            position: 'absolute',
            right: '-50px',
            top: '-50px',
            width: '320px',
            height: '320px',
            background: 'radial-gradient(circle, rgba(215, 181, 109, 0.12) 0%, transparent 70%)',
            borderRadius: '50%',
            pointerEvents: 'none'
          }} />
          <div style={{
            position: 'absolute',
            left: '-50px',
            bottom: '-50px',
            width: '320px',
            height: '320px',
            background: 'radial-gradient(circle, rgba(239, 112, 45, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            pointerEvents: 'none'
          }} />

          <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {/* Header Badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.4rem 0.9rem',
                borderRadius: '9999px',
                backgroundColor: 'rgba(24, 12, 29, 0.85)',
                border: '1px solid rgba(215, 181, 109, 0.45)',
                color: 'var(--gold-antique)',
                fontSize: '0.72rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                fontWeight: 600
              }}>
                <Sparkles size={13} style={{ color: 'var(--gold-antique)' }} />
                Studio Portfolio Demonstration · Independent Concept Prototype
              </span>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.4rem 0.9rem',
                borderRadius: '9999px',
                backgroundColor: 'rgba(56, 142, 60, 0.15)',
                border: '1px solid rgba(133, 209, 141, 0.35)',
                color: '#85d18d',
                fontSize: '0.72rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                fontWeight: 500
              }}>
                <ShieldCheck size={13} />
                Client Respect &amp; Zero Interception: Direct Client Consultation Routing
              </span>
            </div>

            {/* Main Manifesto */}
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
              gap: '1.5rem',
              paddingBottom: '1.5rem',
              borderBottom: '1px solid rgba(215, 181, 109, 0.18)'
            }}>
              <div style={{ maxWidth: '720px' }}>
                <h3 style={{
                  fontFamily: 'var(--font-cinzel)',
                  fontSize: '1.65rem',
                  color: '#FFFFFF',
                  fontWeight: 600,
                  marginBottom: '0.75rem',
                  lineHeight: 1.3
                }}>
                  Crafted with Distinction by{' '}
                  <span style={{ color: 'var(--gold-antique)', fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>
                    Vardan Pal Studio
                  </span>
                </h3>
                <p style={{
                  fontSize: '0.88rem',
                  lineHeight: 1.7,
                  color: 'var(--text-light-soft)',
                  marginBottom: '0.75rem'
                }}>
                  This website was independently conceived, designed, and engineered by <strong>Vardan Pal Studio</strong> as a bespoke creative demonstration for <strong>Shubham Dixit</strong>. It showcases our studio's standard of restrained digital luxury, editorial typography, cultural authenticity, and high-conversion consultation architecture tailored for heritage practitioners, family lineages, and premium service professionals.
                </p>
                <p style={{
                  fontSize: '0.78rem',
                  lineHeight: 1.6,
                  color: '#BDB1A3',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.5rem'
                }}>
                  <Info size={14} style={{ color: 'var(--gold-antique)', flexShrink: 0, marginTop: '2px' }} />
                  <span>
                    <strong style={{ color: '#F6EFDF' }}>Client Respect &amp; Zero Interception:</strong> All consultation enquiry forms, WhatsApp triggers, and telephone channels across this prototype route directly and untampered to Shubham Dixit's consultation practice. We do not intercept client inquiries.
                  </span>
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
                <a
                  href="https://vardanpalstudio.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.65rem 1.25rem',
                    borderRadius: '9999px',
                    border: '1px solid rgba(215, 181, 109, 0.5)',
                    backgroundColor: 'rgba(24, 12, 29, 0.9)',
                    color: 'var(--gold-pale)',
                    fontSize: '0.78rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontWeight: 600,
                    textDecoration: 'none'
                  }}
                  className="hover-gold-border"
                  aria-label="Visit Vardan Pal Studio official portfolio"
                >
                  <span>Visit Studio Portfolio</span>
                  <ExternalLink size={13} style={{ color: 'var(--gold-antique)' }} />
                </a>
              </div>
            </div>

            {/* Dual Opportunity Cards: To Shubham Dixit Team & For Businesses/Founders */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
              gap: '1.25rem'
            }}>
              {/* Card 1: For Shubham Dixit & Family */}
              <div style={{
                padding: '1.5rem',
                borderRadius: '12px',
                backgroundColor: 'rgba(24, 12, 29, 0.75)',
                border: '1px solid rgba(215, 181, 109, 0.25)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1.25rem'
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--gold-antique)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em'
                  }}>
                    <Handshake size={15} style={{ color: 'var(--gold-antique)' }} />
                    <span>To Shubham Dixit &amp; Family Lineage</span>
                  </div>
                  <p style={{
                    fontSize: '0.82rem',
                    lineHeight: 1.6,
                    color: 'var(--text-light-soft)'
                  }}>
                    If your team sees this and appreciates the reverence, architectural clarity, and consultation flow built for your ancestral lineage, we would welcome the opportunity to officially license, transfer, or expand this digital flagship for your global consultations.
                  </p>
                </div>

                <a
                  href="https://wa.me/918279696707?text=Hi%20Vardan%2C%20mujhe%20aapki%20Shubham%20Dixit%20astrology%20website%20bohot%20achhi%20lagi.%20Kya%20hum%20is%20website%20ke%20baare%20mein%20aur%20baat%20kar%20sakte%20hain%20aur%20aage%20proceed%20kar%20sakte%20hain%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(215, 181, 109, 0.12)',
                    border: '1px solid rgba(215, 181, 109, 0.35)',
                    color: 'var(--gold-pale)',
                    fontSize: '0.76rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontWeight: 600,
                    textDecoration: 'none',
                    textAlign: 'center'
                  }}
                  className="hover-gold-bg"
                >
                  <MessageSquare size={14} style={{ color: 'var(--gold-antique)' }} />
                  <span>Connect with Vardan (Shubham Dixit Team)</span>
                </a>
              </div>

              {/* Card 2: For Consultancies, Heritage Brands & Service Leaders */}
              <div style={{
                padding: '1.5rem',
                borderRadius: '12px',
                backgroundColor: 'rgba(24, 12, 29, 0.75)',
                border: '1px solid rgba(239, 112, 45, 0.3)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1.25rem'
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--orange-burnished)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em'
                  }}>
                    <Compass size={15} style={{ color: 'var(--orange-burnished)' }} />
                    <span>For Consultancies, Heritage Brands &amp; Businesses</span>
                  </div>
                  <p style={{
                    fontSize: '0.82rem',
                    lineHeight: 1.6,
                    color: 'var(--text-light-soft)'
                  }}>
                    Elevate your professional practice beyond generic templates. We build bespoke, high-conversion digital flagships and client consultation tools designed for authoritative consultants, doctors, luxury businesses, and generational brands worldwide.
                  </p>
                </div>

                <a
                  href="https://wa.me/918279696707?text=Hi%20Vardan%2C%20mujhe%20aapka%20astrology%20website%20work%20bohot%20achha%20laga.%20Mujhe%20bhi%20apne%20business%20ke%20liye%20aisi%20website%20banwani%20hai%2C%20kya%20hum%20baat%20kar%20sakte%20hain%20aur%20proceed%20kar%20sakte%20hain%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    backgroundColor: 'var(--orange-burnished)',
                    color: '#FFFFFF',
                    fontSize: '0.76rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontWeight: 700,
                    textDecoration: 'none',
                    textAlign: 'center',
                    boxShadow: '0 4px 14px rgba(239, 112, 45, 0.35)'
                  }}
                  className="hover-orange-btn"
                >
                  <MessageSquare size={14} style={{ color: '#FFFFFF' }} />
                  <span>Commission A Marketing Web Tool Like This →</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Ethical Shastric Disclaimer */}
        <div style={{
          borderTop: '1px solid rgba(215, 181, 109, 0.15)',
          paddingTop: '1.75rem',
          marginBottom: '1.75rem',
          fontSize: '0.78rem',
          color: 'var(--text-light-soft)',
          lineHeight: 1.6
        }}>
          <strong style={{ color: '#FFFFFF' }}>Ethical &amp; Professional Disclaimer:</strong> Vedic Astrology is an interpretive spiritual tradition based on planetary positions and classical Sanskrit texts. Consultations provide introspective guidance and spiritual perspective; they do not claim or guarantee fixed deterministic outcomes, nor do they replace licensed legal, certified medical, or qualified financial advice. All services are rendered in good faith under traditional ethics.
        </div>

        {/* Bottom Bar with Distinct Studio Credit */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.8rem',
          color: 'var(--text-light-soft)',
          paddingTop: '0.5rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span>© 2026 Shubham Dixit Vedic Astrology (Independent Concept Demonstration by Vardan Pal Studio).</span>
            <span style={{ color: 'rgba(215, 181, 109, 0.4)' }}>•</span>
            <a
              href="https://vardanpalstudio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                color: 'var(--gold-pale)',
                textDecoration: 'none',
                fontWeight: 500
              }}
              title="Visit Vardan Pal Studio"
            >
              <span>Crafted with distinction by</span>
              <strong style={{
                color: 'var(--gold-antique)',
                fontWeight: 600,
                textDecoration: 'underline',
                textUnderlineOffset: '3px'
              }}>
                Vardan Pal Studio
              </strong>
              <ExternalLink size={12} style={{ color: 'var(--gold-antique)' }} />
            </a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <Link to="/consultation" style={{ color: 'var(--text-light-soft)', textDecoration: 'none' }}>
              Enquiry Flow
            </Link>
            <Link to="/tradition" style={{ color: 'var(--text-light-soft)', textDecoration: 'none' }}>
              Tradition &amp; Lineage
            </Link>
            <Link to="/contact" style={{ color: 'var(--text-light-soft)', textDecoration: 'none' }}>
              Contact Desk
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

