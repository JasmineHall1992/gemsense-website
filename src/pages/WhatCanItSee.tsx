import { Activity, Droplet, Flame, Zap, AlertTriangle, Layers, Shield, Wrench } from 'lucide-react';

export function WhatCanItSee() {
  const detections = [
    { icon: AlertTriangle, title: 'Cracks + Fractures', color: 'text-red-400' },
    { icon: Activity, title: 'Corrosion + Rust', color: 'text-orange-400' },
    { icon: Layers, title: 'Delamination', color: 'text-yellow-400' },
    { icon: Flame, title: 'Overheating / Heat Anomalies', color: 'text-red-500' },
    { icon: Droplet, title: 'Water Intrusion', color: 'text-blue-400' },
    { icon: Wrench, title: 'Material Fatigue', color: 'text-slate-400' },
    { icon: Shield, title: 'Tampering / Hidden Compartments', color: 'text-purple-400' },
    { icon: Zap, title: 'Electrical Faults', color: 'text-yellow-500' },
  ];

  return (
    <div className="min-h-screen bg-black">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              What Can GEMSense™ Detect?
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {detections.map((detection, index) => (
              <div key={index} className="bg-[#040814] border border-slate-800 rounded-lg p-8 hover:border-cyan-500/50 transition-all">
                <detection.icon className={`w-12 h-12 ${detection.color} mb-4`} />
                <h3 className="text-white text-lg font-semibold">{detection.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
