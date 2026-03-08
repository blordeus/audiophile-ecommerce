import { homeContent } from "../../data/home";
import PageContainer from "../layout/PageContainer";
import ButtonSecondary from "../common/ButtonSecondary";
import zx7Mobile from "../../assets/images/home/mobile/image-speaker-zx7.jpg";
import zx7Tablet from "../../assets/images/home/tablet/image-speaker-zx7.jpg";
import zx7Desktop from "../../assets/images/home/desktop/image-speaker-zx7.jpg";

function FeaturedZX7Section() {
  const { zx7 } = homeContent;

  return (
    <section className="mt-8">
      <PageContainer>
        <div className="relative overflow-hidden rounded-lg px-6 py-24 md:px-16 lg:px-24">
          <picture className="absolute inset-0">
            <source media="(min-width: 1024px)" srcSet={zx7Desktop} />
            <source media="(min-width: 768px)" srcSet={zx7Tablet} />
            <img
              src={zx7Mobile}
              alt="zx"
              className="h-full w-full object-cover"
            />
          </picture>

          <div className="relative z-10 max-w-[204px]">
            <h2 className="heading-4">{zx7.title}</h2>

            <ButtonSecondary as="link" to={zx7.ctaHref} className="mt-8">
              {zx7.ctaLabel}
            </ButtonSecondary>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export default FeaturedZX7Section;