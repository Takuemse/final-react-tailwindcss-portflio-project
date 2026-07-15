const SkillCard = ({ icon: Icon, name, category }) => {
  return (
    <div className="group flex flex-col items-center gap-3 rounded-2xl border border-[#2E2E2E] bg-[#171717] p-6 text-center transition-all duration-300 hover:border-[#F64900]/50 hover:-translate-y-1">
      <Icon className="h-8 w-8 text-[#A1A1AA] transition-colors duration-300 group-hover:text-[#F64900]" />
      <span className="font-[Manrope] text-sm font-medium text-white">{name}</span>
      {category && (
        <span className="font-[Manrope] text-xs text-[#A1A1AA]">{category}</span>
      )}
    </div>
  );
};

export default SkillCard;