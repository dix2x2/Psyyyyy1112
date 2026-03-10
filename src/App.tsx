/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Tests from './pages/Tests';
import TestRunner from './pages/TestRunner';
import TestResults from './pages/TestResults';
import Methodology from './pages/Methodology';
import Profile from './pages/Profile';
import ResearchStandards from './pages/ResearchStandards';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import DataAnonymization from './pages/DataAnonymization';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="tests" element={<Tests />} />
              <Route path="tests/:testId" element={<TestRunner />} />
              <Route path="tests/:testId/results" element={<TestResults />} />
              <Route path="methodology" element={<Methodology />} />
              <Route path="profile" element={<Profile />} />
              <Route path="research-standards" element={<ResearchStandards />} />
              <Route path="privacy-policy" element={<PrivacyPolicy />} />
              <Route path="terms-of-service" element={<TermsOfService />} />
              <Route path="data-anonymization" element={<DataAnonymization />} />
            </Route>
          </Routes>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}
