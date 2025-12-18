import { Shield, Target, Users, Zap } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function About() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-slate-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">
              About GEM
            </h1>
            <p className="text-slate-300 text-xl">
              Building next-generation AI solutions that serve both defense and commercial markets 
              with cutting-edge computer vision and multispectral analysis.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-400">
                <p>
                  GEM was founded with a clear mission: leverage advanced artificial intelligence 
                  to solve complex inspection and analysis challenges for both government and commercial clients.
                </p>
                <p>
                  Our journey began in the collectibles authentication space, where we developed 
                  proprietary computer vision algorithms capable of detecting micro-defects and 
                  counterfeits invisible to the human eye. This technology quickly proved its value 
                  beyond commercial applications.
                </p>
                <p>
                  Recognizing the dual-use potential of our platform, we expanded into defense and 
                  federal markets. Today, GEMSense™ powers critical inspection, maintenance, and 
                  operational intelligence applications for U.S. government agencies while continuing 
                  to serve commercial clients.
                </p>
                <p>
                  As a Service-Disabled Veteran-Owned Small Business, we bring both technical 
                  excellence and a deep understanding of mission-critical requirements.
                </p>
              </div>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtfGVufDF8fHx8MTc2MzkzODc0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="GEM Team"
                className="w-full h-[500px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-8">
              <Target className="w-12 h-12 text-cyan-400 mb-6" />
              <h3 className="text-white mb-4">Our Mission</h3>
              <p className="text-slate-400">
                Deploy advanced AI technology that enhances operational effectiveness, improves 
                decision-making, and protects critical assets for defense and commercial clients. 
                We deliver solutions that work in the most demanding environments — from contested 
                battlefields to precision authentication labs.
              </p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-8">
              <Zap className="w-12 h-12 text-cyan-400 mb-6" />
              <h3 className="text-white mb-4">Our Vision</h3>
              <p className="text-slate-400">
                Become the trusted AI partner for organizations that demand reliability, accuracy, 
                and edge-deployed intelligence. We envision a future where sophisticated computer 
                vision is accessible, deployable anywhere, and mission-ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-white mb-4">
              Core Values
            </h2>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto">
              The principles that guide our work and relationships with clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/10 rounded-lg mb-4">
                <Shield className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-white mb-3">Mission First</h3>
              <p className="text-slate-400">
                We prioritize mission success and operational effectiveness in everything we build. 
                Our technology is designed for high-stakes environments where failure is not an option.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/10 rounded-lg mb-4">
                <Users className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-white mb-3">Partnership</h3>
              <p className="text-slate-400">
                We work collaboratively with clients to understand unique requirements and deliver 
                solutions that integrate seamlessly into existing workflows.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/10 rounded-lg mb-4">
                <Zap className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-white mb-3">Innovation</h3>
              <p className="text-slate-400">
                Continuous advancement in AI, computer vision, and edge computing keeps our 
                solutions at the cutting edge of what's possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SDVOSB Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 border border-cyan-400/30 rounded-lg p-12 text-center">
            <Shield className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-white mb-4">
              Service-Disabled Veteran-Owned Small Business
            </h2>
            <p className="text-slate-400 text-lg">
              GEM is proud to be a certified SDVOSB, bringing both military service experience and 
              technical expertise to our federal partnerships. We understand the unique requirements 
              of government agencies and are committed to supporting the mission.
            </p>
          </div>
        </div>
      </section>

      {/* Dual-Use Structure */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-white mb-4">
              Dual-Use Structure
            </h2>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto">
              Our business model leverages shared technology across defense and commercial markets, 
              allowing rapid innovation and cost-effective solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-950 border border-slate-800 rounded-lg p-8">
              <h3 className="text-white mb-4">Federal Division</h3>
              <p className="text-slate-400 mb-4">
                Serves U.S. government agencies with AI-powered defect detection, predictive 
                maintenance, infrastructure monitoring, and operational intelligence.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-slate-300 text-sm">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3" />
                  DoD & Defense Contractors
                </li>
                <li className="flex items-center text-slate-300 text-sm">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3" />
                  Homeland Security (DHS)
                </li>
                <li className="flex items-center text-slate-300 text-sm">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3" />
                  Transportation (DOT)
                </li>
                <li className="flex items-center text-slate-300 text-sm">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3" />
                  Emergency Management (FEMA)
                </li>
              </ul>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-lg p-8">
              <h3 className="text-white mb-4">Commercial Division</h3>
              <p className="text-slate-400 mb-4">
                Provides collectibles authentication, grading, and counterfeit detection services 
                using the same advanced AI technology deployed in federal applications.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-slate-300 text-sm">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3" />
                  Trading Card Authentication
                </li>
                <li className="flex items-center text-slate-300 text-sm">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3" />
                  Collectibles Grading
                </li>
                <li className="flex items-center text-slate-300 text-sm">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3" />
                  Counterfeit Detection
                </li>
                <li className="flex items-center text-slate-300 text-sm">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3" />
                  Quality Assurance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
