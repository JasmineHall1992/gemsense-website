import { Shield, FileText, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

export function FederalContracting() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-slate-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 mb-6">
              <Shield className="w-6 h-6 text-cyan-400" />
              <span className="text-cyan-400 tracking-wide uppercase text-sm">SDVOSB Certified</span>
            </div>
            <h1 className="text-white mb-6">
              Federal Contracting
            </h1>
            <p className="text-slate-300 text-xl">
              GEM is a certified Service-Disabled Veteran-Owned Small Business ready to serve 
              U.S. federal agencies with mission-critical AI solutions.
            </p>
          </div>
        </div>
      </section>

      {/* SDVOSB Certification */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-white mb-6">
                Service-Disabled Veteran-Owned Small Business
              </h2>
              <p className="text-slate-400 mb-6">
                GEM is proud to be a certified SDVOSB, bringing both military service experience 
                and cutting-edge technical expertise to federal partnerships. We understand the 
                unique requirements of government agencies and are committed to supporting the mission.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white mb-1">Certified SDVOSB Status</p>
                    <p className="text-slate-400 text-sm">
                      Verified through the Small Business Administration (SBA)
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white mb-1">Set-Aside Eligible</p>
                    <p className="text-slate-400 text-sm">
                      Qualified for SDVOSB set-aside and sole-source contracts
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white mb-1">Mission Understanding</p>
                    <p className="text-slate-400 text-sm">
                      Military background ensures deep understanding of operational requirements
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-950 border border-cyan-400/30 rounded-lg p-12 text-center">
              <Shield className="w-20 h-20 text-cyan-400 mx-auto mb-6" />
              <h3 className="text-white mb-4">SDVOSB Certified</h3>
              <p className="text-slate-400 mb-6">
                Ready to support federal agencies through all contracting vehicles including 
                set-asides, sole-source, and competitive awards.
              </p>
              <Button asChild className="bg-cyan-500 hover:bg-cyan-600 text-white">
                <Link to="/contact">
                  Discuss Your Project
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* NAICS Codes */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-white mb-4">
              NAICS Codes
            </h2>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto">
              GEM operates under multiple NAICS codes covering AI, software development, 
              and technical services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-cyan-400">541512</span>
                <FileText className="w-5 h-5 text-cyan-400" />
              </div>
              <p className="text-white mb-2">Computer Systems Design Services</p>
              <p className="text-slate-400 text-sm">
                Custom computer programming and software development
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-cyan-400">541511</span>
                <FileText className="w-5 h-5 text-cyan-400" />
              </div>
              <p className="text-white mb-2">Custom Computer Programming Services</p>
              <p className="text-slate-400 text-sm">
                Application and systems software development
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-cyan-400">541519</span>
                <FileText className="w-5 h-5 text-cyan-400" />
              </div>
              <p className="text-white mb-2">Other Computer Related Services</p>
              <p className="text-slate-400 text-sm">
                Computer disaster recovery and software installation
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-cyan-400">541330</span>
                <FileText className="w-5 h-5 text-cyan-400" />
              </div>
              <p className="text-white mb-2">Engineering Services</p>
              <p className="text-slate-400 text-sm">
                Technical consulting and engineering analysis
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-cyan-400">541715</span>
                <FileText className="w-5 h-5 text-cyan-400" />
              </div>
              <p className="text-white mb-2">Research & Development</p>
              <p className="text-slate-400 text-sm">
                Physical sciences and engineering R&D
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-cyan-400">541690</span>
                <FileText className="w-5 h-5 text-cyan-400" />
              </div>
              <p className="text-white mb-2">Other Scientific & Technical Consulting</p>
              <p className="text-slate-400 text-sm">
                Technical advisory and consulting services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contracting Pathways */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-white mb-4">
              Contracting Pathways
            </h2>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto">
              Multiple pathways to engage with GEM for federal projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-950 border border-slate-800 rounded-lg p-8">
              <h3 className="text-white mb-4">SDVOSB Set-Aside Contracts</h3>
              <p className="text-slate-400 mb-4">
                GEM qualifies for SDVOSB set-aside contracts reserved exclusively for 
                service-disabled veteran-owned businesses.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-slate-300 text-sm">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3" />
                  Competitive SDVOSB awards
                </li>
                <li className="flex items-center text-slate-300 text-sm">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3" />
                  Sole-source up to $5M
                </li>
                <li className="flex items-center text-slate-300 text-sm">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3" />
                  Priority consideration
                </li>
              </ul>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-lg p-8">
              <h3 className="text-white mb-4">Open Competition</h3>
              <p className="text-slate-400 mb-4">
                GEM competes for open federal contracts on technical merit, past performance, 
                and competitive pricing.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-slate-300 text-sm">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3" />
                  Full and open competition
                </li>
                <li className="flex items-center text-slate-300 text-sm">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3" />
                  Unrestricted solicitations
                </li>
                <li className="flex items-center text-slate-300 text-sm">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3" />
                  Multi-award IDIQs
                </li>
              </ul>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-lg p-8">
              <h3 className="text-white mb-4">Subcontracting</h3>
              <p className="text-slate-400 mb-4">
                Partner with prime contractors as an SDVOSB subcontractor to help meet 
                socioeconomic goals and deliver specialized AI capabilities.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-slate-300 text-sm">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3" />
                  Prime contractor teaming
                </li>
                <li className="flex items-center text-slate-300 text-sm">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3" />
                  SDVOSB subcontracting credit
                </li>
                <li className="flex items-center text-slate-300 text-sm">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3" />
                  Specialized capabilities
                </li>
              </ul>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-lg p-8">
              <h3 className="text-white mb-4">Direct Agency Engagement</h3>
              <p className="text-slate-400 mb-4">
                Work directly with federal agencies through technology demonstrations, 
                pilots, and proof-of-concept projects.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-slate-300 text-sm">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3" />
                  Technology demonstrations
                </li>
                <li className="flex items-center text-slate-300 text-sm">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3" />
                  Pilot programs
                </li>
                <li className="flex items-center text-slate-300 text-sm">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3" />
                  OTAs and innovative contracts
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Target Agencies */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-white mb-4">
              Federal Agencies We Serve
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Department of Defense (DoD)',
                description: 'All service branches, defense agencies, and support organizations',
              },
              {
                name: 'Department of Homeland Security (DHS)',
                description: 'Border protection, cybersecurity, and emergency response',
              },
              {
                name: 'Department of Transportation (DOT)',
                description: 'Infrastructure monitoring, safety, and logistics',
              },
              {
                name: 'FEMA',
                description: 'Disaster response, recovery operations, and infrastructure assessment',
              },
              {
                name: 'GSA',
                description: 'Federal building management and asset maintenance',
              },
              {
                name: 'Department of Energy (DOE)',
                description: 'Critical infrastructure and facility inspection',
              },
            ].map((agency, index) => (
              <div key={index} className="bg-slate-900 border border-slate-800 rounded-lg p-6">
                <h3 className="text-white mb-2">{agency.name}</h3>
                <p className="text-slate-400 text-sm">{agency.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With GEM */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-white mb-4">
              Why Federal Agencies Choose GEM
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-cyan-500/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-white mb-2">Mission-Ready</h3>
              <p className="text-slate-400 text-sm">
                Technology designed for operational environments and mission-critical applications
              </p>
            </div>

            <div className="text-center">
              <div className="bg-cyan-500/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-white mb-2">SDVOSB Certified</h3>
              <p className="text-slate-400 text-sm">
                Verified service-disabled veteran ownership with understanding of military needs
              </p>
            </div>

            <div className="text-center">
              <div className="bg-cyan-500/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-white mb-2">Proven Technology</h3>
              <p className="text-slate-400 text-sm">
                Battle-tested AI platform with real-world performance in demanding conditions
              </p>
            </div>

            <div className="text-center">
              <div className="bg-cyan-500/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-white mb-3">Rapid Deployment</h3>
              <p className="text-slate-400 text-sm">
                Edge-ready solutions that deploy quickly without extensive infrastructure
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">
            Ready to Partner With GEM?
          </h2>
          <p className="text-slate-400 text-xl mb-8">
            Contact us to discuss how GEMSense™ can support your agency's mission.
          </p>
          <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white">
            <Link to="/contact">
              Start a Conversation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
