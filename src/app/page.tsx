"use client";
import dynamic from "next/dynamic";
import Dashboard from "./Components/Dashboard";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { JSX } from "react";
import { Toaster } from "react-hot-toast";

const Achievements = dynamic(() => import("./Components/Achievements"), {
  ssr: false,
});
const Projects = dynamic(() => import("./Components/Projects"), {
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
