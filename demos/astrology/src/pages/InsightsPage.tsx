import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { type BlogPost, getStoredBlogs, saveDemoBlogPost, resetDemoBlogPosts } from '../data/blogs';
import { 
  BookOpen, Search, Clock, ArrowRight, Sparkles, 
  Send, RefreshCw, CheckCircle2, Feather, UserCheck, ShieldCheck,
  Flame, Calendar, ChevronDown, ChevronUp, Mic, Globe
} from 'lucide-react';

export const InsightsPage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedAuthor, setSelectedAuthor] = useState<string>('All');
  
  // Publishing Desk State
  const [isDeskOpen, setIsDeskOpen] = useState(true);
  const [publishSuccessMessage, setPublishSuccessMessage] = useState<string | null>(null);

  // Form Fields
  const [authorName, setAuthorName] = useState<'Shubham Dixit (Jyotish Acharya)' | 'Pt. Ganesh Shankar Acharya Ji (Dada Guru)'>('Shubham Dixit (Jyotish Acharya)');
  const [category, setCategory] = useState<BlogPost['category']>('दैनिक पंचांग (Daily Panchang)');
  const [title, setTitle] = useState('आज का दैनिक पंचांग एवं शुभ मुहूर्त — 12 अक्टूबर 2026');
  const [targetRegion, setTargetRegion] = useState('Pan-India & Global Diaspora');
  const [readTime, setReadTime] = useState('3 min read');
  const [excerpt, setExcerpt] = useState('स्वाति नक्षत्र एवं शुक्ल पक्ष द्वितीया का शुभ संयोजन। अभिजीत मुहूर्त, राहुकाल और आज के विशेष ज्योतिषी उपाय।');
  const [contentHtml, setContentHtml] = useState(`
    <p>॥ ॐ सूर्याय नमः ॥ आज सोमवार को चन्द्रमा का स्वाति नक्षत्र में संचरण अत्यंत शुभकारी है।</p>
    <h3>शुभ मुहूर्त समय</h3>
    <p>अभिजीत मुहूर्त: 11:45 AM - 12:35 PM। आज शिव उपासना और नए व्यावसायिक विचार विमर्श के लिए उत्तम समय है।</p>
  `);
  const [tags, setTags] = useState('दैनिक पंचांग, शुभ मुहूर्त, राहुकाल, वैदिक उपाय');

  useEffect(() => {
    setPosts(getStoredBlogs());
  }, []);

  const categories = [
    'All',
    'दैनिक पंचांग (Daily Panchang)',
    'दैनिक राशिफल (Daily Horoscope)',
    'कुंडली योग व उपाय (Vedic Yogas)',
    'आध्यात्मिक विचार (Spiritual Reflections)',
    'Beginner Vedic Astrology',
    'Consultation Guidance',
    'Career & Life Timing',
    'Marriage & Compatibility'
  ];

  // Quick Preset Handlers
  const loadPanchangPreset = () => {
    setAuthorName('Shubham Dixit (Jyotish Acharya)');
    setCategory('दैनिक पंचांग (Daily Panchang)');
    setTitle('आज का दैनिक पंचांग, शुभ चौघड़िया व राहुकाल विचार — 12 अक्टूबर 2026');
    setTargetRegion('Pan-India & Global Diaspora');
    setReadTime('3 min read');
    setExcerpt('स्वाति नक्षत्र एवं शुक्ल पक्ष द्वितीया का शुभ संयोजन। अभिजीत मुहूर्त (11:45 AM - 12:35 PM) और आज के सात्विक वैदिक उपाय।');
    setContentHtml(`
      <p style="font-size: 1.1rem; color: var(--gold-antique); font-style: italic;">
        ॥ ॐ नमः शिवाय ॥ तिथि, वार, नक्षत्र, योग और करण इन पांचों अंगों का यथार्थ ज्ञान ही पंचांग है।
      </p>
      <h3>दैनिक पंचांग विवरण</h3>
      <ul>
        <li><strong>वार:</strong> सोमवार (चन्द्र आराधना हेतु श्रेष्ठ)</li>
        <li><strong>नक्षत्र:</strong> स्वाति नक्षत्र (विद्या एवं व्यापार में प्रगति)</li>
        <li><strong>अभिजीत मुहूर्त:</strong> 11:45 AM से 12:35 PM तक (सर्वकार्य सिद्धि)</li>
        <li><strong>राहुकाल:</strong> 07:45 AM से 09:15 AM तक (शुभ कार्य त्यागें)</li>
      </ul>
      <p>आज चन्द्रमा के स्वाति नक्षत्र में गोचर से मानसिक शांति और व्यापारिक सौदों में नए अनुबंध के उत्तम योग बन रहे हैं।</p>
    `);
    setTags('दैनिक पंचांग, शुभ मुहूर्त, राहुकाल, चौघड़िया, सोमवार');
    setIsDeskOpen(true);
  };

  const loadHoroscopePreset = () => {
    setAuthorName('Shubham Dixit (Jyotish Acharya)');
    setCategory('दैनिक राशिफल (Daily Horoscope)');
    setTitle('मेष से मीन: आज का द्वादश राशि फल एवं भाग्यशाली रंग संदेश');
    setTargetRegion('Pan-India, USA, UAE, Canada');
    setReadTime('4 min read');
    setExcerpt('तुला राशि में चन्द्र गोचर से सभी 12 राशियों के लिए करियर, पारिवारिक संतुलन और आर्थिक अवसर का संपूर्ण विश्लेषण।');
    setContentHtml(`
      <p>आज चन्द्रमा का तुला राशि में गोचर वृषभ, मिथुन और तुला राशि के जातकों के लिए विशेष रूप से आर्थिक लाभ के अवसर ला रहा है।</p>
      <h3>प्रमुख राशियों के लिए आज का संदेश</h3>
      <ul>
        <li><strong>मेष:</strong> दांपत्य सुख में वृद्धि। शुभ रंग: सिंदूरी।</li>
        <li><strong>वृषभ:</strong> कार्यक्षेत्र में नए दायित्व। शुभ रंग: श्वेत।</li>
        <li><strong>मिथुन:</strong> बौद्धिक कार्यों में यश की प्राप्ति। शुभ रंग: हरा।</li>
        <li><strong>तुला:</strong> आत्मविश्वास शिखर पर रहेगा। शुभ रंग: हल्का गुलाबी।</li>
      </ul>
      <p>दिन को और अधिक सकारात्मक बनाने हेतु सूर्य देव को तांबे के लोटे से अर्घ्य दें।</p>
    `);
    setTags('दैनिक राशिफल, मेष से मीन, तुला चन्द्रमा, वैदिक उपाय');
    setIsDeskOpen(true);
  };

  const loadDadaGuruPreset = () => {
    setAuthorName('Pt. Ganesh Shankar Acharya Ji (Dada Guru)');
    setCategory('आध्यात्मिक विचार (Spiritual Reflections)');
    setTitle('500 वर्षीय कुल परंपरा के वैदिक सूत्र: गृह शांति एवं आत्मबल');
    setTargetRegion('All Yajmans & Global Shishyas');
    setReadTime('4 min read');
    setExcerpt('हमारे पूर्वजों द्वारा संरक्षित प्राचीन हस्तलिखित संहिताओं से प्राप्त गृह शांति, वास्तु स्पंदन और सात्विक संतुलन के अनुभूत वैदिक नियम।');
    setContentHtml(`
      <p style="font-size: 1.1rem; color: var(--gold-antique); font-style: italic;">
        ॥ यत्र नार्यस्तु पूज्यन्ते रमन्ते तत्र देवताः ॥ हमारे 500 वर्षों के परंपरागत अनुभव का सार।
      </p>
      <h3>गृह शांति के तीन अनुभूत नियम</h3>
      <ul>
        <li><strong>प्रातः काल सूर्य नमस्कार:</strong> आत्मबल और स्वास्थ्य का आधार है।</li>
        <li><strong>संध्या वेला कपूर दीप:</strong> घर के ईशान कोण में सात्विक कपूर प्रज्वलित करने से नकारात्मक तरंगें दूर होती हैं।</li>
        <li><strong>मूक जीवों की सेवा:</strong> नित्य भोजन का पहला ग्रास गाय या श्वान को देने से ग्रह पीड़ा स्वतः शांत होती है।</li>
      </ul>
      <p>हमारा आशीर्वाद सदैव आपके परिवार की सुख-समृद्धि के साथ है।</p>
    `);
    setTags('दादा गुरु, 500 वर्ष परंपरा, गृह शांति, आध्यात्मिक विचार');
    setIsDeskOpen(true);
  };

  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      alert('कृपया ब्लॉग का शीर्षक अवश्य लिखें।');
      return;
    }

    const newSlug = title
      .toLowerCase()
      .replace(/[^\w\s\u0900-\u097F]/gi, '')
      .trim()
      .replace(/\s+/g, '-') + '-' + Date.now().toString().slice(-4);

    const newPost: BlogPost = {
      id: `custom-${Date.now()}`,
      slug: newSlug,
      title: title.trim(),
      category: category,
      publishedDate: new Date().toLocaleDateString('hi-IN', { day: 'numeric', month: 'long', year: 'numeric' }) + ' (Live Demo)',
      readTime: readTime.trim() || '3 min read',
      excerpt: excerpt.trim() || title,
      contentHtml: contentHtml,
      author: authorName,
      tags: tags.split(',').map(t => t.trim()).filter(Boolean),
      isDemoSample: true,
      isCustomPublished: true,
      targetRegion: targetRegion
    };

    const updated = saveDemoBlogPost(newPost);
    setPosts(updated);
    setPublishSuccessMessage(`🎉 ब्लॉग पोस्ट सफलतापूर्वक प्रकाशित हुई! नीचे लाइव फीड में नया ब्लॉग जुड़ गया है। (क्लाइंट नोट: प्रोडक्शन वेबसाइट में यह ऑटोमैटिक क्लाउड डेटाबेस व WhatsApp से कनेक्ट रहेगा)`);

    // Smooth scroll down to feed
    setTimeout(() => {
      const feedEl = document.getElementById('blog-feed-anchor');
      if (feedEl) {
        feedEl.scrollIntoView({ behavior: 'smooth' });
      }
    }, 200);
  };

  const handleReset = () => {
    if (confirm('क्या आप डेमो ब्लॉग्स को रीसेट करके डिफ़ॉल्ट स्थिति में लाना चाहते हैं?')) {
      const resetList = resetDemoBlogPosts();
      setPosts(resetList);
      setPublishSuccessMessage(null);
    }
  };

  // Filter Logic
  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesAuthor = selectedAuthor === 'All' || post.author.includes(selectedAuthor);
    const matchesSearch = 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesAuthor && matchesSearch;
  });

  return (
    <div style={{ padding: '3.5rem 0 6rem', backgroundColor: '#180C1D' }}>
      <div className="container">
        {/* Editorial Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.75rem' }}>
          <div className="badge-orange" style={{ marginBottom: '0.85rem' }}>
            <BookOpen size={13} />
            <span>दैनिक ब्लॉग एवं वैदिक विचार • Daily Blog & Panchang</span>
          </div>
          <h1 className="section-title">
            Vedic Astrology <span className="gold-gradient-text">Daily Blog & Panchang</span>
          </h1>
          <div className="sacred-divider">
            <span className="sacred-symbol">॥ ज्ञानं परमं बलम् ॥</span>
          </div>
          <p className="section-desc">
            शुभम दीक्षित एवं पं. गणेश शंकर आचार्य जी (दादा गुरु) के 500 वर्षीय वैदिक परंपरा के दैनिक पंचांग, शुभ मुहूर्त, राशि विचार एवं ज्योतिषीय लेख।
          </p>
        </div>

        {/* =========================================================================
            ASTROLOGER'S DAILY PUBLISHING DESK (CLIENT DEMO PREVIEW)
            Specially designed for Shubham Dixit's daily blog requirement
           ========================================================================= */}
        <div 
          id="astrologer-publishing-desk"
          style={{
            background: 'linear-gradient(135deg, rgba(46, 20, 56, 0.95) 0%, rgba(26, 11, 32, 0.98) 100%)',
            border: '2px solid var(--gold-antique)',
            borderRadius: '24px',
            padding: '2rem',
            marginBottom: '3.5rem',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.5), 0 0 24px rgba(215, 181, 109, 0.15)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Top Header & Status Badges */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '1.25rem',
            borderBottom: '1px solid rgba(215, 181, 109, 0.2)',
            paddingBottom: '1rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: 'rgba(239, 112, 45, 0.2)',
                border: '1.5px solid var(--orange-burnished)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--gold-antique)'
              }}>
                <Feather size={22} />
              </div>
              <div>
                <div style={{
                  fontFamily: 'var(--font-cinzel)',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#FFFFFF'
                }}>
                  Astrologer's Daily Publishing Desk
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--gold-antique)', fontWeight: 500 }}>
                  दैनिक ब्लॉग एवं राशिफल लेखन पोर्टल • Live Concept Demo for Shubham Dixit
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
              <span style={{
                background: 'rgba(74, 222, 128, 0.15)',
                color: '#4ADE80',
                border: '1px solid rgba(74, 222, 128, 0.3)',
                padding: '0.3rem 0.75rem',
                borderRadius: '9999px',
                fontSize: '0.75rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}>
                <Sparkles size={13} />
                <span>Client Interactive Preview</span>
              </span>

              <button
                type="button"
                onClick={() => setIsDeskOpen(!isDeskOpen)}
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-light)',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '0.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}
              >
                {isDeskOpen ? (
                  <><span>Collapse Editor</span><ChevronUp size={14} /></>
                ) : (
                  <><span>Open Editor</span><ChevronDown size={14} /></>
                )}
              </button>
            </div>
          </div>

          {/* Client Instruction Explainer */}
          <div style={{
            background: 'rgba(239, 112, 45, 0.09)',
            border: '1px dashed rgba(239, 112, 45, 0.4)',
            borderRadius: '12px',
            padding: '0.9rem 1.25rem',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.85rem',
            fontSize: '0.85rem',
            color: '#FFA77A'
          }}>
            <ShieldCheck size={20} style={{ flexShrink: 0, color: 'var(--orange-burnished)' }} />
            <div>
              <strong>Shubham ji ke liye Vishesh Demo:</strong> Aapne WhatsApp par daily blog post ka option maanga tha. Yahan aap dekh sakte hain ki website par daily panchang ya rashifal post karna kitna saral hai. <em>Neeche diye 1-Click buttons se sample load karke 'Publish' button daba kar test kijiye!</em> Production contract final hone par yah WhatsApp audio note v automated cloud database se jod diya jayega.
            </div>
          </div>

          {isDeskOpen && (
            <form onSubmit={handlePublish} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Quick Preset Selector Buttons */}
              <div>
                <label style={{ fontSize: '0.8rem', color: 'var(--gold-antique)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.5rem' }}>
                  ⚡ Quick 1-Click Sample Drafts (क्लाइंट तुरंत टेस्ट करें):
                </label>
                <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
                  <button
                    type="button"
                    onClick={loadPanchangPreset}
                    className="btn btn-outline-gold btn-sm"
                    style={{ fontSize: '0.78rem' }}
                  >
                    <Flame size={13} style={{ color: 'var(--orange-burnished)' }} />
                    <span>1-Tap: आज का दैनिक पंचांग (Panchang Draft)</span>
                  </button>

                  <button
                    type="button"
                    onClick={loadHoroscopePreset}
                    className="btn btn-outline-gold btn-sm"
                    style={{ fontSize: '0.78rem' }}
                  >
                    <Sparkles size={13} style={{ color: 'var(--gold-antique)' }} />
                    <span>1-Tap: 12 राशि दैनिक फल (Horoscope Draft)</span>
                  </button>

                  <button
                    type="button"
                    onClick={loadDadaGuruPreset}
                    className="btn btn-outline-gold btn-sm"
                    style={{ fontSize: '0.78rem' }}
                  >
                    <BookOpen size={13} style={{ color: '#FCD34D' }} />
                    <span>1-Tap: दादा गुरु का वैदिक सूत्र (Dada Guru Advice)</span>
                  </button>
                </div>
              </div>

              {/* Author Selector (As explicitly requested by client: 2 names - Shubham Dixit & Father Pt. Ganesh Shankar Acharya Ji) */}
              <div style={{
                background: 'rgba(24, 12, 29, 0.7)',
                padding: '1rem',
                borderRadius: '14px',
                border: '1px solid rgba(215, 181, 109, 0.2)'
              }}>
                <label style={{ fontSize: '0.82rem', color: 'var(--gold-antique)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.65rem' }}>
                  <UserCheck size={15} />
                  <span>Select Author (लेखक चुनें — पिता-पुत्र 500 वर्षीय परंपरा):</span>
                </label>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <button
                    type="button"
                    onClick={() => setAuthorName('Shubham Dixit (Jyotish Acharya)')}
                    style={{
                      background: authorName.includes('Shubham') ? 'var(--orange-burnished)' : 'rgba(255, 255, 255, 0.05)',
                      border: authorName.includes('Shubham') ? '1px solid var(--orange-burnished)' : '1px solid var(--border-subtle)',
                      color: '#FFFFFF',
                      padding: '0.55rem 1.15rem',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      transition: 'var(--transition-smooth)'
                    }}
                  >
                    <span>Shubham Dixit</span>
                    <span style={{ fontSize: '0.72rem', opacity: 0.85 }}>(ज्योतिष आचार्य)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setAuthorName('Pt. Ganesh Shankar Acharya Ji (Dada Guru)')}
                    style={{
                      background: authorName.includes('Ganesh') ? 'var(--gold-antique)' : 'rgba(255, 255, 255, 0.05)',
                      border: authorName.includes('Ganesh') ? '1px solid var(--gold-antique)' : '1px solid var(--border-subtle)',
                      color: authorName.includes('Ganesh') ? '#180C1D' : '#FFFFFF',
                      padding: '0.55rem 1.15rem',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      transition: 'var(--transition-smooth)'
                    }}
                  >
                    <span>Pt. Ganesh Shankar Acharya Ji</span>
                    <span style={{ fontSize: '0.72rem', opacity: 0.85 }}>(दादा गुरु • कुल प्रमुख)</span>
                  </button>
                </div>
              </div>

              {/* Grid: Title & Category */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1rem' }}>
                <div>
                  <label className="form-label" style={{ fontSize: '0.82rem' }}>Blog / Panchang Title (शीर्षक):</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="form-input"
                    placeholder="उदा. आज का दैनिक पंचांग एवं शुभ मुहूर्त..."
                    required
                  />
                </div>

                <div>
                  <label className="form-label" style={{ fontSize: '0.82rem' }}>Category (श्रेणी):</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as any)}
                    className="form-input"
                    style={{ cursor: 'pointer' }}
                  >
                    <option value="दैनिक पंचांग (Daily Panchang)">दैनिक पंचांग (Daily Panchang)</option>
                    <option value="दैनिक राशिफल (Daily Horoscope)">दैनिक राशिफल (Daily Horoscope)</option>
                    <option value="कुंडली योग व उपाय (Vedic Yogas)">कुंडली योग व उपाय (Vedic Yogas)</option>
                    <option value="आध्यात्मिक विचार (Spiritual Reflections)">आध्यात्मिक विचार (Spiritual Reflections)</option>
                    <option value="Beginner Vedic Astrology">Beginner Vedic Astrology</option>
                    <option value="Consultation Guidance">Consultation Guidance</option>
                    <option value="Career & Life Timing">Career & Life Timing</option>
                    <option value="Marriage & Compatibility">Marriage & Compatibility</option>
                  </select>
                </div>
              </div>

              {/* Grid: Target Region & Read Time */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1rem' }}>
                <div>
                  <label className="form-label" style={{ fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Globe size={14} />
                    <span>Target Region Audience (लक्षित क्षेत्र):</span>
                  </label>
                  <select
                    value={targetRegion}
                    onChange={(e) => setTargetRegion(e.target.value)}
                    className="form-input"
                  >
                    <option value="Pan-India & Global Diaspora">Pan-India & Global Diaspora</option>
                    <option value="Delhi-NCR">Delhi-NCR (दिल्ली-एनसीआर)</option>
                    <option value="Mumbai-Pune">Mumbai-Pune (मुंबई-पुणे)</option>
                    <option value="Ahmedabad-Surat">Ahmedabad-Surat (अहमदाबाद-सूरत)</option>
                    <option value="USA, UAE & Canada NRI">USA, UAE & Canada NRI (प्रवासी भारतीय)</option>
                  </select>
                </div>

                <div>
                  <label className="form-label" style={{ fontSize: '0.82rem' }}>Estimated Read Time:</label>
                  <input
                    type="text"
                    value={readTime}
                    onChange={(e) => setReadTime(e.target.value)}
                    className="form-input"
                    placeholder="e.g. 3 min read"
                  />
                </div>
              </div>

              {/* Excerpt Summary */}
              <div>
                <label className="form-label" style={{ fontSize: '0.82rem' }}>Summary / Short Excerpt (संक्षिप्त विवरण):</label>
                <textarea
                  rows={2}
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  className="form-textarea"
                  placeholder="एक-दो पंक्तियों में मुख्य सारांश..."
                  style={{ minHeight: '60px' }}
                />
              </div>

              {/* Post Content */}
              <div>
                <label className="form-label" style={{ fontSize: '0.82rem' }}>Full Article / Vedic Advice (संपूर्ण लेख व श्लोक):</label>
                <textarea
                  rows={4}
                  value={contentHtml}
                  onChange={(e) => setContentHtml(e.target.value)}
                  className="form-textarea"
                  placeholder="यहाँ विस्तृत पंचांग, गोचर अथवा ज्योतिषीय विश्लेषण लिखें..."
                  style={{ minHeight: '100px', fontFamily: 'monospace', fontSize: '0.85rem' }}
                />
              </div>

              {/* WhatsApp Voice dictation mock indicator */}
              <div style={{
                background: 'rgba(37, 211, 102, 0.08)',
                border: '1px solid rgba(37, 211, 102, 0.25)',
                borderRadius: '10px',
                padding: '0.75rem 1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                fontSize: '0.8rem',
                color: '#86EFAC'
              }}>
                <Mic size={16} style={{ color: '#25D366', flexShrink: 0 }} />
                <span>
                  <strong>WhatsApp Voice Publishing Feature (Production Roadmap):</strong> फाइनल वेबसाइट में शुभम जी को टाइप भी नहीं करना पड़ेगा। वे अपने WhatsApp पर 60 सेकंड का ऑडियो नोट भेजेंगे और वह अपने आप ब्लॉग पर पोस्ट हो जाएगा।
                </span>
              </div>

              {/* Submit / Publish Button & Reset */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginTop: '0.5rem' }}>
                <button
                  type="submit"
                  className="btn btn-primary-orange"
                  style={{ padding: '0.75rem 1.75rem', fontSize: '0.95rem' }}
                >
                  <Send size={16} />
                  <span>Publish to Daily Feed (Live Demo Preview)</span>
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--text-light-soft)',
                    cursor: 'pointer',
                    fontSize: '0.8rem',
                    textDecoration: 'underline',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}
                >
                  <RefreshCw size={13} />
                  <span>Reset Demo Posts to Default</span>
                </button>
              </div>
            </form>
          )}

          {/* Celebration Success Toast */}
          {publishSuccessMessage && (
            <div style={{
              marginTop: '1.25rem',
              background: 'rgba(74, 222, 128, 0.15)',
              border: '1.5px solid #4ADE80',
              borderRadius: '12px',
              padding: '1rem 1.25rem',
              color: '#FFFFFF',
              fontSize: '0.88rem',
              lineHeight: 1.6,
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.75rem'
            }}>
              <CheckCircle2 size={20} style={{ color: '#4ADE80', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong>{publishSuccessMessage}</strong>
              </div>
            </div>
          )}
        </div>

        {/* Anchor for auto scroll */}
        <div id="blog-feed-anchor" style={{ height: '1px', marginBottom: '1.5rem' }} />

        {/* Search, Author & Category Filter Bar */}
        <div style={{
          background: 'rgba(32, 16, 38, 0.8)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '16px',
          padding: '1.25rem',
          marginBottom: '3rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          {/* Search Input */}
          <div style={{ position: 'relative' }}>
            <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--gold-antique)' }} />
            <input
              type="text"
              placeholder="Search by topic, keyword, or Sanskrit tag (e.g. पंचांग, Kundli, Dada Guru, Manglik)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-input"
              style={{ paddingLeft: '2.75rem' }}
            />
          </div>

          {/* Author Filter Pill Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.78rem', color: 'var(--gold-antique)', fontWeight: 600 }}>Filter by Author:</span>
            {['All', 'Shubham Dixit', 'Pt. Ganesh Shankar Acharya Ji'].map((auth) => {
              const isActive = selectedAuthor === auth;
              return (
                <button
                  key={auth}
                  onClick={() => setSelectedAuthor(auth)}
                  style={{
                    background: isActive ? 'var(--gold-antique)' : 'rgba(24, 12, 29, 0.6)',
                    border: isActive ? '1px solid var(--gold-antique)' : '1px solid rgba(215, 181, 109, 0.2)',
                    color: isActive ? '#180C1D' : 'var(--text-light-soft)',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'var(--transition-smooth)'
                  }}
                >
                  {auth === 'All' ? 'All Lineage Authors' : auth}
                </button>
              );
            })}
          </div>

          {/* Category Filter Buttons */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    background: isActive ? 'var(--orange-burnished)' : 'rgba(24, 12, 29, 0.6)',
                    border: isActive ? '1px solid var(--orange-burnished)' : '1px solid rgba(215, 181, 109, 0.2)',
                    color: isActive ? '#FFFFFF' : 'var(--text-light-soft)',
                    padding: '0.45rem 1rem',
                    borderRadius: '9999px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'var(--transition-smooth)'
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Articles Grid */}
        {filteredPosts.length > 0 ? (
          <div 
            className="mobile-grid-1col"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              gap: '2.5rem',
              marginBottom: '4.5rem'
            }}>
            {filteredPosts.map((post) => {
              const isNewlyPublished = post.isCustomPublished;
              return (
                <article 
                  key={post.id}
                  className="glass-card"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '2.25rem',
                    borderRadius: '20px',
                    border: isNewlyPublished ? '2px solid #4ADE80' : '1.5px solid var(--border-subtle)',
                    background: isNewlyPublished ? 'rgba(74, 222, 128, 0.05)' : undefined,
                    position: 'relative'
                  }}
                >
                  {/* Newly published badge */}
                  {isNewlyPublished && (
                    <div style={{
                      position: 'absolute',
                      top: '-12px',
                      right: '20px',
                      background: '#4ADE80',
                      color: '#0B0C10',
                      padding: '0.2rem 0.75rem',
                      borderRadius: '9999px',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      boxShadow: '0 4px 12px rgba(74, 222, 128, 0.4)'
                    }}>
                      ✨ Newly Published in Demo Session
                    </div>
                  )}

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem'
                  }}>
                    <span className="badge-demo">{post.category}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.78rem', color: 'var(--text-light-soft)' }}>
                      <Clock size={12} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h2 style={{
                    fontFamily: 'var(--font-cinzel)',
                    fontSize: '1.35rem',
                    color: '#FFFFFF',
                    marginBottom: '0.75rem',
                    lineHeight: 1.35
                  }}>
                    <Link to={`/insights/${post.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {post.title}
                    </Link>
                  </h2>

                  {/* Author Lineage Badge */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '1rem',
                    fontSize: '0.78rem',
                    color: 'var(--gold-antique)'
                  }}>
                    <UserCheck size={13} style={{ color: 'var(--orange-burnished)' }} />
                    <span style={{ fontWeight: 600 }}>{post.author}</span>
                    {post.targetRegion && (
                      <span style={{ color: 'var(--text-light-soft)', fontSize: '0.72rem' }}>
                        • {post.targetRegion}
                      </span>
                    )}
                  </div>

                  <p style={{
                    fontSize: '0.9rem',
                    lineHeight: 1.7,
                    color: 'var(--text-light-soft)',
                    marginBottom: '1.5rem',
                    flex: 1
                  }}>
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                    {post.tags.slice(0, 3).map(t => (
                      <span key={t} style={{
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        padding: '0.2rem 0.55rem',
                        borderRadius: '4px',
                        fontSize: '0.74rem',
                        color: 'var(--text-light-soft)'
                      }}>
                        #{t}
                      </span>
                    ))}
                  </div>

                  <div style={{
                    borderTop: '1px solid rgba(215, 181, 109, 0.15)',
                    paddingTop: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 'auto'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.76rem', color: 'var(--gold-antique)' }}>
                      <Calendar size={12} />
                      <span>{post.publishedDate}</span>
                    </div>

                    <Link
                      to={`/insights/${post.slug}`}
                      className="btn btn-outline-gold btn-sm"
                    >
                      <span>Read Article</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--text-light-soft)' }}>
            <p>No articles match your search or filter. Try clearing filters or using the Publishing Desk above to write one!</p>
          </div>
        )}

        {/* Feature Roadmap & Deal Kickoff Activation Note */}
        <div style={{
          background: 'rgba(32, 16, 38, 0.75)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '20px',
          padding: '2.5rem',
          maxWidth: '880px',
          margin: '0 auto'
        }}>
          <h3 style={{
            fontFamily: 'var(--font-cinzel)',
            fontSize: '1.35rem',
            color: 'var(--gold-antique)',
            marginBottom: '0.75rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <Sparkles size={18} />
            Daily Publishing Production Architecture (Client Onboarding Note)
          </h3>

          <p style={{ color: 'var(--text-light-soft)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1rem' }}>
            As demonstrated above, Shubham Dixit's website includes an intuitive, dedicated Daily Publishing workflow. In this interactive demo, posts are stored in your active session to give you an immediate preview of how posts appear and format across devices.
          </p>

          <p style={{ color: 'var(--text-light-soft)', fontSize: '0.9rem', lineHeight: 1.7 }}>
            Upon project agreement and kickoff, the following production backend pipelines will be activated:
          </p>

          <ul style={{ paddingLeft: '1.5rem', marginTop: '0.75rem', fontSize: '0.88rem', color: 'var(--text-light-soft)', lineHeight: 1.7 }}>
            <li><strong>Automated Cloud Database:</strong> Permanent storage with instant global CDN distribution.</li>
            <li><strong>WhatsApp-to-Web Dispatch:</strong> Send daily Panchang notes or audio recordings on WhatsApp, and our system automatically converts them into published website blogs.</li>
            <li><strong>Instant Google Indexing (SEO Ping):</strong> Automatically submits new daily blogs to Google Search Console to capture queries like <em>"Aaj Ka Panchang Delhi"</em> or <em>"Shubham Dixit Jyotish advice"</em>.</li>
            <li><strong>Automated Social Broadcast:</strong> 1-click sharing to Instagram, WhatsApp channels, and Facebook.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
