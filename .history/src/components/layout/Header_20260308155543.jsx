import { Link, NavLink } from "react-router-dom";
import PageContainer from "./PageContainer";
import { primaryNavLinks } from "../../data/navigation";
import logo from "../../assets/icons/logo.svg";
import iconHamburger from "../../assets/icons/icon-hamburger.svg";
import iconCart from "../../assets/icons/icon-cart.svg";

function Header() {
  return (
    <header className="bg-[#101010] text-white">
      <PageContainer>
        <div className="flex h-24 items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-10">
            <button
              type="button"
              aria-label="Open menu"
              className="flex lg:hidden"
            >
              <img src={iconHamburger} alt="" />
            </button>

            <Link to="/" className="shrink-0">
              <img src={logo} alt="Audiophile" />
            </Link>
          </div>

          <nav className="hidden lg:block" aria-label="Primary navigation">
            <ul className="flex items-center gap-9">
              {primaryNavLinks.map((link) => (
                <li key={link.href}>
                  <NavLink
                    to={link.href}
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

          <button type="button" aria-label="Open cart" className="shrink-0">
            <img src={iconCart} alt="" />
          </button>
        </div>
      </PageContainer>
    </header>
  );
}

export default Header;