import { motion } from "framer-motion";

function EventsSection() {
  return (
    <motion.section
      className="py-4 mt-10 mx-2 md:mx-6 md:max-w-7xl"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4 items-center">
        <div className="flex flex-col items-start justify-center mx-4 md:mx-0">
          <h2 className="text-3xl px-6 font-bold text-start text-[var(--color-primary)]">
            I NOSTRI EVENTI
          </h2>
          <p className="text-lg text-gray-700 mt-10 px-6 text-start">
            Serate a tema, eventi speciali e novità dal nostro mondo. <br />
            Seguici su Instagram per rimanere sempre aggiornato!
          </p>
        </div>
        <div className="flex flex-col items-center justify-center mx-4 md:mx-0">
          <img
            src="/smartphone.png"
            alt="Eventi della pizzeria Grano e Gusto su Instagram"
            className="w-full h-full md:max-w-sm p-2 object-cover"
          />
        </div>
      </div>
    </motion.section>
  );
}

export default EventsSection;
