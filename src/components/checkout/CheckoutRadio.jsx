function CheckoutRadio({
  label,
  name,
  value,
  checked,
  onChange,
}) {
  const radioId = `radio-${name}-${value}`;

  return (
    <label
      htmlFor={radioId}
      className={`flex cursor-pointer items-center gap-4 rounded-lg border px-4 py-[18px] transition-colors ${
        checked
          ? "border-[#D87D4A]"
          : "border-[#CFCFCF] hover:border-[#D87D4A]"
      }`}
    >
      <input
        id={radioId}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="h-5 w-5 accent-[#D87D4A]"
      />
      <span className="text-[14px] font-bold tracking-[-0.25px]">{label}</span>
    </label>
  );
}

export default CheckoutRadio;