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
    <section id="dashboard" className="relative my-16 sm:my-24 lg:my-32">
      <div
        className="glass-card rounded-4xl p-8 sm:p-12 lg:p-16 border border-white/20 dark:border-white/5"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-18 lg:gap-32">
          <div className="text-center lg:text-left space-y-10">
            {/* <Reveal>
                <StatusPill />
              </Reveal> */}

            <div className="space-y-3">
              <Reveal delay={0.05}>
                <span className="block text-xs font-semibold tracking-widest uppercase text-gray-400">
                  Hello, I&apos;m
                </span>
              </Reveal>

              <Reveal delay={0.1}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-800 dark:text-gray-100">
                  {HERO_COPY.name}
                </h1>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="text-sm sm:text-base lg:text-lg font-medium text-blue-400">
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
              <p className="max-w-lg mx-auto lg:mx-0 text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-300">
                {HERO_COPY.summary}
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                <NeonLink text="Hire Me" link="/#contact" />
                <NeonLink text="Download CV" link="Resume_Chirag.pdf" />
              </div>
            </Reveal>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[460px] lg:h-[460px]">
              <div className="absolute inset-0 rounded-full border border-indigo-500/20 animate-[spin_24s_linear_infinite]" />
              <div className="absolute inset-6 rounded-full border border-purple-500/20 animate-[spin_36s_linear_infinite_reverse]" />
              <div className="absolute inset-12 rounded-full overflow-hidden border border-white/20 bg-white/5 backdrop-blur-md shadow-2xl">
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

// "use client";

// import { FC, useRef } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { TypeAnimation } from "react-type-animation";
// import NeonLink from "@/app/utils/NeonLink";

// const Dashboard: FC = () => {
//   const glowRef = useRef<HTMLDivElement>(null);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!glowRef.current) return;
//     const rect = glowRef.current.getBoundingClientRect();
//     glowRef.current.style.setProperty(
//       "--x",
//       `${e.clientX - rect.left}px`
//     );
//     glowRef.current.style.setProperty(
//       "--y",
//       `${e.clientY - rect.top}px`
//     );
//   };

//   return (
//     <section id="dashboard" className="relative my-16 sm:my-24 lg:my-32">
//       <div
//         ref={glowRef}
//         onMouseMove={handleMouseMove}
//         className="relative overflow-hidden rounded-4xl border border-white/20 dark:border-white/5
//                    backdrop-blur-xl p-8 sm:p-12 lg:p-16
//                    before:absolute before:inset-0
//                    before:bg-[radial-gradient(600px_circle_at_var(--x)_var(--y),rgba(99,102,241,0.15),transparent_40%)]
//                    before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500"
//       >
//         <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-18 lg:gap-32">

//           {/* ================= TEXT ================= */}
//           <div className="text-center lg:text-left space-y-10">
//             {/* Status pill */}
//             {/* <div className="flex justify-center lg:justify-start">
//               <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-xs tracking-wide text-emerald-400">
//                 <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
//                 Available for freelance
//               </span>
//             </div> */}

//             {/* Apple-style text reveal */}
//             <div className="space-y-3">
//               <motion.span
//                 initial={{ opacity: 0, y: 12 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, ease: "easeOut" }}
//                 className="block text-xs tracking-widest uppercase text-gray-400"
//               >
//                 Hello, I&apos;m
//               </motion.span>

//               <motion.h1
//                 initial={{ opacity: 0, y: 16 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
//                 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
//               >
//                 Chirag Vadhavana
//               </motion.h1>

//               <motion.div
//                 initial={{ opacity: 0, y: 14 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
//                 className="text-sm sm:text-base lg:text-lg font-medium text-blue-400"
//               >
//                 <TypeAnimation
//                   sequence={[
//                     "MERN Stack Developer",
//                     2200,
//                     "Part-time Freelancer",
//                     2200,
//                     "Researcher",
//                     2200,
//                   ]}
//                   speed={55}
//                   repeat={Infinity}
//                 />
//               </motion.div>
//             </div>

//             {/* FAANG-style hero copy */}
//             <motion.p
//               initial={{ opacity: 0, y: 18 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
//               className="max-w-lg mx-auto lg:mx-0 text-sm sm:text-base leading-relaxed text-gray-300"
//             >
//               I design and build scalable, production-grade web applications used
//               in real-world business environments. With a strong focus on clean
//               architecture, performance, and maintainable code, I specialize in
//               delivering end-to-end MERN stack solutions that grow with users and
//               teams.
//             </motion.p>

//             {/* CTAs with cursor glow */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
//               className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2"
//             >
//               <NeonLink text="Hire Me" link="/#contact" />
//               <NeonLink text="Download CV" link="Resume_Chirag.pdf" />
//             </motion.div>
//           </div>

//           {/* ================= IMAGE ================= */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="relative flex justify-center lg:justify-end"
//           >
//             <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[460px] lg:h-[460px]">
//               <div className="absolute inset-0 rounded-full border border-indigo-500/20 animate-[spin_24s_linear_infinite]" />
//               <div className="absolute inset-6 rounded-full border border-purple-500/20 animate-[spin_36s_linear_infinite_reverse]" />

