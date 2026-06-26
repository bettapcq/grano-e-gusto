import { LINKS } from "../config/links";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function MenuHero() {
  const { t } = useTranslation();

  return (
    <section className="w-80 md:w-full flex items-center">
      <motion.div
        className="w-full max-w-lg text-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1 className="text-2xl md:text-4xl font-bold">
          {t("menuHero.titleLine")}
        </h1>

        <img
          src="/divider.png"
          alt=""
          aria-hidden="true"
          className="mx-auto mt-2 mb-6 w-50 md:w-70"
        />

        <p className="mt-4 text-md md:text-lg">
          {t("menuHero.paragraphBefore")}{" "}
          <span className="text-[var(--color-primary)]">
            {t("menuHero.paragraphAccent")}
          </span>{" "}
          {t("menuHero.paragraphAfter")}{" "}
        </p>
        <div className="my-8 py-3 flex w-full flex-col items-center justify-between min-h-25">
          <a
            href={LINKS.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[var(--color-primary)] border px-6 py-1 text-sm font-semibold uppercase tracking-wide text-white transition hover:border border-[var(--color-primary)] hover:bg-transparent hover:text-[var(--color-primary)]"
          >
            {t("hero.bookingButton")}
          </a>

          <a
            href={LINKS.telephone}
            aria-label="Chiama Grano e Gusto"
            className="bg-[var(--color-primary)] px-6 py-1 text-sm font-semibold uppercase tracking-wide text-white transition hover:border border-[var(--color-primary)] hover:bg-transparent hover:text-[var(--color-primary)]"
          >
            {t("booking.callButton")}
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default MenuHero;
