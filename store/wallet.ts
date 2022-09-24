import { createSlice } from "@reduxjs/toolkit";

export const walletSlice = createSlice({
  name: "wallet",
  initialState: {
    account: "",
    connected: false,
    walletName: "",
    isConnectWalletDialog: false,
    isWalletAccountDialog: false,
  },
  reducers: {
    toggleConnectWalletDialog: (state) => {
      state.isConnectWalletDialog = !state.isConnectWalletDialog;
    },
    toggleWalletAccountDialog: (state) => {
      state.isWalletAccountDialog = !state.isWalletAccountDialog;
    },
    setConnected: (state, action) => {
      state.account = action.payload.account;
      state.walletName = action.payload.walletName;
      state.connected = true;
    },
    setDisconnected: (state) => {
      state.account = "";
      state.walletName = "";
      state.connected = false;
    },
  },
});

export default walletSlice.reducer;

export const {
  setConnected,
  setDisconnected,
  toggleConnectWalletDialog,
  toggleWalletAccountDialog,
} = walletSlice.actions;