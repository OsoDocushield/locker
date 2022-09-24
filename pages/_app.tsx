import type { AppProps } from "next/app"
import { Provider } from "react-redux"

import InstallXWallet from "../components/install-xwallet"
import { isXWalletInstalled } from "../lib/xWallet"

import "./styles.css"
import store from "../store"

export default function App({ Component, pageProps }: AppProps) {
  if (typeof window === "undefined") {
    return null
  }

  if (!isXWalletInstalled()) {
    return <InstallXWallet />
  }
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
