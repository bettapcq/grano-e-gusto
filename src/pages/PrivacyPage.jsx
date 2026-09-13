import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function PrivacyPage() {
  const { t } = useTranslation();
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-6 py-50 text-[var(--color-dark)]">
        <h1 className="mb-8 text-4xl font-bold text-[var(--color-primary)]">
          Privacy Policy
        </h1>

        <section className="space-y-5 text-sm leading-7">
          <p>{t("privacyPolicy.intro")}</p>

          <h2 className="text-2xl font-bold text-[var(--color-primary)]">
            {t("privacyPolicy.controllerTitle")}
          </h2>
          <p>
            Grano e Gusto Pizzeria Ristorante
            <br />
            Via Torino, 27 - 10050 Sant&apos;Antonino di Susa (TO)
            <br />
            Email:{" "}
            <a href="mailto:info@granoegusto.it" className="underline">
              info@granoegusto.it
            </a>
            <br />
            {t("privacyPolicy.telephone")}:{" "}
            <a href="tel:+393349184922" className="underline">
              3349184922
            </a>
          </p>

          <h2 className="text-2xl font-bold text-[var(--color-primary)]">
            {t("privacyPolicy.intrdataTypesTitleo")}
          </h2>
          <p>{t("privacyPolicy.dataTypesText")}</p>

          <h2 className="text-2xl font-bold text-[var(--color-primary)]">
            {t("privacyPolicy.purposesTitle")}
          </h2>
          <p>{t("privacyPolicy.purposesText")}</p>

          <h2 className="text-2xl font-bold text-[var(--color-primary)]">
            {t("privacyPolicy.thirdPartyTitle")}
          </h2>
          <p>{t("privacyPolicy.googleMapsText")}</p>
          <p>{t("privacyPolicy.octotableText")}</p>

          <h2 className="text-2xl font-bold text-[var(--color-primary)]">
            {t("privacyPolicy.legalBasisTitle")}
          </h2>
          <p>{t("privacyPolicy.legalBasisText")}</p>

          <h2 className="text-2xl font-bold text-[var(--color-primary)]">
            {t("privacyPolicy.rightsTitle")}
          </h2>
          <p>
            {t("privacyPolicy.rightsText")}{" "}
            <a href="mailto:info@granoegusto.it" className="underline">
              info@granoegusto.it
            </a>
            .
          </p>

          <h2 className="text-2xl font-bold text-[var(--color-primary)]">
            {t("privacyPolicy.updatesTitle")}
          </h2>
          <p>{t("privacyPolicy.updatesText")}</p>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default PrivacyPage;
