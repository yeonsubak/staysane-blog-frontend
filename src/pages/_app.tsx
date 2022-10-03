import "/styles/globals.css";
import "/styles/edjs.css";
import type { AppProps } from "next/app";
import TopNavBarDesktop from "../components/TopNavBarDesktop";
import { useEffect, useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import TopNavBarMobile from "../components/TopNavBarMobile";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  const [isOpen, setOpen] = useState<boolean>(false);
  // Required functions for Google Analytics
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div>
        {isOpen ? <TopNavBarMobile isOpen={isOpen} setOpen={setOpen} /> : ""}
      </div>
      <div className="w-auto px-4 py-4 sm:px-8 md:mx-auto lg:w-[1024px]">
        <div className="mb-8 flex flex-row sm:block sm:flex-none">
          <TopNavBarDesktop />
          <div className="z-20 ml-auto sm:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
