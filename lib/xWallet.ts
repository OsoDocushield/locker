import { KDA_CHECKSTATUS, KDA_CONNECT, KDA_DISCONNECT } from "./xWalletMethods";

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
