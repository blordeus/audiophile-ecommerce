import { useMemo } from "react";
import { Navigate, useParams } from "react-router-dom";
import SiteLayout from "../components/layout/SiteLayout";
import PageContainer from "../components/layout/PageContainer";
import BackLink from "../components/common/BackLink";
import CategoryCardsSection from "../components/common/CategoryCardsSection";
import ProductOverview from "../components/product/ProductOverview";
import ProductFeatures from "../components/product/ProductFeatures";
import ProductGallery from "../components/product/ProductGallery";
import RecommendedProducts from "../components/product/RecommendedProducts";
import products from "../data/data.json";

function ProductPage() {
  const { slug } = useParams();

  const product = useMemo(
    () => products.find((item) => item.slug === slug),
    [slug]
  );

  if (!product) {
    return <Navigate to="/" replace />;
  }

  return (
    <SiteLayout>
      <PageContainer className="py-4 md:py-8 lg:py-20">
        <BackLink className="mb-6 inline-flex md:mb-10 lg:mb-14" />

        <ProductOverview product={product} />

        <div className="mt-20 md:mt-24 lg:mt-32">
          <ProductFeatures product={product} />
        </div>

        <div className="mt-20 md:mt-24 lg:mt-32">
          <ProductGallery product={product} />
        </div>

        <div className="mt-24 md:mt-32 lg:mt-40">
          <RecommendedProducts product={product} />
        </div>
      </PageContainer>

      <CategoryCardsSection className="py-24 md:py-32 lg:py-40" />
    </SiteLayout>
  );
}

export default ProductPage;