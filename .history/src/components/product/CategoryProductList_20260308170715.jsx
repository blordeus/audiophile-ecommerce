import PageContainer from "../layout/PageContainer";
import CategoryProductCard from "./CategoryProductCard";

function CategoryProductList({ products }) {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <PageContainer>
        <div className="space-y-24 md:space-y-32 lg:space-y-40">
          {products.map((product, index) => (
            <CategoryProductCard
              key={product.id}
              product={product}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

export default CategoryProductList;