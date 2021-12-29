// Node modules.
import React, { useContext } from "react";
import { Link } from "react-router-dom";
// Relative imports.
import "./styles.scss";
import walletImage from "../../assets/images/wallet.png";
import { MODAL_WALLETS } from "../../containers/Modal/constants";
import { ModalContext } from "../../containers/Modal/context";

export const Nav = () => {
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

      {/* Connect to wallet */}
      <button onClick={() => setModalType(MODAL_WALLETS)} type="button">
        <img alt="wallet" className="wallet" src={walletImage} /> Connect
      </button>
    </nav>
  );
};

export default Nav;
