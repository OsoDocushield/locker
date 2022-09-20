import Header from "./header"
import Footer from "./footer"
import SideBar from "./sidebar"

import styles from "./layout.module.css"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <SideBar />
        <div>{children}</div>
      </main>
      <Footer />
    </>
  )
}
