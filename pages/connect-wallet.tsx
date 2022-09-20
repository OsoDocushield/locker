import Layout from "../components/layout";
import { isXWalletInstalled, connectXWallet } from "../lib/xWallet";
import InstallXWallet from "../components/install-xwallet";

export default function ConnectWallet() {
  if (typeof window === "undefined") {
    return null;
  }

  if (!isXWalletInstalled()) {
    return (
      <Layout>
        <InstallXWallet />
      </Layout>
    );
  }

  const handleConnectWallet = async () => {
    const res = await connectXWallet();

    if (res.status === "success") {
      alert("X-wallet Connected successfully");
    }
    if (res.status === "fail") {
      alert("Connect fail");
    }
  };

  return (
    <Layout>
      <h1>Connect Wallet Page</h1>
      <div>
        <button onClick={handleConnectWallet}>Connect Wallet</button>
      </div>
      <br />
      <div>
        <button>Stake NFT</button>
      </div>
    </Layout>
  );
}
