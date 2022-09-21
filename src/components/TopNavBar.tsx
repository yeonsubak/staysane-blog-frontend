import { Navbar } from "flowbite-react";
import React from "react";
import StaysaneLogo from "../resources/img/StaysaneLogo";

const TopNavBar = () => {
  return (
    <Navbar>
      <Navbar.Brand>
        <StaysaneLogo />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Blog</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
        {/* <DarkThemeToggle onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} /> */}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNavBar;
