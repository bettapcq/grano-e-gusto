import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function OwnerSection() {
  const { t } = useTranslation();

  return (
    <motion.section
      className="py-4 mx-2 md:mx-6 md:max-w-7xl"
      initial={{ x: -120, opacity: 0 }}
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className="flex flex-col items-center justify-center mx-4 md:mx-0">
          <h2 className="block md:hidden text-3xl px-6 font-bold text-center mb-6">
            {t("owner.titleLineBefore")}{" "}
            <span className="text-[var(--color-primary)]">
              {t("owner.titleLineAccent")}
            </span>
          </h2>
          <img
            src="/mattia.jpeg"
            alt={t("owner.altOwner")}
            loading="lazy"
            className="w-full h-full md:max-w-sm p-2 object-cover shadow-xl rounded-sm"
          />
        </div>

        <div className="flex flex-col items-center justify-center mx-4 md:mx-0">
          <h2 className="hidden md:block text-3xl px-6 font-bold text-center mb-6">
            {t("owner.titleLineBefore")}{" "}
            <span className="text-[var(--color-primary)]">
              {t("owner.titleLineAccent")}
            </span>
          </h2>
          <p className="text-lg text-gray-700 max-w-lg mt-10 px-6 text-center">
            {t("owner.paragraphBefore")}{" "}
            <strong>{t("owner.paragraphStrong")}</strong>.<br />
            {t("owner.paragraphAfter2")}
          </p>
        </div>
      </div>
    </motion.section>
  );
}

export default OwnerSection;
