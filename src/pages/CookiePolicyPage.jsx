import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function CookiePolicyPage() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-6 py-50 text-[var(--color-dark)]">
        <h1 className="mb-8 text-4xl font-bold text-[var(--color-primary)]">
          Cookie Policy
        </h1>

        <section className="space-y-5 text-sm leading-7">
          <p>{t("cookiePolicy.intro")}</p>

          <h2 className="text-2xl font-bold text-[var(--color-primary)]">
            {t("cookiePolicy.whatAreCookiesTitle")}
          </h2>
          <p>{t("cookiePolicy.whatAreCookiesText")}</p>

          <h2 className="text-2xl font-bold text-[var(--color-primary)]">
            {t("cookiePolicy.technicalCookiesTitle")}
          </h2>
          <p>{t("cookiePolicy.technicalCookiesText")}</p>

          <h2 className="text-2xl font-bold text-[var(--color-primary)]">
            {t("cookiePolicy.thirdPartyCookiesTitle")}
          </h2>
          <p>{t("cookiePolicy.thirdPartyCookiesText")}</p>

          <h2 className="text-2xl font-bold text-[var(--color-primary)]">
            {t("cookiePolicy.externalServicesTitle")}
          </h2>
          <p>{t("cookiePolicy.thirdPartyCookiesText")}</p>

          <h2 className="text-2xl font-bold text-[var(--color-primary)]">
            {t("cookiePolicy.analyticsTitle")}
          </h2>
          <p>{t("cookiePolicy.analyticsText")}</p>

          <h2 className="text-2xl font-bold text-[var(--color-primary)]">
            {t("cookiePolicy.preferencesTitle")}
          </h2>
          <p>{t("cookiePolicy.preferencesText")}</p>

          <h2 className="text-2xl font-bold text-[var(--color-primary)]">
            {t("cookiePolicy.updatesTitle")}
          </h2>
          <p>{t("cookiePolicy.updatesText")}</p>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default CookiePolicyPage;
