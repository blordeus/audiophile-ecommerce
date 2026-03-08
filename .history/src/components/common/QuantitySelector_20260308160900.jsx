function QuantitySelector({
  quantity,
  onDecrease,
  onIncrease,
  className = "",
}) {
  return (
    <div
      className={`inline-flex h-12 items-center bg-[#F1F1F1] ${className}`}
      aria-label="Quantity selector"
    >
      <button
        type="button"
        onClick={onDecrease}
        className="flex h-full w-10 items-center justify-center text-[13px] font-bold text-black/25 transition-colors hover:text-[#D87D4A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#D87D4A]"
        aria-label="Decrease quantity"
      >
        -
      </button>

      <span className="flex w-8 items-center justify-center text-[13px] font-bold">
        {quantity}
      </span>

      <button
        type="button"
        onClick={onIncrease}
        className="flex h-full w-10 items-center justify-center text-[13px] font-bold text-black/25 transition-colors hover:text-[#D87D4A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#D87D4A]"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}

export default QuantitySelector;