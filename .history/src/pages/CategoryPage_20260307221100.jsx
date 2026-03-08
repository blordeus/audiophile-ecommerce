import SiteLayout from "../components/layout/SiteLayout";
import PageContainer from "../components/layout/PageContainer";

function CategoryPage() {
  return (
    <SiteLayout>
      <PageContainer className="py-20">
        <h1 className="heading-2">Category</h1>
      </PageContainer>
    </SiteLayout>
  );
}

export default CategoryPage;