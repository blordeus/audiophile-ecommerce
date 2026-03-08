import { homeContent } from "../../data/home";
import PageContainer from "../layout/PageContainer";
import ButtonSecondary from "../common/ButtonSecondary";
import patternCircles from "../../assets/images/home/desktop/pattern-circles.svg";

function FeaturedZX9Section() {
  const { zx9 } = homeContent;

  return (
    <section className="mt-0">
      <PageContainer>
        <div className="relative overflow-hidden rounded-lg bg-[#D87D4A] text-white lg:min-h-[560px]">
          <img
            src={patternCircles}
            alt="Circular pattern"
            className="pointer-events-none absolute left-1/2 top-0 z-0 max-w-none -translate-x-1/2 md:top-[-120px] lg:left-[0] lg:top-1/2 lg:w-[944px] lg:-translate-y-1/2 lg:translate-x-[-32%]"
          />

          <div className="relative z-10 grid gap-10 px-6 py-14 text-center md:px-16 md:py-16 lg:grid-cols-2 lg:items-center lg:px-24 lg:py-0 lg:text-left">
            <div className="flex justify-center lg:h-full lg:items-end lg:justify-start">
              <picture>
                <source media="(min-width: 1024px)" srcSet={zx9.images.desktop} />
                <source media="(min-width: 768px)" srcSet={zx9.images.tablet} />
                <img
                  src={zx9.images.mobile}
                  alt={zx9.title}
                  className="w-[172px] md:w-[197px] lg:w-[410px]"
                />
              </picture>
            </div>

            <div className="mx-auto max-w-[349px] lg:mx-0 lg:self-center">
              <h2 className="text-[36px] font-bold uppercase leading-[40px] tracking-[1.29px] md:text-[56px] md:leading-[58px] md:tracking-[2px]">
                {zx9.title}
              </h2>

              <p className="body-text mt-6 text-white/75">
                {zx9.description}
              </p>

              <ButtonSecondary
                as="link"
                to={zx9.ctaHref}
                className="mt-8 border-black bg-black text-white hover:bg-[#4C4C4C] hover:text-white"
              >
                {zx9.ctaLabel}
              </ButtonSecondary>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export default FeaturedZX9Section;