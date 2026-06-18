import { FaWhatsapp } from "react-icons/fa";
import { LINKS } from "../config/links";
import { motion } from "framer-motion";

function WhatsappButton() {
  return (
    <motion.a
      href={LINKS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contattaci su WhatsApp"
      className="
        fixed
        right-5
        bottom-25
        z-50
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-full
        bg-[#25D366]
        text-white
        shadow-xl
        hover:scale-110
        hover:bg-[#1ebe5d]
      "
      initial={{ opacity: 0, y: 50 }}
      //effetto di oscillazione
      animate={{
        opacity: 1,
        y: 0,
        rotate: [0, -12, 12, -12, 12, 0],
      }}
      transition={{
        opacity: { duration: 0.5 },
        y: { duration: 0.5 },
        rotate: {
          duration: 0.8,
          repeat: Infinity,
          repeatDelay: 4,
          ease: "easeInOut",
        },
      }}
      whileHover={{
        scale: 1.1,
      }}
    >
      <FaWhatsapp className="text-4xl" />
    </motion.a>
  );
}

export default WhatsappButton;
