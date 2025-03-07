
import { useRef } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import TechCard from "../components/TechCard";
import { TechStackData } from "../constants/index";

const TechStack = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="c-space my-20">
      <p className="head-text">
        Tech-Proficiency
      </p>
      <div className="relative w-full flex items-center justify-center ">
        {/* Left Arrow */}
        <button
          className="absolute left-2 z-10 bg-gray-800 p-3 rounded-full shadow-lg text-white"
          onClick={() => scroll("left")}
        >
          <FaChevronLeft size={20} />
        </button>

        {/* Cards Container */}
        <motion.div
          ref={carouselRef}
          className="flex gap-8 overflow-x-hidden scrollbar-hide scroll-smooth p-10 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {TechStackData.map((tech, index) => (
            <motion.div
              key={index}
              className="min-w-[250px]"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              <TechCard title={tech.title} img={tech.img} />
            </motion.div>
          ))}
        </motion.div>

        {/* Right Arrow */}
        <button
          className="absolute right-2 z-10 bg-gray-800 p-3 rounded-full shadow-lg text-white"
          onClick={() => scroll("right")}
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default TechStack;



// import { useRef } from "react";
// import { motion } from "framer-motion";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import TechCard from "../components/TechCard";
// import { TechStackData } from "../constants/index";

// const TechStack = () => {
//   const carouselRef = useRef(null);

//   const scroll = (direction) => {
//     if (carouselRef.current) {
//       const scrollAmount = direction === "left" ? -300 : 300;
//       carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
//     }
//   };

//   return (
//     <section className="c-space my-20">
//       <p className="head-text">
//         TechProficiency
//       </p>
//       <div className="c-space my-20 relative w-full flex items-center justify-center">
//         {/* Left Arrow */}
//         <button
//           className="absolute left-2 z-10 bg-gray-800 p-3 rounded-full shadow-lg text-white"
//           onClick={() => scroll("left")}
//         >
//           <FaChevronLeft size={20} />
//         </button>

//         {/* Cards Container */}
//         <motion.div
//           ref={carouselRef}
//           className="tech-carousel flex gap-8 overflow-x-hidden scrollbar-hide scroll-smooth p-10 w-full"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.8 }}
//         >
//           {TechStackData.map((tech, index) => (
//             <motion.div
//               key={index}
//               className="tech-card min-w-[250px]"
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               whileHover={{ scale: 1.1 }}
//             >
//               <TechCard title={tech.title} img={tech.img} />
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Right Arrow */}
//         <button
//           className="absolute right-2 z-10 bg-gray-800 p-3 rounded-full shadow-lg text-white"
//           onClick={() => scroll("right")}
//         >
//           <FaChevronRight size={20} />
//         </button>
//       </div>
//     </section>
//   );
// };

// export default TechStack;


// import  { useState } from "react";
// import {TechStackData } from "../constants";
// import  BallCanvas  from "../components/Ball";

// const Tech = () => {
//   const [toottipTexts, setTooltipTexts] = useState({});

//   const handleMouseEnter = (index, technology) => {
//     setTooltipTexts({ [index]: technology });
//   };

//   const handleMouseLeave = () => {
//     setTooltipTexts({});
//   };

//   return (
//    <section className="c-space my-20">
//     <p className="head-text">
//         Tech-Proficiency
//     </p>
//     <div className="flex flex-row flex-wrap justify-center gap-10 mt-4">
//       {TechStackData.map((technology, index) => (
//         <div
//           className="w-28 h-28 mb-2 relative"
//           key={technology.name}
//           onMouseEnter={() => handleMouseEnter(index, technology.name)}
//           onMouseLeave={handleMouseLeave}
//         >
//           <div>
//             <BallCanvas icon={technology.icon} />
//           </div>

//           {toottipTexts[index] && (
//             <div className="absolute bg-black bg-opacity-80 text-white px-2 py-1 rounded text-sm z-10 bottom-[90%] left-1/2 transform -translate-x-1/2 whitespace-nowrap">
//               {toottipTexts[index]}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//    </section>
//   );
// };

// export default Tech;