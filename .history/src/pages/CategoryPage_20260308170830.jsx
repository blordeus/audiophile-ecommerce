import { useMemo } from "react";
import { Navigate, useParams } from "react-router-dom";
import SiteLayout from "../components/layout/SiteLayout";
import CategoryHero from "../components/product/CategoryHero";
import CategoryProductList from "../components/product/CategoryProductList";
import CategoryCardsSection from "../components/common/CategoryCardsSection";
import products from "../data/data.json";

const validCategories = ["headphones", "speakers", "earphones"];

function CategoryPage() {
  const { category } = useParams();

  const normalizedCategory = category?.toLowerCase();

  const categoryProducts = useMemo(() => {
    return products.filter((product) => product.category === normalizedCategory);
  }, [normalizedCategory]);

  if (!validCategories.includes(normalizedCategory)) {
    return <Navigate to="/404" replace />;
  }

  const title =
    normalizedCategory.charAt(0).toUpperCase() + normalizedCategory.slice(1);

  return (
    <SiteLayout>
      <CategoryHero title={title} />
      <CategoryProductList products={categoryProducts} />
      <CategoryCardsSection className="pb-30 md:pb-24 lg:pb-40" />
    </SiteLayout>
  );
}

export default CategoryPage;