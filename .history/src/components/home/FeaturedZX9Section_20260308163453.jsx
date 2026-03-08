import { homeContent } from "../../data/home";
import PageContainer from "../layout/PageContainer";
import ButtonSecondary from "../common/ButtonSecondary";

function FeaturedZX9Section() {
  const { zx9 } = homeContent;

  return (
    <section className="mt-24 md:mt-32 lg:mt-40">
      <PageContainer>
        <div className="rounded-lg bg-[#D87D4A] px-6 py-16 text-center text-white">
          <h2 className="text-[36px] font-bold uppercase leading-[40px] tracking-[1.29px] md:text-[56px] md:leading-[58px] md:tracking-[2px]">
            {zx9.title}
          </h2>

          <p className="body-text mt-6 text-white/75">
            {zx9.description}
          </p>

          <ButtonSecondary
            as="link"
            to={zx9.ctaHref}
            className="mt-6 border-black bg-black text-white hover:bg-[#4C4C4C] hover:text-white focus-visible:outline-[#FFFFFF]"
          >
            {zx9.ctaLabel}
          </ButtonSecondary>
        </div>
      </PageContainer>
    </section>
  );
}

export default FeaturedZX9Section;