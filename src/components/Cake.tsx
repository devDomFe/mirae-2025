import "./cake.css";
import { motion } from "motion/react";

export default function Cake() {
  return (
    <motion.div
      className="cake transform -translate-x-1/2 -translate-y-1/3 scale-65"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="plate"></div>
      <div className="layer layer-bottom"></div>
      <div className="layer layer-middle"></div>
      <div className="layer layer-top"></div>
      <div className="icing"></div>
      <div className="drip drip1"></div>
      <div className="drip drip2"></div>
      <div className="drip drip3"></div>
      <div className="candle">
        <div className="flame"></div>
      </div>
    </motion.div>
  );
}
