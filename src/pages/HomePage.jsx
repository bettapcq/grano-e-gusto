import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import WheatBackground from "../components/WheatBackground";
import HomepageHero from "../components/HomepageHero";
import StorySection from "../components/StorySection";
import GallerySection from "../components/GallerySection";
import OwnerSection from "../components/OwnerSection";
import EventsSection from "../components/EventsSection";

function HomePage() {
  return (
    <main className="relative min-h-screen bg-[var(--color-bg)]">
      <WheatBackground />
      <Navbar />
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden text-center">
        <div className="relative z-10">
          <HomepageHero />
        </div>
        <StorySection />
        <GallerySection />
        <OwnerSection />
        <EventsSection />
      </section>
      <Footer />
    </main>
  );
}

export default HomePage;
