import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Filter, Search, SlidersHorizontal } from "lucide-react";
import ProductCard from "../components/ProductCard.jsx";
import { categories, products } from "../data/products.js";

export default function Listing({ navigate, addToCart }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    const result = products.filter((product) => {
      const matchesCategory = category === "All" || product.category === category;
      const matchesQuery =
        !normalized ||
        [product.name, product.category, product.finish, product.description]
          .join(" ")
          .toLowerCase()
          .includes(normalized);
      return matchesCategory && matchesQuery;
    });

    return [...result].sort((a, b) => {
      if (sort === "price-low") return a.price - b.price;
      if (sort === "price-high") return b.price - a.price;
      if (sort === "rating") return b.rating - a.rating;
      return products.indexOf(a) - products.indexOf(b);
    });
  }, [category, query, sort]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-copper/20 bg-white/55 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-copper-dark">
            <Filter className="h-4 w-4" />
            Product listing
          </p>
          <h1 className="mt-4 text-4xl font-black sm:text-5xl">Copper collection</h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-basalt/64">
            Browse R Ayurveda Copper concept products across bottles, printed
            finishes, ritual sets, tumblers, and care essentials.
          </p>
        </div>

        <div className="rounded-[1.5rem] border border-copper/15 bg-white/60 p-3 shadow-product backdrop-blur-sm">
          <div className="grid gap-3 md:grid-cols-[1fr_auto]">
            <label className="relative block">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-basalt/45" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search bottles, tumblers, sets"
                className="h-12 w-full rounded-full border border-copper/15 bg-jasmine/80 pl-11 pr-4 text-sm font-semibold outline-none transition focus:border-copper"
              />
            </label>
            <label className="relative block">
              <SlidersHorizontal className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-basalt/45" />
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="h-12 w-full appearance-none rounded-full border border-copper/15 bg-jasmine/80 pl-11 pr-10 text-sm font-bold outline-none transition focus:border-copper md:w-44"
              >
                <option value="featured">Featured</option>
                <option value="rating">Top rated</option>
                <option value="price-low">Price low</option>
                <option value="price-high">Price high</option>
              </select>
            </label>
          </div>
          <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-black transition ${
                  category === item
                    ? "bg-basalt text-jasmine"
                    : "bg-copper/10 text-copper-dark hover:bg-copper/15"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      {filtered.length > 0 ? (
        <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              navigate={navigate}
              addToCart={addToCart}
              index={index}
            />
          ))}
        </motion.div>
      ) : (
        <div className="grid min-h-80 place-items-center rounded-[2rem] border border-copper/15 bg-white/55 p-8 text-center">
          <div>
            <p className="text-2xl font-black">No matching products</p>
            <p className="mt-2 text-basalt/62">Try a broader search or another category.</p>
          </div>
        </div>
      )}
    </section>
  );
}
