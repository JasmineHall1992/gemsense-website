import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';
import { Button } from './ui/button';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/gemsense', label: 'GEMSense™' },
    { path: '/capabilities', label: 'Capabilities' },
    { path: '/federal-contracting', label: 'Federal Contracting' },
    { path: '/commercial', label: 'Commercial' },
    { path: '/contact', label: 'Contact' },
  ];

  const handleDownloadCapability = () => {
    // Placeholder for capability statement download
    alert('Capability Statement download will be available soon. Please contact us at jimmy@gemgradingco.com');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded" />
            <span className="text-white tracking-wide">GEM</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm transition-colors ${
                  location.pathname === link.path
                    ? 'text-cyan-400'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              onClick={handleDownloadCapability}
              variant="outline"
              size="sm"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
            >
              <Download className="w-4 h-4 mr-2" />
              Capability Statement
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-slate-300 hover:text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base ${
                  location.pathname === link.path
                    ? 'text-cyan-400 bg-slate-800'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              onClick={() => {
                handleDownloadCapability();
                setIsOpen(false);
              }}
              variant="outline"
              className="w-full mt-4 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
            >
              <Download className="w-4 h-4 mr-2" />
              Capability Statement
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
