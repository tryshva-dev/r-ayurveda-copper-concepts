import { motion } from "framer-motion";
import { ArrowRight, Flame, Gift, ShoppingBag, Sparkles, SunMedium } from "lucide-react";
import { formatPrice, products } from "../data/products.js";
import { ProductImageMedia } from "../components/VideoMedia.jsx";

const rituals = [
  {
    eyebrow: "Morning ritual",
    title: "Copper water before the day begins.",
    copy:
      "A calm start built around hydration, quiet surfaces, and the warmth of hammered copper.",
    imageDesktop: "/ritual-water-desktop.png",
    imageMobile: "/ritual-water-mobile.png",
    icon: SunMedium,
    tags: ["Copper bottle", "Care kit"],
  },
  {
    eyebrow: "Movement ritual",
    title: "Carry copper into daily movement.",
    copy:
      "Lightweight bottles for yoga, studio days, morning walks, and slower wellness routines.",
    imageDesktop: "/ritual-movement-desktop.png",
    imageMobile: "/ritual-movement-mobile.png",
    icon: Sparkles,
    tags: ["Travel bottle", "Daily carry"],
  },
  {
    eyebrow: "Pooja ritual",
    title: "A softer glow for festive corners.",
    copy:
      "Diyas, urlis, and metallic accents styled for mandirs, consoles, and entrance tables.",
    imageDesktop: "/ritual-pooja-desktop.png",
    imageMobile: "/ritual-pooja-mobile.png",
    icon: Flame,
    tags: ["Brass diya", "Urli bowl"],
  },
  {
    eyebrow: "Gifting ritual",
    title: "Objects chosen for ceremony and memory.",
    copy:
      "Giftable copper and brass pieces for housewarmings, weddings, Diwali, and family rituals.",
    imageDesktop: "/ritual-gifting-desktop.png",
    imageMobile: "/ritual-gifting-mobile.png",
    icon: Gift,
    tags: ["Gift set", "Decor"],
  },
];

const ritualProducts = [
  products[0],
  products[1],
  products[2],
].filter(Boolean);

const stills = [
  {
    imageDesktop: "/ritual-atelier-desktop.png",
    imageMobile: "/ritual-atelier-mobile.png",
    title: "Studio calm",
    copy: "Copper carried into movement and breath.",
  },
  {
    imageDesktop: "/ritual-threshold-desktop.png",
    imageMobile: "/ritual-threshold-mobile.png",
    title: "Pooja glow",
    copy: "Diyas and metallic accents for festive corners.",
  },
];

