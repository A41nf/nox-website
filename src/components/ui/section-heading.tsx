type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "right" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "right",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-right";

  return (
    <div className={`max-w-3xl ${alignClass}`}>
      <p className="text-xs font-bold tracking-[0.35em] text-[#E80028]">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-black leading-tight text-white md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-white/80 md:text-lg">{description}</p>
    </div>
  );
}
