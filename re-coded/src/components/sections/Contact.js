import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 80 },
  };

  const textVariants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -80 },
  };
  return <div className="container-small-width w-full text-left"></div>;
}
