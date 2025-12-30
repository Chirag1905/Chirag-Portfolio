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
    metric: "Projects",
    value: "14",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "0",
  },
  {
    metric: "Awards",
    value: "0",
  },
  {
    metric: "Years",
    value: "2",
  },
];

const Achievements: FC = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="bg-[#F4F4F4] dark:bg-[#151515] sm:border-[#eee8e8] dark:sm:border-[#191919] sm:border rounded-xl py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => (
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
    </div>
  );
};

export default Achievements;
