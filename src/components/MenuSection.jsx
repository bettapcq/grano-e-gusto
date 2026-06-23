import { useState } from "react";
import MenuItems from "./MenuItems";

function MenuSection() {
  //metodo per prendere tutte le immagini di una cartella e creare un array:
  const menuPizzeria = Object.values(
    import.meta.glob("../assets/menuPizzeria/*.{jpg,jpeg,png,webp}", {
      eager: true,
      import: "default",
    }),
  );

  const menuRistorante = Object.values(
    import.meta.glob("../assets/menuRistorante/*.{jpg,jpeg,png,webp}", {
      eager: true,
      import: "default",
    }),
  );

  const menuDolci = Object.values(
    import.meta.glob("../assets/menuDolci/*.{jpg,jpeg,png,webp}", {
      eager: true,
      import: "default",
    }),
  );

  const menuBevande = Object.values(
    import.meta.glob("../assets/menuBevande/*.{jpg,jpeg,png,webp}", {
      eager: true,
      import: "default",
    }),
  );

  const menus = {
    Pizzeria: menuPizzeria,
    Ristorante: menuRistorante,
    Dolci: menuDolci,
    Bevande: menuBevande,
  };

  const [selectedMenu, setSelectedMenu] = useState("Pizzeria");

  return (
    <section className="px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
          {Object.keys(menus).map((item) => (
            <button
              key={item}
              onClick={() => setSelectedMenu(item)}
              className={`border px-5 py-2 text-xs font-bold transition
                ${
                  selectedMenu === item
                    ? "bg-[var(--color-menu)] text-white"
                    : "border-[var(--color-menu)] text-[var(--color-menu)] hover:bg-[var(--color-menu)] hover:text-white"
                }`}
            >
              {item}
            </button>
          ))}
        </div>

        <MenuItems menuType={menus[selectedMenu]} />
      </div>
    </section>
  );
}

export default MenuSection;
