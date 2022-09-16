import { useSession } from "next-auth/react"
import { GetServerSideProps, InferGetServerSidePropsType } from "next"

import Layout from "../components/layout"
import clientPromise from "../lib/mongodb"

export async function getServerSideProps(context: {}) {
  try {
    const client = await clientPromise
    const db = client.db("users")

    return {
      props: { isConnected: true },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}

export default function Page({
  isConnected,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
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
      <button>+ Locker</button>

      {isConnected ? (
        <h2 className="subtitle">You are connected to MongoDB</h2>
      ) : (
        <h2 className="subtitle">
          You are NOT connected to MongoDB. Check the <code>README.md</code> for
          instructions.
        </h2>
      )}
    </Layout>
  )
}
