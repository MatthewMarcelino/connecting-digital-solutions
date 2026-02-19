import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-900/80 backdrop-blur-sm border-b border-teal-500/20 z-50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F11c02755fcd641c49490da9e9829fd9c%2F3fbd3345b7084255898c1745592d1625?format=webp&width=800&height=1200"
              alt="Connecting Digital Logo"
              className="h-40 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleScrollToSection("what-we-build")}
              className="text-gray-300 hover:text-teal-400 transition-colors text-sm font-medium cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => handleScrollToSection("portfolio")}
              className="text-gray-300 hover:text-teal-400 transition-colors text-sm font-medium cursor-pointer"
            >
              Portfolio
            </button>
            <button
              onClick={() => handleScrollToSection("how-we-work")}
              className="text-gray-300 hover:text-teal-400 transition-colors text-sm font-medium cursor-pointer"
            >
              Features
            </button>
            <button
              onClick={() => handleScrollToSection("built-excellence")}
              className="text-gray-300 hover:text-teal-400 transition-colors text-sm font-medium cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => handleScrollToSection("contact")}
              className="text-gray-300 hover:text-teal-400 transition-colors text-sm font-medium cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleScrollToSection("contact")}
              className="hidden sm:inline-block bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors text-sm"
            >
              Get Started
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-300 hover:text-teal-400"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden border-t border-teal-500/20 py-4 pb-6 space-y-3">
            <button
              onClick={() => handleScrollToSection("what-we-build")}
              className="block w-full text-left text-gray-300 hover:text-teal-400 transition-colors py-2 font-medium"
            >
              Services
            </button>
            <button
              onClick={() => {
                handleScrollToSection("portfolio");
                setIsOpen(false);
              }}
              className="block w-full text-left text-gray-300 hover:text-teal-400 transition-colors py-2 font-medium cursor-pointer"
            >
              Portfolio
            </button>
            <button
              onClick={() => handleScrollToSection("how-we-work")}
              className="block w-full text-left text-gray-300 hover:text-teal-400 transition-colors py-2 font-medium"
            >
              Features
            </button>
            <button
              onClick={() => handleScrollToSection("built-excellence")}
              className="block w-full text-left text-gray-300 hover:text-teal-400 transition-colors py-2 font-medium"
            >
              About
            </button>
            <button
              onClick={() => handleScrollToSection("contact")}
              className="block w-full text-left text-gray-300 hover:text-teal-400 transition-colors py-2 font-medium"
            >
              Contact
            </button>
            <button
              onClick={() => handleScrollToSection("contact")}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors"
            >
              Get Started
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
