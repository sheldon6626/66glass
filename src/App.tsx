import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  MessageCircle, 
  ShieldCheck, 
  Settings, 
  Globe, 
  Layers, 
  Building2, 
  Palette, 
  Zap, 
  CheckCircle2, 
  Ruler, 
  Factory, 
  Ship, 
  HardHat,
  Home,
  Briefcase,
  Store,
  Sofa,
  Hotel,
  FileText,
  Calculator,
  CheckSquare,
  PackageCheck,
  MapPin,
  Users,
  Award
} from 'lucide-react';

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-200 selection:text-blue-900">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="66glass Logo" className="w-10 h-10" />
            <span className="font-bold text-2xl tracking-tight text-slate-900">66glass</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#products" className="hover:text-blue-600 transition-colors">Products</a>
            <a href="#values" className="hover:text-blue-600 transition-colors">Capabilities</a>
            <a href="#process" className="hover:text-blue-600 transition-colors">Process</a>
            <a href="#contact" className="bg-blue-600 text-white px-5 py-2.5 rounded-full hover:bg-blue-700 transition-colors">
              Request Quote
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/glassfacade/1920/1080?blur=2" 
            alt="Modern glass facade" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
                Custom Architectural Glass Manufacturing for Large-Scale Projects
              </h1>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
                Factory-direct production of precision-engineered glass for contractors, developers, and architects worldwide.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/30">
                  Request a Quote
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all">
                  <MessageCircle className="w-5 h-5 text-green-400" />
                  WhatsApp Us Now
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400" />
                  <span>Factory Direct Pricing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400" />
                  <span>OEM & Custom Fabrication</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400" />
                  <span>Exported to 30+ Countries</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product System */}
      <section id="products" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">Product Catalog</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Precision-Engineered Glass Systems</h3>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Category 1 */}
            <FadeIn delay={0.1}>
              <div className="group border border-slate-200 rounded-2xl p-8 hover:border-blue-600 transition-colors bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold mb-4">Structural & Safety Glass</h4>
                <ul className="space-y-3 text-slate-600 mb-8">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-600"/> Tempered Glass</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-600"/> Laminated Glass</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-600"/> Bulletproof Glass</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-600"/> Fireproof Glass</li>
                </ul>
              </div>
            </FadeIn>

            {/* Category 2 */}
            <FadeIn delay={0.2}>
              <div className="group border border-slate-200 rounded-2xl p-8 hover:border-blue-600 transition-colors bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Building2 className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold mb-4">Architectural Glass Systems</h4>
                <ul className="space-y-3 text-slate-600 mb-8">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-600"/> Insulated Glass Units (IGU)</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-600"/> Curved / Bent Glass</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-600"/> U Profile Glass</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-600"/> Facade Glass</li>
                </ul>
              </div>
            </FadeIn>

            {/* Category 3 */}
            <FadeIn delay={0.3}>
              <div className="group border border-slate-200 rounded-2xl p-8 hover:border-blue-600 transition-colors bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Palette className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold mb-4">Interior & Design Glass</h4>
                <ul className="space-y-3 text-slate-600 mb-8">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-600"/> Shower Glass</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-600"/> Partition Glass</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-600"/> Frosted Glass</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-600"/> Printed & Colored Glass</li>
                </ul>
              </div>
            </FadeIn>

            {/* Category 4 */}
            <FadeIn delay={0.4}>
              <div className="group border border-slate-200 rounded-2xl p-8 hover:border-blue-600 transition-colors bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold mb-4">Smart & Functional Glass</h4>
                <ul className="space-y-3 text-slate-600 mb-8">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-600"/> Smart Glass (Switchable)</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-600"/> Anti-Reflective Glass</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-600"/> One-Way Mirror</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-600"/> LED Glass & Temperable Mirror</li>
                </ul>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.5}>
            <div className="mt-12 text-center">
              <a href="#contact" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                View Technical Specifications <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Core Value Section */}
      <section id="values" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeIn>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  Built for Projects That Demand Precision
                </h2>
                <p className="text-lg text-slate-400 mb-10">
                  We don't just supply glass; we engineer solutions. Our manufacturing process is designed to meet the rigorous demands of modern architecture and global construction standards.
                </p>
              </FadeIn>

              <div className="space-y-8">
                <FadeIn delay={0.1}>
                  <div className="flex gap-4">
                    <div className="mt-1 bg-blue-500/20 p-2 rounded-lg h-fit">
                      <CheckCircle2 className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Factory-Controlled Quality</h4>
                      <p className="text-slate-400">Every panel manufactured under strict production standards and multi-point inspection.</p>
                    </div>
                  </div>
                </FadeIn>
                
                <FadeIn delay={0.2}>
                  <div className="flex gap-4">
                    <div className="mt-1 bg-blue-500/20 p-2 rounded-lg h-fit">
                      <Ruler className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Full Custom Fabrication</h4>
                      <p className="text-slate-400">Thickness, coatings, sizes, shapes — built exactly to your architectural drawings.</p>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.3}>
                  <div className="flex gap-4">
                    <div className="mt-1 bg-blue-500/20 p-2 rounded-lg h-fit">
                      <Factory className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Reliable Bulk Production</h4>
                      <p className="text-slate-400">Stable output capacity to keep your large-scale construction projects on schedule.</p>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.4}>
                  <div className="flex gap-4">
                    <div className="mt-1 bg-blue-500/20 p-2 rounded-lg h-fit">
                      <Ship className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Global Shipping Expertise</h4>
                      <p className="text-slate-400">Secure packaging and export compliance for safe, international delivery.</p>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.5}>
                  <div className="flex gap-4">
                    <div className="mt-1 bg-blue-500/20 p-2 rounded-lg h-fit">
                      <HardHat className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Engineering Support</h4>
                      <p className="text-slate-400">We understand architectural and structural requirements, offering technical guidance.</p>
                    </div>
                  </div>
                </FadeIn>
              </div>

              <FadeIn delay={0.6}>
                <div className="mt-12">
                  <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-500 transition-all">
                    Submit Your Project Specs
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </FadeIn>
            </div>

            <div className="relative h-[600px] rounded-2xl overflow-hidden hidden lg:block">
              <img 
                src="https://picsum.photos/seed/glassfactory/800/1200" 
                alt="Glass manufacturing facility" 
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Engineered for Real-World Applications</h2>
              <p className="text-lg text-slate-600">Delivering high-performance glass solutions across diverse sectors.</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {[
              { icon: Building2, label: "Curtain Wall Systems", img: "curtainwall" },
              { icon: Briefcase, label: "Commercial Buildings", img: "commercial" },
              { icon: Home, label: "Residential Developments", img: "residential" },
              { icon: Hotel, label: "Hotels & Hospitality", img: "hotel" },
              { icon: Store, label: "Retail Spaces", img: "retail" },
              { icon: Sofa, label: "Interior Fit-Out Projects", img: "interior" }
            ].map((app, i) => (
              <React.Fragment key={i}>
                <FadeIn delay={i * 0.1}>
                  <div className="group relative h-48 md:h-64 rounded-2xl overflow-hidden cursor-pointer">
                    <img 
                      src={`https://picsum.photos/seed/${app.img}/600/400?blur=1`} 
                      alt={app.label}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/40 transition-colors" />
                    <div className="absolute inset-0 p-6 flex flex-col items-center justify-center text-center text-white">
                      <app.icon className="w-8 h-8 mb-3 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                      <h4 className="font-bold text-lg">{app.label}</h4>
                    </div>
                  </div>
                </FadeIn>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">From Drawing to Delivery — Simplified</h2>
              <p className="text-lg text-slate-600">A streamlined procurement process designed for international buyers.</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0" />

            {[
              { icon: FileText, title: "Submit Specs", desc: "Drawings or requirements" },
              { icon: Calculator, title: "Review & Quote", desc: "Technical analysis" },
              { icon: CheckSquare, title: "Sample", desc: "Confirmation if needed" },
              { icon: Factory, title: "Production", desc: "Mass manufacturing" },
              { icon: PackageCheck, title: "Inspection", desc: "QC & secure packaging" },
              { icon: Globe, title: "Shipment", desc: "Global delivery" }
            ].map((step, i) => (
              <React.Fragment key={i}>
                <FadeIn delay={i * 0.1}>
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center mb-4 shadow-sm text-slate-600">
                      <step.icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-1">{step.title}</h4>
                    <p className="text-sm text-slate-500">{step.desc}</p>
                  </div>
                </FadeIn>
              </React.Fragment>
            ))}
          </div>

          <FadeIn delay={0.6}>
            <div className="mt-16 text-center">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-800 transition-all">
                Start Your RFQ
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Trust Block */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">A Manufacturing Partner You Can Rely On</h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <FadeIn delay={0.1}>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center">
                <MapPin className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-2">Based in Guangdong</h4>
                <p className="text-slate-600 text-sm">The global manufacturing hub for premium architectural glass.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center">
                <Settings className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-2">Advanced Equipment</h4>
                <p className="text-slate-600 text-sm">State-of-the-art cutting, tempering, and laminating lines.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center">
                <Users className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-2">Experienced Export Team</h4>
                <p className="text-slate-600 text-sm">Seamless communication and logistics handling.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center">
                <Award className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-2">Strict QC System</h4>
                <p className="text-slate-600 text-sm">ISO certified processes ensuring zero-defect delivery.</p>
              </div>
            </FadeIn>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             <img src="https://picsum.photos/seed/cert1/400/300" alt="Factory interior" className="rounded-xl w-full h-48 object-cover" referrerPolicy="no-referrer" />
             <img src="https://picsum.photos/seed/cert2/400/300" alt="Glass inspection" className="rounded-xl w-full h-48 object-cover" referrerPolicy="no-referrer" />
             <img src="https://picsum.photos/seed/cert3/400/300" alt="Packaging" className="rounded-xl w-full h-48 object-cover" referrerPolicy="no-referrer" />
             <img src="https://picsum.photos/seed/cert4/400/300" alt="Loading" className="rounded-xl w-full h-48 object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-24 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Get Factory Pricing on Custom Glass — Without Compromise
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-all hover:shadow-xl">
                Request a Quote Now
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white border border-blue-500 px-8 py-4 rounded-full font-bold hover:bg-blue-800 transition-all">
                <MessageCircle className="w-5 h-5 text-green-400" />
                Chat on WhatsApp
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 text-center text-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src="/logo.svg" alt="66glass Logo" className="w-8 h-8 opacity-90" />
            <span className="font-bold text-xl text-white tracking-tight">66glass</span>
          </div>
          <p>© {new Date().getFullYear()} 66glass. All rights reserved. | <a href="https://66glass.com" className="hover:text-blue-400 transition-colors">66glass.com</a></p>
        </div>
      </footer>

    </div>
  );
}

