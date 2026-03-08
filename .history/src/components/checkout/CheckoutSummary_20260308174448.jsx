import ButtonPrimary from "../common/ButtonPrimary";
import { useCart } from "../../hooks/useCart";
import { formatCurrency } from "../../utils/currency";
import { getShortCartName } from "../../utils/cart";
import CheckoutTotals from "./CheckoutTotals";

function CheckoutSummary({ onSubmitOrder }) {
  const { cartItems, productTotal, shipping, vat, grandTotal } = useCart();

  return (
    <aside className="rounded-lg bg-white p-6 md:p-8">
      <h2 className="heading-6">Summary</h2>

      <div className="mt-8 space-y-6">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center gap-4">
            <img
              src={item.image?.mobile || item.image}
              alt={item.name}
              className="h-16 w-16 rounded-lg object-cover"
            />

            <div className="min-w-0 flex-1">
              <h3 className="truncate text-[15px] font-bold uppercase leading-[25px]">
                {getShortCartName(item.name)}
              </h3>
              <p className="text-[14px] font-bold leading-[25px] text-black/50">
                {formatCurrency(item.price)}
              </p>
            </div>

            <p className="text-[15px] font-bold leading-[25px] text-black/50">
              x{item.quantity}
            </p>
          </div>
        ))}
      </div>

      <CheckoutTotals
        productTotal={productTotal}
        shipping={shipping}
        vat={vat}
        grandTotal={grandTotal}
      />

      <ButtonPrimary onClick={onSubmitOrder} className="mt-8 w-full">
        Continue & Pay
      </ButtonPrimary>
    </aside>
  );
}

export default CheckoutSummary;