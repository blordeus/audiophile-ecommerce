import { formatCurrency } from "../../utils/currency";

function Row({ label, value, highlight = false }) {
  return (
    <div className="flex items-center justify-between">
      <p className="text-[15px] font-medium uppercase text-black/50">{label}</p>
      <p
        className={`text-[18px] font-bold uppercase ${
          highlight ? "text-[#D87D4A]" : "text-black"
        }`}
      >
        {formatCurrency(value)}
      </p>
    </div>
  );
}

function CheckoutTotals({ productTotal, shipping, vat, grandTotal }) {
  return (
    <div className="mt-8 space-y-2">
      <Row label="Total" value={productTotal} />
      <Row label="Shipping" value={shipping} />
      <Row label="VAT (Included)" value={vat} />

      <div className="pt-4">
        <Row label="Grand Total" value={grandTotal} highlight />
      </div>
    </div>
  );
}

export default CheckoutTotals;