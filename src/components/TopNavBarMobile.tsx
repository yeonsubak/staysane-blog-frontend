import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";

interface IToggleProps {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>
}

const TopNavBarMobile = ({ isOpen, setOpen }: IToggleProps) => {
  function toggleBurger() {
    setOpen(!isOpen);
  }

  return (
    <div className="flex flex-row-reverse">
      <div className="absolute z-10 h-screen w-2/3 bg-gray-50 shadow-md md:hidden">
        <ul className="px-10 pt-24 text-xl">
          <li className="border-t-2 border-b py-3 pl-4">
            <Link href="/about" passHref>
              <a onClick={() => toggleBurger()}>About</a>
            </Link>
          </li>
          <li className="border-b py-3 pl-4">
            <Link href="/post" passHref>
              <a onClick={() => toggleBurger()}>Blog</a>
            </Link>
          </li>
          <li className="border-b-2 py-3 pl-4">
            <Link href="https://github.com/yeonsubak" passHref>
              <a onClick={() => toggleBurger()}>Github</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopNavBarMobile;
