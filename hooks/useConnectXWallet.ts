import { useEffect, useState } from "react";

import { checkXWalletStatus } from "../lib/xWallet";

interface Account {
  account: string;
  chainId: string;
  publicKey: string;
}

export const useConnectXWallet = () => {
  const [status, setStatus] = useState(false);
  const [account, setAccount] = useState<Account>();

  useEffect(() => {
    const checkStatus = async () => {
      const res = await checkXWalletStatus();
      if (res.status === 'success') {
        setStatus(true);
        setAccount(res.account);
      }
    };

    checkStatus();
  }, []);

  return { status, account, setStatus };
};