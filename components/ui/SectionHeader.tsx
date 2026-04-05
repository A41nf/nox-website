type SectionHeaderProps = {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  id?: string;
};

export default function SectionHeader({
  label,
  title,
  description,
  align = "left",
  id,
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div className={isCenter ? "text-center" : "text-start"}>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nox-red">
        {label}
      </p>
      <h2
        id={id}
        className="mt-3 text-3xl font-black uppercase leading-tight text-nox-white md:text-5xl"
      >
        {title}
      </h2>
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
