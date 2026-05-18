import { motion } from "framer-motion";

export default function Mandala({ className = "", slow = false }) {
  return (
    <motion.div
      aria-hidden="true"
      className={`mandala-orbit ${className}`}
      animate={{ rotate: 360 }}
      transition={{ duration: slow ? 70 : 42, repeat: Infinity, ease: "linear" }}
    />
  );
}
