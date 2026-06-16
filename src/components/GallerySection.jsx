import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const images = [
  "/gallery/foto1.jpeg",
  "/gallery/foto2.jpeg",
  "/gallery/foto3.jpeg",
  "/gallery/foto4.jpeg",
  "/gallery/foto5.jpeg",
  "/gallery/foto6.jpeg",
  "/gallery/foto7.jpeg",
  "/gallery/foto8.jpeg",
  "/gallery/foto9.jpeg",
  "/gallery/foto10.jpeg",
  "/gallery/foto11.jpeg",
  "/gallery/foto12.jpeg",
  "/gallery/foto13.jpeg",
  "/gallery/foto14.jpeg",
];

function GallerySection() {
  // posizione orizzontale del carosello
  const x = useMotionValue(0);

  // velocità di scorrimento automatico (pixel/ms)
  const speed = 0.05;

  const imageWidth = 256;
  const gap = 24;

  // calcolo della larghezza totale di un ciclo completo (per capire quando ricominciare da capo)
  const singleLoopWidth = images.length * (imageWidth + gap);

  // duplicazione array per effetto loop infinito(le immagini si ripetono)
  const loopImages = [...images, ...images];

  useAnimationFrame((time, delta) => {
    // posizione attuale del carosello
    const currentX = x.get();

    // spostamento automatico verso sinistra
    let nextX = currentX - speed * delta;

    //quando le immagini terminano, ricomincia da capo
    if (nextX <= -singleLoopWidth) {
      nextX = 0;
    }

    if (nextX > 0) {
      nextX = -singleLoopWidth;
    }

    x.set(nextX);
  });

  return (
    <section className="relative overflow-hidden bg-[url('/gallery-bg.jpg')] bg-cover bg-center py-16">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-2xl font-bold tracking-wide text-[var(--color-dark)]">
          VIVI L'ESPERIENZA
        </h2>

        <img
          src="/divider.png"
          alt="Grano e Gusto divider"
          className="mx-auto mb-6 mt-2 w-32 md:w-76"
        />

        <div className="cursor-grab overflow-hidden active:cursor-grabbing">
          <motion.div
            className="flex gap-6"
            style={{ x }}
            drag="x"
            dragElastic={0}
            dragMomentum={false}
          >
            {loopImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                draggable="false"
                className="h-64 w-64 shrink-0 object-cover"
              />
            ))}
          </motion.div>
        </div>

        <a
          href="/menu"
          className="mx-auto mt-8 inline-flex items-center gap-2  bg-[var(--color-primary)] px-5 py-2 text-xs uppercase tracking-wide text-[var(--color-secondary)] transition hover:bg-transparent hover:text-[var(--color-primary)] hover:border hover:border-[var(--color-primary)]"
        >
          Scopri il menu completo
          <FaArrowRight />
        </a>
      </div>
    </section>
  );
}

export default GallerySection;
