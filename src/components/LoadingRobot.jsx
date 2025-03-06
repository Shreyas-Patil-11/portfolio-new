
// import { useState, useEffect } from "react";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// const LoadingRobot = () => {
//     const [textIndex, setTextIndex] = useState(0);
//     const messages = [
//         "Building the Future, One Pixel at a Time...",
//         "Transforming imagination into interactive experiences.",
//         "Hold tight—greatness is loading!"
//     ];

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setTextIndex((prevIndex) => (prevIndex + 1) % messages.length);
//         }, 3000); // Change text every 3 seconds

//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <section className="h-screen w-full flex flex-col justify-center items-center bg-black text-white text-center px-4">
//             <DotLottieReact
//                 src="https://lottie.host/a38d774b-8b60-4846-af50-1e08bfa88d43/zyQOf9nqRy.lottie"
//                 loop
//                 autoplay
//                 className="w-40 h-40 sm:w-56 sm:h-56"
//             />

//             <h2 className=" text-gray-400 text-2xl sm:text-3xl font-bold mt-6 transition-opacity duration-500 opacity-100">
//                 {messages[textIndex]}
//             </h2>
//         </section>
//     );
// };

// export default LoadingRobot;






import { useState, useEffect } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const LoadingRobot = () => {
    const [textIndex, setTextIndex] = useState(0);
    const messages = [
        "Building the Future, One Pixel at a Time...",
        "Transforming imagination into interactive experiences.",
        "Hold tight—greatness is loading!"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prevIndex) => (prevIndex + 1) % messages.length);
        }, 3000); // Change text every 3 seconds

        return () => clearInterval(interval);
    }, []);
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center bg-black text-white text-center px-4">
    <DotLottieReact
      src="https://lottie.host/075efdbf-c89d-48d2-a3ef-b94d77de76f6/LUBgcZAHjB.lottie"
      loop
      autoplay
      className="w-40 h-40 sm:w-56 sm:h-56"
    />
      
                  <h2 className=" text-gray-400 text-2xl sm:text-3xl font-bold mt-6 transition-opacity duration-500 opacity-100">
                      {messages[textIndex]}
                  </h2>
              </section>
  );
};


export default LoadingRobot;
