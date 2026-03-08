import { formatCurrency } from "../../utils/currency";

function CartSummary({ total }) {
  return (
    <div className="mt-8 flex items-center justify-between">
      <p className="text-[15px] font-medium uppercase text-black/50">Total</p>
      <p className="text-[18px] font-bold uppercase">
        {formatCurrency(total)}
      </p>
    </div>
  );
}

export default CartSummary;