//               <div className="absolute inset-12 rounded-full overflow-hidden border border-white/20 bg-white/5 backdrop-blur-md shadow-2xl">
//                 <Image
//                   src="/images/hero-image2-removebg.png"
//                   alt="Chirag Vadhavana"
//                   fill
//                   priority
//                   className="object-cover object-top scale-110 hover:scale-115 transition-transform duration-700"
//                 />
//               </div>
//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Dashboard;

// import { FC } from "react";
// import Image from "next/image";
// import { TypeAnimation } from "react-type-animation";
// import { motion } from "framer-motion";
// import NeonLink from "@/app/utils/NeonLink";

// const Dashboard: FC = () => {
//   return (
//     <section id="dashboard" className="relative my-14 sm:my-20 lg:my-28">
//       <div className="glass-card rounded-4xl p-8 sm:p-12 lg:p-16 border border-white/20 dark:border-white/5 relative overflow-hidden">
//         <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-28">

//           {/* ================= TEXT SECTION ================= */}
//           <motion.div
//             initial={{ opacity: 0, x: -28 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7, ease: "easeOut" }}
//             className="text-center lg:text-left space-y-10"
//           >
//             {/* Heading */}
//             <div className="space-y-3">
//               <span className="block text-xs tracking-widest uppercase text-gray-500 dark:text-gray-400">
//                 Hello, I&apos;m
//               </span>

//               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
//                 Chirag Vadhavana
//               </h1>

//               {/* Role Animation */}
//               <div className="text-sm sm:text-base lg:text-lg font-medium text-blue-500 dark:text-blue-400">
//                 <TypeAnimation
//                   sequence={[
//                     "MERN Stack Developer",
//                     2200,
//                     "Part-time Freelancer",
//                     2200,
//                     "Researcher",
//                     2200,
//                   ]}
//                   speed={55}
//                   repeat={Infinity}
//                 />
//               </div>
//             </div>

//             {/* Description */}
//             <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed max-w-lg mx-auto lg:mx-0 font-light">
//               I build modern, high-performance web applications with clean UI,
//               scalable architecture, and real-world impact. Specializing in the
//               MERN stack, I craft reliable backends, smooth user experiences, and
//               production-ready solutions that scale with growing businesses.
//             </p>

//             {/* CTAs */}
//             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
//               <NeonLink text="Hire Me" link="/#contact" />
//               <NeonLink text="Download CV" link="Resume_Chirag.pdf" />
//             </div>
//           </motion.div>

//           {/* ================= IMAGE SECTION ================= */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.7, ease: "easeOut" }}
//             className="relative flex justify-center lg:justify-end"
//           >
//             <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[460px] lg:h-[460px]">

//               {/* Outer Rings */}
//               <div className="absolute inset-0 border border-indigo-500/20 rounded-full animate-[spin_22s_linear_infinite]" />
//               <div className="absolute inset-6 border border-purple-500/20 rounded-full animate-[spin_32s_linear_infinite_reverse]" />

//               {/* Avatar */}
//               <div className="absolute inset-12 bg-linear-to-b from-gray-100 to-white dark:from-white/5 dark:to-transparent backdrop-blur-md rounded-full overflow-hidden border border-white/20 shadow-2xl">
//                 <Image
//                   src="/images/hero-image2-removebg.png"
//                   alt="Chirag Vadhavana"
//                   fill
//                   priority
//                   className="object-cover object-top scale-110 hover:scale-115 transition-transform duration-700"
//                 />
//               </div>
//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Dashboard;

// import { FC } from "react";
// import Image from "next/image";
// import { TypeAnimation } from "react-type-animation";
// import { motion } from "framer-motion";
// import NeonLink from "@/app/utils/NeonLink";

// const Dashboard: FC = () => {
//   return (
//     <section id="dashboard" className="relative my-12 sm:my-20 lg:my-28">
//       <div className="glass-card rounded-4xl p-8 sm:p-12 lg:p-16 border border-white/20 dark:border-white/5 relative overflow-hidden">
//         <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-14 lg:gap-24">

//           {/* ================= TEXT SECTION ================= */}
//           <motion.div
//             initial={{ opacity: 0, x: -24 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//             className="text-center lg:text-left space-y-8"
//           >
//             {/* Heading */}
//             <div className="space-y-3">
//               <span className="block text-xs sm:text-sm tracking-widest uppercase text-gray-500 dark:text-gray-400">
//                 Hello, I&apos;m
//               </span>

//               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
//                 Chirag Vadhavana
//               </h1>

//               <div className="text-lg sm:text-xl lg:text-2xl font-medium text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-purple-500 to-indigo-500">
//                 <TypeAnimation
//                   sequence={[
//                     "MERN Stack Developer",
//                     2000,
//                     "Part-time Freelancer",
//                     2000,
//                     "Researcher",
//                     2000,
//                   ]}
//                   speed={60}
//                   repeat={Infinity}
//                 />
//               </div>
//             </div>

