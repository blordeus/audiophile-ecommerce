function Overlay({ isOpen, onClick, className = "" }) {
  if (!isOpen) return null;

  return (
    <button
      type="button"
      aria-label="Close overlay"
      onClick={onClick}
      className={`fixed inset-0 z-40 bg-black/50 ${className}`}
    />
  );
}

export default Overlay;