import { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    interest: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a backend
    alert(`Thank you for your interest! We'll respond to ${formData.email} shortly.`);
    setFormData({
      name: '',
      email: '',
      organization: '',
      interest: '',
      message: '',
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-slate-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">
              Contact Us
            </h1>
            <p className="text-slate-300 text-xl">
              Get in touch to discuss how GEMSense™ can support your mission. 
              We're ready to answer questions about federal contracting, technical capabilities, 
              or commercial authentication services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-white mb-8">
                Get In Touch
              </h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-500/10 p-3 rounded-lg flex-shrink-0">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-white mb-2">Email</h3>
                    <a
                      href="mailto:jimmy@gemgradingco.com"
                      className="text-slate-300 hover:text-cyan-400 transition-colors"
                    >
                      jimmy@gemgradingco.com
                    </a>
                    <p className="text-slate-400 text-sm mt-1">
                      For all inquiries including federal contracting, technical questions, 
                      and commercial services
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-500/10 p-3 rounded-lg flex-shrink-0">
                    <MapPin className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-white mb-2">Website</h3>
                    <a
                      href="https://gemgradingco.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-cyan-400 transition-colors"
                    >
                      gemgradingco.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-lg p-8">
                <h3 className="text-white mb-4">Business Information</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Company Name</p>
                    <p className="text-slate-300">GEM</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Certification</p>
                    <p className="text-slate-300">Service-Disabled Veteran-Owned Small Business (SDVOSB)</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Primary NAICS</p>
                    <p className="text-slate-300">541512 - Computer Systems Design Services</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-8">
              <h3 className="text-white mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-slate-300 mb-2 block">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-slate-950 border-slate-700 text-slate-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-slate-300 mb-2 block">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-slate-950 border-slate-700 text-slate-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="organization" className="text-slate-300 mb-2 block">
                    Organization
                  </Label>
                  <Input
                    id="organization"
                    name="organization"
                    type="text"
                    value={formData.organization}
                    onChange={handleChange}
                    className="bg-slate-950 border-slate-700 text-slate-300"
                    placeholder="Your organization or agency"
                  />
                </div>

                <div>
                  <Label htmlFor="interest" className="text-slate-300 mb-2 block">
                    Area of Interest *
                  </Label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-700 text-slate-300 rounded-md px-3 py-2"
                  >
                    <option value="">Select an option</option>
                    <option value="federal">Federal Contracting</option>
                    <option value="gemsense">GEMSense™ Platform</option>
                    <option value="commercial">Commercial Authentication</option>
                    <option value="technical">Technical Capabilities</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-slate-300 mb-2 block">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-slate-950 border-slate-700 text-slate-300 min-h-[150px]"
                    placeholder="Tell us about your needs or questions..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-cyan-500 hover:bg-cyan-600 text-white"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>

                <p className="text-slate-400 text-sm text-center">
                  We'll respond within 1-2 business days
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">
              What Happens Next?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-cyan-500/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-cyan-400">1</span>
              </div>
              <h3 className="text-white mb-2">Initial Contact</h3>
              <p className="text-slate-400 text-sm">
                We'll review your inquiry and respond within 1-2 business days to schedule 
                an initial discussion.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-cyan-500/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-cyan-400">2</span>
              </div>
              <h3 className="text-white mb-2">Discovery Call</h3>
              <p className="text-slate-400 text-sm">
                We'll learn about your specific requirements, challenges, and objectives to 
                determine how GEMSense™ can help.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-cyan-500/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-cyan-400">3</span>
              </div>
              <h3 className="text-white mb-2">Custom Proposal</h3>
              <p className="text-slate-400 text-sm">
                We'll develop a tailored solution proposal, including technical approach, 
                timeline, and contract options.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
