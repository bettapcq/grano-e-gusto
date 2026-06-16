import { motion } from "framer-motion";

function EventsSection() {
  return (
    <motion.section
      className="py-4 mx-2 md:mx-6 md:max-w-7xl"
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-between">
        eventi
      </div>
    </motion.section>
  );
}

export default EventsSection;
