import Section from "../components/ui/Section";
import SectionTitle from "../components/SectionTitle/SectionTitle";

const About = () => {
  return (
    <Section id="about">
      <SectionTitle eyebrow="About" title="Who I Am" />

      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="flex flex-col gap-8 lg:col-span-7">
          <p className="font-[Space_Grotesk] text-lg font-light text-white md:text-xl">
            Currently sharpening my craft through the{" "}
            <span className="text-[#F64900]">Uncommon Bootcamp Technology Programme</span>,
            building products at the intersection of design and engineering.
          </p>

          <div className="flex flex-col gap-5">
            <p className="font-[Manrope] text-base leading-relaxed text-[#A1A1AA] md:text-lg">
              I'm a self-taught developer and product designer from Harare,
              Zimbabwe. My work balances two disciplines that often get
              treated as separate the visual thinking of a designer and the
              technical execution of an engineer because the best
              interfaces need both. Projects like{" "}
              <span className="text-[#F64900] underline underline-offset-4">
                Zuva Rescue
              </span>{" "}
              started as a UX problem before they became a line of code.
            </p>
            <p className="font-[Manrope] text-base leading-relaxed text-[#A1A1AA] md:text-lg">
              What drives me is building things with local relevance 
              software that solves real problems for people in Zimbabwe.{" "}
              <span className="text-[#F64900] underline underline-offset-4">
                Simple Store
              </span>{" "}
              reflects that directly: a platform built for context, not just
              for a portfolio. Every project here starts with the user's
              actual situation before a single component gets written.
            </p>
          </div>

          <div className="flex flex-wrap items-start gap-x-10 gap-y-6 border-t border-[#2E2E2E] pt-6">
            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#A1A1AA]">
                Current Station
              </span>
              <span className="font-mono text-sm text-white">
                Uncommon Tech Programme
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#A1A1AA]">
                Focus Areas
              </span>
              <span className="font-mono text-sm text-white">
                Full-Stack Dev • UI/UX • Digital Marketing
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:col-span-5 lg:justify-end cursor-pointer">
          <div
            className="group relative aspect-[4/5] w-full max-w-[360px] overflow-hidden rounded-3xl border border-[#2E2E2E] bg-[#171717]/50 backdrop-blur-md transition-all duration-500 ease-out hover:border-[#F64900]/30"
            style={{
              backgroundImage:
                "linear-gradient(#2E2E2E 1px, transparent 1px), linear-gradient(90deg, #2E2E2E 1px, transparent 1px)",
              backgroundSize: "14px 14px",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-[#0A0A0A]/60" />

            <div className="relative flex items-center justify-between border-b border-[#2E2E2E] bg-[#171717]/80 px-4 py-3">
             
              <span className="font-mono text-[10px] text-[#A1A1AA]">
                inspect_layout.tsx
              </span>
            </div>

            <div className="relative flex flex-1 items-center justify-center px-8 py-10">
              <span className="absolute left-1 top-1/2 -translate-y-1/2 font-mono text-[9px] text-[#F64900] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100">
                W: 360px
              </span>
              <span className="absolute right-1 top-1/2 -translate-y-1/2 font-mono text-[9px] text-[#F64900] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100">
                H: 780px
              </span>

              <div className="relative h-[280px] w-[150px] rounded-[24px] border-2 border-[#2E2E2E] bg-[#0A0A0A] p-1.5 transition-all duration-500 ease-out group-hover:scale-[1.03] group-hover:border-[#F64900]/50">
                <div className="absolute left-1/2 top-1.5 h-3 w-14 -translate-x-1/2 rounded-full bg-[#171717]" />

                <div className="relative h-full w-full overflow-hidden rounded-[18px] border border-[#2E2E2E] bg-[#0F0F0F]">
                  <div
                    className="absolute inset-0 opacity-40"
                    style={{
                      backgroundImage:
                        "linear-gradient(#2E2E2E 1px, transparent 1px), linear-gradient(90deg, #2E2E2E 1px, transparent 1px)",
                      backgroundSize: "10px 10px",
                    }}
                  />

                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 border border-dashed border-[#3A3A3A] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100">
                    <div className="m-2 flex-1 self-stretch rounded-md border border-dashed border-[#F64900]/40 bg-[#F64900]/5" />
                    <span className="mb-2 rounded bg-[#F64900]/10 px-1.5 py-0.5 font-mono text-[7px] text-[#F64900]">
                      Padding: 8px
                    </span>
                  </div>

                  <div className="absolute bottom-2 left-1/2 h-1 w-8 -translate-x-1/2 rounded-full bg-[#2E2E2E]" />
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-between border-t border-[#2E2E2E] bg-[#171717]/80 px-4 py-3">
              <span className="font-mono text-[9px] text-[#A1A1AA]">
                LAYOUT MASK: <span className="text-[#F64900]">ACTIVE</span>
              </span>
              <span className="font-mono text-[9px] text-[#A1A1AA]">
                GRID: COHESIVE (8px)
              </span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;