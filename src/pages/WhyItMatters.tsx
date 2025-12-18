import { CheckCircle2 } from 'lucide-react';

export function WhyItMatters() {
  const impactPoints = [
    'Detects problems earlier than human inspectors',
    'Reduces failures, accidents, and downtime',
    'Saves millions in maintenance and emergency response costs',
    'Creates a safer, more resilient infrastructure ecosystem',
    'Strengthens homeland security readiness',
  ];

  return (
    <div className="min-h-screen bg-black">
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Why Multispectral AI Matters
            </h1>
          </div>

          <div className="space-y-6">
            {impactPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-4 bg-[#040814] border border-slate-800 rounded-lg p-6 hover:border-cyan-500/50 transition-all">
                <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <p className="text-white text-xl">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
