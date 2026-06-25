import {
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt,
  FaInstagram,
} from "react-icons/fa";
import { LINKS } from "../config/links";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function BookingSection() {
  const { t } = useTranslation();

  return (
    <motion.section
      id="contatti"
      className="py-8 mx-2 relative z-20 -mt-50 md:mx-auto md:w-full max-w-[1180px] shadow-lg"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
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
            {t("booking.titleLine")}
          </h2>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href={LINKS.telephone}
              className="bg-[var(--color-accent)]/70 hover:bg-[var(--color-accent)] text-white px-8 py-3 text-sm font-semibold"
            >
              {t("booking.callButton")}
            </a>

            <a
              href={LINKS.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--color-accent)]/70 hover:bg-[var(--color-accent)] text-white px-8 py-3 text-sm font-semibold"
            >
              {t("booking.onlineButton")}
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-sm grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-8 shadow-md items-center md:items-start">
        <div>
          <h3 className="text-xl font-bold text-[var(--color-primary)] mb-5 text-center md:text-start">
            {t("booking.titleLine2")}
          </h3>

          <div className="space-y-5 text-sm text-[var(--color-dark)]">
            <div className="flex gap-3">
              <FaMapMarkerAlt className="mt-1 text-[var(--color-accent)]" />
              <div>
                <p className="font-semibold text-start">Via Torino, 27</p>
                <p>10050 - Sant&apos;Antonino di Susa (TO)</p>
              </div>
            </div>

            <div className="flex gap-3">
              <FaClock className="mt-1 text-[var(--color-accent)]" />
              <div className="text-start ">
                <p className="font-semibold ">{t("booking.openinDays")}</p>
                <p>{t("booking.openingHours1")}</p>
                <p>{t("booking.openingHours2")}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <FaPhoneAlt className="mt-1 text-[var(--color-accent)]" />
              <div>
                <a href={LINKS.telephone}>011 4918422 </a>
              </div>
            </div>

            <div className="flex gap-3">
              <FaEnvelope className="mt-1 text-[var(--color-accent)]" />
              <div>
                <a href={LINKS.email}>info@granoegusto.it</a>
              </div>
            </div>
            <div className="flex gap-3">
              <FaInstagram className="mt-1 text-[var(--color-accent)]" />
              <div>
                <a
                  href={LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  _granoegusto_
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="min-h-[300px] overflow-hidden">
          <iframe
            title="Mappa Grano e Gusto"
            src={LINKS.maps}
            className="w-full h-full min-h-[300px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </motion.section>
  );
}

export default BookingSection;
