import { homeContent } from "../../data/home";
import PageContainer from "../layout/PageContainer";
import ButtonSecondary from "../common/ButtonSecondary";

function FeaturedYX1Section() {
  const { yx1 } = homeContent;

  return (
    <section className="mt-8">
      <PageContainer>
        <div className="grid gap-6 md:grid-cols-2 md:gap-[11px] lg:gap-[30px]">
          <div className="overflow-hidden rounded-lg">
            <picture>
              <source media="(min-width: 1024px)" srcSet={yx1.images.desktop} />
              <source media="(min-width: 768px)" srcSet={yx1.images.tablet} />
              <img
                src={yx1.images.mobile}
                alt="yx1 earphones"
                className="h-full w-full object-cover"
              />
            </picture>
          </div>

          <div className="flex min-h-[200px] flex-col justify-center rounded-lg bg-[#F1F1F1] px-6 py-10 md:px-10 lg:px-24">
            <h2 className="heading-4">{yx1.title}</h2>

            <ButtonSecondary
              as="link"
              to={yx1.ctaHref}
              className="mt-8 self-start"
            >
              {yx1.ctaLabel}
            </ButtonSecondary>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export default FeaturedYX1Section;