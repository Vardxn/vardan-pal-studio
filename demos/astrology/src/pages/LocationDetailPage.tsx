import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { regionsData } from '../data/regions';
import { ConsultationForm } from '../components/ConsultationForm';
import { MapPin, CheckCircle2, ArrowRight, Clock, AlertCircle } from 'lucide-react';

export const LocationDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const region = regionsData.find((r) => r.slug === slug);

  if (!region) {
    return <Navigate to="/locations" replace />;
  }

  return (
    <div style={{ padding: '3.5rem 0 6rem', backgroundColor: '#180C1D' }}>
      <div className="container">
        {/* Breadcrumbs */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '0.82rem',
          color: 'var(--text-light-soft)',
          marginBottom: '2rem'
        }}>
          <Link to="/" style={{ color: 'var(--text-light-soft)', textDecoration: 'none' }}>Home</Link>
          <span>/</span>
          <Link to="/locations" style={{ color: 'var(--text-light-soft)', textDecoration: 'none' }}>Regional Coverage</Link>
          <span>/</span>
          <span style={{ color: 'var(--gold-antique)' }}>{region.shortName}</span>
        </div>

        {/* Hero Section of Location Page */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(53, 24, 63, 0.85) 0%, rgba(32, 16, 38, 0.95) 100%)',
          border: '1.5px solid var(--border-subtle)',
          borderRadius: '24px',
          padding: '3rem 2.5rem',
          marginBottom: '3.5rem',
          boxShadow: 'var(--shadow-luxury)'
        }}>
          <div className="badge-orange" style={{ marginBottom: '1rem' }}>
            <MapPin size={13} />
            <span>{region.category} • Remote Vedic Consultation</span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-cinzel)',
            fontSize: '2.35rem',
            color: '#FFFFFF',
            lineHeight: 1.25,
            marginBottom: '1.25rem',
            maxWidth: '860px'
          }}>
            {region.headline}
          </h1>

          <p style={{
            color: 'var(--text-light-soft)',
            fontSize: '1.05rem',
            lineHeight: 1.75,
            maxWidth: '820px',
            marginBottom: '1.75rem'
          }}>
            {region.overview}
          </p>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem',
            flexWrap: 'wrap',
            borderTop: '1px solid rgba(215, 181, 109, 0.15)',
            paddingTop: '1.5rem',
            fontSize: '0.86rem',
            color: 'var(--gold-antique)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <Clock size={15} />
              <span>{region.timingNotice}</span>
            </div>
            {region.confirmationNotice && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#FFA066' }}>
                <AlertCircle size={15} />
                <span>{region.confirmationNotice}</span>
              </div>
            )}
          </div>
        </div>

        {/* 2-Column Content: Local Relevance & Questions on Left, Form on Right */}
        <div 
          className="mobile-grid-1col"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '3rem',
            alignItems: 'start'
          }}>
          {/* Left Column */}
          <div>
            <h3 style={{
              fontFamily: 'var(--font-cinzel)',
              fontSize: '1.5rem',
              color: '#FFFFFF',
              marginBottom: '1rem'
            }}>
              Astrological Relevance for {region.shortName}
            </h3>

            <p style={{
              color: 'var(--text-light-soft)',
              fontSize: '0.96rem',
              lineHeight: 1.75,
              marginBottom: '2rem'
            }}>
              {region.localRelevance}
            </p>

            {/* Common Topics Raised */}
            <div style={{
              background: 'rgba(32, 16, 38, 0.7)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '18px',
              padding: '2rem',
              marginBottom: '2.5rem'
            }}>
              <h4 style={{
                fontFamily: 'var(--font-cinzel)',
                fontSize: '1.15rem',
                color: 'var(--gold-antique)',
                marginBottom: '1.25rem'
              }}>
                Common Areas of Inquiry in this Region:
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {region.commonQuestions.map((q, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.9rem', color: 'var(--text-light-soft)', lineHeight: 1.5 }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--orange-burnished)', flexShrink: 0, marginTop: '2px' }} />
                    <span>{q}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Scheduling Guidance */}
            <div style={{
              borderLeft: '3px solid var(--orange-burnished)',
              paddingLeft: '1.25rem',
              fontSize: '0.88rem',
              color: 'var(--text-light-soft)',
              lineHeight: 1.65
            }}>
              <strong style={{ color: '#FFFFFF', display: 'block', marginBottom: '0.25rem' }}>
                How Sessions Are Arranged:
              </strong>
              {region.enquiryGuidance}
            </div>
          </div>

          {/* Right Column: Dedicated Consultation Enquiry Form */}
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{
                fontFamily: 'var(--font-cinzel)',
                fontSize: '1.45rem',
                color: '#FFFFFF',
                marginBottom: '0.45rem'
              }}>
                Enquire for {region.shortName}
              </h3>
              <p style={{ color: 'var(--text-light-soft)', fontSize: '0.88rem' }}>
                Fill out the demo form below to simulate how seekers in this region submit details for time-zone coordinated appointments.
              </p>
            </div>

            <ConsultationForm />
          </div>
        </div>

        {/* Back to all regions */}
        <div style={{ marginTop: '4rem', textAlign: 'center' }}>
          <Link to="/locations" className="btn btn-outline-gold">
            <span>View Other Service Regions</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
};
