import { useSession } from 'next-auth/react'
import Layout from '../components/layout'
import AccessDenied from '../components/access-denied'

export default function ConnectWallet () {
  const { data: session, status } = useSession()
  const loading = status === 'loading'

  // When rendering client side don't display anything until loading is complete
  if (typeof window !== 'undefined' && loading) return null

  // If no session exists, display access denied message
  if (!session) { return  <Layout><AccessDenied/></Layout> }

  // If session exists, display content
  return (
    <Layout>
      <h1>Connect Wallet Page</h1>
      <div>
        <button>Connect Wallet</button>
      </div>
      <br />
      <div>
        <button>Stake NFT</button>
      </div>
    </Layout>
  )
}
