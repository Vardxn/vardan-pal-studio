import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { DemoBanner } from './components/DemoBanner';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { StickyActionBar } from './components/StickyActionBar';
import { ScrollToTop } from './components/ScrollToTop';

// Pages
import { HomePage } from './pages/HomePage';
import { TraditionPage } from './pages/TraditionPage';
import { ServicesPage } from './pages/ServicesPage';
import { ConsultationPage } from './pages/ConsultationPage';
import { LocationsPage } from './pages/LocationsPage';
import { LocationDetailPage } from './pages/LocationDetailPage';
import { InsightsPage } from './pages/InsightsPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { ContactPage } from './pages/ContactPage';

export function App() {
  const baseUrl = import.meta.env.BASE_URL || '/';

  return (
    <BrowserRouter basename={baseUrl}>
      <ScrollToTop />
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
        {/* Tasteful Client Sales Demo Banner */}
        <DemoBanner />

        {/* Global Reach Announcement Bar */}
        <TopBar />

        {/* Sticky Header with Navigation & CTAs */}
        <Header />

        {/* Dynamic Route Pages */}
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tradition" element={<TraditionPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/consultation" element={<ConsultationPage />} />
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/locations/:slug" element={<LocationDetailPage />} />
            {/* Dedicated Daily Blog routes */}
            <Route path="/blog" element={<InsightsPage />} />
            <Route path="/blog/:slug" element={<ArticleDetailPage />} />
            {/* Backwards-compatible insights aliases */}
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/insights/:slug" element={<ArticleDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Comprehensive Multi-Column Footer */}
        <Footer />

        {/* Persistent High-Converting Sticky Bottom Action Bar */}
        <StickyActionBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
