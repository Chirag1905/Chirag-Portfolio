"use client";
import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import NeonLink from "@/app/utils/NeonLink";
import Reveal from "@/app/utils/Reveal";
import { HERO_COPY } from "@/app/utils/heroCopy";

const Dashboard: FC = () => {
  return (
    <section
      id="dashboard"
      className="relative sm:my-10"
    >
      <div
        className="glass-card rounded-4xl p-6 sm:px-15 border border-white/20 dark:border-white/5"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-28">
          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left space-y-6 sm:space-y-8">
            <div className="space-y-2 sm:space-y-3">
              <Reveal delay={0.05}>
                <span className="block text-xs sm:text-sm font-semibold tracking-widest uppercase text-gray-400">
                  Hello, I&apos;m
                </span>
              </Reveal>

              <Reveal delay={0.1}>
                <h1
                  className="text-xl sm:text-3xl font-extrabold tracking-tight text-gray-800 dark:text-gray-100"
                >
                  {HERO_COPY.name}
                </h1>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="text-xl sm:text-2xl font-medium text-blue-400">
                  <TypeAnimation
                    sequence={[
                      HERO_COPY.roles[0], 2200,
                      HERO_COPY.roles[1], 2200,
                      HERO_COPY.roles[2], 2200,
                    ]}
                    speed={55}
                    repeat={Infinity}
                  />
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <p
                className="mx-auto lg:mx-0 text-sm sm:text-base text-justify leading-relaxed text-gray-600 dark:text-gray-300"
              >
                {HERO_COPY.summary}
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <div
                className="flex flex-col sm:flex-row
                gap-3 sm:gap-4
                justify-center lg:justify-start pt-2"
              >
                <NeonLink
                  text="Hire Me"
                  link="/#contact"
                  className="w-full sm:w-auto"
                />
                <NeonLink
                  text="Download CV"
                  link="Resume_Chirag.pdf"
                  className="w-full sm:w-auto"
                />
              </div>
            </Reveal>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end mt-8 lg:mt-0"
          >
            <div
              className="relative
              w-56 h-56
              sm:w-80 sm:h-80
              lg:w-[440px] lg:h-[440px]"
            >
              <div className="absolute inset-0 rounded-full border border-indigo-500/20 animate-[spin_24s_linear_infinite]" />
              <div className="absolute inset-5 rounded-full border border-purple-500/20 animate-[spin_36s_linear_infinite_reverse]" />
              <div
                className="absolute inset-10 rounded-full overflow-hidden
                border border-white/20 bg-white/5
                backdrop-blur-md shadow-2xl"
              >
                <Image
                  src="/images/hero-image2-removebg.png"
                  alt={HERO_COPY.name}
                  fill
                  priority
                  className="object-cover object-top scale-110 hover:scale-115 transition-transform duration-700"
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