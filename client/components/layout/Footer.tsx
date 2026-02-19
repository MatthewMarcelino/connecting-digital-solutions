import { Github } from "lucide-react";

export function Footer() {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-400 border-t border-gray-800">
      <div className="container max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Logo & Copyright */}
          <div className="flex items-center gap-3">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F11c02755fcd641c49490da9e9829fd9c%2F3fbd3345b7084255898c1745592d1625?format=webp&width=800&height=1200"
              alt="Connecting Digital Logo"
              className="h-40 w-auto"
            />
            <div className="text-sm text-gray-400">
              <p className="font-semibold text-white">CONNECTING DIGITAL</p>
              <p>© 2025 All rights reserved</p>
            </div>
          </div>

          {/* Center: Navigation Links */}
          <nav className="flex items-center gap-6 text-sm">
            <button
              onClick={() => handleScrollToSection("what-we-build")}
              className="hover:text-teal-400 transition-colors cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => handleScrollToSection("portfolio")}
              className="hover:text-teal-400 transition-colors cursor-pointer"
            >
              Portfolio
            </button>
            <button
              onClick={() => handleScrollToSection("contact")}
              className="hover:text-teal-400 transition-colors cursor-pointer"
            >
              Contact
            </button>
            <a href="#" className="hover:text-teal-400 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-teal-400 transition-colors">
              Terms
            </a>
          </nav>

          {/* Right: Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://wa.me/6287865552661"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400 transition-colors"
              aria-label="WhatsApp"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.946 1.348l-.355.192-3.674-.965.992 3.63-.235.374a9.86 9.86 0 00-1.51 5.26c0 5.446 4.435 9.884 9.88 9.884 2.64 0 5.12-1.032 6.988-2.898 1.87-1.866 2.902-4.35 2.902-6.986 0-5.446-4.436-9.884-9.884-9.884z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
