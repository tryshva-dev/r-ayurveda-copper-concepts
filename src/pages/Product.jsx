import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Minus, Plus, ShieldCheck, ShoppingBag, Star } from "lucide-react";
import ProductVisual from "../components/ProductVisual.jsx";
import { formatPrice, products } from "../data/products.js";
import ProductCard from "../components/ProductCard.jsx";

export default function Product({ product, navigate, addToCart }) {
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <section className="mx-auto grid min-h-[70vh] max-w-4xl place-items-center px-4 text-center">
        <div>
          <p className="text-3xl font-black">Product not found</p>
          <button
            onClick={() => navigate("/listing")}
            className="mt-6 rounded-full bg-basalt px-6 py-3 text-sm font-black text-jasmine"
          >
            Back to listing
          </button>
        </div>
      </section>
    );
  }

  const related = products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .concat(products.filter((item) => item.category !== product.category))
    .slice(0, 3);

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <button
        onClick={() => navigate("/listing")}
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-copper/20 bg-white/55 px-4 py-2 text-sm font-black text-basalt"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to collection
      </button>

      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55 }}
          className="relative"
        >
          <ProductVisual product={product} size="lg" floating />
        </motion.div>

        <div className="rounded-[2rem] border border-copper/15 bg-white/62 p-5 shadow-product backdrop-blur-sm sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-copper/12 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-copper-dark">
              {product.badge}
            </span>
            <span className="flex items-center gap-1 rounded-full bg-turmeric/15 px-3 py-1 text-sm font-black text-basalt">
              <Star className="h-4 w-4 fill-turmeric text-turmeric" />
              {product.rating} ({product.reviews.toLocaleString("en-IN")})
            </span>
            <span className="rounded-full bg-neem/10 px-3 py-1 text-sm font-black text-neem">
              {product.stock}
            </span>
          </div>

          <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">{product.name}</h1>
          <p className="mt-4 text-lg leading-8 text-basalt/66">{product.description}</p>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {[
              ["Capacity", product.capacity],
              ["Finish", product.finish],
              ["Category", product.category],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-copper/15 bg-jasmine/70 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-basalt/45">
                  {label}
                </p>
                <p className="mt-1 text-sm font-black text-basalt">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-5 border-y border-copper/15 py-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-4xl font-black text-copper-dark">{formatPrice(product.price)}</p>
              <p className="mt-1 text-sm font-semibold text-basalt/45 line-through">
                {formatPrice(product.mrp)}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 items-center rounded-full border border-copper/20 bg-jasmine/70">
                <button
                  onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                  className="grid h-12 w-12 place-items-center"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-8 text-center text-sm font-black">{quantity}</span>
                <button
                  onClick={() => setQuantity((value) => Math.min(9, value + 1))}
                  className="grid h-12 w-12 place-items-center"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <button
                onClick={() => addToCart(product, quantity)}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-basalt px-6 text-sm font-black text-jasmine shadow-ember transition hover:-translate-y-0.5 hover:bg-copper-dark"
              >
                <ShoppingBag className="h-4 w-4" />
                Add to cart
              </button>
            </div>
          </div>

          <div className="mt-6 grid gap-3">
            {product.highlights.map((highlight) => (
              <div key={highlight} className="flex items-center gap-3 text-sm font-bold text-basalt/72">
                <ShieldCheck className="h-5 w-5 text-neem" />
                {highlight}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-black">Pairs beautifully with</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {related.map((item, index) => (
            <ProductCard
              key={item.id}
              product={item}
              navigate={navigate}
              addToCart={addToCart}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
