import { Link } from "react-router-dom";

const navItems = [
  { id: "home", label: "Home", path: "/" },
  { id: "about", label: "About", path: "/about" },
  { id: "projects", label: "Projects", path: "/projects" },
  { id: "contact", label: "Contact", path: "/contact" },
];

const Navigation = ({ activeSection }) => {
  return (
    <nav className="flex items-center gap-8">
      {navItems.map(({ id, label, path }) => {
        const isActive = activeSection === id;

        return (
          <Link
            key={id}
            to={path}
            className={`group relative py-2 font-[Manrope] text-sm font-medium transition-colors duration-300 ${
              isActive ? "text-white" : "text-[#A1A1AA] hover:text-white"
            }`}
          >
            {label}
            <span
              className={`absolute bottom-0 left-0 h-[1.5px] w-full origin-center bg-[#F64900] transition-transform duration-300 ease-out ${
                isActive
                  ? "scale-x-100"
                  : "scale-x-0 group-hover:scale-x-100"
              }`}
            />
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;