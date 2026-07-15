import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2";
import Logo from "./Logo";
import Navigation from "../Navigation/Navigation";
import ResumeButton from "./ResumeButton";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getActiveSection = () => {
    if (location.pathname === "/") return "home";
    return location.pathname.replace("/", "");
  };

  return (
    <>
      <header
        className={`fixed top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "border-b border-[#2E2E2E] bg-[#0A0A0A]/80 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12 lg:px-24">
          <Logo />

          <div className="hidden md:block">
            <Navigation activeSection={getActiveSection()} />
          </div>

          <div className="hidden md:block">
            <ResumeButton />
          </div>

          <button
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
            className="text-white md:hidden"
          >
            <HiBars3 className="h-7 w-7" />
          </button>
        </nav>
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Navbar;