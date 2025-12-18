export function WhatIsAI() {
  return (
    <div className="min-h-screen bg-black">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                What Is Multispectral AI?
              </h1>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Multispectral AI analyzes information from multiple sensor types—such as RGB cameras, thermal, UV, LiDAR, and vibration sensors—to reveal patterns that no human can see.
                </p>
                <p>
                  GEMSense™ learns the physics behind how materials behave across wavelengths, allowing it to detect cracks, corrosion, heat anomalies, tampering, and concealed objects long before they become visible.
                </p>
              </div>
            </div>

            {/* Right - Visual */}
            <div className="order-1 lg:order-2">
              <div className="bg-gradient-to-br from-cyan-500/10 to-transparent p-8 rounded-lg">
                <div className="aspect-video bg-[#040814] rounded-lg border border-cyan-500/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="flex gap-4 justify-center mb-4">
                      <div className="w-16 h-16 bg-red-500/20 border border-red-500/50 rounded"></div>
                      <div className="w-16 h-16 bg-green-500/20 border border-green-500/50 rounded"></div>
                      <div className="w-16 h-16 bg-blue-500/20 border border-blue-500/50 rounded"></div>
                      <div className="w-16 h-16 bg-purple-500/20 border border-purple-500/50 rounded"></div>
                    </div>
                    <p className="text-slate-400 text-sm">Spectrum Bands Visualization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
