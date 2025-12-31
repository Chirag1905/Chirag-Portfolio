import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="border border-t-black/10 dark:border-t-[#151515] border-b-transparent border-l-transparent border-r-transparent text-black dark:text-white text-base sm:text-lg">
      <div className="container mx-auto p-14 flex justify-between items-center">
        <span>©HI®@G&apos;s Portfolio</span>
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
