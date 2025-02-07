
import "../styles/global.module.css";
import "../styles/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/Layout";
import React from "react";



import { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;