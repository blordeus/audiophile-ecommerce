function CheckoutInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  placeholder = "",
  className = "",
}) {
  const inputId = `input-${name}`;

  return (
    <div className={className}>
      <div className="mb-2 flex items-center justify-between">
        <label
          htmlFor={inputId}
          className={`text-[12px] font-bold leading-4 tracking-[-0.21px] ${
            error ? "text-[#CD2C2C]" : "text-black"
          }`}
        >
          {label}
        </label>

        {error && (
          <p className="text-[12px] font-medium leading-4 tracking-[-0.21px] text-[#CD2C2C]">
            {error}
          </p>
        )}
      </div>

      <input
        id={inputId}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`h-14 w-full rounded-lg border px-6 text-[14px] font-bold tracking-[-0.25px] outline-none transition-colors placeholder:text-black/40 ${
          error
            ? "border-[#CD2C2C]"
            : "border-[#CFCFCF] hover:border-[#D87D4A] focus:border-[#D87D4A]"
        }`}
      />
    </div>
  );
}

export default CheckoutInput;