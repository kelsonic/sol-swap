// Node modules.
import React, { useContext, useEffect } from "react";
// Relative imports.
import "./styles.scss";
import { WALLETS } from "../../containers/Wallet/constants";
import { WalletContext } from "../../containers/Wallet/context";
import { ModalContext } from "../../containers/Modal/context";

const ModalWallets = () => {
  // Derive state.
  const [_, setWallet] = useContext(WalletContext);
  const [__, setModalType] = useContext(ModalContext);

  // Listen to keydown events.
  useEffect(() => {
    const onKeyDownListener = document.addEventListener("keydown", (event) => {
      if (event.keyCode === 27) setModalType();
    });

    return () => {
      document.removeEventListener("keydown", onKeyDownListener);
    };
  }, [setModalType]);

  // Determine what happens when a wallet is clicked.
  const onWalletClick = (wallet) => async () => {
    // Set the wallet provider if they have the wallet.
    if (wallet?.hasWallet()) {
      try {
        const provider = wallet.getProvider();
        await provider.connect();
        setWallet(provider);
      } catch (error) {
        console.error("User rejected request", error);
      }
      return;
    }

    // Open up their marketing URL if they don't have the wallet.
    window.open(wallet.marketingURL, "_blank");
  };

  return (
    <div className="modal">
      <div className="modal-mask" onClick={() => setModalType()} />
      <div className="modal-content">
        <div className="modal-header">
          <p className="modal-title">Connect to a wallet</p>
          <button className="modal-close" onClick={() => setModalType()}>
            Close
          </button>
        </div>

        <div className="modal-body">
          {WALLETS?.map((wallet) => (
            <button
              className="modal-button"
              key={wallet?.id}
              onClick={onWalletClick(wallet)}
            >
              <span>{wallet?.name}</span>
              <img alt={`${wallet?.name} logo`} src={wallet?.logo} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModalWallets;
