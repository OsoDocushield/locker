import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import Layout from "../components/layout"
import AccessDenied from "../components/access-denied"

export default function Page() {
  // When rendering client side don't display anything until loading is complete
  if (typeof window !== "undefined") return null

  // If session exists, display content
  return (
    <Layout>
      <h1>My locker</h1>
      <div>
        <button>Edit</button> &nbsp; <button>Unstake</button>
      </div>
    </Layout>
  )
}
