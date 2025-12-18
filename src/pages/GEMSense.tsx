import { Eye, Cpu, Box, Zap, Layers, Shield } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function GEMSense() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-slate-950" />
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1640552421163-5a8e34827550?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXJjdWl0JTIwYm9hcmQlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2Mzk1MDkxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Circuit Board Technology"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-cyan-400 text-sm tracking-wide uppercase">AI Platform</span>
            </div>
            <h1 className="text-white mb-6">
              GEMSense™ Platform
            </h1>
            <p className="text-slate-300 text-xl">
              The world's first unified multispectral inspection and decision platform.
              GEMSense™ fuses RGB, thermal, UV, LiDAR, and acoustic data into a single physics-informed engine.
            </p>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-white mb-4">
              Platform Overview
            </h2>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto">
              GEMSense™ is an end-to-end AI platform that processes multispectral data, 
              identifies defects and anomalies, and delivers actionable intelligence in real-time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-950 border border-slate-800 rounded-lg p-8 hover:border-cyan-400/50 transition-colors">
              <div className="bg-cyan-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-white mb-3">Multispectral Fusion</h3>
              <p className="text-slate-400">
                Combines visible light, infrared, thermal, and other spectral bands to reveal 
                defects, stress points, and anomalies invisible to standard cameras.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-lg p-8 hover:border-cyan-400/50 transition-colors">
              <div className="bg-cyan-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-white mb-3">Defect Detection</h3>
              <p className="text-slate-400">
                AI-powered analysis identifies micro-cracks, material degradation, counterfeit 
                components, and manufacturing defects with superhuman precision.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-lg p-8 hover:border-cyan-400/50 transition-colors">
              <div className="bg-cyan-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Layers className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-white mb-3">Predictive Maintenance</h3>
              <p className="text-slate-400">
                Forecast equipment failures, identify maintenance needs, and optimize asset 
                lifecycle management before critical failures occur.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-lg p-8 hover:border-cyan-400/50 transition-colors">
              <div className="bg-cyan-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Box className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-white mb-3">3D Digital Twins</h3>
              <p className="text-slate-400">
                Create high-fidelity 3D models of physical assets for virtual inspection, 
                training, and remote collaboration.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-lg p-8 hover:border-cyan-400/50 transition-colors">
              <div className="bg-cyan-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Cpu className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-white mb-3">Edge Deployment</h3>
              <p className="text-slate-400">
                Run models on tactical edge devices, drones, or embedded systems without 
                cloud connectivity or internet access.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-lg p-8 hover:border-cyan-400/50 transition-colors">
              <div className="bg-cyan-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-white mb-3">Secure Architecture</h3>
              <p className="text-slate-400">
                Built for sensitive environments with air-gapped deployment options, 
                encryption, and compliance with federal security standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Deep Dive */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <h2 className="text-white mb-6">Multispectral Fusion</h2>
              <p className="text-slate-400 mb-6">
                Traditional computer vision relies on visible light alone. GEMSense™ fuses data 
                from multiple spectral bands — visible, near-infrared, thermal, and more — to 
                create a complete picture of material properties, stress states, and hidden defects.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-slate-300">
                      <span className="text-white">Visible Spectrum:</span> Surface-level inspection 
                      and pattern recognition
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-slate-300">
                      <span className="text-white">Infrared:</span> Thermal anomalies, material 
                      composition, and subsurface defects
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-slate-300">
                      <span className="text-white">Multispectral Fusion:</span> AI combines all 
                      data sources for enhanced detection accuracy
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1722481038286-be1c5c4327a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWxpdGFyeSUyMHRlY2hub2xvZ3klMjByYWRhcnxlbnwxfHx8fDE3NjQwMDI5OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Multispectral Technology"
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1612886652368-3dfdfa8c4cbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMGRpZ2l0YWwlMjBzY2FubmluZ3xlbnwxfHx8fDE3NjQwMDI5OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="3D Digital Twin"
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-white mb-6">Edge Deployment</h2>
              <p className="text-slate-400 mb-6">
                Many mission-critical environments lack reliable internet connectivity. GEMSense™ 
                is designed for edge deployment, running sophisticated AI models on local hardware 
                without cloud dependency.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-slate-300">
                      <span className="text-white">Offline Operation:</span> Full functionality 
                      in air-gapped or contested environments
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-slate-300">
                      <span className="text-white">Low Latency:</span> Real-time analysis without 
                      network round-trips
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-slate-300">
                      <span className="text-white">Optimized Models:</span> Compressed neural 
                      networks run on resource-constrained hardware
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-white mb-4">
              Platform Use Cases
            </h2>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto">
              GEMSense™ adapts to diverse operational requirements across defense and commercial sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-950 border border-slate-800 rounded-lg p-8">
              <h3 className="text-white mb-4">Aircraft & Vehicle Inspection</h3>
              <p className="text-slate-400 mb-4">
                Detect micro-cracks, corrosion, and structural fatigue in airframes, ground 
                vehicles, and naval vessels before they become critical failures.
              </p>
              <ul className="space-y-2">
                <li className="text-slate-300 text-sm">• Structural health monitoring</li>
                <li className="text-slate-300 text-sm">• Corrosion detection</li>
                <li className="text-slate-300 text-sm">• Predictive maintenance scheduling</li>
              </ul>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-lg p-8">
              <h3 className="text-white mb-4">Infrastructure Monitoring</h3>
              <p className="text-slate-400 mb-4">
                Continuously monitor bridges, roads, buildings, and critical infrastructure 
                for damage, stress, and degradation.
              </p>
              <ul className="space-y-2">
                <li className="text-slate-300 text-sm">• Bridge safety assessment</li>
                <li className="text-slate-300 text-sm">• Damage documentation</li>
                <li className="text-slate-300 text-sm">• Post-disaster evaluation</li>
              </ul>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-lg p-8">
              <h3 className="text-white mb-4">Manufacturing Quality Control</h3>
              <p className="text-slate-400 mb-4">
                Automated inspection of manufactured parts, assemblies, and components with 
                precision exceeding human capabilities.
              </p>
              <ul className="space-y-2">
                <li className="text-slate-300 text-sm">• Defect identification</li>
                <li className="text-slate-300 text-sm">• Dimensional analysis</li>
                <li className="text-slate-300 text-sm">• Counterfeit detection</li>
              </ul>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-lg p-8">
              <h3 className="text-white mb-4">Authentication & Grading</h3>
              <p className="text-slate-400 mb-4">
                Commercial applications include collectibles authentication, counterfeit 
                detection, and automated condition grading.
              </p>
              <ul className="space-y-2">
                <li className="text-slate-300 text-sm">• Trading card authentication</li>
                <li className="text-slate-300 text-sm">• Micro-defect detection</li>
                <li className="text-slate-300 text-sm">• Automated grading algorithms</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-white mb-4">
              Technical Specifications
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-white mb-2">Deployment Options</h3>
                  <p className="text-slate-400">
                    Edge devices, cloud infrastructure, on-premises servers, air-gapped networks
                  </p>
                </div>
                <Cpu className="w-8 h-8 text-cyan-400 flex-shrink-0" />
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-white mb-2">Supported Hardware</h3>
                  <p className="text-slate-400">
                    NVIDIA Jetson, Intel NUC, Raspberry Pi, industrial cameras, drones, mobile devices
                  </p>
                </div>
                <Box className="w-8 h-8 text-cyan-400 flex-shrink-0" />
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-white mb-2">Integration</h3>
                  <p className="text-slate-400">
                    RESTful APIs, SDKs for Python/C++, MQTT, gRPC, custom integration support
                  </p>
                </div>
                <Layers className="w-8 h-8 text-cyan-400 flex-shrink-0" />
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-white mb-2">Security & Compliance</h3>
                  <p className="text-slate-400">
                    End-to-end encryption, air-gap capable, designed for federal security requirements
                  </p>
                </div>
                <Shield className="w-8 h-8 text-cyan-400 flex-shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
