import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Listing from "./pages/Listing.jsx";
import Product from "./pages/Product.jsx";
import Cart from "./pages/Cart.jsx";
import Rituals from "./pages/Rituals.jsx";
import { products } from "./data/products.js";

const getInitialRoute = () => {
  const path = window.location.pathname;
  if (path.startsWith("/products/")) {
    return { name: "product", productId: path.split("/products/")[1] };
  }
  if (path === "/rituals") return { name: "rituals" };
  if (path === "/listing") return { name: "listing" };
  if (path === "/cart") return { name: "cart" };
  return { name: "home" };
};

export default function App() {
  const [route, setRoute] = useState(getInitialRoute);
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("r-ayurveda-cart")) || [];
    } catch {
      return [];
    }
  });
  const [toast, setToast] = useState("");

  useEffect(() => {
    const onPopState = () => setRoute(getInitialRoute());
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    localStorage.setItem("r-ayurveda-cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (!toast) return undefined;
    const timer = window.setTimeout(() => setToast(""), 2400);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const navigate = (path) => {
    window.history.pushState({}, "", path);
    setRoute(getInitialRoute());
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const addToCart = (product, quantity = 1) => {
    setCart((items) => {
      const existing = items.find((item) => item.id === product.id);
      if (existing) {
        return items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }
      return [...items, { id: product.id, quantity }];
    });
    setToast(`${product.name} added to cart`);
  };

  const updateQuantity = (id, quantity) => {
    setCart((items) =>
      items
        .map((item) => (item.id === id ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0),
    );
  };

  const removeFromCart = (id) => {
    setCart((items) => items.filter((item) => item.id !== id));
  };

  const cartLines = useMemo(
    () =>
      cart
        .map((line) => ({
          ...line,
          product: products.find((product) => product.id === line.id),
        }))
        .filter((line) => line.product),
    [cart],
  );

  const cartCount = cartLines.reduce((sum, line) => sum + line.quantity, 0);

  const pageProps = {
    navigate,
    addToCart,
    cartLines,
    updateQuantity,
    removeFromCart,
    clearCart: () => setCart([]),
  };

  let page = <Home {...pageProps} />;
  if (route.name === "rituals") page = <Rituals {...pageProps} />;
  if (route.name === "listing") page = <Listing {...pageProps} />;
  if (route.name === "product") {
    const product = products.find((item) => item.id === route.productId);
    page = <Product {...pageProps} product={product} />;
  }
  if (route.name === "cart") page = <Cart {...pageProps} />;

  return (
    <div className="min-h-screen overflow-x-hidden bg-jasmine text-basalt">
      <div className="fixed inset-0 -z-10 bg-copper-radial" />
      <div className="mandala-field fixed inset-0 -z-10 opacity-50" />
      <Header route={route.name} navigate={navigate} cartCount={cartCount} />
      <AnimatePresence mode="wait">
        <motion.main
          key={`${route.name}-${route.productId || ""}`}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        >
          {page}
        </motion.main>
      </AnimatePresence>
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            className="fixed bottom-5 left-1/2 z-50 w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 rounded-full border border-copper/20 bg-basalt px-5 py-3 text-center text-sm font-semibold text-jasmine shadow-ember"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
