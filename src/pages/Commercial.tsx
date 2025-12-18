import { Eye, Shield, Zap, TrendingUp, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Commercial() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-slate-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">
              Commercial Authentication
            </h1>
            <p className="text-slate-300 text-xl">
              Advanced AI-powered collectibles authentication, grading, and counterfeit detection. 
              The same technology trusted by defense agencies, now protecting high-value collectibles.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1694701478292-3f60eb30c3b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW1zdG9uZSUyMGF1dGhlbnRpY2F0aW9uJTIwbWljcm9zY29wZXxlbnwxfHx8fDE3NjQwMDI5OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Collectibles Authentication"
                className="w-full h-[500px] object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-white mb-6">
                From Defense to Collectibles
              </h2>
              <p className="text-slate-400 mb-6">
                GEM's journey began in the collectibles authentication space. Our AI technology 
                was originally developed to detect micro-defects, counterfeits, and quality issues 
                in high-value trading cards and collectibles.
              </p>
              <p className="text-slate-400 mb-6">
                This same technology — capable of identifying flaws invisible to the human eye — 
                proved equally valuable for defense applications. Today, GEMSense™ serves both markets, 
                bringing military-grade precision to collectibles authentication.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <p className="text-slate-300">Superhuman defect detection accuracy</p>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <p className="text-slate-300">Counterfeit identification</p>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <p className="text-slate-300">Objective, automated grading</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-white mb-4">
              Authentication Capabilities
            </h2>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto">
              Advanced AI analysis that sees what human eyes cannot.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-8 hover:border-cyan-400/50 transition-colors">
              <div className="bg-cyan-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-white mb-3">Micro-Defect Detection</h3>
              <p className="text-slate-400 mb-4">
                Identify surface scratches, print defects, edge wear, and other flaws at microscopic 
                resolution far beyond human visual acuity.
              </p>
              <ul className="space-y-2">
                <li className="text-slate-300 text-sm">• Surface imperfections</li>
                <li className="text-slate-300 text-sm">• Print quality issues</li>
                <li className="text-slate-300 text-sm">• Edge and corner wear</li>
                <li className="text-slate-300 text-sm">• Material anomalies</li>
              </ul>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-lg p-8 hover:border-cyan-400/50 transition-colors">
              <div className="bg-cyan-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-white mb-3">Counterfeit Detection</h3>
              <p className="text-slate-400 mb-4">
                Multispectral analysis reveals counterfeits through material composition, printing 
                patterns, and other forensic markers invisible to standard authentication methods.
              </p>
              <ul className="space-y-2">
                <li className="text-slate-300 text-sm">• Material verification</li>
                <li className="text-slate-300 text-sm">• Print pattern analysis</li>
                <li className="text-slate-300 text-sm">• Hologram validation</li>
                <li className="text-slate-300 text-sm">• Forensic comparison</li>
              </ul>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-lg p-8 hover:border-cyan-400/50 transition-colors">
              <div className="bg-cyan-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-white mb-3">Automated Grading</h3>
              <p className="text-slate-400 mb-4">
                Objective, consistent grading based on quantifiable metrics. Remove human subjectivity 
                and bias from the authentication process.
              </p>
              <ul className="space-y-2">
                <li className="text-slate-300 text-sm">• Condition assessment</li>
                <li className="text-slate-300 text-sm">• Centering analysis</li>
                <li className="text-slate-300 text-sm">• Surface quality scoring</li>
                <li className="text-slate-300 text-sm">• Consistent standards</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-white mb-4">
              How GEMSense™ Authenticates Collectibles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-cyan-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-cyan-400">1</span>
              </div>
              <h3 className="text-white mb-3">Multispectral Capture</h3>
              <p className="text-slate-400 text-sm">
                High-resolution imaging across multiple spectral bands captures comprehensive data 
                about the item's physical properties.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-cyan-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-cyan-400">2</span>
              </div>
              <h3 className="text-white mb-3">AI Analysis</h3>
              <p className="text-slate-400 text-sm">
                Deep learning models trained on millions of examples identify defects, authenticate 
                materials, and detect counterfeits.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-cyan-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-cyan-400">3</span>
              </div>
              <h3 className="text-white mb-3">Defect Mapping</h3>
              <p className="text-slate-400 text-sm">
                Every detected flaw is documented and mapped, creating a comprehensive condition 
                report with visual evidence.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-cyan-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-cyan-400">4</span>
              </div>
              <h3 className="text-white mb-3">Grade Assignment</h3>
              <p className="text-slate-400 text-sm">
                Objective grading based on quantifiable metrics provides consistent, defensible 
                authentication results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-white mb-4">
              Commercial Applications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-8">
              <h3 className="text-white mb-4">Trading Cards</h3>
              <p className="text-slate-400 mb-4">
                Authentication and grading of sports cards, Pokémon cards, and other trading 
                card collectibles. Detect counterfeits, assess condition, and provide objective grades.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div>
                  <p className="text-cyan-400 text-sm mb-2">Detection</p>
                  <ul className="space-y-1">
                    <li className="text-slate-300 text-sm">• Print defects</li>
                    <li className="text-slate-300 text-sm">• Edge wear</li>
                    <li className="text-slate-300 text-sm">• Surface scratches</li>
                  </ul>
                </div>
                <div>
                  <p className="text-cyan-400 text-sm mb-2">Authentication</p>
                  <ul className="space-y-1">
                    <li className="text-slate-300 text-sm">• Material verification</li>
                    <li className="text-slate-300 text-sm">• Counterfeit detection</li>
                    <li className="text-slate-300 text-sm">• Centering analysis</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-lg p-8">
              <h3 className="text-white mb-4">High-Value Collectibles</h3>
              <p className="text-slate-400 mb-4">
                Authentication of rare collectibles, memorabilia, and luxury items where authenticity 
                and condition directly impact value.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div>
                  <p className="text-cyan-400 text-sm mb-2">Verification</p>
                  <ul className="space-y-1">
                    <li className="text-slate-300 text-sm">• Authenticity</li>
                    <li className="text-slate-300 text-sm">• Provenance</li>
                    <li className="text-slate-300 text-sm">• Condition</li>
                  </ul>
                </div>
                <div>
                  <p className="text-cyan-400 text-sm mb-2">Documentation</p>
                  <ul className="space-y-1">
                    <li className="text-slate-300 text-sm">• Digital records</li>
                    <li className="text-slate-300 text-sm">• Defect mapping</li>
                    <li className="text-slate-300 text-sm">• Grade reports</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-lg p-8">
              <h3 className="text-white mb-4">Grading Services</h3>
              <p className="text-slate-400 mb-4">
                Partner with grading companies to enhance authentication accuracy, increase throughput, 
                and maintain consistent standards across thousands of items.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2 text-slate-300 text-sm">
                  <TrendingUp className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>10x faster than manual inspection</span>
                </li>
                <li className="flex items-start space-x-2 text-slate-300 text-sm">
                  <TrendingUp className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>Consistent grading standards</span>
                </li>
                <li className="flex items-start space-x-2 text-slate-300 text-sm">
                  <TrendingUp className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>Enhanced counterfeit detection</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-lg p-8">
              <h3 className="text-white mb-4">Marketplace Integration</h3>
              <p className="text-slate-400 mb-4">
                Integrate authentication directly into online marketplaces, auction platforms, 
                and retail systems to verify items before sale.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2 text-slate-300 text-sm">
                  <Shield className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>Pre-sale verification</span>
                </li>
                <li className="flex items-start space-x-2 text-slate-300 text-sm">
                  <Shield className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>Buyer confidence</span>
                </li>
                <li className="flex items-start space-x-2 text-slate-300 text-sm">
                  <Shield className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>Fraud prevention</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-white mb-4">
              Why Choose GEM for Authentication
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-cyan-500/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-white mb-2">Superhuman Accuracy</h3>
              <p className="text-slate-400 text-sm">
                Detect defects at microscopic scale with precision exceeding human visual capabilities
              </p>
            </div>

            <div className="text-center">
              <div className="bg-cyan-500/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-white mb-2">Counterfeit Protection</h3>
              <p className="text-slate-400 text-sm">
                Military-grade authentication technology adapted for collectibles security
              </p>
            </div>

            <div className="text-center">
              <div className="bg-cyan-500/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-white mb-2">Objective Grading</h3>
              <p className="text-slate-400 text-sm">
                Remove subjectivity with AI-driven analysis based on quantifiable metrics
              </p>
            </div>

            <div className="text-center">
              <div className="bg-cyan-500/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-white mb-2">Rapid Processing</h3>
              <p className="text-slate-400 text-sm">
                Authenticate items 10x faster than manual inspection with zero compromise on accuracy
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
