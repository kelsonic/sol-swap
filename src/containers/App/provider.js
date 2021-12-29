// Node modules.
import React, { useState } from "react";
// Relative imports.
import {
  ModalContext,
  initialState as modalInitialState,
} from "../Modal/context";
import {
  WalletContext,
  initialState as walletInitialState,
} from "../Wallet/context";

// Create the main Provider context for the app.
const Provider = ({ children }) => {
  const [wallet, setWallet] = useState(walletInitialState);
  const [modalType, setModalType] = useState(modalInitialState);

  return (
    <ModalContext.Provider value={[modalType, setModalType]}>
      <WalletContext.Provider value={[wallet, setWallet]}>
        {children}
      </WalletContext.Provider>
    </ModalContext.Provider>
  );
};

export default Provider;
