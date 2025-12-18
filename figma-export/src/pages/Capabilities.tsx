import {
  Radar,
  Wrench,
  Building,
  Plane,
  Shield,
  TrendingUp,
} from "lucide-react";

export function Capabilities() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-slate-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">
              Our Capabilities
            </h1>
            <p className="text-slate-300 text-xl">
              Comprehensive AI-powered solutions for defense,
              infrastructure, and commercial applications. From
              edge deployment to predictive analytics, we
              deliver mission-ready technology.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-white mb-4">
              Technical Capabilities
            </h2>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto">
              Advanced AI and computer vision technologies
              deployed where they're needed most.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-950 border border-slate-800 rounded-lg p-8">
              <Radar className="w-12 h-12 text-cyan-400 mb-6" />
              <h3 className="text-white mb-3">
                Multispectral Imaging
              </h3>
              <p className="text-slate-400 mb-4">
                Fusion of visible, infrared, thermal, and other
                spectral data for enhanced detection
                capabilities.
              </p>
              <ul className="space-y-2">
                <li className="text-slate-300 text-sm">
                  • Multi-band sensor integration
                </li>
                <li className="text-slate-300 text-sm">
                  • Thermal anomaly detection
                </li>
                <li className="text-slate-300 text-sm">
                  • Material composition analysis
                </li>
                <li className="text-slate-300 text-sm">
                  • Subsurface defect identification
                </li>
              </ul>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-lg p-8">
              <Shield className="w-12 h-12 text-cyan-400 mb-6" />
              <h3 className="text-white mb-3">
                Defect Detection
              </h3>
              <p className="text-slate-400 mb-4">
                AI-powered identification of micro-defects,
                anomalies, and quality issues invisible to human
                inspection.
              </p>
              <ul className="space-y-2">
                <li className="text-slate-300 text-sm">
                  • Micro-crack detection
                </li>
                <li className="text-slate-300 text-sm">
                  • Surface irregularity analysis
                </li>
                <li className="text-slate-300 text-sm">
                  • Corrosion monitoring
                </li>
                <li className="text-slate-300 text-sm">
                  • Material degradation assessment
                </li>
              </ul>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-lg p-8">
              <TrendingUp className="w-12 h-12 text-cyan-400 mb-6" />
              <h3 className="text-white mb-3">
                Predictive Maintenance
              </h3>
              <p className="text-slate-400 mb-4">
                Forecast equipment failures and optimize
                maintenance schedules before critical issues
                occur.
              </p>
              <ul className="space-y-2">
                <li className="text-slate-300 text-sm">
                  • Failure prediction models
                </li>
                <li className="text-slate-300 text-sm">
                  • Asset lifecycle optimization
                </li>
                <li className="text-slate-300 text-sm">
                  • Maintenance scheduling
                </li>
                <li className="text-slate-300 text-sm">
                  • Cost reduction analytics
                </li>
              </ul>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-lg p-8">
              <Plane className="w-12 h-12 text-cyan-400 mb-6" />
              <h3 className="text-white mb-3">
                Edge AI Deployment
              </h3>
              <p className="text-slate-400 mb-4">
                Deploy sophisticated AI models on tactical edge
                devices without cloud connectivity.
              </p>
              <ul className="space-y-2">
                <li className="text-slate-300 text-sm">
                  • Offline operation capability
                </li>
                <li className="text-slate-300 text-sm">
                  • Low-latency inference
                </li>
                <li className="text-slate-300 text-sm">
                  • Optimized model compression
                </li>
                <li className="text-slate-300 text-sm">
                  • Air-gapped network support
                </li>
              </ul>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-lg p-8">
              <Building className="w-12 h-12 text-cyan-400 mb-6" />
              <h3 className="text-white mb-3">
                3D Digital Twins
              </h3>
              <p className="text-slate-400 mb-4">
                Create high-fidelity digital replicas of
                physical assets for virtual inspection and
                analysis.
              </p>
              <ul className="space-y-2">
                <li className="text-slate-300 text-sm">
                  • Photogrammetric reconstruction
                </li>
                <li className="text-slate-300 text-sm">
                  • LiDAR integration
                </li>
                <li className="text-slate-300 text-sm">
                  • Virtual inspection workflows
                </li>
                <li className="text-slate-300 text-sm">
                  • Change detection over time
                </li>
              </ul>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-lg p-8">
              <Wrench className="w-12 h-12 text-cyan-400 mb-6" />
              <h3 className="text-white mb-3">
                Custom Integration
              </h3>
              <p className="text-slate-400 mb-4">
                Seamlessly integrate GEMSense™ with existing
                systems, workflows, and hardware platforms.
              </p>
              <ul className="space-y-2">
                <li className="text-slate-300 text-sm">
                  • RESTful API access
                </li>
                <li className="text-slate-300 text-sm">
                  • SDK for Python and C++
                </li>
                <li className="text-slate-300 text-sm">
                  • Custom hardware support
                </li>
                <li className="text-slate-300 text-sm">
                  • Legacy system integration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Use Cases */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-white mb-4">
              Operational Use Cases
            </h2>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto">
              Real-world applications across defense,
              infrastructure, and commercial sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-8">
              <h3 className="text-white mb-4">
                Aircraft Maintenance & Inspection
              </h3>
              <p className="text-slate-400 mb-6">
                Automated inspection of airframes, engines, and
                critical components. Detect micro-cracks,
                corrosion, and fatigue before they compromise
                flight safety.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-cyan-400 text-sm mb-1">
                    Applications
                  </p>
                  <ul className="space-y-1">
                    <li className="text-slate-300 text-sm">
                      • Pre-flight checks
                    </li>
                    <li className="text-slate-300 text-sm">
                      • Depot maintenance
                    </li>
                    <li className="text-slate-300 text-sm">
                      • Damage assessment
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-cyan-400 text-sm mb-1">
                    Benefits
                  </p>
                  <ul className="space-y-1">
                    <li className="text-slate-300 text-sm">
                      • Reduced downtime
                    </li>
                    <li className="text-slate-300 text-sm">
                      • Enhanced safety
                    </li>
                    <li className="text-slate-300 text-sm">
                      • Cost savings
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-lg p-8">
              <h3 className="text-white mb-4">
                Infrastructure Monitoring
              </h3>
              <p className="text-slate-400 mb-6">
                Continuous monitoring of bridges, roads,
                tunnels, and critical infrastructure. Early
                detection of structural issues prevents
                catastrophic failures.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-cyan-400 text-sm mb-1">
                    Applications
                  </p>
                  <ul className="space-y-1">
                    <li className="text-slate-300 text-sm">
                      • Bridge inspection
                    </li>
                    <li className="text-slate-300 text-sm">
                      • Tunnel safety
                    </li>
                    <li className="text-slate-300 text-sm">
                      • Disaster response
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-cyan-400 text-sm mb-1">
                    Benefits
                  </p>
                  <ul className="space-y-1">
                    <li className="text-slate-300 text-sm">
                      • Public safety
                    </li>
                    <li className="text-slate-300 text-sm">
                      • Asset longevity
                    </li>
                    <li className="text-slate-300 text-sm">
                      • Rapid assessment
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-lg p-8">
              <h3 className="text-white mb-4">
                Vehicle Fleet Management
              </h3>
              <p className="text-slate-400 mb-6">
                Predictive maintenance for ground vehicle
                fleets. Optimize maintenance schedules, reduce
                unexpected breakdowns, and maximize operational
                readiness.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-cyan-400 text-sm mb-1">
                    Applications
                  </p>
                  <ul className="space-y-1">
                    <li className="text-slate-300 text-sm">
                      • Fleet inspection
                    </li>
                    <li className="text-slate-300 text-sm">
                      • Condition tracking
                    </li>
                    <li className="text-slate-300 text-sm">
                      • Parts authentication
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-cyan-400 text-sm mb-1">
                    Benefits
                  </p>
                  <ul className="space-y-1">
                    <li className="text-slate-300 text-sm">
                      • Higher readiness
                    </li>
                    <li className="text-slate-300 text-sm">
                      • Lower costs
                    </li>
                    <li className="text-slate-300 text-sm">
                      • Better planning
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-lg p-8">
              <h3 className="text-white mb-4">
                Manufacturing Quality Control
              </h3>
              <p className="text-slate-400 mb-6">
                Automated inspection of manufactured parts and
                assemblies. Identify defects, dimensional
                errors, and counterfeit components with
                superhuman accuracy.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-cyan-400 text-sm mb-1">
                    Applications
                  </p>
                  <ul className="space-y-1">
                    <li className="text-slate-300 text-sm">
                      • Production QC
                    </li>
                    <li className="text-slate-300 text-sm">
                      • Final inspection
                    </li>
                    <li className="text-slate-300 text-sm">
                      • Supply chain
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-cyan-400 text-sm mb-1">
                    Benefits
                  </p>
                  <ul className="space-y-1">
                    <li className="text-slate-300 text-sm">
                      • Zero defects
                    </li>
                    <li className="text-slate-300 text-sm">
                      • Faster throughput
                    </li>
                    <li className="text-slate-300 text-sm">
                      • Traceability
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-white mb-4">
              Industries Served
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "Department of Defense",
              "Homeland Security",
              "Transportation (DOT)",
              "Emergency Management",
              "Aviation & Aerospace",
              "Naval & Maritime",
              "Ground Vehicles",
              "Infrastructure",
              "Manufacturing",
              "Supply Chain",
              "Energy & Utilities",
              "Collectibles & Authentication",
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-slate-950 border border-slate-800 rounded-lg p-6 text-center hover:border-cyan-400/50 transition-colors"
              >
                <p className="text-slate-300">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-white mb-4">
              Platform Performance
            </h2>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto">
              Real-world metrics from deployed systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-cyan-400 mb-2">99.9%+</div>
              <p className="text-slate-400">
                Detection Accuracy
              </p>
            </div>
            <div className="text-center">
              <div className="text-cyan-400 mb-2">
                {"<100ms"}
              </div>
              <p className="text-slate-400">
                Edge Inference Time
              </p>
            </div>
            <div className="text-center">
              <div className="text-cyan-400 mb-2">100%</div>
              <p className="text-slate-400">Offline Capable</p>
            </div>
            <div className="text-center">
              <div className="text-cyan-400 mb-2">10x</div>
              <p className="text-slate-400">
                Faster Than Manual
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}