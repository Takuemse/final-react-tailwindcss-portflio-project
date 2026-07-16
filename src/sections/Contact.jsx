// src/sections/Contact.jsx
import { useState } from "react";
import { HiEnvelope, HiOutlineCheckCircle } from "react-icons/hi2";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Section from "../components/ui/Section";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import Button from "../components/ui/Button";

const connectLinks = [
  {
    id: 1,
    icon: FaGithub,
    label: "GitHub",
    handle: "@TakueMse",
    href: "https://github.com/Takuemse",
  },
  {
    id: 2,
    icon: FaLinkedin,
    label: "LinkedIn",
    handle: "Takudzwa Musemwa",
    href: "https://www.linkedin.com/in/takudzwa-william-musemwa-559000240/",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/yourFormId", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <Section id="contact">
      <SectionTitle
        eyebrow="Get In Touch"
        title="Let's Work Together"
        description="Have a project in mind or just want to say hi? My inbox is open."
      />

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
        
        <div className="lg:col-span-7">
          {isSubmitted ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-[#2E2E2E] bg-[#171717] p-10 text-center">
              <HiOutlineCheckCircle className="h-10 w-10 text-[#F64900]" />
              <h3 className="font-[Space_Grotesk] text-xl font-semibold text-white">
                Message Sent
              </h3>
              <p className="font-[Manrope] text-sm text-[#A1A1AA]">
                Thanks for reaching out I'll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="rounded-xl border border-[#2E2E2E] bg-[#171717] px-5 py-3 font-[Manrope] text-white placeholder:text-[#A1A1AA] focus:border-[#F64900] focus:outline-none focus:ring-2 focus:ring-[#F64900]/20"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                required
                className="rounded-xl border border-[#2E2E2E] bg-[#171717] px-5 py-3 font-[Manrope] text-white placeholder:text-[#A1A1AA] focus:border-[#F64900] focus:outline-none focus:ring-2 focus:ring-[#F64900]/20"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                required
                rows={6}
                className="resize-none rounded-xl border border-[#2E2E2E] bg-[#171717] px-5 py-3 font-[Manrope] text-white placeholder:text-[#A1A1AA] focus:border-[#F64900] focus:outline-none focus:ring-2 focus:ring-[#F64900]/20"
              />
              <Button type="submit" variant="primary" className="self-start">
                Send Message
                <HiEnvelope className="h-4 w-4" />
              </Button>
            </form>
          )}
        </div>

        {/* Right Column: Cards */}
        <div className="flex flex-col gap-6 lg:col-span-5">
          {/* Status Box (With Static Status Indicator Dot) */}
          <div className="rounded-2xl border border-[#2E2E2E] bg-[#171717] p-6">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#F64900]" />
              <span className="font-[Manrope] text-xs font-medium uppercase tracking-wider text-[#F64900]">
                Current Status
              </span>
            </div>
            <p className="mt-4 font-[Manrope] text-sm leading-relaxed text-[#A1A1AA]">
              Actively learning, building, and open to new opportunities.
              Currently deep in frontend development always glad to talk
              through a project or idea.
            </p>
          </div>

          {/* Social Connect Links */}
          <div className="flex flex-col gap-4">
            {connectLinks.map(({ id, icon: Icon, label, handle, href }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-[#2E2E2E] bg-[#171717]/60 p-5 backdrop-blur-sm transition-all duration-300 hover:border-[#F64900]/40"
              >
                <div className="flex items-center gap-4">
                  <Icon className="h-5 w-5 text-[#A1A1AA] transition-colors duration-300 group-hover:text-[#F64900]" />
                  <div>
                    <p className="font-[Space_Grotesk] text-sm font-semibold text-white">
                      {label}
                    </p>
                    <p className="font-[Manrope] text-xs text-[#A1A1AA]">
                      {handle}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;