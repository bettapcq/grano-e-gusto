import { motion } from "framer-motion";
import { LINKS } from "../config/links";
import { FaArrowRight } from "react-icons/fa";

function EventsSection() {
  return (
    <section className="py-4 mt-10 mx-2 md:mx-6 md:max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <motion.div
          className="flex flex-col items-center md:items-start justify-center mx-4 md:mx-0"
          initial={{ x: -150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <h2 className="text-3xl px-6 font-bold text-center md:text-start text-[var(--color-primary)]">
            I NOSTRI EVENTI
          </h2>
          <p className="text-lg text-gray-700 mt-10 px-6 text-center md:text-start">
            Serate a tema, eventi speciali e novità dal nostro mondo. <br />
            Seguici su Instagram per rimanere sempre aggiornato!
          </p>
          <a
            href={LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center self-center md:self-end gap-2  bg-[var(--color-primary)] px-5 py-2 text-xs uppercase tracking-wide text-[var(--color-secondary)] transition hover:bg-transparent hover:text-[var(--color-primary)] hover:border hover:border-[var(--color-primary)]"
          >
            Vai al nostro Instagram <FaArrowRight />
          </a>
        </motion.div>
        <motion.div
          className="flex flex-col items-center justify-center mx-4 md:mx-0"
          initial={{ y: 350, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <img
            src="/smartphone.png"
            alt="Eventi della pizzeria Grano e Gusto su Instagram"
            className="w-full h-full md:max-w-lg p-2 object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default EventsSection;
