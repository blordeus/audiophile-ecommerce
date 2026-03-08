import { homeContent } from "../../data/home";
import PageContainer from "../layout/PageContainer";
import ButtonPrimary from "../common/ButtonPrimary";

function HeroSection() {
  const { hero } = homeContent;

  return (
    <section className="relative bg-[#101010] text-white">
      {/* Background Image */}
      <picture className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent lg:hidden"">
        <source media="(min-width: 1024px)" srcSet={hero.images.desktop} />
        <source media="(min-width: 768px)" srcSet={hero.images.tablet} />
        <img
          src={hero.images.mobile}
          alt=""
          className="h-full w-full object-cover object-center lg:object-right"
        />
      </picture>

      {/* Content */}
      <PageContainer>
        <div className="relative z-10 flex min-h-[600px] items-center py-24 md:min-h-[640px] lg:min-h-[632px]">
          <div className="mx-auto max-w-[380px] text-center lg:mx-0 lg:text-left">
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