import { motion } from "motion/react";

function WheatBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <motion.img
        src="/spiga_sx.png"
        alt=""
        aria-hidden="true"
        className="absolute left-0 top-32 z-0 w-72 md:w-96"
        initial={{ x: -250, opacity: 0 }}
        animate={{ x: -40, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      <motion.img
        src="/spiga_dx.png"
        alt=""
        aria-hidden="true"
        className="absolute right-0 bottom-52 md:bottom-15 z-0 w-72 rotate-12 md:w-96"
        initial={{ x: 250, opacity: 0 }}
        animate={{ x: 40, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
      />
    </div>
  );
}

export default WheatBackground;
