
import { motion } from "framer-motion";

const TechCard = ({ title, img }) => {
  return (
    <motion.div
      className="relative w-56 h-64 p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl
      flex flex-col justify-center items-center transition-all duration-300"
      whileHover={{ scale: 1.05, rotateX: 6, rotateY: 6 }}
      transition={{ type: "spring", stiffness: 120, damping: 10 }}
    >
      {/* Glassmorphism Inner Layer */}
      <div className="absolute inset-0 bg-white/5 rounded-xl border border-white/10 shadow-md"></div>

      {/* Floating Image */}
      <motion.div
        className="relative flex justify-center items-center w-20 h-20 p-4 bg-black/30 rounded-xl 
        border border-white/10 shadow-md"
        whileHover={{ scale: 1.1, y: -5 }}
        transition={{ type: "spring", stiffness: 150, damping: 10 }}
      >
        <img src={img} alt={title} className="w-14 h-14 object-contain" />
      </motion.div>

      {/* Floating Title */}
      <motion.h3
        className="relative mt-6 text-lg font-bold uppercase tracking-wide text-gray-300
        transition-colors duration-300"
        whileHover={{ scale: 1.05, y: -3 }}
      >
        {title}
      </motion.h3>
    </motion.div>
  );
};

export default TechCard;

