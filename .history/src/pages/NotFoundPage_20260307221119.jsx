import SiteLayout from "../components/layout/SiteLayout";
import PageContainer from "../components/layout/PageContainer";

function HomePage() {
  return (
    <SiteLayout>
      <PageContainer className="py-20">
        <h1 className="heading-2">404 Not Found</h1>
      </PageContainer>
    </SiteLayout>
  );
}

export default HomePage;