import "../styles/global.module.css";
import "../styles/main.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Layout from "../components/Layout";
import React, { useEffect } from "react"; // 🟢 useEffect korrekt aus React importiert
import { useRouter } from "next/router";
import { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    console.log("Aktuelle Route:", router.pathname);
  }, [router.pathname]);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
