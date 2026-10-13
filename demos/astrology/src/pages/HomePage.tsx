import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, Compass, Shield, ArrowRight, MessageSquare, 
  Clock, Globe, CheckCircle2, ChevronRight, BookOpen, 
  MapPin, HeartHandshake, HelpCircle, AlertCircle
} from 'lucide-react';
import { servicesData } from '../data/services';
import { traditionOverview } from '../data/lineage';
import { regionsData } from '../data/regions';
import { blogsData } from '../data/blogs';
import { testimonialsFramework } from '../data/testimonials';
import { FAQAccordion } from '../components/FAQAccordion';
import { getAssetPath } from '../utils/assets';

export const HomePage: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* 1. HERO SECTION */}
      <section 
        id="hero"
        className="hero-container"
        style={{
          paddingTop: '3.5rem',
          paddingBottom: '5rem',
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(180deg, #180C1D 0%, #25122C 55%, #180C1D 100%)'
        }}
      >
        {/* Subtle Celestial Yantra Watermark */}
        <div style={{
          position: 'absolute',
          top: '-5%',
          right: '-5%',
          width: '600px',
          height: '600px',
          backgroundImage: `url(${getAssetPath('/images/sri-yantra.jpg')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.08,
          borderRadius: '50%',
          pointerEvents: 'none',
          animation: 'spinSlow 180s linear infinite'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'center'
          }} className="hero-grid">
            
            {/* Left Column */}
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                backgroundColor: 'rgba(239, 112, 45, 0.12)',
                border: '1px solid rgba(239, 112, 45, 0.35)',
                borderRadius: '9999px',
                padding: '0.35rem 0.95rem',
                marginBottom: '1.5rem'
              }}>
                <Sparkles size={13} style={{ color: 'var(--orange-burnished)' }} />
                <span style={{
                  fontSize: '0.76rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#FFA066'
                }}>
                  Vedic Astrology Family Tradition
                </span>
              </div>

              <h1 style={{
                fontSize: '2.45rem',
                lineHeight: 1.2,
                marginBottom: '1.25rem',
                fontWeight: 700
              }} className="hero-title hero-headline">
                Ancient Wisdom. <br />
                <span className="orange-gold-text">Guidance for Today's Questions.</span>
              </h1>

              <p style={{
                fontSize: '1.08rem',
                lineHeight: 1.75,
                color: 'var(--text-light-soft)',
                marginBottom: '2rem',
                maxWidth: '620px'
              }}>
                Carrying forward generations of traditional family astrology practice, <strong>Shubham Dixit</strong> offers thoughtful, chart-grounded consultations for life transitions, matrimonial compatibility, career timing, and personal clarity—without fatalistic fear-mongering or superstitious claims.
              </p>

              <div className="hero-cta-group" style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '2.5rem'
              }}>
                <Link 
                  to="/services" 
                  className="btn btn-primary-orange btn-lg"
                  id="hero-explore-cta"
                >
                  <span>Explore Consultations</span>
                  <ArrowRight size={17} />
                </Link>

                <Link 
                  to="/consultation" 
                  className="btn btn-outline-gold btn-lg"
                  id="hero-enquiry-cta"
                >
                  <MessageSquare size={17} style={{ color: 'var(--orange-burnished)' }} />
                  <span>Make an Enquiry</span>
                </Link>
              </div>

              <div style={{
                fontSize: '0.78rem',
                color: 'var(--text-light-soft)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                opacity: 0.85
              }}>
                <span>✦ Authentic Shastric analysis</span>
                <span>•</span>
                <span>Confidential 1-on-1 sessions</span>
                <span>•</span>
                <span>No fabricated predictions</span>
              </div>
            </div>

            {/* Right Column: Portrait Treatment */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                width: '85%',
                height: '85%',
                background: 'radial-gradient(circle, rgba(239, 112, 45, 0.2) 0%, transparent 70%)',
                filter: 'blur(35px)',
                zIndex: 1
              }} />

              <div style={{
                position: 'relative',
                zIndex: 2,
                borderRadius: '24px',
                padding: '6px',
                background: 'linear-gradient(135deg, rgba(215, 181, 109, 0.4) 0%, rgba(239, 112, 45, 0.3) 50%, rgba(215, 181, 109, 0.2) 100%)',
                boxShadow: 'var(--shadow-luxury)',
                maxWidth: '440px',
                width: '100%'
              }}>
                <div style={{
                  borderRadius: '18px',
                  overflow: 'hidden',
                  position: 'relative',
                  backgroundColor: '#1E0E24'
                }}>
                  <img 
                    src={getAssetPath('/images/shubham-dixit.jpg')} 
                    alt="Shubham Dixit - Vedic Astrologer Portrait" 
                    style={{
                      width: '100%',
                      height: '420px',
                      maxHeight: '65vh',
                      display: 'block',
                      objectFit: 'cover',
                      objectPosition: 'top center'
                    }}
                  />

                  <div style={{
                    position: 'absolute',
                    top: '0.85rem',
                    left: '0.85rem',
                    right: '0.85rem',
                    background: 'rgba(24, 12, 29, 0.88)',
                    border: '1px solid rgba(215, 181, 109, 0.3)',
                    backdropFilter: 'blur(6px)',
                    borderRadius: '8px',
                    padding: '0.45rem 0.75rem',
                    fontSize: '0.7rem',
                    color: '#F4E7C5',
                    textAlign: 'center',
                    lineHeight: 1.4
                  }}>
                    [Client Portrait Placeholder — Replace with Shubham Dixit's Studio Photograph]
                  </div>

                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(180deg, transparent 0%, rgba(24, 12, 29, 0.95) 40%, #180C1D 100%)',
                    padding: '2.5rem 1.5rem 1.25rem',
                    textAlign: 'center'
                  }}>
                    <div style={{
                      fontFamily: 'var(--font-cinzel)',
                      fontSize: '1.3rem',
                      fontWeight: 700,
                      color: '#FFFFFF'
                    }}>
                      Shubham Dixit
                    </div>
                    <div style={{
                      fontSize: '0.8rem',
                      color: 'var(--orange-burnished)',
                      fontWeight: 600,
                      marginTop: '0.2rem'
                    }}>
                      Vedic Astrologer • Family Practice Lineage
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes spinSlow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @media (min-width: 1024px) {
            .hero-grid {
              grid-template-columns: 1.15fr 0.85fr !important;
            }
            .hero-title {
              fontSize: 3.25rem !important;
            }
          }
        `}</style>
      </section>

      {/* 2. COMPACT TRUST STRIP */}
      <section style={{
        background: 'rgba(32, 16, 38, 0.7)',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
        padding: '1.5rem 0'
      }}>
        <div className="container">
          <div className="trust-strip-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
            gap: '1.25rem',
            alignItems: 'center'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'rgba(239, 112, 45, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--orange-burnished)',
                flexShrink: 0
              }}>
                <Compass size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#FFFFFF' }}>
                  Generational Foundation
                </div>
                <div style={{ fontSize: '0.76rem', color: 'var(--text-light-soft)' }}>
                  Traditional offline roots & yajman relationships
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'rgba(215, 181, 109, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--gold-antique)',
                flexShrink: 0
              }}>
                <Globe size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#FFFFFF' }}>
                  Target Global Reach
                </div>
                <div style={{ fontSize: '0.76rem', color: 'var(--text-light-soft)' }}>
                  India, USA, UAE, and Canada diaspora
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'rgba(16, 185, 129, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#34D399',
                flexShrink: 0
              }}>
                <Shield size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#FFFFFF' }}>
                  Ethical Vedic Practice
                </div>
                <div style={{ fontSize: '0.76rem', color: 'var(--text-light-soft)' }}>
                  Clear, grounded remedies; zero fear tactics
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FAMILY TRADITION SECTION */}
      <section style={{ padding: '5.5rem 0', backgroundColor: '#180C1D' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="badge-orange" style={{ marginBottom: '0.85rem' }}>
              <Compass size={13} />
              <span>Our Family Tradition</span>
            </div>
            <h2 className="section-title">
              Ancestral Astrological Heritage & <span className="gold-gradient-text">Scholarly Roots</span>
            </h2>
            <div className="sacred-divider">
              <span className="sacred-symbol">॥ पराशर स्मृति ॥</span>
            </div>
            <p className="section-desc">
              Rooted in centuries of classical study, teacher-disciple relationships, and deep local trust.
            </p>
          </div>

          <div style={{
            background: 'rgba(239, 112, 45, 0.08)',
            border: '1px dashed rgba(239, 112, 45, 0.35)',
            borderRadius: '12px',
            padding: '1rem 1.5rem',
            marginBottom: '3rem',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.75rem',
            fontSize: '0.84rem',
            color: '#FFA77A'
          }}>
            <AlertCircle size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong>Client Historical Claim Notice:</strong> The client describes the family's astrology tradition as approximately 500+ years old. In this sales demo, this is treated as a client-provided historical claim flagged for confirmation before publication.
            </div>
          </div>

          <div 
            className="mobile-grid-1col"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              gap: '2.5rem'
            }}>
            {traditionOverview.profiles.map((profile, pIdx) => (
              <div 
                key={profile.name}
                className="glass-card lineage-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '2.25rem',
                  borderRadius: '20px',
                  border: pIdx === 1 ? '1.5px solid var(--border-subtle)' : '1px solid rgba(215, 181, 109, 0.15)'
                }}
              >
                <div 
                  className="lineage-image-frame"
                  style={{
                    position: 'relative',
                    height: '320px',
                    borderRadius: '14px',
                    overflow: 'hidden',
                    marginBottom: '1.5rem',
                    backgroundColor: '#1E0E24'
                  }}>
                  <img 
                    src={profile.image} 
                    alt={profile.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 40%, rgba(24, 12, 29, 0.95) 100%)'
                  }} />
                  <div style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    right: '1rem'
                  }}>
                    <div style={{
                      fontFamily: 'var(--font-cinzel)',
                      fontSize: '1.35rem',
                      fontWeight: 700,
                      color: '#FFFFFF'
                    }}>
                      {profile.name}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--orange-burnished)', fontWeight: 600 }}>
                      {profile.role}
                    </div>
                  </div>
                </div>

                <div style={{
                  fontSize: '0.78rem',
                  color: 'var(--gold-antique)',
                  background: 'rgba(215, 181, 109, 0.08)',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '6px',
                  marginBottom: '1.25rem'
                }}>
                  {profile.relationshipNote}
                </div>

                <p style={{
                  fontSize: '0.92rem',
                  lineHeight: 1.7,
                  color: 'var(--text-light-soft)',
                  marginBottom: '1.5rem'
                }}>
                  {profile.background}
                </p>

                <div style={{
                  marginTop: 'auto',
                  borderTop: '1px solid rgba(215, 181, 109, 0.15)',
                  paddingTop: '1.25rem',
                  fontStyle: 'italic',
                  fontFamily: 'var(--font-serif)',
                  color: 'var(--gold-pale)',
                  fontSize: '0.94rem',
                  lineHeight: 1.6
                }}>
                  "{profile.quote}"
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/tradition" className="btn btn-outline-gold">
              <span>Read Full Tradition & Background</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. ASTROLOGY SERVICES OVERVIEW */}
      <section id="services" style={{ padding: '5.5rem 0', backgroundColor: '#201026' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="badge-gold" style={{ marginBottom: '0.85rem' }}>
              <Sparkles size={13} />
              <span>Consultation Offerings</span>
            </div>
            <h2 className="section-title">
              Thoughtful Guidance for <span className="orange-gold-text">Life's Key Decisions</span>
            </h2>
            <div className="sacred-divider">
              <span className="sacred-symbol">॥ फलदीपिका विचार ॥</span>
            </div>
            <p className="section-desc">
              Every consultation is personal, interactive, and grounded in detailed chart analysis. All service names and formats shown below are demonstration examples awaiting client approval.
            </p>
          </div>

          <div 
            className="mobile-grid-1col"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '2rem',
              marginBottom: '3rem'
            }}>
            {servicesData.map((svc) => (
              <div 
                key={svc.id}
                className="glass-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '2.25rem',
                  borderRadius: '18px',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '0.85rem'
                }}>
                  <span className="badge-demo">
                    Provisional Example
                  </span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--gold-antique)', fontStyle: 'italic' }}>
                    {svc.sanskritTerm}
                  </span>
                </div>

                <h3 style={{
                  fontSize: '1.35rem',
                  color: '#FFFFFF',
                  marginBottom: '0.85rem',
                  lineHeight: 1.3
                }}>
                  {svc.title}
                </h3>

                <p style={{
                  fontSize: '0.9rem',
                  lineHeight: 1.65,
                  color: 'var(--text-light-soft)',
                  marginBottom: '1.5rem',
                  flex: 1
                }}>
                  {svc.summary}
                </p>

                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.76rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-light-soft)', marginBottom: '0.65rem' }}>
                    Consultation Inclusions:
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {svc.scope.slice(0, 3).map((pt, sIdx) => (
                      <li key={sIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-light-soft)' }}>
                        <CheckCircle2 size={13} style={{ color: 'var(--orange-burnished)', flexShrink: 0, marginTop: '3px' }} />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{
                  borderTop: '1px solid rgba(215, 181, 109, 0.15)',
                  paddingTop: '1.25rem',
                  marginTop: 'auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.75rem'
                }}>
                  <div style={{ fontSize: '0.78rem', color: 'var(--gold-antique)' }}>
                    {svc.format.split('(')[0]}
                  </div>

                  <Link
                    to="/consultation"
                    className="btn btn-primary-orange btn-sm"
                  >
                    <span>Enquire</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/services" className="btn btn-outline-gold">
              <span>View All Detailed Service Cards</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. CONSULTATION JOURNEY */}
      <section style={{ padding: '5.5rem 0', backgroundColor: '#180C1D' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="badge-orange" style={{ marginBottom: '0.85rem' }}>
              <Clock size={13} />
              <span>Consultation Journey</span>
            </div>
            <h2 className="section-title">
              The Proposed <span className="gold-gradient-text">Enquiry & Consultation Flow</span>
            </h2>
            <div className="sacred-divider">
              <span className="sacred-symbol">॥ परामर्श सोपान ॥</span>
            </div>
            <p className="section-desc">
              How seekers can transition from initial curiosity to a structured, confidential discussion. Subject to final operational confirmation with Shubham Dixit.
            </p>
          </div>

          <div 
            className="mobile-grid-1col"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
              gap: '1.5rem',
              marginBottom: '3rem'
            }}>
            {[
              {
                step: "01",
                title: "Initial Enquiry & Topic Sharing",
                desc: "Share your core question—career transition, marriage matching, or life direction—via our website form or WhatsApp enquiry."
              },
              {
                step: "02",
                title: "Birth Coordinate Verification",
                desc: "Provide date, exact time, and city of birth. If birth time is approximate, this is noted so rectification checks can be applied."
              },
              {
                step: "03",
                title: "Personal 1-on-1 Consultation",
                desc: "Participate in a dedicated video or telephone session with Shubham Dixit to walk through planetary dasha cycles and answer your questions."
              },
              {
                step: "04",
                title: "Reflective Remedies & Summary",
                desc: "Receive realistic, non-commercial Satvik remedies (Mantra, Daan, lifestyle alignment) to support your conscious decision-making."
              }
            ].map((st) => (
              <div 
                key={st.step}
                className="glass-card"
                style={{
                  padding: '2rem 1.5rem',
                  borderRadius: '16px',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <div style={{
                  fontFamily: 'var(--font-cinzel)',
                  fontSize: '2rem',
                  fontWeight: 800,
                  color: 'var(--orange-burnished)',
                  lineHeight: 1,
                  marginBottom: '1rem'
                }}>
                  {st.step}
                </div>
                <h4 style={{
                  fontSize: '1.15rem',
                  color: '#FFFFFF',
                  marginBottom: '0.65rem'
                }}>
                  {st.title}
                </h4>
                <p style={{
                  fontSize: '0.88rem',
                  color: 'var(--text-light-soft)',
                  lineHeight: 1.65
                }}>
                  {st.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/consultation" className="btn btn-primary-orange btn-lg">
              <span>Schedule or Enquire Now</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. REGIONAL COVERAGE SECTION */}
      <section style={{ padding: '5.5rem 0', backgroundColor: '#201026' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="badge-gold" style={{ marginBottom: '0.85rem' }}>
              <Globe size={13} />
              <span>Regional Presence</span>
            </div>
            <h2 className="section-title">
              Dedicated Consultations Across <span className="orange-gold-text">Key Hubs & Diaspora</span>
            </h2>
            <div className="sacred-divider">
              <span className="sacred-symbol">॥ देश काल पात्र विचार ॥</span>
            </div>
            <p className="section-desc">
              Whether navigating business cycles in Gujarat, corporate leadership in Delhi or Mumbai, or diaspora transitions in North America and the Gulf.
            </p>
          </div>

          <div 
            className="mobile-grid-1col"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '1.5rem',
              marginBottom: '3rem'
            }}>
            {regionsData.map((reg) => (
              <Link
                key={reg.slug}
                to={`/locations/${reg.slug}`}
                className="glass-card"
                style={{
                  padding: '1.75rem',
                  borderRadius: '16px',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '0.75rem'
                }}>
                  <div style={{
                    fontSize: '0.72rem',
                    color: 'var(--orange-burnished)',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em'
                  }}>
                    {reg.category}
                  </div>
                  <ChevronRight size={16} style={{ color: 'var(--gold-antique)' }} />
                </div>

                <h4 style={{
                  fontSize: '1.25rem',
                  color: '#FFFFFF',
                  marginBottom: '0.5rem'
                }}>
                  {reg.shortName}
                </h4>

                <p style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-light-soft)',
                  lineHeight: 1.6,
                  marginBottom: '1rem',
                  flex: 1
                }}>
                  {reg.headline.slice(0, 95)}...
                </p>

                <div style={{
                  fontSize: '0.78rem',
                  color: 'var(--gold-antique)',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}>
                  <span>Explore Regional Page</span>
                  <ArrowRight size={12} />
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/locations" className="btn btn-outline-gold">
              <span>View All 7 Target Region Guides</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. LATEST ARTICLES SECTION */}
      <section style={{ padding: '5.5rem 0', backgroundColor: '#180C1D' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="badge-orange" style={{ marginBottom: '0.85rem' }}>
              <BookOpen size={13} />
              <span>दैनिक ब्लॉग व विचार • Daily Blog & Panchang</span>
            </div>
            <h2 className="section-title">
              Daily Vedic Blog & <span className="gold-gradient-text">Publishing Desk</span>
            </h2>
            <div className="sacred-divider">
              <span className="sacred-symbol">॥ विद्या प्रकाशते ॥</span>
            </div>
            <p className="section-desc">
              दैनिक पंचांग, शुभ मुहूर्त, राशि विचार एवं शुभम दीक्षित जी के लिए विशेष रूप से निर्मित डेली ब्लॉग पब्लिशिंग डेस्क।
            </p>
          </div>

          <div 
            className="mobile-grid-1col"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 290px), 1fr))',
              gap: '2rem',
              marginBottom: '3rem'
            }}>
            {blogsData.slice(0, 3).map((article) => (
              <article 
                key={article.id}
                className="glass-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '2rem',
                  borderRadius: '18px',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1rem'
                }}>
                  <span className="badge-demo">{article.category}</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-light-soft)' }}>
                    {article.readTime}
                  </span>
                </div>

                <h3 style={{
                  fontSize: '1.25rem',
                  color: '#FFFFFF',
                  marginBottom: '0.75rem',
                  lineHeight: 1.35
                }}>
                  <Link to={`/blog/${article.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {article.title}
                  </Link>
                </h3>

                <p style={{
                  fontSize: '0.88rem',
                  lineHeight: 1.65,
                  color: 'var(--text-light-soft)',
                  marginBottom: '1.5rem',
                  flex: 1
                }}>
                  {article.excerpt}
                </p>

                <div style={{
                  borderTop: '1px solid rgba(215, 181, 109, 0.15)',
                  paddingTop: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: 'auto'
                }}>
                  <span style={{ fontSize: '0.76rem', color: 'var(--gold-antique)' }}>
                    {article.author.split('(')[0].trim()}
                  </span>
                  <Link
                    to={`/blog/${article.slug}`}
                    style={{
                      color: 'var(--orange-burnished)',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem'
                    }}
                  >
                    <span>Read Article</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/blog" className="btn btn-primary-orange">
              <span>Try Daily Blog &amp; Publishing Desk</span>
              <ArrowRight size={15} />
            </Link>
            <Link to="/blog" className="btn btn-outline-gold">
              <span>View All Vedic Articles</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. CLIENT EXPERIENCES & REVIEWS FRAMEWORK */}
      <section style={{ padding: '5.5rem 0', backgroundColor: '#201026' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="badge-gold" style={{ marginBottom: '0.85rem' }}>
              <HeartHandshake size={13} />
              <span>Seeker Voices</span>
            </div>
            <h2 className="section-title">
              Client Experiences & <span className="orange-gold-text">Review Framework</span>
            </h2>
            <div className="sacred-divider">
              <span className="sacred-symbol">॥ सत्यं परं धीमहि ॥</span>
            </div>
            <p className="section-desc">
              Designed to showcase verified client reflections once provided by Shubham Dixit. No fabricated testimonials are displayed.
            </p>
          </div>

          <div 
            className="mobile-grid-1col"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '2rem'
            }}>
            {testimonialsFramework.map((item) => (
              <div 
                key={item.id}
                className="glass-card"
                style={{
                  padding: '2.25rem',
                  borderRadius: '18px',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <div style={{
                  display: 'inline-block',
                  background: 'rgba(239, 112, 45, 0.12)',
                  border: '1px dashed rgba(239, 112, 45, 0.4)',
                  color: '#FFA066',
                  fontSize: '0.72rem',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '4px',
                  marginBottom: '1rem',
                  fontWeight: 600
                }}>
                  Sample Review Framework Layout
                </div>

                <h4 style={{
                  fontFamily: 'var(--font-cinzel)',
                  fontSize: '1.15rem',
                  color: 'var(--gold-antique)',
                  marginBottom: '0.75rem'
                }}>
                  {item.theme}
                </h4>

                <p style={{
                  fontSize: '0.88rem',
                  lineHeight: 1.7,
                  color: 'var(--text-light-soft)',
                  fontStyle: 'italic',
                  marginBottom: '1.5rem',
                  flex: 1
                }}>
                  {item.quotePlaceholder}
                </p>

                <div style={{
                  borderTop: '1px solid rgba(215, 181, 109, 0.15)',
                  paddingTop: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.8rem',
                  color: 'var(--text-light-soft)'
                }}>
                  <div>
                    <div style={{ fontWeight: 600, color: '#FFF' }}>{item.clientInitialsOrName}</div>
                    <div style={{ fontSize: '0.74rem' }}>{item.serviceCategory}</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--gold-antique)' }}>
                    <MapPin size={12} />
                    <span>{item.cityRegion}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ ACCORDION */}
      <section style={{ padding: '5.5rem 0', backgroundColor: '#180C1D' }}>
        <div className="container-narrow">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="badge-orange" style={{ marginBottom: '0.85rem' }}>
              <HelpCircle size={13} />
              <span>Questions & Answers</span>
            </div>
            <h2 className="section-title">
              Frequently Asked <span className="gold-gradient-text">Questions</span>
            </h2>
            <div className="sacred-divider">
              <span className="sacred-symbol">॥ प्रश्नोत्तर विचार ॥</span>
            </div>
            <p className="section-desc">
              Clear, transparent answers about birth details, consultation ethics, remedies, and privacy.
            </p>
          </div>

          <FAQAccordion />
        </div>
      </section>

      {/* 10. FINAL ENQUIRY CTA */}
      <section style={{
        padding: '5rem 0',
        backgroundColor: '#201026',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
        position: 'relative'
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{
            maxWidth: '720px',
            margin: '0 auto',
            background: 'linear-gradient(135deg, rgba(53, 24, 63, 0.9) 0%, rgba(32, 16, 38, 0.95) 100%)',
            border: '1.5px solid var(--border-subtle)',
            borderRadius: '24px',
            padding: '3rem 2rem',
            boxShadow: 'var(--shadow-luxury)'
          }}>
            <h2 style={{
              fontFamily: 'var(--font-cinzel)',
              fontSize: '2.2rem',
              color: '#FFFFFF',
              marginBottom: '1rem',
              lineHeight: 1.25
            }}>
              Ready to Seek Direction for <br />
              <span className="orange-gold-text">Your Life Questions?</span>
            </h2>

            <p style={{
              color: 'var(--text-light-soft)',
              fontSize: '1rem',
              lineHeight: 1.7,
              marginBottom: '2rem',
              maxWidth: '560px',
              margin: '0 auto 2rem'
            }}>
              Connect with Shubham Dixit to discuss your birth chart coordinates and schedule an unhurried, one-on-one session.
            </p>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap'
            }}>
              <Link to="/consultation" className="btn btn-primary-orange btn-lg">
                <MessageSquare size={17} />
                <span>Submit Consultation Enquiry</span>
              </Link>

              <a 
                href="https://wa.me/918279696707?text=Hi%20Vardan%2C%20mujhe%20aapki%20website%20bohot%20achhi%20lagi.%20Kya%20hum%20is%20website%20ke%20baare%20mein%20aur%20baat%20kar%20sakte%20hain%20aur%20aage%20proceed%20kar%20sakte%20hain%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
              >
                <MessageSquare size={17} />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
