import "/styles/globals.css";
import "/styles/edjs.css";
import type { AppProps } from "next/app";
import TopNavBarDesktop from "../components/navBar/TopNavBarDesktop";
import { useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import TopNavBarMobile from "../components/navBar/TopNavBarMobile";
import { GoogleAnalytics } from "nextjs-google-analytics";

function MyApp({ Component, pageProps }: AppProps) {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <div id="TopNavBarMobile">
        {isOpen ? <TopNavBarMobile isOpen={isOpen} setOpen={setOpen} /> : ""}
      </div>
      <div className="w-auto px-4 py-4 sm:px-8 md:mx-auto lg:w-[1024px]">
        <div className="mb-8 flex flex-row sm:block sm:flex-none">
          <TopNavBarDesktop />
          <div className="z-20 ml-auto sm:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
        <GoogleAnalytics trackPageViews />
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
