import { formatCurrency } from "../../utils/currency";
import { getShortCartName } from "../../utils/cart";

function OrderConfirmationSummary({ items, grandTotal }) {
  const firstItem = items[0];
  const remainingItemCount = items.length - 1;

  return (
    <div className="overflow-hidden rounded-lg lg:grid lg:grid-cols-[1fr_198px]">
      <div className="bg-[#F1F1F1] p-6">
        <div className="flex items-center gap-4">
          <img
            src={firstItem.image?.mobile || firstItem.image}
            alt={firstItem.name}
            className="h-12 w-12 rounded-lg object-cover"
          />

          <div className="min-w-0 flex-1">
            <h3 className="truncate text-[15px] font-bold uppercase leading-[25px]">
              {getShortCartName(firstItem.name)}
            </h3>
            <p className="text-[14px] font-bold leading-[25px] text-black/50">
              {formatCurrency(firstItem.price)}
            </p>
          </div>

          <p className="text-[15px] font-bold leading-[25px] text-black/50">
            x{firstItem.quantity}
          </p>
        </div>

        {remainingItemCount > 0 && (
          <>
            <div className="mt-3 border-t border-black/8 pt-3 text-center">
              <p className="text-[12px] font-bold tracking-[-0.21px] text-black/50">
                {`and ${remainingItemCount} other item${
                  remainingItemCount > 1 ? "s" : ""
                }`}
              </p>
            </div>
          </>
        )}
      </div>

      <div className="bg-black px-6 py-4 text-white lg:flex lg:flex-col lg:justify-end lg:py-10">
        <p className="text-[15px] font-medium uppercase text-white/50">
          Grand Total
        </p>
        <p className="mt-2 text-[18px] font-bold uppercase">
          {formatCurrency(grandTotal)}
        </p>
      </div>
    </div>
  );
}

export default OrderConfirmationSummary;