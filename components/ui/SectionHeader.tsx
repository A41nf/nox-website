type SectionHeaderProps = {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  id?: string;
  as?: "h1" | "h2" | "h3";
};

export default function SectionHeader({
  label,
  title,
  description,
  align = "left",
  id,
  as: HeadingTag = "h2",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div className={isCenter ? "text-center" : "text-start"}>
      <p className="inline-block rounded bg-gradient-to-r from-nox-red to-red-700 px-1 py-0.5 text-xs font-semibold uppercase tracking-[0.2em] text-white">
        {label}
      </p>
      <HeadingTag
        id={id}
        className="mt-3 text-3xl font-black uppercase leading-tight text-nox-white md:text-5xl"
      >
        {title}
      </HeadingTag>
      <div
        className={
          isCenter
            ? "mx-auto mt-4 h-1 w-20 rounded bg-nox-red"
            : "mt-4 h-1 w-20 rounded bg-nox-red"
        }
      />
      {description ? (
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-nox-white/75 md:text-base text-start">
          {description}
        </p>
      ) : null}
    </div>
  );
}
