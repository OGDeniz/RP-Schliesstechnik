import "../styles/global.module.css";
import "../styles/main.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Layout from "../components/Layout";
import React, { useEffect } from "react"; // 🟢 useEffect korrekt aus React importiert
import { useRouter } from "next/router";
import { AppProps } from "next/app";
import { Sora, Inter } from "next/font/google";

// Display-Schrift für Headlines – modern, präzise, hochwertig
const sora = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

// Body-Schrift – neutral & gut lesbar
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isAdminRoute = (router.pathname ?? "").startsWith("/admin");

  useEffect(() => {
    console.log("Aktuelle Route:", router.pathname);
  }, [router.pathname]);

  const fontVars = `${sora.variable} ${inter.variable}`;

  if (isAdminRoute) {
    return (
      <div className={fontVars}>
        <Component {...pageProps} />
      </div>
    );
  }

  return (
    <div className={fontVars}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default App;
