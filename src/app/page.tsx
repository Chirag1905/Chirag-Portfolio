"use client";
import dynamic from "next/dynamic";
import Dashboard from "./Components/Dashboard/Dashboard";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { JSX } from "react";
import { Toaster } from "react-hot-toast";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";

const Achievements = dynamic(() => import("./Components/Achievements/Achievements"), {
  ssr: false,
});
const Projects = dynamic(() => import("./Components/Projects/Projects"), {
  ssr: false,
});

export default function Home(): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col bg-[#fffefe] dark:bg-[#121212]">
      <Toaster position="top-right" />
      <Header />
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
