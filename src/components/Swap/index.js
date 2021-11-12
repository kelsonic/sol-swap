// Node modules.
import React from "react";
// Relative imports.
import Chevron from "../../assets/react-svgs/Chevron";
import Cog from "../../assets/react-svgs/Cog";
import Switch from "../../assets/react-svgs/Switch";
import "./styles.scss";

export const Swap = () => {
  const balance = "0.000000000";
  const fromAmount = "0.00";
  const toAmount = "0.00";
  const fromCurrencyLogo =
    "https://sdk.raydium.io/icons/4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R.png";
  const fromCurrency = "RAY";
  const toCurrency = "";
  const slippageTolerance = "0.5%";

  return (
    <section className="swap">
      {/* Header row */}
      <div className="swap-header">
        <h1>Swap</h1>
        <ul>
          <li>
            <button type="button">
              <Cog />
            </button>
          </li>
        </ul>
      </div>

      {/* Card */}
      <div className="swap-card-wrapper">
        <div className="swap-card">
          {/* From box */}
          <div className="swap-card-box">
            <div className="swap-card-box-row">
              <p>From</p>
              <p>Balance: {balance}</p>
            </div>

            <div className="swap-card-box-row-2">
              <p>{fromAmount}</p>

              <div className="from-row-2-actions">
                <button className="max" type="button">
                  Max
                </button>
                <button className="from-token-name">
                  <img alt={`${fromCurrency} logo`} src={fromCurrencyLogo} />
                  {fromCurrency}
                  <Chevron className="chevron" />
                </button>
              </div>
            </div>
          </div>

          {/* Switch tokens button */}
          <button className="swap-switch" type="button">
            <Switch />
          </button>

          {/* To box */}
          <div className="swap-card-box">
            <div className="swap-card-box-row">
              <p>To (Estimate)</p>
            </div>

            <div className="swap-card-box-row-2">
              <p>{toAmount}</p>

              <button className="to-token-name">
                {toCurrency || "Select a token"}
                <Chevron className="chevron" />
              </button>
            </div>
          </div>

          {/* Transaction meta information */}
          <ul className="swap-card-meta">
            <li>
              <p>Slippage tolerance</p>
              <p>{slippageTolerance}</p>
            </li>
          </ul>

          {/* Action button */}
          <button className="submit" type="button">
            Connect wallet
          </button>
        </div>
      </div>
    </section>
  );
};

export default Swap;
