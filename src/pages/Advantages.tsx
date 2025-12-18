import { CheckCircle2 } from 'lucide-react';

export function Advantages() {
  const advantages = [
    'Physics-Informed AI (not just image recognition)',
    'Works across RGB, thermal, UV, LiDAR, vibration',
    'Operates on mobile edge devices',
    'Adaptive models that work even with missing sensors',
    'Generates a live, color-coded digital twin',
    'Designed for DHS-grade environments',
  ];

  return (
    <div className="min-h-screen bg-[#040814]">
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              What Makes GEMSense™ Different
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start gap-4 bg-black border border-slate-800 rounded-lg p-6 hover:border-cyan-500/50 transition-all">
                <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <p className="text-white text-lg">{advantage}</p>
              </div>
            ))}
          </div>

          {/* Digital Twin Visual */}
          <div className="mt-16">
            <div className="bg-gradient-to-br from-cyan-500/10 to-transparent p-8 rounded-lg">
              <div className="aspect-video bg-black/50 rounded-lg border border-cyan-500/20 flex items-center justify-center">
                <span className="text-slate-400">Digital Twin + Layered Data Visualization</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
