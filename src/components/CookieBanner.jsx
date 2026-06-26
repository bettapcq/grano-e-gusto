// src/components/CookieBanner.jsx

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function CookieBanner() {
  const { t } = useTranslation();
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");

    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  function handleAccept() {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  }

  if (!showBanner) return null;

  return (
    <div className="fixed right-4 bottom-4 left-4 z-50 mx-auto max-w-xl rounded-2xl bg-white p-5 shadow-2xl md:left-auto md:w-[420px]">
      <p className="mb-4 text-sm leading-relaxed text-[var(--color-text)]">
        {t("cookieBanner.text")}{" "}
        <Link
          to="/cookie-policy"
          className="font-semibold text-[var(--color-primary)] underline"
        >
          Cookie Policy
        </Link>
        .
      </p>

      <button
        type="button"
        onClick={handleAccept}
        className="w-full rounded-full bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-accent)]"
      >
        {t("cookieBanner.button")}
      </button>
    </div>
  );
}

export default CookieBanner;
