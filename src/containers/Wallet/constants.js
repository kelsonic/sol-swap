export const WALLETS = [
  {
    id: "phantom",
    hasWallet: () => {
      console.log(window?.solana?.isPhantom);
      return window?.solana?.isPhantom;
    },
    logo: "https://raydium.io/_nuxt/img/phantom.d9e3c61.png",
    marketingURL: "https://phantom.app/",
    name: "Phantom",
    getProvider: () => window.solana,
  },
];
