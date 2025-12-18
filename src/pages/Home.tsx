import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ArrowRight, Shield, Cpu, Eye, Download } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Home() {
  const handleDownloadCapability = () => {
    alert('Capability Statement download will be available soon. Please contact us at jimmy@gemgradingco.com');
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-slate-950" />
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1760553120296-afe0e7692768?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3klMjBkZWZlbnNlfGVufDF8fHx8MTc2NDAwMjk5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="AI Technology"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-48">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 mb-6">
              <Shield className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 text-sm tracking-wide uppercase">SDVOSB Certified</span>
            </div>
            <h1 className="text-white mb-6">
              Unified Multispectral AI for Homeland Security, Infrastructure, and Emergency Response
            </h1>
            <p className="text-slate-300 text-xl mb-8">
              GEMSense™ fuses RGB, thermal, UV, LiDAR, and acoustic data into a single physics-informed engine for high-confidence detection, digital twins, and predictive maintenance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold">
                <Link to="/gemsense">
                  Learn More about GEMSense™
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold">
                <Link to="/contact">
                  Contact GEM Technology
                </Link>
              </Button>
              <Button
                onClick={handleDownloadCapability}
                size="lg"
                className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Capability Statement
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* GEMSense Platform Overview */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Introducing GEMSense™
            </h2>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto">
              Our proprietary AI platform combines multispectral imaging, advanced computer vision,
              and edge deployment for real-time analysis and decision-making.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="relative">
              <div className="border-2 border-cyan-500/30 rounded-lg p-2 bg-slate-950/50">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1640552421163-5a8e34827550?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXJjdWl0JTIwYm9hcmQlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2Mzk1MDkxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Circuit Board Technology"
                  className="w-full h-[500px] object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-cyan-500/10 p-3 rounded-lg flex-shrink-0">
                  <Eye className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-white mb-2">Multispectral Fusion</h3>
                  <p className="text-slate-400">
                    Combines visible, infrared, and other spectral data for enhanced detection capabilities
                    beyond human vision.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-cyan-500/10 p-3 rounded-lg flex-shrink-0">
                  <Cpu className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-white mb-2">Edge Deployment</h3>
                  <p className="text-slate-400">
                    Process data locally in contested or bandwidth-limited environments without
                    cloud dependency.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-cyan-500/10 p-3 rounded-lg flex-shrink-0">
                  <Shield className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-white mb-2">Mission-Critical Reliability</h3>
                  <p className="text-slate-400">
                    Built for high-stakes applications where accuracy and uptime are non-negotiable.
                  </p>
                </div>
              </div>
              <div className="ml-8">
                <Button asChild className="bg-cyan-500 hover:bg-cyan-600 text-white">
                  <Link to="/gemsense">
                    Learn More About GEMSense™
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual-Use Technology */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-white mb-4">
              Dual-Use Technology
            </h2>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto">
              One platform. Two powerful applications. GEMSense™ serves both defense and commercial markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Federal Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-8 hover:border-cyan-400/50 transition-colors">
              <Shield className="w-12 h-12 text-cyan-400 mb-6" />
              <h3 className="text-white mb-4">Federal & Defense</h3>
              <p className="text-slate-400 mb-6">
                Defect detection, predictive maintenance, and operational intelligence for DoD, DHS,
                DOT, FEMA, and other federal agencies.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-slate-300 text-sm">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3" />
                  SDVOSB Certified
                </li>
                <li className="flex items-center text-slate-300 text-sm">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3" />
                  Multiple NAICS Codes
                </li>
                <li className="flex items-center text-slate-300 text-sm">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3" />
                  Edge & Air-Gapped Deployment
                </li>
              </ul>
              <Button asChild className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold">
                <Link to="/federal-contracting">
                  Federal Capabilities
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>

            {/* Commercial Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-8 hover:border-cyan-400/50 transition-colors">
              <Eye className="w-12 h-12 text-cyan-400 mb-6" />
              <h3 className="text-white mb-4">Commercial Authentication</h3>
              <p className="text-slate-400 mb-6">
                Collectibles authentication using micro-defect detection, counterfeit identification,
                and automated grading for high-value items.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-slate-300 text-sm">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3" />
                  Micro-Defect Detection
                </li>
                <li className="flex items-center text-slate-300 text-sm">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3" />
                  Counterfeit Prevention
                </li>
                <li className="flex items-center text-slate-300 text-sm">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3" />
                  Automated Grading
                </li>
              </ul>
              <Button asChild className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold">
                <Link to="/commercial">
                  Commercial Solutions
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">
            Ready to Deploy Advanced AI?
          </h2>
          <p className="text-slate-400 text-xl mb-8">
            Contact us to discuss how GEMSense™ can enhance your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold">
              <Link to="/contact">
                Get In Touch
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button
              onClick={handleDownloadCapability}
              size="lg"
              className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold"
            >
              <Download className="w-4 h-4 mr-2" />
              Capability Statement
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
