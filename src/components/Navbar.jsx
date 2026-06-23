import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const itLogo = "/it.png";
  const enLogo = "/en.png";
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [language, setLanguage] = useState("IT");

  return (
    <header className="fixed top-5 left-0 z-50 w-full px-6 py-5 bg-[var(--color-secondary)] shadow-lg">
      <nav className="mx-auto flex max-w-6xl items-center">
        <a href="/">
          <img
            src="/logo_rotondo.png"
            alt="Grano e Gusto"
            className="h-14 w-auto"
          />
        </a>

        <div className="ml-12 flex items-center gap-8 md:flex text-[var(--color-primary)]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-[var(--color-accent)] pb-1"
                : "pb-1 hover:border-b-2 hover:border-[var(--color-accent)]"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-[var(--color-accent)] pb-1"
                : "pb-1 hover:border-b-2 hover:border-[var(--color-accent)]"
            }
          >
            Menu
          </NavLink>
        </div>
        <div className="relative ml-auto">
          <button
            onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            className="flex items-center gap-1 text-[#846951]"
          >
            {language === "IT" ? (
              <img src={itLogo} alt="Italiano" className="w-6 h-6" />
            ) : (
              <img src={enLogo} alt="English" className="w-6 h-6" />
            )}
            <span className="text-xs">▼</span>
          </button>

          {isLanguageOpen && (
            <div className="absolute right-0 mt-3 w-28 rounded-xl bg-white p-2 shadow-lg">
              <button
                onClick={() => {
                  setLanguage("IT");
                  setIsLanguageOpen(false);
                }}
                className="flex  w-full rounded-lg px-3 py-2 text-center text-sm hover:bg-[var(--color-secondary)]"
              >
                <img src={itLogo} alt="Italiano" className="w-6 h-6" />
              </button>

              <button
                onClick={() => {
                  setLanguage("EN");
                  setIsLanguageOpen(false);
                }}
                className="flex w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-[var(--color-secondary)]"
              >
                <img src={enLogo} alt="English" className="w-6 h-6" />
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
