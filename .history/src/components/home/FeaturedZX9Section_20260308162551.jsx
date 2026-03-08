import { homeContent } from "../../data/home";
import PageContainer from "../layout/PageContainer";
import ButtonSecondary from "../common/ButtonSecondary";
import patternCircles from "../../assets/images/home/desktop/pattern-circles.svg";

function FeaturedZX9Section() {
  const { zx9 } = homeContent;

  return (
    <section className="mt-24 md:mt-32 lg:mt-40">
      <PageContainer>
        <div className="relative overflow-hidden rounded-lg bg-[#D87D4A] px-6 pb-14 pt-14 text-center text-white md:px-14 md:pb-16 md:pt-16 lg:grid lg:min-h-[560px] lg:grid-cols-2 lg:items-end lg:px-24 lg:pb-0 lg:pt-0 lg:text-left">
          <div className="relative z-10 flex justify-center lg:h-full lg:items-end">
            <picture>
              <source media="(min-width: 1024px)" srcSet={zx9.images.desktop} />
              <source media="(min-width: 768px)" srcSet={zx9.images.tablet} />
              <img
                src={zx9.images.mobile}
                alt=""
                className="mx-auto w-[172px] md:w-[197px] lg:w-[410px]"
              />
            </picture>
          </div>
          

          <div className="relative z-10 mt-8 md:mt-16 lg:mt-0 lg:max-w-[349px] lg:self-center">
            <h2 className="text-[36px] font-bold uppercase leading-[40px] tracking-[1.29px] md:text-[56px] md:leading-[58px] md:tracking-[2px]">
              {zx9.title}
            </h2>

            <p className="body-text mt-6 text-white/75">{zx9.description}</p>

            <ButtonSecondary
              as="link"
              to={zx9.ctaHref}
              className="mt-6 border-black bg-black text-white hover:bg-[#4C4C4C] hover:text-white focus-visible:outline-white"
            >
              {zx9.ctaLabel}
            </ButtonSecondary>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export default FeaturedZX9Section;
