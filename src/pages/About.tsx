export function About() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              What Is GEM Technology Inc.?
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            {/* Left - Image */}
            <div>
              <div className="relative rounded-2xl overflow-hidden border-2 border-cyan-500/30 p-3 bg-slate-900/50">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop"
                  alt="Technology and Innovation"
                  className="w-full h-[500px] object-cover rounded-xl"
                />
                <div className="absolute inset-3 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-xl pointer-events-none"></div>
              </div>
            </div>

            {/* Right - Text */}
            <div>
              <div className="space-y-12 text-xl text-slate-300 leading-relaxed">
                <p>
                  GEM Technology Inc. is an AI innovation company building GEMSense™, the world's first unified multispectral inspection and decision platform.
                </p>
                <p>
                  Our mission is to strengthen national security, infrastructure resilience, and emergency response through advanced sensing, physics-informed AI, and predictive analytics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
