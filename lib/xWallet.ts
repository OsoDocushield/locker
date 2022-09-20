
export const isXWalletInstalled = () => {
  const { kadena } = window
  return Boolean(kadena && kadena.isKadena)
}

export const connectXWallet = () => {
  const { kadena } = window
  console.log("APOLLO: ", kadena, process.env.NETWORK_ID)
  return kadena.request({
    method: "kda_connect",
    networkId: process.env.NETWORK_ID,
  })
}

export const checkXWalletStatus = () => {
  const { kadena } = window
  kadena.request({
    method: 'kda_checkStatus',
    networkId: process.env.NETWORK_ID,
  });
}
