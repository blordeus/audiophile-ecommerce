import Overlay from "../common/Overlay";
import CategoryCard from "../common/CategoryCard";
import { categories } from "../../data/categories";

function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <>
      <div className="absolute left-0 right-0 top-full z-50 rounded-b-lg bg-white py-8 md:py-14 lg:hidden">
        <div className="mx-auto w-full max-w-[1110px] px-6 md:px-10">
          <div className="grid gap-16 md:grid-cols-3 md:gap-3">
            {categories.map((category) => (
              <CategoryCard
                key={category.slug}
                title={category.title}
                image={category.image}
                to={category.href}
              />
            ))}
          </div>
        </div>
      </div>

      <Overlay isOpen={isOpen} onClick={onClose} className="top-24 z-40" />
    </>
  );
}

export default MobileMenu;