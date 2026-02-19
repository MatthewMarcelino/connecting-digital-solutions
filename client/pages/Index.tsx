import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useState } from "react";
import {
  Code2,
  Cloud,
  Zap,
  Shield,
  Users,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Mail,
  Database,
  MessageSquare,
  Briefcase,
  Lock,
  Zap as Lightning,
  Code,
  ExternalLink,
} from "lucide-react";

export default function Index() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      alert(`Thank you! We'll contact you at ${email}`);
      setEmail("");
      setIsSubmitting(false);
    }, 1500);
  };

  const handleScheduleCall = () => {
    // WhatsApp link with pre-filled message
    window.open(
      "https://wa.me/6287865552661?text=Hi%20Connecting%20Digital%2C%20I'd%20like%20to%20schedule%20a%20call%20to%20discuss%20my%20project",
      "_blank"
    );
  };

  return (
    <div className="bg-gradient-to-b from-slate-900 via-teal-900 to-slate-900 min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="blob-1 absolute top-0 right-1/4 w-96 h-96 bg-teal-500 rounded-full blur-3xl opacity-20"></div>
          <div className="blob-2 absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-20"></div>
          <div className="blob-1 absolute -top-32 -right-32 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-10"></div>
          <div className="blob-2 absolute -bottom-32 -left-32 w-80 h-80 bg-teal-400 rounded-full blur-3xl opacity-10"></div>
        </div>

        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/20 border border-teal-500/40 rounded-full mb-8">
              <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
              <span className="text-sm font-semibold text-teal-300">
                Build Your Digital Future
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
              CONNECTING
            </h1>
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent mb-8">
              DIGITAL
            </h2>

            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Transform your business with cutting-edge IT solutions. We build
              digital experiences that drive growth and innovation for modern enterprises.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button
                onClick={() => handleScrollToSection("contact")}
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3.5 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Get Started
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => handleScrollToSection("what-we-build")}
                className="border-2 border-teal-600/50 text-teal-300 hover:border-teal-400 hover:text-teal-200 px-8 py-3.5 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                View More
                <ArrowRight size={20} />
              </button>
            </div>

            {/* Hero Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="bg-slate-800/50 border border-teal-500/20 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-teal-400 font-semibold mb-2">Custom Development</h3>
                <p className="text-gray-400 text-sm">
                  Tailored solutions built to your exact specifications
                </p>
              </div>
              <div className="bg-slate-800/50 border border-teal-500/20 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-teal-400 font-semibold mb-2">Enterprise Security</h3>
                <p className="text-gray-400 text-sm">
                  Enterprise-grade security and compliance standards
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build Section */}
      <section id="what-we-build" className="py-20 md:py-28 bg-slate-900/50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              What We Build
            </h2>
            <p className="text-lg text-gray-400">
              Comprehensive solutions spanning the entire technology spectrum
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Custom Software Development",
                description: "Bespoke applications designed for your unique business challenges",
                items: ["Web Applications", "Desktop Software", "Backend Services"],
              },
              {
                title: "IT Consulting & Strategy",
                description: "Expert guidance for your digital transformation journey",
                items: ["Technology Assessment", "Roadmap Planning", "Implementation Support"],
              },
              {
                title: "Mobile App Development",
                description: "Native and cross-platform mobile solutions",
                items: ["iOS Development", "Android Apps", "Cross-Platform Apps"],
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 hover:bg-white/15 hover:border-white/30 transition-all group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-cyan-500 rounded-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  <Code2 size={24} />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle2 size={16} className="text-teal-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Powered by Modern Tech */}
      <section className="py-20 md:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Powered by Modern Tech
            </h2>
            <p className="text-lg text-gray-400">
              Built with industry-leading technologies and frameworks
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Frontend",
                tech: ["React & Vue.js", "TypeScript", "Tailwind CSS", "Next.js"],
              },
              {
                title: "Backend",
                tech: ["Node.js & Python", "Express & Django", "PostgreSQL", "MongoDB"],
              },
              {
                title: "Cloud & Services",
                tech: ["AWS & Azure", "Kubernetes", "CI/CD Pipeline", "DevOps"],
              },
            ].map((tech, idx) => (
              <div
                key={idx}
                className="bg-slate-800/60 border border-teal-500/30 rounded-xl p-8"
              >
                <h3 className="text-lg md:text-xl font-bold text-white mb-6">{tech.title}</h3>
                <ul className="space-y-3">
                  {tech.tech.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm md:text-base text-gray-300">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section id="how-we-work" className="py-20 md:py-28 bg-slate-900/50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              How We Work
            </h2>
            <p className="text-lg text-gray-400">
              Our proven process ensures success at every step
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                number: "01",
                title: "Planning & Discovery",
                description: "We start with understanding your goals, challenges, and vision",
              },
              {
                number: "02",
                title: "Design & Strategy",
                description: "Create comprehensive roadmaps and technical specifications",
              },
              {
                number: "03",
                title: "Development & Testing",
                description: "Build with quality first, rigorous testing at each stage",
              },
              {
                number: "04",
                title: "Launch & Support",
                description: "Deploy with confidence and ongoing dedicated support",
              },
            ].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-teal-600 to-cyan-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={() => handleScrollToSection("contact")}
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3.5 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
            >
              Start Your Journey
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Built for Excellence */}
      <section id="built-excellence" className="py-20 md:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Built for Excellence
            </h2>
            <p className="text-lg text-gray-400">
              Enterprise-grade features and capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Technical Excellence",
                icon: "⚡",
                description: "Clean, scalable, and maintainable code architecture",
              },
              {
                title: "Agile & Responsive",
                icon: "🎯",
                description: "Flexible approach adapting to your changing needs",
              },
              {
                title: "Knowledge Transfer",
                icon: "📚",
                description: "Complete documentation and team training included",
              },
              {
                title: "Security First",
                icon: "🔒",
                description: "Industry-leading security practices and standards",
              },
              {
                title: "Scalable Solutions",
                icon: "📈",
                description: "Built to grow with your business demands",
              },
              {
                title: "Continuous Improvement",
                icon: "🔄",
                description: "Ongoing monitoring, optimization, and updates",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 text-center hover:bg-white/15 transition-all"
              >
                <div className="text-3xl md:text-4xl mb-4">{item.icon}</div>
                <h3 className="text-base md:text-lg font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 md:py-28 bg-slate-900/50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Our Portfolio
            </h2>
            <p className="text-lg text-gray-400">
              Explore our latest projects and see how we've helped businesses transform their digital presence
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Sehat Diah Catering",
                description: "Platform catering modern dengan sistem pemesanan online, manajemen menu, dan tracking pengiriman real-time untuk kemudahan pelanggan",
                image: "https://cdn.builder.io/api/v1/image/assets%2F11c02755fcd641c49490da9e9829fd9c%2Ffdf86304a975414fa97261e1ae5be3ac?format=webp&width=800&height=1200",
                tags: ["React", "Node.js", "PostgreSQL"],
              },
              {
                title: "Nami Sushi",
                description: "Website restoran sushi premium dengan fitur ordering online, reservasi meja, gallery menu, dan integrasi pembayaran digital",
                image: "https://cdn.builder.io/api/v1/image/assets%2F11c02755fcd641c49490da9e9829fd9c%2Fa492c8b992f04b349cc2c27609ec5fe8?format=webp&width=800&height=1200",
                tags: ["React", "Firebase", "Tailwind CSS"],
              },
              {
                title: "Bengkel Modern Semarang",
                description: "Platform bengkel otomotif dengan sistem booking servis, tracking kendaraan, manajemen inventory spare part, dan pelayanan customer yang terintegrasi",
                image: "https://cdn.builder.io/api/v1/image/assets%2F11c02755fcd641c49490da9e9829fd9c%2F30cd534038574cd3b6678fa437ae2a1c?format=webp&width=800&height=1200",
                tags: ["Vue.js", "Laravel", "MySQL"],
              },
            ].map((project, idx) => (
              <div
                key={idx}
                className="group bg-slate-800/40 border border-teal-500/20 rounded-xl overflow-hidden hover:border-teal-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48 bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-teal-500/20 text-teal-300 text-xs rounded-full border border-teal-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-28 bg-slate-900/50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-5xl md:text-7xl font-bold text-teal-400 mb-2">
                24/7
              </div>
              <p className="text-gray-400 text-lg">Dedicated Support</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-7xl font-bold text-teal-400 mb-2">
                5+
              </div>
              <p className="text-gray-400 text-lg">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center border border-teal-500/30 rounded-2xl p-8 md:p-12 backdrop-blur-sm bg-slate-800/40">
            {/* Left Column */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  Ready to Build<br />Something Great?
                </h2>
                <p className="text-gray-300 text-lg mb-6">
                  Let's discuss your project and explore how our expertise can help
                  you achieve your business goals. Get a free consultation and
                  technical roadmap.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="text-teal-500 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-gray-400 text-sm">Email us</p>
                    <a
                      href="mailto:connecting.digital@gmail.com"
                      className="text-white font-semibold hover:text-teal-400 transition-colors"
                    >
                      connecting.digital@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <a
                    href="tel:+6287865552661"
                    className="flex items-start gap-3 group"
                  >
                    <svg
                      className="text-teal-500 flex-shrink-0 mt-1 group-hover:text-teal-400 transition-colors"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <div>
                      <p className="text-gray-400 text-sm">Call us</p>
                      <p className="text-white font-semibold group-hover:text-teal-400 transition-colors">
                        +62 878 6555 2661
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20">
              <form onSubmit={handleEmailSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-2">
                    Work Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    required
                    className="w-full px-4 py-3 border border-white/20 bg-white/5 backdrop-blur-sm rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-colors"
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-teal-600 hover:bg-teal-700 disabled:bg-teal-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? "Sending..." : "Start Your Project"}
                    {!isSubmitting && <ArrowRight size={18} />}
                  </button>
                  <button
                    type="button"
                    onClick={handleScheduleCall}
                    className="px-6 py-3 border-2 border-teal-600/50 text-teal-300 rounded-lg font-semibold hover:border-teal-400 hover:text-teal-200 transition-colors flex items-center justify-center gap-2"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    Schedule Call
                  </button>
                </div>

                {/* Certifications */}
                <div className="flex items-center justify-center gap-6 pt-4 border-t border-teal-500/20">
                  <div className="flex items-center gap-2">
                    <svg
                      className="text-teal-500"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                    </svg>
                    <span className="text-sm font-medium text-gray-400">
                      SOC 2 Certified
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="text-teal-500"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                    </svg>
                    <span className="text-sm font-medium text-gray-400">
                      ISO 27011
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
