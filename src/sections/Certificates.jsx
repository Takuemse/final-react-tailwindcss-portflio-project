import { HiOutlineAcademicCap, HiArrowUpRight } from "react-icons/hi2";
import { certificates } from "../data/certificates";
import Section from "../components/ui/Section";
import SectionTitle from "../components/SectionTitle/SectionTitle";

const Certificates = () => {
  return (
    <Section id="certificates">
      <SectionTitle eyebrow="Credentials" title="Certificates" />

      <div className="mt-12 flex flex-col gap-4">
        {certificates.map((cert) => (
          
           <a key={cert.id}
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-2xl border border-[#2E2E2E] bg-[#171717] p-6 transition-all duration-300 hover:border-[#F64900]/50"
          >
            <div className="flex items-center gap-4">
              <HiOutlineAcademicCap className="h-6 w-6 text-[#F64900]" />
              <div>
                <h3 className="font-[Space_Grotesk] text-base font-semibold text-white">
                  {cert.title}
                </h3>
                <p className="font-[Manrope] text-sm text-[#A1A1AA]">
                  {cert.issuer} · {cert.date}
                </p>
              </div>
            </div>
            <HiArrowUpRight className="h-5 w-5 text-[#A1A1AA] transition-all duration-300 group-hover:text-[#F64900] group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        ))}
      </div>
    </Section>
  );
};

export default Certificates;