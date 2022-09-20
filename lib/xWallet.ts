const { kadena } = window

export const isXWalletInstalled = () => {
  return Boolean(kadena && kadena.isKadena)
}

export const connectXWallet = () => {
  return kadena.request({
    method: "kda_connect",
    networkId: process.env.NETWORK_ID,
  })
}

export const checkXWalletStatus = () => {
  kadena.request({
    method: 'kda_checkStatus',
    networkId: process.env.NETWORK_ID,
  });
}
