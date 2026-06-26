import { motion } from "framer-motion";
import { LINKS } from "../config/links";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen w-full">
      <motion.img
        src="/pizza_hero.png"
        alt={t("hero.altPizza")}
        className="pointer-events-none absolute left-[58vw] top-[36%] z-0 w-[55vw] max-w-none -translate-y-1/2 md:left-[50vw] md:top-[60%] md:w-[48vw]"
        initial={{
          x: "35vw",
          rotate: 14,
          opacity: 0,
        }}
        animate={{
          x: 0,
          rotate: -2,
          opacity: 1,
        }}
        transition={{
          duration: 1.4,
          ease: "easeOut",
        }}
      />

      <motion.div
        className="flex min-h-screen w-full items-center justify-center px-4 md:justify-start md:px-[8vw]"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="flex w-full flex-col items-center text-center">
          <img
            src="/logo_puro.png"
            alt="Grano e Gusto"
            className="w-72 md:w-96"
          />
          <img
            src="/divider.png"
            alt=""
            aria-hidden="true"
            className="w-72 md:w-96"
          />

          <div className="mt-6 text-3xl font-bold leading-8 text-[var(--color-dark)]">
            <h1>
              {t("hero.titleLine1")}
              <br />
              {t("hero.titleLine2Before")}
              <span className="text-[var(--color-primary)]">
                {" "}
                {t("hero.titleLine2Accent")}
              </span>
              .
            </h1>
          </div>

          <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <a
              href={LINKS.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--color-primary)] border px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border border-[var(--color-primary)] hover:bg-transparent hover:text-[var(--color-primary)]"
            >
              {t("hero.bookingButton")}
            </a>

            <Link
              to="/menu"
              className="bg-[var(--color-primary)] border px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border border-[var(--color-primary)] hover:bg-transparent hover:text-[var(--color-primary)]"
            >
              {t("hero.menuButton")}
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
