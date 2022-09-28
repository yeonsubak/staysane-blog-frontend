import "/styles/globals.css";
import type { AppProps } from "next/app";
import TopNavBar from "../components/TopNavBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
        <div className="min-h-screen bg-gray-50">
          <div className="w-auto px-4 py-4 sm:px-8 md:mx-auto lg:w-[1024px]">
            <div className="mb-8">
              <TopNavBar />
            </div>
            <Component {...pageProps} />
          </div>
        </div>
  );
}

export default MyApp;
