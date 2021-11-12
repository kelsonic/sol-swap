// Node modules.
import React from "react";
import { Link } from "react-router-dom";
// Relative imports.
import wallet from "../../assets/images/wallet.png";
import "./styles.scss";

export const Nav = () => {
  return (
    <nav>
      {/* Logo nav item */}
      <Link className="logo" to="/">
        Kelsonic Swap
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
      <button type="button">
        <img alt="wallet" className="wallet" src={wallet} /> Connect
      </button>
    </nav>
  );
};

export default Nav;
