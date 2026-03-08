import PageContainer from "../layout/PageContainer";

function CategoryHero({ title }) {
  return (
    <section className="bg-[#101010] py-8 text-white md:py-24">
      <PageContainer>
        <h1 className="heading-4 text-center md:text-[40px] md:leading-[44px] md:tracking-[1.43px]">
          {title}
        </h1>
      </PageContainer>
    </section>
  );
}

export default CategoryHero;