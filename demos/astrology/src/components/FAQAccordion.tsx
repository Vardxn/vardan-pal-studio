import React, { useState } from 'react';
import { faqData } from '../data/faq';
import { ChevronDown } from 'lucide-react';

export const FAQAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(faqData[0].id);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
      {faqData.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            style={{
              background: isOpen ? 'rgba(53, 24, 63, 0.75)' : 'rgba(32, 16, 38, 0.6)',
              border: isOpen ? '1.5px solid var(--border-subtle)' : '1px solid rgba(215, 181, 109, 0.12)',
              borderRadius: '14px',
              overflow: 'hidden',
              transition: 'var(--transition-smooth)'
            }}
          >
            <button
              onClick={() => toggle(item.id)}
              style={{
                width: '100%',
                padding: '1.25rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                background: 'none',
                border: 'none',
                color: 'var(--text-light)',
                cursor: 'pointer',
                textAlign: 'left',
                fontFamily: 'var(--font-sans)',
                fontSize: '1.02rem',
                fontWeight: 600
              }}
              aria-expanded={isOpen}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <span style={{
                  color: 'var(--orange-burnished)',
                  fontSize: '0.8rem',
                  fontWeight: 700
                }}>
                  Q.
                </span>
                <span>{item.question}</span>
              </div>

              <div style={{
                color: isOpen ? 'var(--orange-burnished)' : 'var(--gold-antique)',
                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.25s ease'
              }}>
                <ChevronDown size={18} />
              </div>
            </button>

            {isOpen && (
              <div style={{
                padding: '0 1.5rem 1.35rem 2.85rem',
                color: 'var(--text-light-soft)',
                fontSize: '0.94rem',
                lineHeight: 1.7,
                borderTop: '1px solid rgba(215, 181, 109, 0.1)',
                paddingTop: '1rem',
                animation: 'fadeIn 0.2s ease-out'
              }}>
                <p>{item.answer}</p>
                <div style={{
                  marginTop: '0.65rem',
                  display: 'inline-block',
                  fontSize: '0.72rem',
                  color: 'var(--gold-antique)',
                  background: 'rgba(215, 181, 109, 0.08)',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '4px'
                }}>
                  Category: {item.category}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
