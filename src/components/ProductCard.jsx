import { motion } from "framer-motion";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { formatPrice } from "../data/products.js";
import ProductVisual from "./ProductVisual.jsx";

export default function ProductCard({ product, navigate, addToCart, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.05, duration: 0.48 }}
      className="group overflow-hidden rounded-[1.75rem] border border-copper/15 bg-white/60 p-3 shadow-product backdrop-blur-sm"
    >
      <button
        onClick={() => navigate(`/products/${product.id}`)}
        className="block w-full text-left"
        aria-label={`View ${product.name}`}
      >
        <ProductVisual product={product} />
      </button>
      <div className="px-2 pb-2 pt-4">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="rounded-full bg-copper/12 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-copper-dark">
            {product.badge}
          </span>
          <span className="flex items-center gap-1 text-sm font-bold text-basalt/70">
            <Star className="h-4 w-4 fill-turmeric text-turmeric" />
            {product.rating}
          </span>
        </div>
        <button
          onClick={() => navigate(`/products/${product.id}`)}
          className="min-h-[3rem] text-left text-lg font-black leading-tight text-basalt transition group-hover:text-copper-dark"
        >
          {product.name}
        </button>
        <p className="mt-2 line-clamp-2 min-h-[2.75rem] text-sm leading-6 text-basalt/62">
          {product.description}
        </p>
        <div className="mt-4 flex items-end justify-between gap-3">
          <div>
            <p className="text-xl font-black text-copper-dark">{formatPrice(product.price)}</p>
            <p className="text-xs font-semibold text-basalt/45 line-through">
              {formatPrice(product.mrp)}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="grid h-10 w-10 place-items-center rounded-full border border-copper/20 bg-white/70 text-copper-dark transition hover:bg-copper/10"
              aria-label={`Save ${product.name}`}
            >
              <Heart className="h-4 w-4" />
            </button>
            <button
              onClick={() => addToCart(product)}
              className="grid h-10 w-10 place-items-center rounded-full bg-basalt text-copper-light shadow-nav transition hover:-translate-y-0.5 hover:bg-copper-dark"
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
