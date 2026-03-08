function Overlay({ isOpen, onClick, className = "" }) {
  if (!isOpen) return null;

  return (
    <div
      aria-hidden="true"
      onClick={onClick}
      className={`fixed inset-0 z-40 bg-black/50 ${className}`}
    />
  );
}

export default Overlay;