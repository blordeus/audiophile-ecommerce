import { Link } from "react-router-dom";

function ButtonText({
  to,
  children = "Shop",
  className = "",
  onClick,
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`inline-flex items-center gap-[13px] text-[13px] font-bold uppercase tracking-[1px] text-black/50 transition-colors hover:text-[#D87D4A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D87D4A] ${className}`}
    >
      <span>{children}</span>
      <span aria-hidden="true" className="text-[#D87D4A]">
        &gt;
      </span>
    </Link>
  );
}

export default ButtonText;