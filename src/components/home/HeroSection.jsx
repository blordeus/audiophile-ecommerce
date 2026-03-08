import { homeContent } from "../../data/home";
import PageContainer from "../layout/PageContainer";
import ButtonPrimary from "../common/ButtonPrimary";

function HeroSection() {
  const { hero } = homeContent;

  return (
    <section className="bg-[#101010] text-white">
      <PageContainer>
        <div className="relative overflow-hidden py-28 md:py-32 lg:min-h-[632px] lg:py-0">
          <picture className="pointer-events-none absolute inset-0">
            <source media="(min-width: 1024px)" srcSet={hero.images.desktop} />
            <source media="(min-width: 768px)" srcSet={hero.images.tablet} />
            <img
              src={hero.images.mobile}
              alt=""
              className="h-full w-full object-cover object-center opacity-50 lg:object-right"
            />
          </picture>

          <div className="relative z-10 mx-auto max-w-[380px] text-center lg:mx-0 lg:flex lg:min-h-[632px] lg:max-w-[400px] lg:flex-col lg:justify-center lg:text-left">
            <p className="overline text-white/50">{hero.overline}</p>

            <h1 className="mt-4 text-[36px] font-bold uppercase leading-[40px] tracking-[1.29px] md:text-[56px] md:leading-[58px] md:tracking-[2px]">
              {hero.title}
            </h1>

            <p className="body-text mt-6 text-white/75">
              {hero.description}
            </p>

            <ButtonPrimary as="link" to={hero.ctaHref} className="mt-7 self-center lg:self-start">
              {hero.ctaLabel}
            </ButtonPrimary>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export default HeroSection;