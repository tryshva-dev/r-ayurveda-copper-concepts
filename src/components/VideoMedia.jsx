import { motion } from "framer-motion";
import { Pause, Play, ShoppingBag, Volume2 } from "lucide-react";

function isImage(src) {
  return /\.(jpe?g|png|webp|avif)$/i.test(src || "");
}

export function ResponsiveVideo({
  desktop,
  mobile,
  poster,
  className = "",
  videoClassName = "",
  label,
  children,
}) {
  const mobileIsImage = isImage(mobile);

  return (
    <div className={`overflow-hidden bg-sandal ${className}`}>
      {mobileIsImage ? (
        <img
          src={mobile}
          alt={label || "Lifestyle product scene"}
          className={`block h-full w-full object-cover md:hidden ${videoClassName}`}
        />
      ) : (
        <video
          className={`block h-full w-full object-cover md:hidden ${videoClassName}`}
          src={mobile || desktop}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
        />
      )}
      <video
        className={`hidden h-full w-full object-cover md:block ${videoClassName}`}
        src={desktop}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
      />
      {children}
    </div>
  );
}

export function VideoControls({ label = "Brand film" }) {
  return (
    <div className="absolute bottom-5 left-5 right-5 z-20 flex items-center justify-between gap-3 text-jasmine">
      <span className="inline-flex items-center gap-2 bg-basalt/86 px-3 py-2 text-xs font-black uppercase tracking-[0.14em]">
        <span className="h-2 w-2 rounded-full bg-copper-light" />
        {label}
      </span>
      <span className="flex items-center gap-2">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-basalt/86">
          <Pause className="h-4 w-4" />
        </span>
        <span className="grid h-10 w-10 place-items-center rounded-full bg-basalt/86">
          <Volume2 className="h-4 w-4" />
        </span>
      </span>
    </div>
  );
}

export function PlayPulse({ className = "" }) {
  return (
    <span
      className={`grid h-14 w-14 place-items-center rounded-full bg-jasmine text-basalt shadow-product ${className}`}
    >
      <span className="absolute h-14 w-14 animate-ping rounded-full bg-jasmine/40" />
      <Play className="relative h-5 w-5 fill-basalt" />
    </span>
  );
}

export function ShoppableTag({ children, className = "" }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`inline-flex items-center gap-2 bg-jasmine px-3 py-2 font-body text-xs font-semibold uppercase tracking-[0.15em] text-basalt shadow-product ${className}`}
    >
      <ShoppingBag className="h-3.5 w-3.5 text-copper-dark" />
      {children}
    </motion.span>
  );
}

export function ProductVideoMedia({ desktop, mobile, className = "" }) {
  return (
    <ResponsiveVideo
      desktop={desktop}
      mobile={mobile || desktop}
      className={`relative ${className}`}
      videoClassName="transition duration-700 group-hover:scale-[1.03]"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-basalt/18 via-transparent to-transparent" />
      <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-jasmine text-copper-dark shadow-product">
        <Play className="h-4 w-4 fill-copper-dark" />
      </span>
    </ResponsiveVideo>
  );
}

export function ProductImageMedia({
  desktop,
  mobile,
  alt = "Copper product",
  className = "",
  imageClassName = "",
}) {
  return (
    <div className={`overflow-hidden bg-sandal ${className}`}>
      <img
        src={mobile || desktop}
        alt={alt}
        className={`block h-full w-full object-cover md:hidden ${imageClassName}`}
      />
      <img
        src={desktop || mobile}
        alt={alt}
        className={`hidden h-full w-full object-cover md:block ${imageClassName}`}
      />
    </div>
  );
}
