import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import Layout from '../components/layout'
import AccessDenied from '../components/access-denied'

export default function Page () {
  const { data: session, status } = useSession()
  const loading = status === 'loading'
  const [ content , setContent ] = useState()

  // Fetch content from protected route
  useEffect(()=>{
  },[session])

  // When rendering client side don't display anything until loading is complete
  if (typeof window !== 'undefined' && loading) return null

  // If no session exists, display access denied message
  if (!session) { return  <Layout><AccessDenied/></Layout> }

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
