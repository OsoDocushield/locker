import type { AppProps } from "next/app";

import InstallXWallet from "../components/install-xwallet";
import { isXWalletInstalled } from "../lib/xWallet";

import "./styles.css";

export default function App({ Component, pageProps }: AppProps) {
  if (typeof window === "undefined") {
    return null;
  }

  if (!isXWalletInstalled()) {
    return (
      <InstallXWallet />
    );
  }
  return <Component {...pageProps} />;
}
