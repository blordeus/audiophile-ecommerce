import { useState } from "react";
import ButtonPrimary from "../common/ButtonPrimary";
import QuantitySelector from "../common/QuantitySelector";
import { useCart } from "../../hooks/useCart";
import { formatCurrency } from "../../utils/currency";

function ProductOverview({ product }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  function handleDecrease() {
    setQuantity((prev) => Math.max(1, prev - 1));
  }

  function handleIncrease() {
    setQuantity((prev) => prev + 1);
  }

  function handleAddToCart() {
    addToCart(product, quantity);
    setQuantity(1);
  }

  return (
    <section className="grid gap-8 md:grid-cols-[281px_1fr] md:items-center md:gap-16 lg:grid-cols-2 lg:gap-24">
      <div className="overflow-hidden rounded-lg">
        <picture>
          <source media="(min-width: 1024px)" srcSet={product.image.desktop} />
          <source media="(min-width: 768px)" srcSet={product.image.tablet} />
          <img
            src={product.image.mobile}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </picture>
      </div>

      <div className="max-w-[572px] lg:max-w-[445px]">
        {product.new && (
          <p className="overline text-[#D87D4A]">New product</p>
        )}

        <h1 className="mt-6 text-[28px] font-bold uppercase leading-[38px] tracking-[1px] md:text-[40px] md:leading-[44px] md:tracking-[1.43px]">
          {product.name}
        </h1>

        <p className="body-text mt-6 text-black/50">
          {product.description}
        </p>

        <p className="mt-6 text-[18px] font-bold uppercase tracking-[1.29px]">
          {formatCurrency(product.price)}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <QuantitySelector
            quantity={quantity}
            onDecrease={handleDecrease}
            onIncrease={handleIncrease}
          />

          <ButtonPrimary onClick={handleAddToCart}>
            Add to Cart
          </ButtonPrimary>
        </div>
      </div>
    </section>
  );
}

export default ProductOverview;