import { Drone, Truck, Smartphone, Building, Bot } from 'lucide-react';

export function Deployment() {
  const deploymentOptions = [
    {
      icon: Drone,
      title: 'UAVs / Drones',
      description: 'Aerial inspection and surveillance',
    },
    {
      icon: Truck,
      title: 'Ground Vehicles',
      description: 'Mobile inspection platforms',
    },
    {
      icon: Smartphone,
      title: 'Handheld Devices',
      description: 'Portable inspection tools',
    },
    {
      icon: Building,
      title: 'Fixed Infrastructure Stations',
      description: 'Permanent monitoring installations',
    },
    {
      icon: Bot,
      title: 'Robotic Platforms',
      description: 'Automated inspection systems',
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Deployment Options
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {deploymentOptions.map((option, index) => (
              <div key={index} className="bg-[#040814] border border-slate-800 rounded-lg p-8 hover:border-cyan-500/50 transition-all">
                <option.icon className="w-16 h-16 text-cyan-400 mb-4" />
                <h3 className="text-white text-xl font-semibold mb-2">{option.title}</h3>
                <p className="text-slate-400">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
