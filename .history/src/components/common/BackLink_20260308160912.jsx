import { useNavigate } from "react-router-dom";

function BackLink({ children = "Go Back", className = "" }) {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate(-1)}
      className={`body-text text-black/50 transition-colors hover:text-[#D87D4A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D87D4A] ${className}`}
    >
      {children}
    </button>
  );
}

export default BackLink;