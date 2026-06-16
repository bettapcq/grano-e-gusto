import { motion } from "framer-motion";

function OwnerSection() {
  return (
    <motion.section
      className="py-4 mx-2 md:mx-6 md:max-w-7xl"
      initial={{ x: -120, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-between">
        <div className="flex flex-col items-center justify-center mx-4 md:mx-0">
          <h2 className="block md:hidden text-3xl px-6 font-bold text-center mb-6">
            L'anima del{" "}
            <span className="text-[var(--color-primary)]">progetto</span>
          </h2>
          <img
            src="/mattia.jpeg"
            alt="Mattia Ambrosi, l'anima della pizzeria Grano e Gusto"
            className="w-full h-full md:max-w-sm p-2 object-cover shadow-xl rounded-sm"
          />
        </div>

        <div className="flex flex-col items-center justify-center mx-4 md:mx-0">
          <h2 className="hidden md:block text-3xl px-6 font-bold text-center mb-6">
            L'anima del{" "}
            <span className="text-[var(--color-primary)]">progetto</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-lg mt-10 px-6 text-center">
            Al cuore di questa avventura c'è <strong>Mattia Ambrosi</strong>,
            giovane pizzaiolo che ha trasformato una passione nata quasi per
            caso in una professione costruita con studio, esperienza e ricerca
            continua. <br />
            Per Mattia la formazione non ha mai fine: più ci si aggiorna, più si
            riesce a offrire un prodotto e un servizio migliori.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

export default OwnerSection;
