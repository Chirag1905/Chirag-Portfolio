import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-black dark:text-white text-lg">
      <div className="container mx-auto p-14 flex justify-between items-center">
        <span>©HI®@G&apos;s Portfolio</span>
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
