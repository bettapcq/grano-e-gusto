import {
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt,
  FaGlobe,
  FaGlobeEurope,
} from "react-icons/fa";
import { FaWebAwesome } from "react-icons/fa6";
import { LINKS } from "../config/links";

function BookingSection() {
  return (
    <section id="contatti" className="py-8 mx-2 md:mx-6 md:max-w-7xl">
      <div
        className="relative min-h-[230px] flex flex-col items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage: "url('/locale1.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" />

        <div className="relative z-10 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prenota il tuo tavolo
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={LINKS.telephone}
              className="bg-[var(--color-accent)] text-white px-8 py-3 text-sm font-semibold"
            >
              Chiamaci
            </a>

            <a
              href={LINKS.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--color-accent)] text-white px-8 py-3 text-sm font-semibold"
            >
              Prenota online
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookingSection;
