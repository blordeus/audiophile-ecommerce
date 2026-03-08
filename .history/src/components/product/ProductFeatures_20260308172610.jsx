function ProductFeatures({ product }) {
  const featureParagraphs = product.features.split("\n\n");

  return (
    <section className="grid gap-20 lg:grid-cols-[2fr_1fr] lg:gap-32">
      <div>
        <h2 className="heading-3">Features</h2>

        <div className="mt-6 space-y-6">
          {featureParagraphs.map((paragraph, index) => (
            <p key={index} className="body-text text-black/50">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className="md:grid md:grid-cols-2 md:gap-8 lg:block">
        <h2 className="heading-3">In the Box</h2>

        <ul className="mt-6 space-y-2">
          {product.includes.map((item) => (
            <li key={item.item} className="flex gap-6">
              <span className="body-text font-bold text-[#D87D4A]">
                {item.quantity}x
              </span>
              <span className="body-text text-black/50">{item.item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ProductFeatures;