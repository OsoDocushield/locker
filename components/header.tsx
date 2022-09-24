import React, { useState } from "react"
import ReactModal from "react-modal"
import { useConnectXWallet } from "../hooks/useConnectXWallet"
import { disconnectXWallet, connectXWallet } from "../lib/xWallet"
import { connectZelcore } from "../lib/zelcore"
import styles from "./header.module.css"

const customStyles = {
  content: {
    top: "20%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
}

ReactModal.setAppElement("#ConnectWalletModal")

export default function Header() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const { status, account, setStatus } = useConnectXWallet()

  const handleDisconnect = async () => {
    const res = await disconnectXWallet()
    setStatus(false)
    alert(res.result.message)
  }

  const handleConnectXWallet = async () => {
    const res = await connectXWallet()

    if (res.status === "success") {
      setStatus(true)
      alert("X-wallet Connected successfully")
    }
    if (res.status === "fail") {
      alert("Connect fail")
    }
  }

  const openConnectWallet = () => {
    setModalIsOpen(true)
  }

  const handleCloseModal = () => {
    setModalIsOpen(false)
  }

  return (
    <header>
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>
      <div className={styles.header}>
        <div id="ConnectWalletModal"></div>
        <div className={styles.logo}>NFT locker </div>

        <div className={styles.user}>
          <div className={styles.disconnectWrapper}>
            {status ? (
              <button className={styles.disconnect} onClick={handleDisconnect}>
                Disconnect
              </button>
            ) : (
              <button onClick={openConnectWallet}>Connect Wallet</button>
            )}
          </div>
          {status && <div>{account?.account}</div>}
        </div>
      </div>
      <ReactModal isOpen={modalIsOpen} style={customStyles}>
        <h2>Select Wallet</h2>
        <div className={styles.modalContentWrapper}>
          <div className={styles.connnectButton}>
            <button onClick={handleConnectXWallet}>connect W-wallet</button>
          </div>
          <div className={styles.connnectButton}>
            <button onClick={connectZelcore}>connect Zelcore Wallet</button>
          </div>
        </div>
        <div className={styles.closeButton}>
          <button onClick={handleCloseModal}>Close</button>
        </div>
      </ReactModal>
    </header>
  )
}
