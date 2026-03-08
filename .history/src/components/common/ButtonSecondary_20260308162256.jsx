import { Link } from "react-router-dom";

function ButtonSecondary({
  children,
  type = "button",
  onClick,
  disabled = false,
  className = "",
  as = "button",
  to,
}) {
  const classes =
    `inline-flex h-12 items-center justify-center border border-black bg-transparent px-8 text-[13px] font-bold uppercase tracking-[1px] text-black transition-colors hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:cursor-not-allowed disabled:opacity-50 ${className}`;

  if (as === "link" && to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}

export default ButtonSecondary;