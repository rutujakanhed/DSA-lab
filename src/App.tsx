/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Experiments from './components/Experiments';
import Faculty from './components/Faculty';
import Resources from './components/Resources';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');

  // Scroll to top on page transition to simulate standard HTML page loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [currentPage]);

  const renderActiveView = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'experiments':
        return <Experiments />;
      case 'faculty':
        return <Faculty />;
      case 'resources':
        return <Resources />;
      case 'gallery':
        return <Gallery />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div id="dsa-lab-website" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div style={{ flexGrow: 1 }} id="view-viewport">
        {renderActiveView()}
      </div>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

