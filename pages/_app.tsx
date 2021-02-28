import "../styles/globals.css";
import React from "react";
import { AppProps } from "next/app";

// import Layout from "../../components/Layout";

const App = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);
export default App;
