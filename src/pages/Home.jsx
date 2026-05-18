import { motion } from "framer-motion";
import {
  ArrowRight,
  Droplets,
  Gift,
  Hammer,
  Quote,
  Sparkles,
  Truck,
} from "lucide-react";
import Mandala from "../components/Mandala.jsx";
import { CategoryIllustration, DecorRangeSvg, HeroDecorSvg } from "../components/DecorSvg.jsx";
import ProductCard from "../components/ProductCard.jsx";
import ProductVisual from "../components/ProductVisual.jsx";
import { formatPrice, products } from "../data/products.js";

const featured = products.slice(0, 3);
const heroProduct = products[5];
const rituals = [
  ["Style the pooja corner", "Pair brass diyas with copper bowls, flowers, and soft festive light."],
  ["Serve and display", "Use copper bottles, jugs, and urlis as functional decor across the home."],
  ["Clean with care", "Use lemon, salt, and a soft cloth to restore shine after display or daily use."],
];
const categories = [
  ["Copperware", "Bottles, jugs, bowls, and dining accents", "Copperware"],
  ["Diyas", "Brass and metallic lamps for pooja styling", "Diyas"],
  ["Decor", "Urlis, lotus bottles, thali sets, and display pieces", "Decor"],
  ["Care", "Cleaning essentials for lasting metal glow", "Care"],
];

