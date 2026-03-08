import QuantitySelector from "../common/QuantitySelector";
import { formatCurrency } from "../../utils/currency";
import { getShortCartName } from "../../utils/cart";

function CartItem({ item, onDecrease, onIncrease }) {
  return (
    <div className="flex items-center gap-4">
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

      <QuantitySelector
        quantity={item.quantity}
        onDecrease={onDecrease}
        onIncrease={onIncrease}
        className="h-8 [&>button]:w-8 [&>span]:w-6"
      />
    </div>
  );
}

export default CartItem;