"use client";
import { FC } from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

interface AchievementItem {
  metric: string;
  value: string;
  prefix?: string;
  postfix?: string;
}

const achievementsList: AchievementItem[] = [
  { metric: "Projects Delivered", value: "14", postfix: "+" },
  { metric: "Clients & Teams Served", value: "6", postfix: "+" },
  { metric: "Tech Stack Expertise", value: "8", postfix: "+" },
  { metric: "Years Experience", value: "3", postfix: "+" },
];

const Achievements: FC = () => {
  return (
    <section
      className="relative my-10"
    >
      <div
        className="glass-card grid grid-cols-2 sm:grid-cols-4 rounded-3xl 
        sm:rounded-4xl p-6 sm:p-10 lg:p-16 gap-y-8 gap-x-4
        border border-white/20 dark:border-white/5"
      >
        {achievementsList.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center"
          >
            <h2
              className="flex items-center gap-1
              text-2xl sm:text-3xl lg:text-4xl
              font-extrabold text-black dark:text-white"
            >
              {achievement.prefix && <span>{achievement.prefix}</span>}

              <AnimatedNumbers
                animateToNumber={parseInt(achievement.value, 10)}
                locale="en-US"
                className="tabular-nums"
              />

              {achievement.postfix && <span>{achievement.postfix}</span>}
            </h2>

            <p
              className="mt-1 sm:mt-2
              text-xs sm:text-sm lg:text-base
              text-[#3c4042] dark:text-[#ADB7BE]
              leading-tight"
            >
              {achievement.metric}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;