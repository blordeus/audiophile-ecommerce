import iconHamburger from "../../assets/icons/icon-hamburger.svg";

function MenuButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Open menu"
      className="flex lg:hidden"
    >
      <img src={iconHamburger} alt="" />
    </button>
  );
}

export default MenuButton;