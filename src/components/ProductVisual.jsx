import { motion } from "framer-motion";

export default function ProductVisual({ product, size = "md", floating = false }) {
  const isSet = product.category === "Sets" || product.category === "Tumblers";
  const isDiya = product.category === "Diyas";
  const isDecor = product.category === "Decor";
  const isKit = product.category === "Care";
  const scaleClass = size === "lg" ? "h-80" : size === "sm" ? "h-48" : "h-60";

  return (
    <div className={`relative grid ${scaleClass} place-items-center overflow-hidden rounded-[2rem] bg-gradient-to-br from-white/70 via-sandal/70 to-copper-light/25`}>
      <div className="absolute inset-4 rounded-[1.5rem] border border-copper/15" />
      <div className="mandala-plate absolute inset-auto h-48 w-48 opacity-55" />
      <motion.div
        className="relative flex items-end justify-center gap-3"
        animate={floating ? { y: [0, -12, 0], rotate: [-1, 1, -1] } : undefined}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
      >
        {isKit ? (
          <CareKit color={product.color} accent={product.accent} />
        ) : isDiya ? (
          <DiyaSet color={product.color} accent={product.accent} />
        ) : isDecor || isSet ? (
          <>
            <Tumbler color={product.color} accent={product.accent} />
            <DecorBowl color={product.color} accent={product.accent} />
            <Tumbler color={product.color} accent={product.accent} small />
          </>
        ) : isSet ? (
          <>
            <Tumbler color={product.color} accent={product.accent} />
            <Bottle product={product} short />
            <Tumbler color={product.color} accent={product.accent} small />
          </>
        ) : (
          <Bottle product={product} />
        )}
      </motion.div>
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem]">
        <div className="absolute inset-y-0 left-0 w-1/2 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
      </div>
    </div>
  );
}

function Bottle({ product, short = false }) {
  return (
    <div
      className={`product-bottle ${short ? "h-40 w-16" : "h-64 w-24"}`}
      style={{
        "--vessel": product.color,
        "--accent": product.accent,
      }}
    >
      <span className="cap" />
      <span className={`pattern pattern-${product.pattern}`} />
      <span className="shine" />
    </div>
  );
}

function Tumbler({ color, accent, small = false }) {
  return (
    <div
      className={`product-tumbler ${small ? "h-24 w-16" : "h-32 w-20"}`}
      style={{ "--vessel": color, "--accent": accent }}
    >
      <span />
    </div>
  );
}

function CareKit({ color, accent }) {
  return (
    <div className="flex items-end gap-4" style={{ "--vessel": color, "--accent": accent }}>
      <div className="h-28 w-24 rounded-2xl border border-basalt/10 bg-[var(--vessel)] shadow-product">
        <div className="mx-auto mt-4 h-12 w-12 rounded-full border-4 border-white/45" />
      </div>
      <div className="h-20 w-28 rounded-xl bg-[var(--accent)] shadow-product" />
    </div>
  );
}

function DiyaSet({ color, accent }) {
  return (
    <div className="flex items-end gap-2" style={{ "--vessel": color, "--accent": accent }}>
      {[0, 1, 2].map((item) => (
        <div key={item} className="product-diya" style={{ transform: `translateY(${item === 1 ? -14 : 0}px)` }}>
          <span />
        </div>
      ))}
    </div>
  );
}

function DecorBowl({ color, accent }) {
  return (
    <div className="product-bowl" style={{ "--vessel": color, "--accent": accent }}>
      <span />
    </div>
  );
}
