import Navbar from "./Components/Header";
import Dashboard from "./Components/Dashboard";
// import Achievements from "./Components/Achievements";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

import dynamic from "next/dynamic";
import "react-toastify/dist/ReactToastify.css";

const Achievements = dynamic(() => import("./Components/Achievements"), {
  ssr: false,
});
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#000000]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <Dashboard />
        <Achievements />
        <Projects />
        <About />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
