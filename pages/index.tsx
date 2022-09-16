import { useSession } from "next-auth/react"

import Layout from "../components/layout"

export default function Page() {
  const { data: session, status } = useSession()
  const loading = status === "loading"

  if (!session) {
    return (
      <Layout>
        <h1>NFT Locker, please sign in</h1>
      </Layout>
    )
  }

  const handleCreateLocker = () => {
    console.log("Create Locker clicked")
  }

  return (
    <Layout>
      <h1>NFT Locker, {session.user?.name}</h1>
      <button onClick={handleCreateLocker}>+ Locker</button>
    </Layout>
  )
}
