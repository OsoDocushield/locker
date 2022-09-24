import { KDA_CHECKSTATUS, KDA_CONNECT, KDA_DISCONNECT, KDA_REQUESTSIGN } from "./xWalletMethods";

export const isXWalletInstalled = () => {
  const { kadena } = window;
  return Boolean(kadena && kadena.isKadena);
};

export const connectXWallet = () => {
  const { kadena } = window;
  return kadena.request({
    method: KDA_CONNECT,
    networkId: process.env.NETWORK_ID,
  });
};

export const checkXWalletStatus = () => {
  const { kadena } = window;
  return kadena.request({
    method: KDA_CHECKSTATUS,
    networkId: process.env.NETWORK_ID,
  });
};

export const disconnectXWallet = () => {
  const { kadena } = window;
  return kadena.request({
    method: KDA_DISCONNECT,
    networkId: process.env.NETWORK_ID,
  });
};

interface iCmd {
  sender: string;
  chainId: string;
  caps: string;
  pactCode: string;
  envData: string;
};

export const signXWallet = async (
  cmd: iCmd,
  gasPrice = 0.0000001,
  gasLimit = 3000,
  ttl = 28800
) => {
  const { kadena } = window;
  kadena.request({
    networkId: process.env.NETWORK_ID,
    method: KDA_REQUESTSIGN,
    data: {
      networkId: process.env.NETWORK_ID,
      signingCmd: {
        networkId: process.env.NETWORK_ID,
        sender: cmd.sender,
        chainId: cmd.chainId,
        gasPrice,
        gasLimit,
        ttl,
        caps: cmd.caps,
        pactCode: cmd.pactCode,
        envData: cmd.envData,
      },
    },
  });
};
