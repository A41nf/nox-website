import Link from "next/link";

type NoxButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  target?: string;
  rel?: string;
};

const variants = {
  primary:
    "bg-[#E80028] text-white shadow-[0_18px_50px_rgba(232,0,40,0.28)] hover:bg-[#ff2346]",
  secondary:
    "border border-white/15 bg-white/5 text-white hover:border-[#E80028] hover:bg-[#E80028]/10",
  ghost: "text-white/80 hover:bg-white/5 hover:text-white",
};

export function NoxButton({
  children,
  href,
  variant = "primary",
  className = "",
  target,
  rel,
}: NoxButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0D0D] ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}
