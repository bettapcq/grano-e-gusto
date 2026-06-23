import { LINKS } from "../config/links";

function MenuHero() {
  return (
    <section className="w-80 md:w-full flex items-center">
      <div className="w-full max-w-lg text-center">
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
        <div className="mx-auto mt-10">
          <a
            href={LINKS.booking}
            target="_blank"
            className="bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border border-[var(--color-primary)] hover:bg-transparent hover:text-[var(--color-primary)]"
          >
            Prenota un tavolo
          </a>
        </div>
      </div>
    </section>
  );
}

export default MenuHero;
