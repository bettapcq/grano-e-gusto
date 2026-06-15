import Navbar from "../components/Navbar";

function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="text-6xl md:text-8xl text-[var(--color-primary)]">
          Grano e Gusto
        </h1>

        <p className="mt-4 max-w-xl text-lg text-[var(--color-dark)]">
          La nostra terra, il tuo gusto.
        </p>
      </section>
    </main>
  );
}

export default HomePage;
