import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { WhatIsAI } from './pages/WhatIsAI';
import { HowItWorks } from './pages/HowItWorks';
import { WhatCanItSee } from './pages/WhatCanItSee';
import { WhoIsItFor } from './pages/WhoIsItFor';
import { WhyItMatters } from './pages/WhyItMatters';
import { Advantages } from './pages/Advantages';
import { Deployment } from './pages/Deployment';
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
            <Route path="/what-is-ai" element={<WhatIsAI />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/what-can-it-see" element={<WhatCanItSee />} />
            <Route path="/who-is-it-for" element={<WhoIsItFor />} />
            <Route path="/why-it-matters" element={<WhyItMatters />} />
            <Route path="/advantages" element={<Advantages />} />
            <Route path="/deployment" element={<Deployment />} />
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
