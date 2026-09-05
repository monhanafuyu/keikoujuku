import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import { KeioIppan } from './pages/KeioIppan';
import { KeioFit } from './pages/KeioFit';
import { KeioSfc } from './pages/KeioSfc';
import { Shiteiko } from './pages/Shiteiko';
import { HighSchool12 } from './pages/HighSchool12';
import { StudyCycle } from './pages/StudyCycle';
import { StrategyChart } from './pages/StrategyChart';

import { ColumnList } from './pages/ColumnList';
import { ColumnDetail } from './pages/ColumnDetail';
import { About, Contact, Terms, Privacy, Legal } from './pages/LegalPages';
import { ScrollToTop } from './components/ScrollToTop';
import { Admin } from './pages/Admin';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/keio-ippan" element={<KeioIppan />} />
          <Route path="/keio-fit" element={<KeioFit />} />
          <Route path="/keio-sfc" element={<KeioSfc />} />
          <Route path="/shiteiko" element={<Shiteiko />} />
          <Route path="/shiteikou" element={<Navigate to="/shiteiko" replace />} />
          <Route path="/high-school-1-2" element={<HighSchool12 />} />
          <Route path="/study-cycle" element={<StudyCycle />} />
          <Route path="/strategy-chart" element={<StrategyChart />} />
          
          <Route path="/general-recommendation" element={<Navigate to="/shiteiko" replace />} />
          <Route path="/study-management" element={<Navigate to="/study-cycle" replace />} />
          
          <Route path="/column" element={<ColumnList />} />
          <Route path="/column/:id" element={<ColumnDetail />} />
          <Route path="/columns" element={<Navigate to="/column" replace />} />
          <Route path="/columns/:id" element={<Navigate to="/column/:id" replace />} />

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

