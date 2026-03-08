import { useState } from "react";
import SiteLayout from "../components/layout/SiteLayout";
import PageContainer from "../components/layout/PageContainer";
import ButtonPrimary from "../components/common/ButtonPrimary";
import ButtonSecondary from "../components/common/ButtonSecondary";
import ButtonText from "../components/common/ButtonText";
import QuantitySelector from "../components/common/QuantitySelector";
import BackLink from "../components/common/BackLink";
import CategoryCardsSection from "../components/common/CategoryCardsSection";

function HomePage() {
  const [quantity, setQuantity] = useState(1);

  return (
    <SiteLayout>
      <PageContainer className="py-20">
        <div className="space-y-8">
          <h1 className="heading-2">UI Primitives Preview</h1>

          <div className="flex flex-wrap items-center gap-4">
            <ButtonPrimary>See Product</ButtonPrimary>
            <ButtonSecondary>See Product</ButtonSecondary>
            <ButtonText to="/">Shop</ButtonText>
          </div>

          <QuantitySelector
            quantity={quantity}
            onDecrease={() => setQuantity((prev) => Math.max(1, prev - 1))}
            onIncrease={() => setQuantity((prev) => prev + 1)}
          />

          <BackLink />
        </div>
      </PageContainer>

      <CategoryCardsSection className="py-20" />
    </SiteLayout>
  );
}

export default HomePage;