import PageContainer from "../layout/PageContainer";
import CategoryCard from "./CategoryCard";
import { categories } from "../../data/categories";

function CategoryCardsSection({ className = "" }) {
  return (
    <section className={className} aria-label="Product categories">
      <PageContainer>
        <div className="grid gap-16 md:grid-cols-3 md:gap-3 lg:gap-8">
          {categories.map((category) => (
            <CategoryCard
              key={category.slug}
              title={category.title}
              image={category.image}
              to={category.href}
            />
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

export default CategoryCardsSection;