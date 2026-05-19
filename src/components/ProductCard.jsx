import { motion } from "framer-motion";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { formatPrice } from "../data/products.js";
import { ProductImageMedia, ProductVideoMedia } from "./VideoMedia.jsx";

export default function ProductCard({ product, navigate, addToCart, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.05, duration: 0.48 }}
      className="group overflow-hidden bg-transparent"
    >
      <button
        onClick={() => navigate(`/products/${product.id}`)}
        className="block w-full text-left"
        aria-label={`View ${product.name}`}
      >
        {product.videoDesktop ? (
          <ProductVideoMedia
            desktop={product.videoDesktop}
            mobile={product.videoMobile}
            className="h-72"
          />
        ) : (
          <ProductImageMedia
            desktop={product.imageDesktop}
            mobile={product.imageMobile}
            alt={product.name}
            className="h-72"
            imageClassName="transition duration-700 group-hover:scale-[1.03]"
          />
        )}
      </button>
      <div className="pb-2 pt-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="bg-sandal px-3 py-1 font-body text-[10px] font-semibold uppercase tracking-[0.15em] text-copper-dark">
            {product.badge}
          </span>
          <span className="flex items-center gap-1 font-body text-xs font-semibold text-basalt/62">
            <Star className="h-4 w-4 fill-turmeric text-turmeric" />
            {product.rating}
          </span>
        </div>
        <button
          onClick={() => navigate(`/products/${product.id}`)}
          className="min-h-[3.5rem] text-left font-display text-2xl font-medium leading-[1.18] text-basalt transition group-hover:text-copper-dark"
        >
          {product.name}
        </button>
        <p className="mt-2 line-clamp-2 min-h-[2.75rem] font-body text-sm leading-6 text-basalt/58">
          {product.description}
        </p>
        <div className="mt-4 flex items-end justify-between gap-3">
          <div>
            <p className="font-body text-sm font-semibold text-copper-dark">
              {formatPrice(product.price)}
            </p>
            <p className="font-body text-xs font-medium text-basalt/42 line-through">
              {formatPrice(product.mrp)}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="grid h-10 w-10 place-items-center border border-copper/20 bg-white/70 text-copper-dark transition hover:bg-copper/10"
              aria-label={`Save ${product.name}`}
            >
              <Heart className="h-4 w-4" />
            </button>
            <button
              onClick={() => addToCart(product)}
              className="grid h-10 w-10 place-items-center bg-basalt text-copper-light shadow-nav transition hover:-translate-y-0.5 hover:bg-copper-dark"
              aria-label={`Add ${product.name} to cart`}
            >
              <ShoppingBag className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
