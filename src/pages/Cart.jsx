import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { ProductImageMedia } from "../components/VideoMedia.jsx";
import { formatPrice } from "../data/products.js";

export default function Cart({
  navigate,
  cartLines,
  updateQuantity,
  removeFromCart,
  clearCart,
}) {
  const [code, setCode] = useState("");
  const [placed, setPlaced] = useState(false);
  const subtotal = useMemo(
    () => cartLines.reduce((sum, line) => sum + line.product.price * line.quantity, 0),
    [cartLines],
  );
  const discount = code.trim().toUpperCase() === "TAMRA10" ? Math.round(subtotal * 0.1) : 0;
  const shipping = subtotal > 1499 || subtotal === 0 ? 0 : 79;
  const total = subtotal - discount + shipping;

  const placeOrder = (event) => {
    event.preventDefault();
    if (!cartLines.length) return;
    setPlaced(true);
    clearCart();
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-copper/20 bg-white/55 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-copper-dark">
            <ShoppingBag className="h-4 w-4" />
            Shopping cart
          </p>
          <h1 className="mt-4 text-4xl font-black sm:text-5xl">Your copper ritual</h1>
        </div>
        <button
          onClick={() => navigate("/listing")}
          className="self-start rounded-full border border-copper/25 bg-white/60 px-5 py-3 text-sm font-black text-basalt"
        >
          Continue shopping
        </button>
      </div>

      {cartLines.length === 0 && !placed ? (
        <div className="grid min-h-96 place-items-center rounded-[2rem] border border-copper/15 bg-white/58 p-8 text-center shadow-product">
          <div>
            <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-copper/12 text-copper-dark">
              <ShoppingBag className="h-8 w-8" />
            </div>
            <p className="mt-5 text-2xl font-black">Your cart is empty</p>
            <p className="mt-2 text-basalt/62">Add a bottle, set, or care kit to begin.</p>
            <button
              onClick={() => navigate("/listing")}
              className="mt-6 rounded-full bg-basalt px-6 py-3 text-sm font-black text-jasmine"
            >
              Browse collection
            </button>
          </div>
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-[1fr_390px]">
          <div className="grid gap-4">
            {cartLines.map((line) => (
              <motion.article
                key={line.id}
                layout
                className="grid gap-4 rounded-[1.75rem] border border-copper/15 bg-white/60 p-3 shadow-product backdrop-blur-sm sm:grid-cols-[160px_1fr]"
              >
                <ProductImageMedia
                  desktop={line.product.imageDesktop}
                  mobile={line.product.imageMobile}
                  alt={line.product.name}
                  className="h-40 rounded-[1.25rem]"
                />
                <div className="flex flex-col justify-between gap-5 p-2">
                  <div className="flex flex-col justify-between gap-4 sm:flex-row">
                    <div>
                      <p className="text-xl font-black">{line.product.name}</p>
                      <p className="mt-1 text-sm font-semibold text-basalt/55">
                        {line.product.finish} / {line.product.capacity}
                      </p>
                    </div>
                    <p className="text-xl font-black text-copper-dark">
                      {formatPrice(line.product.price * line.quantity)}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex h-11 items-center rounded-full border border-copper/20 bg-jasmine/70">
                      <button
                        onClick={() => updateQuantity(line.id, line.quantity - 1)}
                        className="grid h-11 w-11 place-items-center"
                        aria-label={`Decrease ${line.product.name}`}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-8 text-center text-sm font-black">{line.quantity}</span>
                      <button
                        onClick={() => updateQuantity(line.id, line.quantity + 1)}
                        className="grid h-11 w-11 place-items-center"
                        aria-label={`Increase ${line.product.name}`}
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(line.id)}
                      className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-black text-temple-red transition hover:bg-temple-red/10"
                    >
                      <Trash2 className="h-4 w-4" />
                      Remove
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <form
            onSubmit={placeOrder}
            className="h-fit rounded-[1.75rem] border border-copper/15 bg-basalt p-5 text-jasmine shadow-ember"
          >
            <h2 className="text-2xl font-black">Order summary</h2>
            <div className="mt-5 grid gap-3 text-sm font-semibold text-jasmine/72">
              <SummaryLine label="Subtotal" value={formatPrice(subtotal)} />
              <SummaryLine label="Discount" value={`- ${formatPrice(discount)}`} />
              <SummaryLine label="Shipping" value={shipping === 0 ? "Free" : formatPrice(shipping)} />
            </div>
            <label className="mt-5 block">
              <span className="text-xs font-black uppercase tracking-[0.16em] text-copper-light">
                Promo code
              </span>
              <input
                value={code}
                onChange={(event) => setCode(event.target.value)}
                placeholder="Try TAMRA10"
                className="mt-2 h-12 w-full rounded-full border border-white/10 bg-white/10 px-4 text-sm font-bold text-white outline-none placeholder:text-white/35 focus:border-copper-light"
              />
            </label>
            <div className="mt-5 border-t border-white/10 pt-5">
              <SummaryLine label="Total" value={formatPrice(total)} strong />
            </div>
            <div className="mt-5 grid gap-3">
              <input
                required={cartLines.length > 0}
                placeholder="Full name"
                className="h-12 rounded-full border border-white/10 bg-white/10 px-4 text-sm font-bold text-white outline-none placeholder:text-white/35 focus:border-copper-light"
              />
              <input
                required={cartLines.length > 0}
                inputMode="email"
                placeholder="Email"
                className="h-12 rounded-full border border-white/10 bg-white/10 px-4 text-sm font-bold text-white outline-none placeholder:text-white/35 focus:border-copper-light"
              />
              <button
                disabled={!cartLines.length}
                className="mt-1 rounded-full bg-copper-light px-6 py-4 text-sm font-black text-basalt transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Place mock order
              </button>
            </div>
          </form>
        </div>
      )}

      <AnimatePresence>
        {placed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-items-center bg-basalt/60 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, y: 22, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.94 }}
              className="max-w-md rounded-[2rem] bg-jasmine p-8 text-center shadow-ember"
            >
              <CheckCircle2 className="mx-auto h-14 w-14 text-neem" />
              <h2 className="mt-4 text-3xl font-black">Order placed</h2>
              <p className="mt-3 text-basalt/64">
                This demo order is confirmed locally. The cart has been cleared.
              </p>
              <button
                onClick={() => {
                  setPlaced(false);
                  navigate("/");
                }}
                className="mt-6 rounded-full bg-basalt px-6 py-3 text-sm font-black text-jasmine"
              >
                Back home
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function SummaryLine({ label, value, strong = false }) {
  return (
    <div className={`flex items-center justify-between ${strong ? "text-xl font-black" : ""}`}>
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}
