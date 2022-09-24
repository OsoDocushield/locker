export default function InstallXWallet() {
  return (
    <>
      <h1>Please install X-Wallet</h1>
      <p>
        <a
          href="https://chrome.google.com/webstore/detail/x-wallet/bofddndhbegljegmpmnlbhcejofmjgbn"
          onClick={(e) => {
            e.preventDefault()
          }}
        >
          You must install X-Wallet to sign in
        </a>
      </p>
    </>
  )
}
