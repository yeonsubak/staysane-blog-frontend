import "/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { Flowbite } from "flowbite-react";
import TopNavBar from "../components/TopNavBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableColorScheme={false}
        forcedTheme="light"
      >
        <Flowbite
          theme={{
            theme: {},
          }}
        >
          <div className="bg-themeGray">
            <div className="w-auto px-8 py-4 md:mx-auto md:w-[768px]">
              <div className="mb-8">
                <TopNavBar />
              </div>
              <Component {...pageProps} />
            </div>
          </div>
        </Flowbite>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
