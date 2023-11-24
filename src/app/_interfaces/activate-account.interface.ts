import { FILES } from "../_constants";

export interface ActivateAccount {
    wallet_address: any;
    payment_period: any;
    payment_frequency: any;
    amount: any;
    balance_falls_below: any;
}

export const PaymentFrequency = [
    { id: 1, title: '7 Days' },
    { id: 2, title: '1 Month' },
    { id: 1, title: 'Quater' },
    { id: 1, title: '1 Year' },
];

export const Wallets = [
    { id: 1, title: 'MetaMask', logo: FILES.METAMASK, url: 'https://metamask.io/' },
    { id: 2, title: 'CoinBase', logo: FILES.COINBASE, url: 'https://www.coinbase.com/' },
    { id: 3, title: 'My Ether Wallet', logo: FILES.MEW, url: 'https://www.myetherwallet.com/' },
];