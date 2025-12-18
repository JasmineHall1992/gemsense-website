import { Shield, Building2, Plane, Zap, Radio } from 'lucide-react';

export function WhoIsItFor() {
  const audiences = [
    {
      icon: Shield,
      title: 'DHS Components',
      description: 'CBP, TSA, CISA, FEMA',
    },
    {
      icon: Plane,
      title: 'DoD and Military Aviation',
      description: 'Defense operations and maintenance',
    },
    {
      icon: Building2,
      title: 'Cities & Infrastructure Authorities',
      description: 'Municipal and regional infrastructure',
    },
    {
      icon: Zap,
      title: 'Utilities & Energy Providers',
      description: 'Power, water, and energy systems',
    },
    {
      icon: Radio,
      title: 'Emergency Response Teams',
      description: 'First responders and crisis management',
    },
  ];

  return (
    <div className="min-h-screen bg-[#040814]">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Who Uses GEMSense™?
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {audiences.map((audience, index) => (
              <div key={index} className="bg-black border border-slate-800 rounded-lg p-8 hover:border-cyan-500/50 transition-all text-center">
                <audience.icon className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-white text-xl font-semibold mb-2">{audience.title}</h3>
                <p className="text-slate-400">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
