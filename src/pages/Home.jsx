import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Flame,
  Gift,
  Hammer,
  Quote,
  ShieldCheck,
  Sparkles,
  Truck,
  X,
} from "lucide-react";
import ProductCard from "../components/ProductCard.jsx";
import {
  PlayPulse,
  ResponsiveVideo,
  ShoppableTag,
  VideoControls,
} from "../components/VideoMedia.jsx";
import { formatPrice, products } from "../data/products.js";

const featured = products.slice(0, 3);
const heroProduct = products[0];

const useCases = [
  {
    title: "Morning Copper Ritual",
    eyebrow: "Daily wellness",
    desktop: "/utility-usage-desktop.mp4",
    mobile: "/utility-usage-mobile.mp4",
    copy: "Hydration, desk routines, and slow mornings built around warm copper.",
    tags: ["Copper Bottle", "Care Kit"],
  },
  {
    title: "Yoga & Movement",
    eyebrow: "Studio ready",
    desktop: "/utility-yoga-desktop.mp4",
    mobile: "/utility-yoga-mobile.jpeg",
    copy: "Travel bottles and lightweight copperware for yoga, walks, and commutes.",
    tags: ["Travel Bottle", "Daily Carry"],
  },
  {
    title: "Diwali Pooja Glow",
    eyebrow: "Festive home",
    desktop: "/utility-diwali-desktop.mp4",
    mobile: "/utility-diwali-mobile.jpeg",
    copy: "Brass diyas, urli bowls, and metallic accents for mandirs and consoles.",
    tags: ["Brass Diya", "Urli Bowl"],
  },
  {
    title: "Premium Gifting",
    eyebrow: "Occasion ready",
    desktop: "/utility-gifting-desktop.mp4",
    mobile: "/utility-gifting-mobile.mp4",
    copy: "Giftable copper, diya, and decor families with a polished heritage feel.",
    tags: ["Gift Set", "Decor"],
  },
];

const craftPoints = [
  ["Metal finishes", "Hammered, polished, etched, brushed, and lotus-print accents.", Hammer],
  ["Festive lighting", "Diyas and urli styling moments for pooja rooms and entry consoles.", Flame],
  ["Gift ready", "Premium sets for housewarming, Diwali, weddings, and return gifts.", Gift],
  ["Marketplace trust", "Clear inventory, quick dispatch, and familiar cart behavior.", Truck],
];

const heroGroup = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.18,
    },
  },
};

const riseIn = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.68, ease: [0.22, 1, 0.36, 1] },
  },
};

