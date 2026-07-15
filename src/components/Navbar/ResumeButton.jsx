import { HiArrowDownTray } from "react-icons/hi2";

const ResumeButton = () => {
  return (
    
      <a href="/resume.pdf"
      download="Takudzwa_Musemwa_Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-[#2E2E2E] px-5 py-2.5 font-[Manrope] text-sm font-medium text-white transition-all duration-300 hover:border-[#F64900] hover:text-[#F64900]"
    >
      Resume
      <HiArrowDownTray className="h-4 w-4" />
    </a>
  );
};

export default ResumeButton;