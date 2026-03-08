function GalleryImage({ image, alt, className = "" }) {
  return (
    <picture className={className}>
      <source media="(min-width: 1024px)" srcSet={image.desktop} />
      <source media="(min-width: 768px)" srcSet={image.tablet} />
      <img
        src={image.mobile}
        alt={alt}
        className="h-full w-full rounded-lg object-cover"
      />
    </picture>
  );
}

function ProductGallery({ product }) {
  return (
    <section className="grid gap-5 lg:grid-cols-[445px_1fr] lg:gap-8">
      <div className="grid gap-5">
        <GalleryImage
          image={product.gallery.first}
          alt={`${product.name} gallery image 1`}
        />
        <GalleryImage
          image={product.gallery.second}
          alt={`${product.name} gallery image 2`}
        />
      </div>

      <GalleryImage
        image={product.gallery.third}
        alt={`${product.name} gallery image 3`}
      />
    </section>
  );
}

export default ProductGallery;