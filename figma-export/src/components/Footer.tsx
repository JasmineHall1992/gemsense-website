import { Link } from 'react-router-dom';
import { Mail, MapPin, Shield } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded" />
              <span className="text-white tracking-wide">GEM</span>
            </div>
            <p className="text-slate-400 mb-4">
              Advanced AI solutions for federal agencies and commercial clients. 
              Certified Service-Disabled Veteran-Owned Small Business.
            </p>
            <div className="flex items-center space-x-2 text-slate-400">
              <Shield className="w-4 h-4 text-cyan-400" />
              <span className="text-sm">SDVOSB Certified</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/gemsense" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                  GEMSense™ Platform
                </Link>
              </li>
              <li>
                <Link to="/capabilities" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                  Capabilities
                </Link>
              </li>
              <li>
                <Link to="/federal-contracting" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                  Federal Contracting
                </Link>
              </li>
              <li>
                <Link to="/commercial" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                  Commercial Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-slate-400 text-sm">
                <Mail className="w-4 h-4 mt-0.5 text-cyan-400 flex-shrink-0" />
                <a href="mailto:jimmy@gemgradingco.com" className="hover:text-cyan-400 transition-colors">
                  jimmy@gemgradingco.com
                </a>
              </li>
              <li className="flex items-start space-x-2 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-cyan-400 flex-shrink-0" />
                <span>gemgradingco.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} GEM. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/about" className="text-slate-500 hover:text-cyan-400 text-sm transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-slate-500 hover:text-cyan-400 text-sm transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
