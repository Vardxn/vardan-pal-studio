import React from 'react';
import { Globe, Clock, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TopBar: React.FC = () => {
  return (
    <div className="top-announcement-bar" style={{
      background: 'rgba(24, 12, 29, 0.98)',
      borderBottom: '1px solid rgba(215, 181, 109, 0.15)',
      fontSize: '0.78rem',
      padding: '0.45rem 1rem',
      color: 'var(--text-light-soft)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.6rem'
      }}>
        {/* Geographic Focus Notice */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Globe size={13} style={{ color: 'var(--orange-burnished)' }} />
          <span>
            <strong style={{ color: '#FFF' }}>Consultation Reach:</strong> Ahmedabad–Surat · Delhi NCR · Mumbai–Pune · Pan-India · USA · UAE · Canada*
          </span>
          <span style={{ fontSize: '0.7rem', color: 'var(--gold-antique)', opacity: 0.85 }}>
            (*Pending confirmation)
          </span>
        </div>

        {/* Quick Contact & Action Prompts */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <Clock size={12} style={{ color: 'var(--gold-antique)' }} />
            <span>IST / EST / GST Appointment Scheduling</span>
          </div>

          <Link
            to="/consultation"
            style={{
              color: 'var(--gold-antique)',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              fontWeight: 600
            }}
          >
            <MessageSquare size={12} style={{ color: 'var(--orange-burnished)' }} />
            <span>Make an Enquiry</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
