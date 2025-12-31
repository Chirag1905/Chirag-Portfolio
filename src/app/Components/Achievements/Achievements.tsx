"use client";
import { FC } from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

interface AchievementItem {
  metric: string;
  value: string;
  prefix?: string;
  postfix?: string;
}

const achievementsList: AchievementItem[] = [
  {
    metric: "Projects Delivered",
    value: "14",
    postfix: "+",
  },
  {
    metric: "Clients & Teams Served",
    value: "6",
    postfix: "+",
  },
  {
    metric: "Tech Stack Expertise",
    value: "8",
    postfix: "+",
  },
  {
    metric: "Years Experience",
    value: "3",
    postfix: "+",
  },
];

const Achievements: FC = () => {
  return (
    <section className="border border-black/10 dark:border-white/10 rounded-4xl shadow-2xl bg-[#F6F6F6] dark:bg-[#151515] text-center text-black dark:text-white my-7 py-4 sm:my-20 px-4">
      <div className="py-6 px-6 grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-center">
        {achievementsList?.map((achievement, index) => (
          <div key={index} className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0">
            <h2 className="text-black dark:text-white text-4xl font-bold flex flex-row items-center">
              {achievement.prefix && <span>{achievement.prefix}</span>}

              <AnimatedNumbers
                animateToNumber={parseInt(achievement.value, 10)}
                locale="en-US"
                className="text-black dark:text-white text-4xl font-bold"
              />

              {achievement.postfix && <span>{achievement.postfix}</span>}
            </h2>
            <p className="text-[#3c4042] dark:text-[#ADB7BE] text-base">
              {achievement.metric}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
