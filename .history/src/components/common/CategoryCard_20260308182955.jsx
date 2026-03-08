import ButtonText from "./ButtonText";

function CategoryCard({ title, image, to, onClick }) {
  return (
    <article className="relative rounded-lg bg-[#F1F1F1] px-6 pb-8 pt-20 text-center">
      <img
        src={image}
        alt="{image}"
        className="absolute left-1/2 top-0 w-[140px] -translate-x-1/2 -translate-y-1/2 md:w-[150px]"
      />

      <h2 className="heading-6">{title}</h2>

      <ButtonText to={to} onClick={onClick} className="mt-4 justify-center" />
    </article>
  );
}

export default CategoryCard;