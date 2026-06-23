import WheatBackground from "../components/WheatBackground";
import Navbar from "../components/Navbar";
import BookingSection from "../components/BookingSection";
import WhatsappButton from "../components/WhatsappButton";
import Footer from "../components/Footer";
import MenuHero from "../components/MenuHero";

function MenuPage() {
  return (
    <main className="relative min-h-screen bg-[var(--color-bg)]">
      <WheatBackground />
      <Navbar />
      <section className="relative flex min-h-screen flex-col items-center justify-start overflow-hidden text-center pt-35 md:pt-40">
        <div className="relative z-10">
          <MenuHero />
        </div>
        {/* 
        <BookingSection /> */}
        <WhatsappButton />
      </section>
      <Footer />
    </main>
  );
}

export default MenuPage;
