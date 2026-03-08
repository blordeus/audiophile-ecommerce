import { NavLink } from "react-router-dom";
import { primaryNavLinks } from "../../data/navigation";

function PrimaryNav({ className = "" }) {
  return (
    <nav className={className} aria-label="Primary navigation">
      <ul className="flex items-center gap-9">
        {primaryNavLinks.map((link) => (
          <li key={link.href}>
            <NavLink
              to={link.href}
              end={link.href === "/"}
              className={({ isActive }) =>
                `text-[13px] font-bold uppercase tracking-[2px] transition-colors ${
                  isActive ? "text-[#D87D4A]" : "text-white hover:text-[#D87D4A]"
                }`
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default PrimaryNav;