const mobileReveal = {
  hidden: { opacity: 0, y: 34 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Home({ navigate, addToCart }) {
  const [ritualOpen, setRitualOpen] = useState(false);

  return (
    <>
      <section className="relative h-[calc(100svh-5rem)] min-h-[44rem] overflow-hidden bg-basalt text-jasmine">
        <ResponsiveVideo
          desktop="/hero-desktop.mp4"
          mobile="/hero-mobile.mp4"
          className="absolute inset-0 h-full w-full bg-basalt"
          videoClassName="opacity-100"
          eager
        />
        <div className="absolute inset-0 bg-gradient-to-r from-basalt/64 via-basalt/18 to-basalt/10" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-basalt/52 to-transparent" />

        <div className="relative z-10 mx-auto grid h-full max-w-[1440px] items-center px-5 py-14 sm:px-10 lg:grid-cols-12 lg:px-16">
          <motion.div
            variants={heroGroup}
            initial="hidden"
            animate="show"
            className="max-w-3xl lg:col-span-6 lg:col-start-2"
          >
            <motion.p
              variants={riseIn}
              className="mb-5 inline-flex items-center gap-2 bg-jasmine px-3 py-2 font-body text-xs font-semibold uppercase tracking-[0.15em] text-copper-dark"
            >
              <Sparkles className="h-4 w-4" />
              R Ayurveda Copper
            </motion.p>
            <motion.h1
              variants={riseIn}
              className="max-w-3xl font-display text-5xl font-semibold leading-[1.04] sm:text-6xl lg:text-[4.25rem]"
            >
              The ritual of copper and light.
            </motion.h1>
            <motion.p
              variants={riseIn}
              className="mt-6 max-w-2xl font-body text-lg font-normal leading-[1.65] text-jasmine/84"
            >
              Copperware, brass diyas, and metallic decor composed for quiet
              wellness, festive homes, and refined everyday ceremony.
            </motion.p>

            <motion.div variants={riseIn} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => navigate("/listing")}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-copper-light/24 bg-[#5a2f22] px-7 py-4 font-body text-sm font-medium uppercase tracking-[0.1em] text-jasmine shadow-ember transition hover:-translate-y-0.5 hover:bg-[#70402f]"
              >
                Shop collection
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => setRitualOpen(true)}
                className="inline-flex items-center justify-center gap-3 rounded-full border border-jasmine/42 bg-[#5a2f22]/72 px-6 py-4 font-body text-sm font-medium uppercase tracking-[0.1em] text-jasmine transition hover:bg-[#70402f]/82"
              >
                <PlayPulse className="h-8 w-8 shadow-none" />
                Watch the copper ritual
              </button>
            </motion.div>
          </motion.div>
        </div>

        <VideoControls label="Brand film" />
      </section>

      <AnimatePresence>
        {ritualOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed left-0 top-0 z-50 h-[100dvh] w-[100dvw] overflow-hidden bg-[#3a1d14] text-jasmine"
            role="dialog"
            aria-modal="true"
            aria-label="Copper ritual video"
          >
            <button
              onClick={() => setRitualOpen(false)}
              className="absolute right-4 top-4 z-20 grid h-11 w-11 place-items-center rounded-full border border-jasmine/25 bg-jasmine text-basalt shadow-ember transition hover:bg-white sm:right-6 sm:top-6"
              aria-label="Close video"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.div
              initial={{ clipPath: "inset(8% 8% 8% 8%)", scale: 0.96 }}
              animate={{ clipPath: "inset(0 0 0 0)", scale: 1 }}
              exit={{ clipPath: "inset(8% 8% 8% 8%)", scale: 0.96 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="h-full w-full"
            >
              <video
                className="block h-full w-full object-cover md:hidden"
                src="/hero-mobile.mp4"
                autoPlay
                controls
                playsInline
              />
              <video
                className="hidden h-full w-full object-cover md:block"
                src="/hero-desktop.mp4"
                autoPlay
                controls
                playsInline
              />
            </motion.div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-[#3a1d14]/80 to-transparent p-5 sm:p-8">
              <p className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-copper-light">
                R Ayurveda Copper
              </p>
              <p className="mt-2 max-w-xl font-display text-3xl font-medium leading-tight sm:text-5xl">
                The ritual of copper and light.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="border-y border-copper/15 bg-jasmine py-5 text-basalt">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-4 px-5 text-center sm:grid-cols-4 sm:px-10 lg:px-16">
          {[
            ["Copper", "daily wellness"],
            ["Diyas", "festive light"],
            ["Decor", "metal accents"],
            ["Gifting", "premium sets"],
          ].map(([value, label], index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ delay: index * 0.06, duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
              className="py-3"
            >
              <p className="font-display text-3xl font-medium text-copper-dark sm:text-4xl">
                {value}
              </p>
              <p className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-basalt/45">
                {label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="overflow-hidden bg-jasmine py-20 text-basalt sm:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 sm:px-10 lg:grid-cols-12 lg:px-16">
          <motion.div
            variants={mobileReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="lg:col-span-7 lg:col-start-2"
          >
            <p className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-copper-dark">
              Living rituals
            </p>
            <h2 className="mt-3 max-w-4xl font-display text-4xl font-medium leading-[1.12] sm:text-6xl">
              Moments of copper, light, and ceremony.
            </h2>
          </motion.div>
          <motion.div
            variants={mobileReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="lg:col-span-3 lg:col-start-10 lg:pt-8"
          >
            <p className="font-body text-sm leading-[1.75] text-basalt/62">
              Editorial scenes place each object inside a real ritual before
              the collection opens into product discovery.
            </p>
            <button
              onClick={() => navigate("/listing")}
              className="mt-6 inline-flex items-center gap-2 border border-copper/30 bg-transparent px-5 py-3 font-body text-sm font-medium uppercase tracking-[0.1em] text-basalt transition hover:bg-sandal"
            >
              Explore products
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        </div>

        <div className="mx-auto mt-16 max-w-[1440px] px-5 sm:mt-20 sm:px-10 lg:px-16">
          <div className="grid gap-16 sm:gap-20 lg:gap-24">
          {useCases.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 46 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
                style={{ willChange: "transform" }}
                className="relative grid gap-0 lg:grid-cols-12 lg:items-center"
              >
                  <motion.div
                    initial={{ clipPath: "inset(10% 0 10% 0)", scale: 0.985 }}
                    whileInView={{ clipPath: "inset(0 0 0 0)", scale: 1 }}
                    viewport={{ once: true, amount: 0.28 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className={`group relative h-[64svh] min-h-[30rem] overflow-hidden bg-basalt shadow-ember sm:h-[68svh] lg:col-span-8 lg:row-start-1 ${
                      isEven ? "lg:col-start-1" : "lg:col-start-5"
                    }`}
                  >
                    <ResponsiveVideo
                      desktop={item.desktop}
                      mobile={item.mobile}
                      label={item.title}
                      className="absolute inset-0 h-full w-full bg-basalt"
                      videoClassName="transition duration-[1400ms] group-hover:scale-[1.04]"
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-basalt/46 via-basalt/4 to-transparent" />
                    </ResponsiveVideo>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.42 }}
                    transition={{ delay: 0.14, duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
                    className={`relative z-10 -mt-10 bg-jasmine p-5 text-basalt shadow-product sm:p-7 lg:row-start-1 lg:mt-0 lg:p-8 ${
                      isEven
                        ? "lg:col-span-4 lg:col-start-8 lg:-ml-10"
                        : "lg:col-span-4 lg:col-start-1 lg:-mr-10"
                    }`}
                  >
                    <span className="mb-6 block h-px w-20 bg-copper/45" />
                    <p className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-copper-dark">
                      {item.eyebrow}
                    </p>
                    <h3 className="mt-3 font-display text-4xl font-medium leading-[1.12] sm:text-5xl">
                      {item.title}
                    </h3>
                    <p className="mt-4 font-body text-sm leading-[1.75] text-basalt/66">
                      {item.copy}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <ShoppableTag key={tag} className="bg-sandal shadow-none">
                          {tag}
                        </ShoppableTag>
                      ))}
                    </div>
                  </motion.div>
              </motion.article>
            );
          })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 sm:px-10 lg:grid-cols-12 lg:items-start lg:px-16">
          <motion.div
            variants={mobileReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-5 lg:col-start-2"
          >
            <p className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-copper-dark">
              Home decor range
            </p>
            <h2 className="mt-3 font-display text-4xl font-medium leading-[1.16] sm:text-6xl">
              Beyond bottles: festive light, copper shine, and metallic accents.
            </h2>
            <p className="mt-5 font-body text-lg leading-[1.65] text-basalt/66">
              The new structure presents the seller as a broader Indian decor
              brand, with video placeholders for people using the products in
              wellness, pooja, gifting, and home styling scenes.
            </p>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5 lg:col-start-8">
            {craftPoints.map(([title, copy, Icon], index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.06, duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
                className="border border-copper/14 bg-sandal/48 p-5"
              >
                <Icon className="h-6 w-6 text-copper-dark" />
                <p className="mt-4 text-lg font-black">{title}</p>
                <p className="mt-2 text-sm leading-6 text-basalt/62">{copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-10 lg:px-16">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-copper-dark">
              Featured ritualware
            </p>
            <h2 className="mt-3 font-display text-4xl font-medium leading-[1.16] sm:text-5xl">
              Product media stays focused on product cards.
            </h2>
          </div>
          <button
            onClick={() => navigate("/listing")}
            className="inline-flex items-center gap-2 self-start border border-copper/25 bg-white px-5 py-3 font-body text-sm font-medium uppercase tracking-[0.1em] text-basalt transition hover:bg-sandal"
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

      <section className="border-y border-copper/15 bg-sandal/55 py-20">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 sm:px-10 lg:grid-cols-12 lg:items-center lg:px-16">
          <div className="lg:col-span-4 lg:col-start-2">
            <Quote className="h-10 w-10 text-copper-dark" />
            <h2 className="mt-5 font-display text-4xl font-medium leading-[1.16] sm:text-5xl">
              A lighter Indian premium theme, built around motion.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:col-span-6 lg:col-start-7">
            {[
              ["Video first", "Hero and lifestyle sections use uploaded desktop and mobile media."],
              ["Clear canvas", "No blurred hero treatment, no extra decorative card stack."],
              ["Modern commerce", "Motion, tags, product videos, and cart flow stay practical."],
            ].map(([title, copy]) => (
              <div key={title} className="bg-white p-5 shadow-product">
                <p className="text-lg font-black">{title}</p>
                <p className="mt-2 text-sm leading-6 text-basalt/62">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-10 lg:px-16">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["Secure checkout", "Cart and product flows designed for marketplace shoppers.", ShieldCheck],
            ["Giftable range", "Diyas, copperware, urlis, and decorative sets grouped by occasion.", Gift],
            ["Fast discovery", "Listing filters keep copper, diyas, decor, and care easy to scan.", Sparkles],
          ].map(([title, copy, Icon]) => (
            <div key={title} className="border border-copper/15 bg-white p-6 shadow-product">
              <Icon className="h-6 w-6 text-copper-dark" />
              <p className="mt-4 text-xl font-black">{title}</p>
              <p className="mt-2 text-sm leading-6 text-basalt/62">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1440px] overflow-hidden bg-basalt text-jasmine">
          <div className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-copper-light">
                Signature pick
              </p>
              <h2 className="mt-3 font-display text-4xl font-medium leading-[1.16] sm:text-5xl">
                {heroProduct.name}
              </h2>
              <p className="mt-4 max-w-2xl font-body text-lg leading-[1.65] text-jasmine/70">
                {heroProduct.description}
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <div>
                <p className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-jasmine/52">
                  From
                </p>
                <p className="mt-1 font-display text-4xl font-medium text-copper-light">
                  {formatPrice(heroProduct.price)}
                </p>
              </div>
              <button
                onClick={() => navigate(`/products/${heroProduct.id}`)}
                className="inline-flex items-center justify-center gap-2 bg-jasmine px-6 py-4 font-body text-sm font-medium uppercase tracking-[0.1em] text-basalt transition hover:bg-white"
              >
                View product
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
