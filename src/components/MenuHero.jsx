import { LINKS } from "../config/links";
import { motion } from "framer-motion";

function MenuHero() {
  return (
    <section className="w-80 md:w-full flex items-center">
      <motion.div
        className="w-full max-w-lg text-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1 className="text-2xl md:text-4xl font-bold">IL NOSTRO MENU</h1>

        <img
          src="/divider.png"
          alt="divider"
          className="mx-auto mt-2 mb-6 w-50 md:w-70"
        />

        <p className="mt-4 text-md md:text-lg">
          Ogni piatto e ogni pizza nascono dalla stessa{" "}
          <span className="text-[var(--color-primary)]">attenzione</span> alla
          materia prima, alle tecniche di lavorazione e alla continua ricerca
          del miglior risultato possibile.{" "}
        </p>
        <div className="my-8 py-3 flex w-full flex-col w-auto items-center justify-between min-h-25">
          <a
            href={LINKS.booking}
            target="_blank"
            className="bg-[var(--color-primary)] px-6 py-1 text-sm font-semibold uppercase tracking-wide text-white transition hover:border border-[var(--color-primary)] hover:bg-transparent hover:text-[var(--color-primary)]"
          >
            Prenota un tavolo
          </a>

          <a
            href={LINKS.telephone}
            target="_blank"
            className="bg-[var(--color-primary)] px-6 py-1 text-sm font-semibold uppercase tracking-wide text-white transition hover:border border-[var(--color-primary)] hover:bg-transparent hover:text-[var(--color-primary)]"
          >
            Chiamaci
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default MenuHero;
