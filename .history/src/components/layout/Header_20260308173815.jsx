import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PageContainer from "./PageContainer";
import logo from "../../assets/icons/logo.svg";
import PrimaryNav from "../navigation/PrimaryNav";
import MenuButton from "../navigation/MenuButton";
import CartButton from "../navigation/CartButton";
import MobileMenu from "../navigation/MobileMenu";
import CartOverlay from "../cart/CartOverlay";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    setIsCartOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMenuOpen || isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen, isCartOpen]);

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

  function handleCloseCart() {
    setIsCartOpen(false);
  }

  return (
    <header className="relative bg-[#101010] text-white">
      <PageContainer>
        <div className="flex h-24 items-center border-b border-white/10">
          <div className="flex flex-1 items-center lg:flex-none">
            <div className="mr-10 lg:hidden">
              <MenuButton onClick={handleToggleMenu} />
            </div>

            <Link to="/" className="shrink-0">
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
      <CartOverlay isOpen={isCartOpen} onClose={handleCloseCart} />
    </header>
  );
}

export default Header;