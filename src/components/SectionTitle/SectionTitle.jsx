const SectionTitle = ({ eyebrow, title, description, align = "left" }) => {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-4 ${alignment}`}>
      {eyebrow && (
        <span className="font-[Manrope] text-sm font-medium uppercase tracking-wider text-[#F64900]">
          {eyebrow}
        </span>
      )}
      <h2 className="font-[Space_Grotesk] text-3xl font-semibold text-white md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl font-[Manrope] text-base text-[#A1A1AA] md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;