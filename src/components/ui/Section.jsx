const Section = ({ id, children, className = "" }) => {
  return (
    <section id={id} className={`px-6 py-24 md:px-12 lg:px-24 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
};

export default Section;