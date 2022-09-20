import "/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableColorScheme={false}
      forcedTheme="light"
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
