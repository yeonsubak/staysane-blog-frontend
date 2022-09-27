import React, { useState } from "react";
import StaysaneLogo from "../resources/img/StaysaneLogo";
import { Twirl as Hamburger } from "hamburger-react";
import Link from "next/link";

const TopNavBar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="flex flex-row">
        <Link href="/">
          <a>
            <StaysaneLogo />
          </a>
        </Link>
        <ul className="ml-auto hidden flex-row items-center gap-8 font-medium md:flex">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/post">Blog</Link>
          </li>
          <li>
            <Link href="https://github.com/yeonsubak">Github</Link>
          </li>
        </ul>
        <div className="ml-auto block md:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
      {isOpen ? (
        <div className="mt-4 md:hidden">
          <ul className="flex flex-col gap-2 pr-8">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/post">Blog</Link>
            </li>
            <li>
              <Link href="https://github.com/yeonsubak">Github</Link>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default TopNavBar;
