import { Link, NavLink } from "react-router-dom";
import PageContainer from "./PageContainer";
import { primaryNavLinks } from "../../data/navigation";
import logo from "../../assets/icons/logo.svg";
import iconFacebook from "../../assets/icons/icon-facebook.svg";
import iconTwitter from "../../assets/icons/icon-twitter.svg";
import iconInstagram from "../../assets/icons/icon-instagram.svg";

function Footer() {
  return (
    <footer className="mt-30 bg-black text-white">
      <PageContainer>
        <div className="w-[101px] border-t-4 border-[#D87D4A]" />

        <div className="flex flex-col gap-12 py-13 md:py-15 lg:py-19">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
            <Link to="/" className="shrink-0">
              <img src={logo} alt="Audiophile" />
            </Link>

            <nav aria-label="Footer navigation">
              <ul className="flex flex-col gap-4 md:flex-row md:gap-9">
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
          </div>

          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-[540px] space-y-14">
              <p className="body-text text-white/50">
                Audiophile is an all in one stop to fulfill your audio needs.
                We're a small team of music lovers and sound specialists who are
                devoted to helping you get the most out of personal audio. Come
                and visit our demo facility. We’re open 7 days a week.
              </p>

              <p className="body-text font-bold text-white/50">
                Copyright 2021. All Rights Reserved
              </p>
            </div>

            <div className="flex items-center gap-4">
              <a href="#" aria-label="Facebook" className="transition-opacity hover:opacity-70">
                <img src={iconFacebook} alt="" />
              </a>
              <a href="#" aria-label="Twitter" className="transition-opacity hover:opacity-70">
                <img src={iconTwitter} alt="" />
              </a>
              <a href="#" aria-label="Instagram" className="transition-opacity hover:opacity-70">
                <img src={iconInstagram} alt="" />
              </a>
            </div>
          </div>
        </div>
      </PageContainer>
    </footer>
  );
}

export default Footer;