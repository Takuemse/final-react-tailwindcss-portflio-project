import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      className="font-[Space_Grotesk] text-xl font-bold text-white transition-colors duration-300 hover:text-[#F64900]"
    >
      Takudzwa<span className="text-[#F64900]">.</span>
    </Link>
  );
};

export default Logo;