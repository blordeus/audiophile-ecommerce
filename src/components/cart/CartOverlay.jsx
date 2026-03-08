import { Link } from "react-router-dom";
import Overlay from "../common/Overlay";
import ButtonPrimary from "../common/ButtonPrimary";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import { useCart } from "../../hooks/useCart";

function CartOverlay({ isOpen, onClose }) {
  const {
    cartItems,
    cartCount,
    productTotal,
    clearCart,
    updateQuantity,
  } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div className="absolute left-6 right-6 top-full z-50 mt-6 rounded-lg bg-white p-7 text-black shadow-lg md:left-auto md:right-10 md:w-[377px] md:p-8 xl:right-[calc((100vw-1110px)/2)]">
        <div className="flex items-center justify-between">
          <h2 className="heading-6">{`Cart (${cartCount})`}</h2>

          {cartItems.length > 0 && (
            <button
              type="button"
              onClick={clearCart}
              className="body-text text-black/50 underline transition-colors hover:text-[#D87D4A]"
            >
              Remove all
            </button>
          )}
        </div>

        {cartItems.length === 0 ? (
          <div className="mt-8">
            <p className="body-text text-black/50">Your cart is empty.</p>
          </div>
        ) : (
          <>
            <div className="mt-8 space-y-6">
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onDecrease={() =>
                    updateQuantity(item.id, Math.max(0, item.quantity - 1))
                  }
                  onIncrease={() =>
                    updateQuantity(item.id, item.quantity + 1)
                  }
                />
              ))}
            </div>

            <CartSummary total={productTotal} />

            <ButtonPrimary
              as="link"
              to="/checkout"
              onClick={onClose}
              className="mt-6 w-full"
            >
              Checkout
            </ButtonPrimary>
          </>
        )}
      </div>

      <Overlay isOpen={isOpen} onClick={onClose} className="top-24 z-40" />
    </>
  );
}

export default CartOverlay;