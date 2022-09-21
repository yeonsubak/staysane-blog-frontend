import "/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { Flowbite } from "flowbite-react";

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
          <Component {...pageProps} />
        </Flowbite>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
