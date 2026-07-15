import { NavLink } from "react-router-dom";
import { navLinks } from "../../data/navLinks";

const NavLinks = ({ onLinkClick, className = "" }) => {
  return (
    <ul className={`flex gap-8 ${className}`}>
      {navLinks.map((link) => (
        <li key={link.id}>
          <NavLink
            to={link.path}
            onClick={onLinkClick}
            className={({ isActive }) =>
              `font-[Manrope] text-sm font-medium transition-colors duration-300 ${
                isActive ? "text-[#F64900]" : "text-[#A1A1AA] hover:text-white"
              }`
            }
          >
            {link.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;