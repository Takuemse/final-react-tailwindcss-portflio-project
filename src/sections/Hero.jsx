import { HiArrowRight } from "react-icons/hi2";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";

const Hero = () => {
  return (
    <section className="flex min-h-screen flex-col items-start justify-center px-6 pt-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        

        <h1 className="max-w-3xl font-[Space_Grotesk] text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
          I build clean, functional interfaces with{" "}
          <span className="text-[#F64900]">purpose</span>.
        </h1>

        <p className="mt-6 max-w-xl font-[Manrope] text-base text-[#A1A1AA] md:text-lg">
          Software Developer and Product Designer based in Harare, Zimbabwe.
          I design and build web products with real-world relevance starting 
          with the problems people actually have.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button to="/projects" variant="primary">
            View My Work
            <HiArrowRight className="h-4 w-4" />
          </Button>
          <Button to="/contact" variant="secondary">
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;