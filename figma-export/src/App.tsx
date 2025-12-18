import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { GEMSense } from './pages/GEMSense';
import { Capabilities } from './pages/Capabilities';
import { FederalContracting } from './pages/FederalContracting';
import { Commercial } from './pages/Commercial';
import { Contact } from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950">
        <Navigation />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gemsense" element={<GEMSense />} />
            <Route path="/capabilities" element={<Capabilities />} />
            <Route path="/federal-contracting" element={<FederalContracting />} />
            <Route path="/commercial" element={<Commercial />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
