import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import { KeioIppan } from './pages/KeioIppan';
import { KeioFit } from './pages/KeioFit';
import { KeioSfc } from './pages/KeioSfc';
import { Shiteiko } from './pages/Shiteiko';
import { GeneralRecommendation } from './pages/GeneralRecommendation';
import { StudyManagement } from './pages/StudyManagement';
import { ColumnList } from './pages/ColumnList';
import { ColumnDetail } from './pages/ColumnDetail';
import { About, Contact, Terms, Privacy, Legal } from './pages/LegalPages';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/keio-ippan" element={<KeioIppan />} />
          <Route path="/keio-fit" element={<KeioFit />} />
          <Route path="/keio-sfc" element={<KeioSfc />} />
          <Route path="/shiteiko" element={<Shiteiko />} />
          <Route path="/general-recommendation" element={<GeneralRecommendation />} />
          <Route path="/study-management" element={<StudyManagement />} />
          
          <Route path="/column" element={<ColumnList />} />
          <Route path="/column/:id" element={<ColumnDetail />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/legal" element={<Legal />} />
          
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}
