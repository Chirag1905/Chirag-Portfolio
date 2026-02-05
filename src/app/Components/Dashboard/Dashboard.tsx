import { FC } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import NeonLink from "@/app/utils/NeonLink";

const Dashboard: FC = () => {
  return (
    <section id="dashboard" className="relative my-10 sm:my-16 lg:my-24">
      <div className="glass-card rounded-[40px] p-8 sm:p-12 lg:p-16 border border-white/20 dark:border-white/5 relative overflow-hidden">


        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.1]">
              <span className="block text-2xl sm:text-3xl font-medium text-gray-500 dark:text-gray-400 mb-2">Hello, I&apos;m</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 animate-shine bg-[length:200%_auto] whitespace-nowrap inline-block">
                <TypeAnimation
                  sequence={[
                    "Chirag Vadhavana",
                    3000,
                    "Mern Stack Developer",
                    1000,
                    "Part-time Freelancer",
                    1000,
                    "Researcher",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h1>

            <p className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
              Building modern, high-performance web applications with clean UI, scalable architecture, and real-world impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              {/* <Link
                href="#contact"
                className="px-8 py-3.5 rounded-full bg-black dark:bg-white text-white dark:text-black font-semibold hover:scale-105 transition-transform duration-200 shadow-xl shadow-indigo-500/20"
              >
                Let&apos;s Talk
              </Link>
              <Link
                href="/Resume_Chirag.pdf"
                download
                className="px-8 py-3.5 rounded-full bg-white dark:bg-white/10 text-black dark:text-white font-semibold border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/20 transition-all duration-200 backdrop-blur-md"
              >
                Download CV
              </Link> */}
              <NeonLink text="Hire Me" link="/#contact" />
              <NeonLink text="Download CV" link="Resume_Chirag.pdf" />
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px]">
              {/* Rotating Rings */}
              <div className="absolute inset-0 border border-indigo-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-4 border border-purple-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

              <div className="absolute inset-10 bg-linear-to-b from-gray-100 to-white dark:from-white/5 dark:to-transparent backdrop-blur-sm rounded-full overflow-hidden flex items-center justify-center border border-white/20 shadow-2xl">
                <Image
                  src="/images/hero-image2-removebg.png"
                  alt="Chirag Vadhavana"
                  fill
                  className="object-cover object-top scale-110 hover:scale-115 transition-transform duration-700"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;