import { useSession } from "next-auth/react"
import Layout from "../../components/layout"
import AccessDenied from "../../components/access-denied"

export default function Locker() {
  const { data: session, status } = useSession()
  const loading = status === "loading"

  // Fetch content from protected route
  // When rendering client side don't display anything until loading is complete
  if (typeof window !== "undefined" && loading) return null

  // If no session exists, display access denied message
  if (!session) {
    return (
      <Layout>
        <AccessDenied />
      </Layout>
    )
  }

  const handlePreview = () => {
    console.log("Preview button Clicked")
  }

  // If session exists, display content
  return (
    <Layout>
      <h1>Locker NAME</h1>
      <h2>{session.user?.name}'s Locker</h2>
      <div>
        <button>upload</button>
      </div>
      <br />
      <div>
        <button>preview</button>
      </div>
    </Layout>
  )
}
