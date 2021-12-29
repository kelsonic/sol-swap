// Node modules.
import React, { useContext } from "react";
import { Link } from "react-router-dom";
// Relative imports.
import "./styles.scss";
import walletImage from "../../assets/images/wallet.png";
import { MODAL_WALLETS } from "../../containers/Modal/constants";
import { ModalContext } from "../../containers/Modal/context";
import { WalletContext } from "../../containers/Wallet/context";

export const Nav = () => {
  const [wallet, __] = useContext(WalletContext);
  const [_, setModalType] = useContext(ModalContext);

  return (
    <nav>
      {/* Logo nav item */}
      <Link className="logo" to="/">
        Sol Swap
      </Link>

      {/* Nav items */}
      <ul>
        <li>
          <Link to="/trading">Trading</Link>
        </li>
        <li className="selected">Swap</li>
        <li>
          <Link to="/liquidity">Liquidity</Link>
        </li>
        <li>
          <Link to="/pools">Pools</Link>
        </li>
        <li>
          <Link to="/farms">Farms</Link>
        </li>
        <li>
          <Link to="/staking">Staking</Link>
        </li>
        <li>
          <Link to="/nfts">NFTs</Link>
        </li>
      </ul>

      {wallet?.isConnected ? (
        <button
          className="connected"
          onClick={() => setModalType(MODAL_WALLETS)}
          type="button"
        >
          <img alt="wallet" className="wallet" src={walletImage} />{" "}
          {wallet?.publicKey?.toBase58?.()?.slice(0, 4)} ...{" "}
          {wallet?.publicKey?.toBase58?.()?.slice(-4)}
        </button>
      ) : (
        <>
          {/* Connect to wallet */}
          <button onClick={() => setModalType(MODAL_WALLETS)} type="button">
            <img alt="wallet" className="wallet" src={walletImage} /> Connect
          </button>
        </>
      )}
    </nav>
  );
};

export default Nav;
