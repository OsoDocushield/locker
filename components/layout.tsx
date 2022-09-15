import { useSession } from "next-auth/react"

import Header from "./header"
import Footer from "./footer"
import SideBar from "./sidebar"

import styles from "./layout.module.css"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const { data: session, status } = useSession()

  return (
    <>
      <Header />
      <main className={styles.main}>
        {session && <SideBar />}
        <div>
          {children}
        </div>
      </main>
      <Footer />
    </>
  )
}