export default function Rituals({ navigate, addToCart }) {
  return (
    <>
      <section className="relative min-h-[calc(100svh-52px)] overflow-hidden bg-[#3a1d14] text-jasmine">
        <motion.img
          initial={{ scale: 1.04, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          src="/artisan-working-mobile.jpeg"
          alt="Artisan shaping a copper artifact"
          className="absolute inset-0 block h-full w-full object-cover md:hidden"
        />
        <motion.img
          initial={{ scale: 1.04, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          src="/artisan-working-desktop.jpeg"
          alt="Artisan shaping a copper artifact"
          className="absolute inset-0 hidden h-full w-full object-cover md:block"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2b130d]/90 via-[#3a1d14]/46 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#2b130d]/76 to-transparent" />
        <div className="relative z-10 mx-auto grid min-h-[calc(100svh-52px)] max-w-[1440px] items-center px-5 py-16 sm:px-10 lg:grid-cols-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl lg:col-span-6 lg:col-start-2"
          >
            <p className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-copper-light">
              Ritual journal
            </p>
            <h1 className="mt-4 font-display text-5xl font-medium leading-[1.06] sm:text-7xl">
              Copper rituals for everyday ceremony.
            </h1>
            <p className="mt-6 max-w-xl font-body text-base leading-[1.75] text-jasmine/72 sm:text-lg">
              A craft-led guide to copper objects shaped by hand, then placed
              into wellness, pooja, gifting, and home decor moments.
            </p>
            <button
              onClick={() => navigate("/listing")}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-jasmine px-7 py-4 font-body text-sm font-medium uppercase tracking-[0.1em] text-basalt transition hover:bg-white"
            >
              Shop ritualware
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="self-end pb-5 lg:col-span-4 lg:col-start-9"
          >
            <p className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-jasmine/72">
              Artifact story
            </p>
            <p className="mt-2 max-w-md font-display text-3xl font-medium leading-tight text-jasmine sm:text-4xl">
              Hammered, warmed, and finished by hand before it enters the home.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-jasmine py-20 text-basalt sm:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-5 lg:col-start-2">
              <p className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-copper-dark">
                The practice
              </p>
              <h2 className="mt-3 font-display text-4xl font-medium leading-[1.12] sm:text-6xl">
                Four ways to place copper in the rhythm of home.
              </h2>
            </div>
            <p className="font-body text-sm leading-[1.75] text-basalt/62 lg:col-span-3 lg:col-start-10 lg:pt-10">
              Each ritual pairs a material object with a moment: water,
              movement, light, and gifting.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:mx-auto lg:max-w-5xl">
            {stills.map((still, index) => (
              <motion.figure
                key={still.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: index * 0.08, duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
                className="group overflow-hidden bg-sandal"
              >
                <div className="h-[26rem] overflow-hidden">
                  <ProductImageMedia
                    desktop={still.imageDesktop}
                    mobile={still.imageMobile}
                    alt={still.title}
                    className="h-full w-full transition duration-[1200ms] group-hover:scale-[1.025]"
                  />
                </div>
                <figcaption className="grid gap-2 p-5 sm:grid-cols-[0.8fr_1fr] sm:p-6">
                  <p className="font-display text-2xl font-medium leading-tight">
                    {still.title}
                  </p>
                  <p className="font-body text-sm leading-[1.65] text-basalt/62">
                    {still.copy}
                  </p>
                </figcaption>
              </motion.figure>
            ))}
          </div>

          <div className="mt-16 grid gap-16">
            {rituals.map((ritual, index) => {
              const Icon = ritual.icon;
              const isEven = index % 2 === 0;
              return (
                <motion.article
                  key={ritual.title}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
                  className="grid gap-0 lg:grid-cols-12 lg:items-center"
                >
                  <motion.div
                    initial={{ clipPath: "inset(9% 0 9% 0)" }}
                    whileInView={{ clipPath: "inset(0 0 0 0)" }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className={`relative h-[28rem] overflow-hidden bg-basalt shadow-ember sm:h-[34rem] lg:row-start-1 ${
                      isEven ? "lg:col-span-7 lg:col-start-1" : "lg:col-span-7 lg:col-start-6"
                    }`}
                  >
                    <ProductImageMedia
                      desktop={ritual.imageDesktop}
                      mobile={ritual.imageMobile}
                      alt={ritual.title}
                      className="h-full w-full transition duration-[1400ms] hover:scale-[1.025]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-basalt/38 via-transparent to-transparent" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 26 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ delay: 0.1, duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
                    className={`relative z-10 -mt-8 bg-jasmine p-6 shadow-product sm:p-8 lg:row-start-1 lg:mt-0 ${
                      isEven
                        ? "lg:col-span-4 lg:col-start-7 lg:-ml-10"
                        : "lg:col-span-4 lg:col-start-2 lg:-mr-10"
                    }`}
                  >
                    <Icon className="h-6 w-6 text-copper-dark" />
                    <p className="mt-6 font-body text-xs font-semibold uppercase tracking-[0.15em] text-copper-dark">
                      {ritual.eyebrow}
                    </p>
                    <h3 className="mt-3 font-display text-4xl font-medium leading-[1.12]">
                      {ritual.title}
                    </h3>
                    <p className="mt-4 font-body text-sm leading-[1.75] text-basalt/64">
                      {ritual.copy}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {ritual.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-2 bg-sandal px-3 py-2 font-body text-xs font-semibold uppercase tracking-[0.15em] text-basalt"
                        >
                          <ShoppingBag className="h-3.5 w-3.5 text-copper-dark" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-copper-dark">
                Start here
              </p>
              <h2 className="mt-3 font-display text-4xl font-medium leading-[1.12] sm:text-5xl">
                Ritual objects to begin with.
              </h2>
            </div>
            <button
              onClick={() => navigate("/listing")}
              className="inline-flex items-center gap-2 self-start rounded-full border border-copper/25 bg-transparent px-5 py-3 font-body text-sm font-medium uppercase tracking-[0.1em] text-basalt transition hover:bg-sandal"
            >
              View all
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="grid gap-7 md:grid-cols-3">
            {ritualProducts.map((product, index) => (
              <motion.article
                key={product.id}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.07, duration: 0.54, ease: [0.22, 1, 0.36, 1] }}
                className="group border-t border-copper/20 pt-5"
              >
                <button
                  onClick={() => navigate(`/products/${product.id}`)}
                  className="block w-full text-left"
                >
                  <div className="relative h-72 overflow-hidden bg-sandal">
                    <ProductImageMedia
                      desktop={product.imageDesktop}
                      mobile={product.imageMobile}
                      alt={product.name}
                      className="h-full"
                      imageClassName="transition duration-[1200ms] group-hover:scale-[1.035]"
                    />
                    <span className="absolute left-4 top-4 bg-jasmine px-3 py-1 font-body text-[10px] font-semibold uppercase tracking-[0.15em] text-copper-dark">
                      {product.badge}
                    </span>
                  </div>
                  <p className="mt-5 font-display text-3xl font-medium leading-tight text-basalt transition group-hover:text-copper-dark">
                    {product.name}
                  </p>
                  <p className="mt-2 font-body text-sm leading-[1.65] text-basalt/60">
                    {product.finish} / {product.capacity}
                  </p>
                </button>
                <div className="mt-5 flex items-center justify-between gap-4">
                  <p className="font-body text-sm font-semibold text-copper-dark">
                    {formatPrice(product.price)}
                  </p>
                  <button
                    onClick={() => addToCart(product)}
                    className="inline-flex items-center gap-2 rounded-full bg-[#5a2f22] px-4 py-2 font-body text-xs font-medium uppercase tracking-[0.1em] text-jasmine transition hover:bg-[#70402f]"
                  >
                    Add
                    <ShoppingBag className="h-3.5 w-3.5" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
