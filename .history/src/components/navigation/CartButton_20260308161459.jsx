import iconCart from "../../assets/icons/icon-cart.svg";
import { useCart } from "../../hooks/useCart";

function CartButton({ onClick }) {
  const { cartCount } = useCart();

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Open cart"
      className="relative shrink-0"
    >
      <img src={iconCart} alt="" />

      {cartCount > 0 && (
        <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#D87D4A] px-1 text-[10px] font-bold text-white">
          {cartCount}
        </span>
      )}
    </button>
  );
}

export default CartButton;