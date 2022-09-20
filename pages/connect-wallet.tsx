import Layout from '../components/layout'

export default function ConnectWallet () {

  // When rendering client side don't display anything until loading is complete
  if (typeof window !== 'undefined') return null

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
