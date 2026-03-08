import { Link } from "react-router-dom";
import ButtonText from "./ButtonText";

function CategoryCard({ title, image, to }) {
  return (
    <article className="relative rounded-lg bg-[#F1F1F1] px-6 pb-6 pt-22 text-center">
      <img
        src={image}
        alt=""
        className="absolute left-1/2 top-0 w-[140px] -translate-x-1/2 -translate-y-1/2"
      />

      <h2 className="heading-6">{title}</h2>

      <ButtonText to={to} className="mt-4 justify-center" />
    </article>
  );
}

export default CategoryCard;