"use client";
import { FC } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const Dashboard: FC = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-black dark:text-white mb-4 text-2xl sm:text-3xl lg:text-6xl lg:leading-normal font-bold">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Chirag Vadhavana",
                1000,
                "Web Developer",
                1000,
                "Part-time Trader",
                1000,
                "Researcher",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#4b5053] dark:text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Hi, My Name is Chirag and I am a Passionate
          </p>

          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-linear-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>

            <Link
              href="Chirag_Resume.pdf"
              download="Chirag_Resume.pdf"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-linear-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-black dark:text-white mt-3"
            >
              <span className="block bg-[#e7e7e7] dark:bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#F4F4F4] dark:bg-[#151515] w-62.5 h-62.5 lg:w-100 lg:h-100 relative">
            <Image
              src="/images/hero-image2-removebg.png"
              alt="hero image"
              fill
              className="object-contain p-2"
              priority
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Dashboard;
