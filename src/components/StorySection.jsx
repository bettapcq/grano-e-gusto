import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function StorySection() {
  const { t } = useTranslation();

  return (
    <motion.section
      className="bg-white/30 backdrop-blur-xs py-4 shadow-lg mx-2 md:mx-6 md:max-w-7xl"
      initial={{ x: 120, opacity: 0 }}
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
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 items-between">
        <div>
          <h2 className="text-3xl pt-4 mx-6 font-bold text-center md:text-start mb-3">
            {t("story.titleLine1")}
            <br />
            {t("story.titleLine2Before")}{" "}
            <span className="text-[var(--color-primary)]">
              {t("story.titleLine2Accent")}
            </span>{" "}
            {t("story.titleLine2After")}
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mt-10 px-6 text-center md:text-start">
            {t("story.paragraph")}
          </p>
        </div>
        <div className="flex items-center justify-center md:justify-end mx-4 ">
          <img
            src="/team.jpeg"
            alt={t("story.altTeam")}
            loading="lazy"
            className="
      w-full
    h-full
    md:max-w-xs
      p-2
      aspect-square
      object-cover
      shadow-xl
      rounded-sm
    "
          />
        </div>
      </div>
    </motion.section>
  );
}

export default StorySection;
