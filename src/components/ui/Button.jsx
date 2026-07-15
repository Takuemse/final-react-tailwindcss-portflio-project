import { Link } from "react-router-dom";

const Button = ({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  type = "button",
  className = "",
}) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-[Manrope] text-sm font-medium transition-all duration-300";

  const variants = {
    primary:
      "bg-[#F64900] text-white hover:bg-[#EA580C] hover:-translate-y-0.5",
    secondary:
      "border border-[#2E2E2E] text-white hover:border-[#F64900] hover:text-[#F64900]",
    ghost: "text-[#A1A1AA] hover:text-white",
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={styles}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={styles}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  );
};

export default Button;