import { useState, useEffect } from "react";
import "./index.css";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Clients from "./sections/Clients";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import MediaIcons from "./sections/MediaIcons";
import TechStack from "./sections/TechStack";
import LoadingRobot from "./components/LoadingRobot";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingRobot />
      ) : (
        <main className="max-w-7xl mx-auto">
          <Navbar />
          {/* Hide MediaIcons on small screens */}
          <div className="hidden lg:flex ">
            <MediaIcons />
          </div>
          <Hero />
          <About />
          <TechStack />
          <Projects />
          <Clients />
          <Contact />
          <Footer />
        </main>
      )}
    </>
  );
}

export default App;
