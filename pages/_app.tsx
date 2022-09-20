import type { AppProps } from "next/app"
import "./styles.css"

// Use the <SessionProvider> to improve performance and allow components that call
// `useSession()` anywhere in your application to access the `session` object.
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
