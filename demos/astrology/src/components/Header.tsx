import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, MessageSquare } from 'lucide-react';
import { getAssetPath } from '../utils/assets';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Our Tradition", path: "/tradition" },
    { label: "Services", path: "/services" },
    { label: "Daily Blog", path: "/blog", badge: "दैनिक" },
    { label: "Consultation", path: "/consultation" },
    { label: "Coverage", path: "/locations" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 900,
      backgroundColor: 'rgba(24, 12, 29, 0.95)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border-subtle)',
      transition: 'var(--transition-smooth)'
    }}>
      <div className="container" id="main-header-inner" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.85rem 1.5rem',
        minHeight: '72px'
      }}>
        {/* Brand Logo & Editorial Typography */}
        <Link 
          to="/" 
          style={{ 
            textDecoration: 'none', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.85rem' 
          }}
        >
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #3A1846 0%, #1F0D24 100%)',
            border: '1.5px solid var(--gold-antique)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 16px var(--gold-glow)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <img 
              src={getAssetPath('/images/sri-yantra.jpg')} 
              alt="Sri Yantra Seal" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.88,
                transform: 'scale(1.15)'
              }}
            />
          </div>
          <div>
            <div style={{
              fontFamily: 'var(--font-cinzel)',
              fontSize: '1.25rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
              lineHeight: 1.15
            }} className="gold-gradient-text">
              SHUBHAM DIXIT
            </div>
            <div style={{
              fontSize: '0.72rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--orange-burnished)',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem'
            }}>
              <span>Vedic Astrology</span>
              <span style={{ opacity: 0.4 }}>•</span>
              <span style={{ color: 'var(--text-light-soft)' }}>Family Lineage</span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav style={{
          display: 'none',
          alignItems: 'center',
          gap: '1.4rem'
        }} className="desktop-nav">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                isActive ? 'nav-link-active' : 'nav-link-idle'
              }
              style={{
                textDecoration: 'none',
                fontSize: '0.88rem',
                fontWeight: 500,
                letterSpacing: '0.02em',
                transition: 'var(--transition-smooth)',
                position: 'relative',
                padding: '0.35rem 0',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}
            >
              <span>{link.label}</span>
              {link.badge && (
                <span style={{
                  fontSize: '0.62rem',
                  padding: '0.1rem 0.38rem',
                  borderRadius: '9999px',
                  background: 'rgba(239, 112, 45, 0.25)',
                  color: 'var(--orange-burnished)',
                  border: '1px solid rgba(239, 112, 45, 0.4)',
                  fontWeight: 700,
                  lineHeight: 1
                }}>
                  {link.badge}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Action Button & Mobile Menu Trigger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <Link
            to="/consultation"
            className="btn btn-primary-orange btn-sm"
            style={{ display: 'none' }}
            id="header-enquire-btn"
          >
            <MessageSquare size={14} />
            <span>Make an Enquiry</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-light)',
              padding: '0.5rem',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            aria-label="Toggle Navigation"
            id="mobile-nav-toggle"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: '#201026',
          borderBottom: '1px solid var(--border-subtle)',
          padding: '1.25rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          animation: 'fadeIn 0.2s ease-out'
        }}>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) => 
                isActive ? 'nav-link-active' : 'nav-link-idle'
              }
              style={{
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 500,
                padding: '0.5rem 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span>{link.path === '/blog' ? 'Daily Blog & Panchang (दैनिक ब्लॉग)' : link.label}</span>
              {link.badge && (
                <span style={{
                  fontSize: '0.7rem',
                  padding: '0.15rem 0.5rem',
                  borderRadius: '9999px',
                  background: 'rgba(239, 112, 45, 0.25)',
                  color: 'var(--orange-burnished)',
                  border: '1px solid rgba(239, 112, 45, 0.4)',
                  fontWeight: 700
                }}>
                  {link.badge}
                </span>
              )}
            </NavLink>
          ))}
          <Link
            to="/consultation"
            onClick={() => setMobileMenuOpen(false)}
            className="btn btn-primary-orange"
            style={{ width: '100%', marginTop: '0.75rem' }}
          >
            <MessageSquare size={16} />
            <span>Make an Enquiry</span>
          </Link>
        </div>
      )}

      <style>{`
        .nav-link-idle {
          color: var(--text-light-soft);
        }
        .nav-link-idle:hover {
          color: var(--orange-burnished);
        }
        .nav-link-active {
          color: var(--gold-antique) !important;
          font-weight: 600 !important;
          border-bottom: 2px solid var(--orange-burnished);
        }
        @media (max-width: 768px) {
          #main-header-inner {
            min-height: 58px !important;
            padding: 0.5rem 1.15rem !important;
          }
        }
        @media (min-width: 1040px) {
          .desktop-nav {
            display: flex !important;
          }
          #header-enquire-btn {
            display: inline-flex !important;
          }
          #mobile-nav-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
