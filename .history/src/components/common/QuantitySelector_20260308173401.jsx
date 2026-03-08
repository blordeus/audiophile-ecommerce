function QuantitySelector({
  quantity,
  onDecrease,
  onIncrease,
  className = "",
  size = "default",
}) {
  const isCompact = size === "compact";

  return (
    <div
      className={`inline-flex items-center bg-[#F1F1F1] ${
        isCompact ? "h-8" : "h-12"
      } ${className}`}
      aria-label="Quantity selector"
    >
      <button
        type="button"
        onClick={onDecrease}
        className={`flex h-full items-center justify-center text-[13px] font-bold text-black/25 transition-colors hover:text-[#D87D4A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#D87D4A] ${
          isCompact ? "w-8" : "w-10"
        }`}
        aria-label="Decrease quantity"
      >
        -
      </button>

      <span
        className={`flex items-center justify-center text-[13px] font-bold ${
          isCompact ? "w-6" : "w-8"
        }`}
      >
        {quantity}
      </span>

      <button
        type="button"
        onClick={onIncrease}
        className={`flex h-full items-center justify-center text-[13px] font-bold text-black/25 transition-colors hover:text-[#D87D4A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#D87D4A] ${
          isCompact ? "w-8" : "w-10"
        }`}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}

export default QuantitySelector;