//             {/* Description */}
//             <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
//               I build modern, high-performance web applications with clean UI,
//               scalable architecture, and real-world impact. Specializing in the
//               MERN stack, I craft reliable backends, smooth user experiences, and
//               production-ready solutions that scale with growing businesses.
//             </p>

//             {/* CTAs */}
//             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
//               <NeonLink text="Hire Me" link="/#contact" />
//               <NeonLink text="Download CV" link="Resume_Chirag.pdf" />
//             </div>
//           </motion.div>

//           {/* ================= IMAGE SECTION ================= */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.92 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//             className="relative flex justify-center lg:justify-end"
//           >
//             <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[480px] lg:h-[480px]">

//               {/* Rotating rings */}
//               <div className="absolute inset-0 border border-indigo-500/20 rounded-full animate-[spin_18s_linear_infinite]" />
//               <div className="absolute inset-5 border border-purple-500/20 rounded-full animate-[spin_26s_linear_infinite_reverse]" />

//               {/* Avatar */}
//               <div className="absolute inset-12 bg-linear-to-b from-gray-100 to-white dark:from-white/5 dark:to-transparent backdrop-blur-md rounded-full overflow-hidden flex items-center justify-center border border-white/20 shadow-2xl">
//                 <Image
//                   src="/images/hero-image2-removebg.png"
//                   alt="Chirag Vadhavana"
//                   fill
//                   className="object-cover object-top scale-110 hover:scale-115 transition-transform duration-700"
//                   priority
//                 />
//               </div>
//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Dashboard;

// import { FC } from "react";
// import Image from "next/image";
// import { TypeAnimation } from "react-type-animation";
// import { motion } from "framer-motion";
// import NeonLink from "@/app/utils/NeonLink";

// const Dashboard: FC = () => {
//   return (
//     <section id="dashboard" className="relative my-10 sm:my-16 lg:my-24">
//       <div className="glass-card rounded-4xl p-8 sm:p-12 lg:p-16 border border-white/20 dark:border-white/5 relative overflow-hidden">

//         <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
//           {/* Text Section */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center lg:text-left space-y-6"
//           >
//             <h1 className="flex text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.1]">
//               <span className="block text-2xl sm:text-3xl font-medium text-gray-500 dark:text-gray-400 mb-2">Hello, I&apos;m</span>
//               {/* <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-purple-600 to-indigo-600 animate-shine bg-size-[200%_auto] whitespace-nowrap inline-block"> */}
//               <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-purple-600 to-indigo-600 animate-shine bg-size-[200%_auto] whitespace-nowrap inline-block text-xl sm:text-3xl lg:text-4xl font-semibold">
//                 <TypeAnimation
//                   sequence={[
//                     "Chirag Vadhavana",
//                     3000,
//                     "Mern Stack Developer",
//                     1000,
//                     "Part-time Freelancer",
//                     1000,
//                     "Researcher",
//                     1000,
//                   ]}
//                   wrapper="span"
//                   speed={50}
//                   repeat={Infinity}
//                 />
//               </span>
//             </h1>

//             <p className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl text-justify leading-relaxed max-w-4xl mx-auto lg:mx-0 font-light">
//               Building modern, high-performance web applications with clean UI, scalable architecture, and real-world impact.
//               I specialize in the MERN stack, crafting reliable backends, smooth user experiences, and production-ready solutions that scale with growing businesses.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
//               {/* <Link
//                 href="#contact"
//                 className="px-8 py-3.5 rounded-full bg-black dark:bg-white text-white dark:text-black font-semibold hover:scale-105 transition-transform duration-200 shadow-xl shadow-indigo-500/20"
//               >
//                 Let&apos;s Talk
//               </Link>
//               <Link
//                 href="/Resume_Chirag.pdf"
//                 download
//                 className="px-8 py-3.5 rounded-full bg-white dark:bg-white/10 text-black dark:text-white font-semibold border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/20 transition-all duration-200 backdrop-blur-md"
//               >
//                 Download CV
//               </Link> */}
//               <NeonLink text="Hire Me" link="/#contact" />
//               <NeonLink text="Download CV" link="Resume_Chirag.pdf" />
//             </div>
//           </motion.div>

//           {/* Image Section */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6 }}
//             className="relative flex justify-center lg:justify-end"
//           >
//             <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px]">
//               {/* Rotating Rings */}
//               <div className="absolute inset-0 border border-indigo-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
//               <div className="absolute inset-4 border border-purple-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

//               <div className="absolute inset-10 bg-linear-to-b from-gray-100 to-white dark:from-white/5 dark:to-transparent backdrop-blur-sm rounded-full overflow-hidden flex items-center justify-center border border-white/20 shadow-2xl">
//                 <Image
//                   src="/images/hero-image2-removebg.png"
//                   alt="Chirag Vadhavana"
//                   fill
//                   className="object-cover object-top scale-110 hover:scale-115 transition-transform duration-700"
//                   priority
//                 />
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Dashboard;