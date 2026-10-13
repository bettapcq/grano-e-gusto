import { useState } from "react";
import MenuItems from "./MenuItems";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function MenuSection() {
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.language === "en" ? "en" : "it";

  //metodo per prendere tutte le immagini di una cartella e creare un array:
  const menuImages = {
    it: {
      tasting: Object.values(
        import.meta.glob("../assets/menu/it/tasting/*.{jpg,jpeg,png,webp}", {
          eager: true,
          import: "default",
        }),
      ),
      pizzeria: Object.values(
        import.meta.glob("../assets/menu/it/pizzeria/*.{jpg,jpeg,png,webp}", {
          eager: true,
          import: "default",
        }),
      ),
      restaurant: Object.values(
        import.meta.glob("../assets/menu/it/restaurant/*.{jpg,jpeg,png,webp}", {
          eager: true,
          import: "default",
        }),
      ),
      desserts: Object.values(
        import.meta.glob("../assets/menu/it/desserts/*.{jpg,jpeg,png,webp}", {
          eager: true,
          import: "default",
        }),
      ),
      drinks: Object.values(
        import.meta.glob("../assets/menu/it/drinks/*.{jpg,jpeg,png,webp}", {
          eager: true,
          import: "default",
        }),
      ),
    },

    en: {
      tasting: Object.values(
        import.meta.glob("../assets/menu/en/tasting/*.{jpg,jpeg,png,webp}", {
          eager: true,
          import: "default",
        }),
      ),
      pizzeria: Object.values(
        import.meta.glob("../assets/menu/en/pizzeria/*.{jpg,jpeg,png,webp}", {
          eager: true,
          import: "default",
        }),
      ),
      restaurant: Object.values(
        import.meta.glob("../assets/menu/en/restaurant/*.{jpg,jpeg,png,webp}", {
          eager: true,
          import: "default",
        }),
      ),
      desserts: Object.values(
        import.meta.glob("../assets/menu/en/desserts/*.{jpg,jpeg,png,webp}", {
          eager: true,
          import: "default",
        }),
      ),
      drinks: Object.values(
        import.meta.glob("../assets/menu/en/drinks/*.{jpg,jpeg,png,webp}", {
          eager: true,
          import: "default",
        }),
      ),
    },
  };

  const menuTabs = ["tasting", "pizzeria", "restaurant", "desserts", "drinks"];

  const [selectedMenu, setSelectedMenu] = useState("pizzeria");

  return (
    <motion.section
      className="px-4 py-10"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-6xl" aria-label="Categorie del menu">
        <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-6">
          {menuTabs.map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => setSelectedMenu(item)}
              className={`border px-5 py-2 text-xs font-bold transition
                ${
                  selectedMenu === item
                    ? "bg-[var(--color-menu)] text-white"
                    : "border-[var(--color-menu)] text-[var(--color-menu)] hover:bg-[var(--color-menu)] hover:text-white"
                }`}
            >
              {t(`menuSection.tabs.${item}`)}
            </button>
          ))}
        </div>

        <MenuItems menuType={menuImages[currentLanguage][selectedMenu]} />
      </div>
    </motion.section>
  );
}

export default MenuSection;