export default function Home({ navigate, addToCart }) {
  return (
    <>
      <section className="home-hero relative flex min-h-[calc(100svh-7rem)] items-center overflow-hidden px-4 py-14 text-basalt sm:px-6 lg:px-8">
        <HeroDecorSvg />
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-copper-dark"
            >
              <Sparkles className="h-4 w-4" />
              Diyas, copperware and metal decor
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="max-w-3xl text-5xl font-black leading-[0.95] sm:text-6xl lg:text-7xl"
            >
              R Ayurveda Copper
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16 }}
              className="mt-6 max-w-xl text-lg leading-8 text-basalt/72"
            >
              A lighter premium storefront concept for copper bottles, brass
              diyas, urlis, thali-inspired sets, and metallic decorative accents
              for modern Indian homes.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <button
                onClick={() => navigate("/listing")}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-copper-dark px-6 py-4 text-sm font-black text-jasmine shadow-ember transition hover:-translate-y-0.5 hover:bg-copper"
              >
                Shop collection
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => navigate(`/products/${heroProduct.id}`)}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-copper/25 bg-white px-6 py-4 text-sm font-black text-basalt transition hover:bg-jasmine"
              >
                View signature piece
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-y border-copper/15 bg-white/70 py-5 text-basalt">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 text-center sm:grid-cols-4 sm:px-6 lg:px-8">
          {[
            ["12", "decor SKUs"],
            ["Diyas", "festive lighting"],
            ["Copper", "serve and style"],
            ["India", "home-inspired"],
          ].map(([value, label]) => (
            <div key={label} className="py-3">
              <p className="text-3xl font-black text-copper-dark">{value}</p>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-basalt/45">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-copper-dark">
              Shop by ritual
            </p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">Collections with purpose</h2>
          </div>
          <button
            onClick={() => navigate("/listing")}
            className="inline-flex items-center gap-2 self-start rounded-full border border-copper/25 bg-white/55 px-5 py-3 text-sm font-black text-basalt"
          >
            Explore all categories
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(([title, copy, type], index) => (
            <motion.button
              key={title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => navigate("/listing")}
              className="group overflow-hidden text-left"
            >
              <CategoryIllustration type={type} />
              <div className="p-3">
                <p className="text-xl font-black transition group-hover:text-copper-dark">{title}</p>
                <p className="mt-2 min-h-[3rem] text-sm leading-6 text-basalt/62">{copy}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      <section className="bg-white/62 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
          <div>
            <DecorRangeSvg />
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-copper-dark">
              Home decor range
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
              Beyond bottles: festive light, copper shine, and metallic accents.
            </h2>
            <p className="mt-5 text-lg leading-8 text-basalt/66">
              The concept now frames the seller as a broader Indian decor brand,
              covering brass diyas, copper serveware, urli bowls, thali-inspired
              sets, and small decorative metal pieces.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-copper-dark">
              Featured ritualware
            </p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">Designed for daily use</h2>
          </div>
          <button
            onClick={() => navigate("/listing")}
            className="inline-flex items-center gap-2 self-start rounded-full border border-copper/25 bg-white/55 px-5 py-3 text-sm font-black text-basalt"
          >
            Browse all
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {featured.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              navigate={navigate}
              addToCart={addToCart}
              index={index}
            />
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#fff2df] py-16 text-basalt sm:py-20">
        <Mandala className="absolute -right-28 top-10 h-80 w-80 opacity-20" slow />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-copper-dark">
              Metal craft
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
              Made to feel festive, built for everyday homes.
            </h2>
            <p className="mt-5 text-lg leading-8 text-basalt/66">
              The concept leans into polished brass, hammered copper, etched
              borders, and giftable decor families that make the store feel
              warmer and more premium than a marketplace listing.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Metal finishes", "Polished, hammered, etched, and brushed details.", Hammer],
              ["Festive lighting", "Diyas and lamps for pooja corners and consoles.", Droplets],
              ["Gift ready", "Decor sets and diyas for premium festive gifting.", Gift],
              ["Quick dispatch", "A checkout story tuned for marketplace shoppers.", Truck],
            ].map(([title, copy, Icon]) => (
              <div key={title} className="rounded-[1.35rem] border border-copper/15 bg-white/62 p-5 shadow-product">
                <Icon className="h-6 w-6 text-copper-dark" />
                <p className="mt-4 text-lg font-black">{title}</p>
                <p className="mt-2 text-sm leading-6 text-basalt/62">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8">
        <div className="relative">
          <ProductVisual product={products[2]} size="lg" floating />
        </div>
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-copper-dark">
            Styling ritual
          </p>
          <h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
            A simple rhythm for diyas, copper care, and decorative styling.
          </h2>
          <div className="mt-8 grid gap-4">
            {rituals.map(([title, copy], index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: index * 0.08 }}
                className="flex gap-4 rounded-[1.25rem] border border-copper/15 bg-white/58 p-5 shadow-product"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-copper-dark text-sm font-black text-jasmine">
                  {index + 1}
                </span>
                <span>
                  <span className="block text-lg font-black">{title}</span>
                  <span className="mt-1 block text-sm leading-6 text-basalt/62">{copy}</span>
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-copper/15 bg-sandal/60 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-copper-dark">
                Buyer confidence
              </p>
              <h2 className="mt-2 text-3xl font-black sm:text-4xl">Premium details shoppers scan for</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-basalt/62">
              Clear trust cues, visible savings, and product families make the
              store feel more complete than a single marketplace grid.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["4.8 average on premium sets", "High-rated gifting and dining pieces anchor the catalogue."],
              [`From ${formatPrice(349)}`, "Entry care items support repeat purchases and maintenance."],
              ["Printed, matte, etched", "Finish filters make browsing feel tactile and deliberate."],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-[1.35rem] border border-copper/15 bg-white/60 p-6 shadow-product">
                <Quote className="h-6 w-6 text-copper-dark" />
                <p className="mt-5 text-2xl font-black leading-tight">{title}</p>
                <p className="mt-3 text-sm leading-6 text-basalt/62">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#fff1da] px-6 py-12 text-basalt shadow-product sm:px-10 lg:px-14">
          <Mandala className="absolute -bottom-32 -right-24 h-96 w-96 opacity-20" />
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-copper-dark">
                Complete decor concept
              </p>
              <h2 className="mt-3 max-w-2xl text-4xl font-black leading-tight sm:text-5xl">
                Take shoppers from festive decor discovery to cart in a few confident taps.
              </h2>
            </div>
            <button
              onClick={() => navigate("/listing")}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-copper-dark px-6 py-4 text-sm font-black text-jasmine transition hover:-translate-y-0.5 hover:bg-copper"
            >
              Start shopping
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
