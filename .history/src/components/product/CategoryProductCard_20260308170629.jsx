import ButtonPrimary from "../common/ButtonPrimary";

function CategoryProductCard({ product, reverse = false }) {
  return (
    <article
      className={`grid gap-8 md:gap-13 lg:grid-cols-2 lg:items-center lg:gap-30 ${
        reverse ? "lg:[&>div:first-child]:order-2 lg:[&>div:last-child]:order-1" : ""
      }`}
    >
      <div className="overflow-hidden rounded-lg">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet={product.categoryImage.desktop}
          />
          <source
            media="(min-width: 768px)"
            srcSet={product.categoryImage.tablet}
          />
          <img
            src={product.categoryImage.mobile}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </picture>
      </div>

      <div className="mx-auto max-w-[572px] text-center lg:max-w-[445px] lg:text-left">
        {product.new && (
          <p className="overline text-[#D87D4A]">{`New product`}</p>
        )}

        <h2 className="heading-4 mt-6 md:heading-2">
          {product.name}
        </h2>

        <p className="body-text mt-6 text-black/50">
          {product.description}
        </p>

        <ButtonPrimary
          as="link"
          to={`/product/${product.slug}`}
          className="mt-6"
        >
          See Product
        </ButtonPrimary>
      </div>
    </article>
  );
}

export default CategoryProductCard;