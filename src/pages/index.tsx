import { DarkThemeToggle, Flowbite, Navbar } from "flowbite-react";
import type { NextPage } from "next";
import { Provider } from "react-redux";
import { store } from "../store/store";

import PlaylistWidget from "../components/PlaylistWidget";
import StaysaneLogo from "../resources/img/StaysaneLogo";
import BlogPost from "../components/BlogPost";
import { useTheme } from "next-themes";
import TopNavBar from "../components/TopNavBar";

const Home: NextPage = () => {
  // const { theme, setTheme } = useTheme()
  return (
    <div className="bg-themeGray">
      <div className="mx-16 py-2 lg:mx-36">
        <TopNavBar />
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
  );
};

export default Home;
