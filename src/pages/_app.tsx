import "/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import { store } from "../store/store";
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
        <div className="min-h-screen bg-gray-50">
          <div className="w-auto px-4 py-4 sm:px-8 md:mx-auto lg:w-[1024px]">
            <div className="mb-8">
              <TopNavBar />
            </div>
            <Component {...pageProps} />
          </div>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
