import React, { useState } from "react";
import StaysaneLogo from "../resources/img/StaysaneLogo";
import { Twirl as Hamburger } from "hamburger-react";
import Link from "next/link";

const TopNavBar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="flex flex-row">
        <StaysaneLogo />
        <ul className="ml-auto hidden flex-row items-center gap-8 font-medium md:flex">
          <li>About</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
        <div className="ml-auto block md:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
      {isOpen ? (
        <div className="mt-4 md:hidden">
          <ul className="flex flex-col gap-2 pr-8">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/posts">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default TopNavBar;
