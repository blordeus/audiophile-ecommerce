import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageContainer from "./PageContainer";
import logo from "../../assets/icons/logo.svg";
import PrimaryNav from "../navigation/PrimaryNav";
import MenuButton from "../navigation/MenuButton";
import CartButton from "../navigation/CartButton";
import MobileMenu from "../navigation/MobileMenu";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  function handleToggleMenu() {
    setIsMenuOpen((prev) => !prev);
    setIsCartOpen(false);
  }

  function handleCloseMenu() {
    setIsMenuOpen(false);
  }

  function handleToggleCart() {
    setIsCartOpen((prev) => !prev);
    setIsMenuOpen(false);
  }

  return (
    <header className="relative bg-[#101010] text-white">
      <PageContainer>
        <div className="flex h-24 items-center border-b border-white/10">
          <div className="flex flex-1 items-center lg:flex-none">
            <div className="mr-10 lg:hidden">
              <MenuButton onClick={handleToggleMenu} />
            </div>

            <Link to="/" className="shrink-0" onClick={handleCloseMenu}>
              <img src={logo} alt="Audiophile" />
            </Link>
          </div>

          <PrimaryNav className="hidden flex-1 justify-center lg:flex" />

          <div className="flex flex-1 justify-end lg:flex-none">
            <CartButton onClick={handleToggleCart} />
          </div>
        </div>
      </PageContainer>

      <MobileMenu isOpen={isMenuOpen} onClose={handleCloseMenu} />

      {isCartOpen ? (
        <div className="absolute right-6 top-full z-50 mt-6 rounded-lg bg-white p-6 text-black shadow-lg md:right-10 xl:right-[calc((100vw-1110px)/2)]">
          Cart placeholder
        </div>
      ) : null}
    </header>
  );
}

export default Header;