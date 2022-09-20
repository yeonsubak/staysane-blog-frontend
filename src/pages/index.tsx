import { DarkThemeToggle, Flowbite, Navbar } from "flowbite-react";
import type { NextPage } from "next";
import { Provider } from "react-redux";
import { store } from "../store/store";

import PlaylistWidget from "../components/PlaylistWidget";
import StaysaneLogo from "../resources/img/StaysaneLogo";
import BlogPost from "../components/BlogPost";
import { useTheme } from 'next-themes'

const Home: NextPage = () => {
  // const { theme, setTheme } = useTheme()
    return (
    <Provider store={store}>
      <Flowbite
        theme={{
          theme: {
            navbar: {
              base: "bg-themeGray",
              link: {
                base: "block py-2 pr-4 pl-3 md:p-0",
                active: {
                  on: "bg-blue-700 text-white md:bg-transparent md:text-blue-700",
                  off: "border-b border-gray-100  text-gray-700 hover:bg-gray-50 md:border-0 md:hover:bg-transparent md:hover:text-blue-700",
                },
                disabled: {
                  on: "text-gray-400 hover:cursor-not-allowed",
                  off: "",
                },
              },
              collapse: {
                list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-lg font-medium",
              },
            },
          },
        }}
      >
        <div className="bg-themeGray">
          <div className="mx-16 py-2 lg:mx-36">
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
            <div className="mt-2 flex flex-row gap-8">
              <div className="flex basis-4/6 flex-col gap-6">
                <BlogPost />
              </div>
              <div className="">
                <PlaylistWidget />
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </Flowbite>
    </Provider>
  );
};

export default Home;
