import SiteLayout from "../components/layout/SiteLayout";
import PageContainer from "../components/layout/PageContainer";

function ProductPage() {
  return (
    <SiteLayout>
      <PageContainer className="py-20">
        <h1 className="heading-2">Product Page</h1>
      </PageContainer>
    </SiteLayout>
  );
}

export default ProductPage;