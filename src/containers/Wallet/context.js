// Node modules.
import { createContext } from "react";

export const initialState = {
  wallet: undefined,
  setWallet: () => {},
};

export const WalletContext = createContext(initialState);
