import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Effect to handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effect to prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto"; // Cleanup on unmount
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: "#about", label: "Roxana" },
    { href: "#services", label: "Servicios" },
    { href: "#gallery", label: "Galería" },
    { href: "#contact", label: "Contacto" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.substring(1); // Remove the '#'
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ease-in-out ${
          isScrolled
            ? "bg-brand-bg/80 shadow-lg backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className={`text-2xl font-serif font-bold tracking-wider transition-colors duration-300 ${
              isScrolled ? "text-brand-text" : "text-white"
            }`}
          >
            Nails <span className="text-brand-primary">Roxyy</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative group text-sm tracking-wider uppercase transition-colors duration-300 ${
                  isScrolled
                    ? "text-brand-text hover:text-brand-primary"
                    : "text-white hover:text-brand-primary/90"
                }`}
              >
                <span>{link.label}</span>
                <span
                  className={`absolute -bottom-1 left-0 w-full h-[1px] bg-brand-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300 ease-out`}
                ></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`relative z-[101] h-8 w-8 transition-colors duration-300 ${
                isMenuOpen || !isScrolled ? "text-white" : "text-brand-text"
              }`}
              aria-label="Abrir menú"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <span
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 h-[2px] w-6 bg-current transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "rotate-45" : "-translate-y-2"
                }`}
              ></span>
              <span
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 h-[2px] w-6 bg-current transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 h-[2px] w-6 bg-current transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "-rotate-45" : "translate-y-2"
                }`}
              ></span>
            </button>
          </div>
        </nav>
      </header>

      {/* --- Mobile Menu --- */}
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 z-50 transition-opacity duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      ></div>

      {/* Side Panel */}
      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 h-full w-full max-w-xs bg-brand-bg shadow-2xl transition-transform duration-300 ease-in-out z-[100] md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Header */}
          <div className="pb-4 mb-4 border-b border-brand-text/10">
            <h3 className="text-xl font-serif font-bold text-brand-text">
              Menú
            </h3>
          </div>

          {/* Nav Links */}
          <nav className="flex-grow">
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li
                  key={link.href}
                  className="border-b border-brand-text/5 last:border-b-0"
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block py-4 text-lg text-brand-text/80 hover:text-brand-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer with CTA */}
          <div className="pt-6 mt-auto border-t border-brand-text/10">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="block w-full text-center bg-brand-primary text-white font-semibold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all duration-300 ease-in-out shadow-md"
            >
              Agenda tu Cita
            </a>
            <div className="mt-4 text-center">
              <a
                href="https://www.instagram.com/roxyy.nails_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-brand-text/60 hover:text-brand-primary transition-colors duration-300"
              >
                Visítanos en Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
