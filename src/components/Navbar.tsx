import Image from "next/image";

import { navLists } from "@/constants";
import ToggleMenu from "./ToggleMenu";

const Navbar = () => {
  return (
    <nav className="w-full py-5 sm:px-10 px-5 flex justify-between items-center screen-max-width">
      <Image src="/assets/images/apple.svg" alt="Logo" width={15} height={15} />
      <menu className="flex flex-1 justify-center max-sm:hidden">
        {navLists.map((item) => (
          <li
            key={item}
            className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
          >
            {item}
          </li>
        ))}
      </menu>

      <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
        <Image
          src="/assets/images/search.svg"
          alt="Search"
          width={15}
          height={15}
        />
        <Image src="/assets/images/bag.svg" alt="Bag" width={15} height={15} />
        <ToggleMenu className="block sm:hidden z-50" />
      </div>

      <menu className="menu flex gap-6 flex-col fixed z-10 bg-[#3b3b3b] right-0 translate-x-[100%] duration-300 top-14 p-5 text-center md:hidden rounded-l-2xl after:w-10 after:h-10 after:bg-transparent after:shadow-[20px_20px_0_#3b3b3b] after:fixed after:bottom-[100%] after:rounded-full after:right-0">
        {navLists.map((item) => (
          <li
            key={item}
            className="px-5  text-sm cursor-pointer text-white hover:text-gray transition-all"
          >
            {item}
          </li>
        ))}
      </menu>
    </nav>
  );
};

export default Navbar;
