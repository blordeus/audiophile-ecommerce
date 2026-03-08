import { homeContent } from "../../data/home";
import PageContainer from "../layout/PageContainer";
import ButtonPrimary from "../common/ButtonPrimary";

function HeroSection() {
  const { hero } = homeContent;

  return (
    <section className="bg-[#101010] text-white">
      <PageContainer>
        <div className="relative min-h-[510px] overflow-hidden md:min-h-[640px] lg:min-h-[632px]">
          <picture className="pointer-events-none absolute inset-0">
            <source media="(min-width: 1024px)" srcSet={hero.images.desktop} />
            <source media="(min-width: 768px)" srcSet={hero.images.tablet} />
            <img
              src={hero.images.mobile}
              alt=""
              className="h-full w-full object-cover object-center opacity-90 lg:object-right"
            />
          </picture>

          <div className="relative z-10 mx-auto flex min-h-[510px] max-w-[380px] flex-col justify-center text-center md:min-h-[640px] lg:mx-0 lg:min-h-[632px] lg:max-w-[398px] lg:text-left">
            <p className="overline text-white/50">{hero.overline}</p>

            <h1 className="mt-6 text-[36px] font-bold uppercase leading-[40px] tracking-[1.29px] md:text-[56px] md:leading-[58px] md:tracking-[2px]">
              {hero.title}
            </h1>

            <p className="body-text mt-6 text-white/75">
              {hero.description}
            </p>

            <ButtonPrimary
              as="link"
              to={hero.ctaHref}
              className="mt-10 self-center lg:self-start"
            >
              {hero.ctaLabel}
            </ButtonPrimary>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export default HeroSection;