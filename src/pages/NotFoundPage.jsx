import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

function NotFoundPage() {
  const { t } = useTranslation();
  return (
    <>
      <Navbar />

      <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
        <h1 className="mb-4 text-8xl font-bold text-[var(--color-primary)]">
          404
        </h1>

        <h2 className="mb-4 text-3xl font-bold text-[var(--color-dark)]">
          {t("notFound.title")}
        </h2>

        <p className="mb-8 max-w-md text-[var(--color-dark)]">
          {t("notFound.text")}
        </p>

        <Link
          to="/"
          className="rounded-full bg-[var(--color-primary)] px-8 py-3 font-semibold text-white transition hover:bg-[var(--color-accent)]"
        >
          {t("notFound.button")}
        </Link>
      </main>

      <Footer />
    </>
  );
}

export default NotFoundPage;
