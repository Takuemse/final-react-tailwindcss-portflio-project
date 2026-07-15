import { HiXMark } from "react-icons/hi2";
import NavLinks from "./NavLinks";
import ResumeButton from "./ResumeButton";

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-50 bg-[#0A0A0A] transition-transform duration-300 md:hidden ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex items-center justify-end px-6 py-6">
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="text-white transition-colors duration-300 hover:text-[#F64900]"
        >
          <HiXMark className="h-7 w-7" />
        </button>
      </div>

      <div className="flex flex-col items-center gap-10 px-6 py-12">
        <NavLinks onLinkClick={onClose} className="flex-col items-center gap-8 text-lg" />
        <ResumeButton />
      </div>
    </div>
  );
};

export default MobileMenu;