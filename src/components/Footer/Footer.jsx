
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { HiEnvelope } from "react-icons/hi2";

const socialLinks = [
  { id: 1, icon: FaGithub, href: "https://github.com/Takuemse", label: "GitHub" },
  { id: 2, icon: FaLinkedin, href: "https://www.linkedin.com/in/takudzwa-william-musemwa-559000240/", label: "LinkedIn" },
  { id: 3, icon: FaXTwitter, href: "https://x.com/yourusername", label: "X" },
  { id: 4, icon: HiEnvelope, href: "mailto:takudzwamse@gmail.com", label: "Email" },
];

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Have a productive morning";
  if (hour < 17) return "Have a great afternoon";
  if (hour < 21) return "Have a peaceful evening";
  return "Have a restful night";
};

const Footer = () => {
  const [greeting, setGreeting] = useState(getGreeting());
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const interval = setInterval(() => {
      setGreeting(getGreeting());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="border-t border-[#2E2E2E] bg-[#0A0A0A] px-6 py-12 md:px-12 lg:px-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-[Manrope] text-sm text-[#A1A1AA]">
              © {currentYear} Takudzwa Musemwa
            </p>
            <p className="mt-1 font-[Manrope] text-sm text-[#A1A1AA]">
              {greeting}, wherever you're reading this from.
            </p>
          </div>

          <div className="flex items-center gap-5">
            {socialLinks.map(({ id, icon: Icon, href, label }) => (
              
               <a key={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-[#A1A1AA] transition-colors duration-300 hover:text-[#F64900]"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-[#2E2E2E] pt-6 md:flex-row">
          <p className="font-mono text-xs text-[#A1A1AA]">
            17.8252° S, 31.0335° E
          </p>
          <p className="font-[Manrope] text-xs text-[#A1A1AA]">
            Designed and hand coded in Harare.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;