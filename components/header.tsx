import { useConnectXWallet } from "../hooks/useConnectXWallet";
import { disconnectXWallet, connectXWallet } from "../lib/xWallet";
import styles from "./header.module.css";

export default function Header() {
  const { status, account, setStatus } = useConnectXWallet();

  const handleDisconnect = async () => {
    const res = await disconnectXWallet();
    setStatus(false);
    alert(res.result.message);
  };

  const handleConnectWallet = async () => {
    const res = await connectXWallet();

    if (res.status === "success") {
      setStatus(true);
      alert("X-wallet Connected successfully");
    }
    if (res.status === "fail") {
      alert("Connect fail");
    }
  };

  return (
    <header>
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>
      <div className={styles.header}>
        <div className={styles.logo}>NFT locker </div>

        <div className={styles.user}>
          <div className={styles.disconnectWrapper}>{
            status ?
              <button className={styles.disconnect} onClick={handleDisconnect}>Disconnect</button> :
              <button onClick={handleConnectWallet}>Connect Wallet</button>
          }
          </div>
          {
            status &&
            <div>{account?.account}</div>
          }
        </div>

      </div>
    </header>
  );
}
