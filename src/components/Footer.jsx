import { FaEnvelope, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { LINKS } from "../config/links";

function Footer() {
  return (
    <footer className="bg-[var(--color-footer)] text-[var(--color-muted)] shadow-lg mt-12">
      <div className="mx-auto flex flex-col items-center gap-6 px-6 py-6 md:grid md:max-w-7xl md:grid-cols-3 md:items-center">
        <div className="flex items-center md:justify-start gap-2 py-4">
          <img
            src="/logo-footer.png"
            alt="Grano e Gusto"
            loading="lazy"
            className="h-30 w-auto"
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex gap-4 text-xl">
            <a
              href={LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Apri il profilo Instagram di Grano e Gusto"
            >
              <FaInstagram size="20" />
            </a>

            <a
              href={LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Scrivi a Grano e Gusto su WhatsApp"
            >
              <FaWhatsapp size={20} />
            </a>
            <a
              href={LINKS.email}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Invia una email a Grano e Gusto"
            >
              <FaEnvelope size={20} />
            </a>
          </div>

          <div className="text-center text-xs">
            <p>© 2026 Grano e Gusto Pizzeria Ristorante</p>
            <p>
              Design & Development by{" "}
              <a
                href={LINKS.betta}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-muted)] underline hover:text-[var(--color-accent)]"
              >
                Elisabetta Piacquadio
              </a>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-end gap-2 text-xs">
          <a href="/privacy">Privacy Policy</a>
          <span className="mx-2">|</span>
          <a href="/cookie-policy">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
