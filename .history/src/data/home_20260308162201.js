import heroMobile from "../assets/images/home/mobile/image-header.jpg";
import heroTablet from "../assets/images/home/tablet/image-header.jpg";
import heroDesktop from "../assets/images/home/desktop/image-hero.jpg";

import zx9Mobile from "../assets/images/home/mobile/image-speaker-zx9.png";
import zx9Tablet from "../assets/images/home/tablet/image-speaker-zx9.png";
import zx9Desktop from "../assets/images/home/desktop/image-speaker-zx9.png";

import yx1Mobile from "../assets/images/home/mobile/image-earphones-yx1.jpg";
import yx1Tablet from "../assets/images/home/tablet/image-earphones-yx1.jpg";
import yx1Desktop from "../assets/images/home/desktop/image-earphones-yx1.jpg";

export const homeContent = {
  hero: {
    overline: "New product",
    title: "XX99 Mark II Headphones",
    description:
      "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
    ctaLabel: "See Product",
    ctaHref: "/product/xx99-mark-two-headphones",
    images: {
      mobile: heroMobile,
      tablet: heroTablet,
      desktop: heroDesktop,
    },
  },

  zx9: {
    title: "ZX9 Speaker",
    description:
      "Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.",
    ctaLabel: "See Product",
    ctaHref: "/product/zx9-speaker",
    images: {
      mobile: zx9Mobile,
      tablet: zx9Tablet,
      desktop: zx9Desktop,
    },
  },

  zx7: {
    title: "ZX7 Speaker",
    ctaLabel: "See Product",
    ctaHref: "/product/zx7-speaker",
  },

  yx1: {
    title: "YX1 Earphones",
    ctaLabel: "See Product",
    ctaHref: "/product/yx1-earphones",
    images: {
      mobile: yx1Mobile,
      tablet: yx1Tablet,
      desktop: yx1Desktop,
    },
  },
};