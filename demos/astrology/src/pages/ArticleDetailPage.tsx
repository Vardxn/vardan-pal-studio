import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getStoredBlogs } from '../data/blogs';
import { getAssetPath } from '../utils/assets';
import { Calendar, Clock, Share2, Tag, ArrowRight } from 'lucide-react';

export const ArticleDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const articles = getStoredBlogs();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  const authorImage = article.author.includes('Ganesh') 
    ? getAssetPath('/images/dada-guru.jpg') 
    : getAssetPath('/images/shubham-dixit.jpg');

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Article link copied to clipboard!");
    }
  };

  return (
    <div style={{ padding: '3.5rem 0 6rem', backgroundColor: '#180C1D' }}>
      <div className="container-narrow">
        {/* Breadcrumb */}
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
          <Link to="/blog" style={{ color: 'var(--text-light-soft)', textDecoration: 'none' }}>Daily Blog & Panchang</Link>
          <span>/</span>
          <span style={{ color: 'var(--gold-antique)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '300px' }}>
            {article.title}
          </span>
        </div>

        {/* Article Header Card */}
        <div style={{
          background: 'rgba(32, 16, 38, 0.85)',
          border: '1.5px solid var(--border-subtle)',
          borderRadius: '24px',
          padding: '3rem 2.5rem',
          marginBottom: '3rem',
          boxShadow: 'var(--shadow-luxury)'
        }}>
          {/* Category & Meta */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.85rem',
            flexWrap: 'wrap',
            marginBottom: '1.25rem'
          }}>
            <span className="badge-demo">{article.category}</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', color: 'var(--text-light-soft)' }}>
              <Clock size={13} />
              <span>{article.readTime}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', color: 'var(--text-light-soft)' }}>
              <Calendar size={13} />
              <span>{article.publishedDate}</span>
            </div>
          </div>

          {/* Title */}
          <h1 style={{
            fontFamily: 'var(--font-cinzel)',
            fontSize: '2.25rem',
            color: '#FFFFFF',
            lineHeight: 1.25,
            marginBottom: '1.5rem'
          }}>
            {article.title}
          </h1>

          {/* Author & Share */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(215, 181, 109, 0.15)',
            paddingTop: '1.25rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '1.5px solid var(--gold-antique)',
                boxShadow: '0 0 10px var(--gold-glow)'
              }}>
                <img src={authorImage} alt={article.author} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} />
              </div>
              <div>
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#FFFFFF' }}>{article.author}</div>
                <div style={{ fontSize: '0.74rem', color: 'var(--orange-burnished)' }}>500-Year Ancestral Vedic Lineage</div>
              </div>
            </div>

            <button
              onClick={handleShare}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-light)',
                padding: '0.45rem 0.95rem',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.82rem'
              }}
            >
              <Share2 size={14} />
              <span>Share Article</span>
            </button>
          </div>
        </div>

        {/* Article Body */}
        <div 
          className="article-rich-body"
          dangerouslySetInnerHTML={{ __html: article.contentHtml }}
          style={{
            background: 'rgba(24, 12, 29, 0.7)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '20px',
            padding: '3rem 2.5rem',
            color: 'var(--text-light-soft)',
            fontSize: '1.05rem',
            lineHeight: 1.85,
            marginBottom: '3rem'
          }}
        />

        {/* Tags */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          flexWrap: 'wrap',
          marginBottom: '3.5rem',
          padding: '1rem',
          background: 'rgba(32, 16, 38, 0.6)',
          borderRadius: '12px',
          border: '1px solid rgba(215, 181, 109, 0.12)'
        }}>
          <Tag size={15} style={{ color: 'var(--orange-burnished)' }} />
          {article.tags.map(t => (
            <span key={t} style={{
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '0.25rem 0.65rem',
              borderRadius: '4px',
              fontSize: '0.78rem',
              color: 'var(--text-light-soft)'
            }}>
              #{t}
            </span>
          ))}
        </div>

        {/* Bottom Consultation CTA */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(53, 24, 63, 0.9) 0%, rgba(32, 16, 38, 0.95) 100%)',
          border: '1.5px solid var(--border-subtle)',
          borderRadius: '24px',
          padding: '2.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem',
          marginBottom: '3rem'
        }}>
          <div>
            <h3 style={{
              fontFamily: 'var(--font-cinzel)',
              fontSize: '1.45rem',
              color: '#FFFFFF',
              marginBottom: '0.4rem'
            }}>
              Have Questions About Your Own Chart?
            </h3>
            <p style={{ color: 'var(--text-light-soft)', fontSize: '0.92rem', maxWidth: '520px' }}>
              Schedule a personalized reading with Shubham Dixit to examine how these principles specifically apply to your horoscope.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/consultation" className="btn btn-primary-orange">
              <span>Book a Consultation</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        {/* Back link */}
        <div style={{ textAlign: 'center' }}>
          <Link to="/blog" className="btn btn-outline-gold">
            <span>Back to All Daily Articles</span>
          </Link>
        </div>
      </div>

      <style>{`
        .article-rich-body h3 {
          font-family: var(--font-cinzel);
          font-size: 1.35rem;
          color: var(--gold-antique);
          margin-top: 2rem;
          margin-bottom: 0.85rem;
        }
        .article-rich-body p {
          margin-bottom: 1.25rem;
        }
        .article-rich-body ul, .article-rich-body ol {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
        }
        .article-rich-body li {
          margin-bottom: 0.5rem;
        }
        .article-rich-body strong {
          color: #FFFFFF;
        }
      `}</style>
    </div>
  );
};
