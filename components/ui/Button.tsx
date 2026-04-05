import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  className?: string;
  ariaLabel?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
};

const baseClasses =
  "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nox-red disabled:cursor-not-allowed disabled:opacity-60";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-nox-red text-nox-white hover:bg-red-700 hover:shadow-[0_0_30px_rgba(232,0,40,0.35)]",
  secondary:
    "border border-nox-red bg-transparent text-nox-white hover:bg-nox-red/10 hover:shadow-[0_0_20px_rgba(232,0,40,0.25)]",
  ghost: "bg-transparent text-nox-white hover:bg-white/10",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm md:text-base",
  lg: "h-13 px-8 text-base md:text-lg",
};

function joinClasses(...classes: Array<string | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  className,
  ariaLabel,
  href,
  onClick,
  type = "button",
  disabled = false,
  target,
  rel,
}: ButtonProps) {
  const classes = joinClasses(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        aria-label={ariaLabel}
        onClick={onClick}
        target={target}
        rel={rel}
      >
        {loading ? "Loading..." : children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      aria-label={ariaLabel}
      disabled={loading || disabled}
      onClick={onClick}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
