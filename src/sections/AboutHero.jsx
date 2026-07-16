// src/sections/AboutHero.jsx
import { useState, useEffect } from "react";

const AboutHero = () => {
  const [harareTime, setHarareTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Africa/Harare",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setHarareTime(formatter.format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#0A0A0A] px-6 pt-24 md:px-12 lg:px-24">
        
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-[] grayscale contrast-125"
        >
          <source src="/code.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, transparent 0%, #0A0A0A 70%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        
        <div className="flex flex-col gap-6">
          
          <span className="font-mono text-xs uppercase tracking-widest text-[#71717A]">
            Explore more about Takudzwa
          </span>

          <h1 className="font-[Space_Grotesk] text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Engineering with empathy, designing with{" "}
            <span className="text-[#F64900]">intent</span>.
          </h1>

          <p className="max-w-lg font-[Manrope] text-base leading-relaxed text-[#A1A1AA] md:text-lg">
            I build interfaces that respect the people using them thoughtful
            in detail, honest in function, and rooted in real context.
          </p>

          
          <div className="flex items-center gap-2.5 font-mono text-xs text-[#71717A]">
            <span>Harare, Zimbabwe</span>
            <span>/</span>
            <span className="tabular-nums text-[#A1A1AA]">{harareTime}</span>
          </div>
        </div>

        
        <div className="flex justify-center lg:justify-end">
          <div className="group relative w-full max-w-sm overflow-hidden rounded-3xl border border-[#2E2E2E] bg-[#171717]/40 p-3 backdrop-blur-md transition-all duration-500 hover:shadow-[0_0_60px_-15px_#F64900]">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl">
              <img
                src="/portrait.jpg"
                alt="Portrait"
                className="h-full w-full object-cover grayscale-[10%] transition-all duration-500 group-hover:grayscale-0"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-linear-to-t from-[#F64900]/0 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;