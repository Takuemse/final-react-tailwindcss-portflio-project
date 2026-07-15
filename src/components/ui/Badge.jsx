const Badge = ({ children, className = "" }) => {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-[#2E2E2E] bg-[#171717] px-3 py-1 font-[Manrope] text-xs font-medium text-[#A1A1AA] ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;