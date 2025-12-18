export function HowItWorks() {
  return (
    <div className="min-h-screen bg-[#040814]">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              How GEMSense™ Works
            </h1>
          </div>

          <div className="space-y-16">
            {/* Step 1 */}
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="lg:w-1/3">
                <div className="text-cyan-400 text-sm font-semibold mb-2">STEP 1</div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Multispectral Data Collection
                </h2>
                <p className="text-slate-300 text-lg">
                  Sensors capture RGB, thermal IR, UV fluorescence, LiDAR depth, and vibration/acoustic signals.
                </p>
              </div>
              <div className="lg:w-2/3">
                <div className="bg-gradient-to-br from-cyan-500/10 to-transparent p-8 rounded-lg">
                  <div className="aspect-video bg-black/50 rounded-lg border border-cyan-500/20 flex items-center justify-center">
                    <span className="text-slate-400">Multispectral Sensor Array</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col lg:flex-row-reverse gap-8 items-center">
              <div className="lg:w-1/3">
                <div className="text-cyan-400 text-sm font-semibold mb-2">STEP 2</div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Physics-Informed Fusion
                </h2>
                <p className="text-slate-300 text-lg">
                  GEMSense™ learns how heat, stress, reflectance, and emissivity behave in materials.
                </p>
              </div>
              <div className="lg:w-2/3">
                <div className="bg-gradient-to-br from-cyan-500/10 to-transparent p-8 rounded-lg">
                  <div className="aspect-video bg-black/50 rounded-lg border border-cyan-500/20 flex items-center justify-center">
                    <span className="text-slate-400">AI Fusion Engine</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="lg:w-1/3">
                <div className="text-cyan-400 text-sm font-semibold mb-2">STEP 3</div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  3D Digital Twin + Anomaly Mapping
                </h2>
                <p className="text-slate-300 text-lg">
                  The system generates a digital twin with color-coded overlays showing defects, hotspots, or tampering.
                </p>
              </div>
              <div className="lg:w-2/3">
                <div className="bg-gradient-to-br from-cyan-500/10 to-transparent p-8 rounded-lg">
                  <div className="aspect-video bg-black/50 rounded-lg border border-cyan-500/20 flex items-center justify-center">
                    <span className="text-slate-400">Digital Twin Output</span>
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
