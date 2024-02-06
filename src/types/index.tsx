
export interface CryptoData {
    bitcoin: number;
    ethereum: number;
    'binance-coin': number; 
    cardano: number;
    solana: number;
    xrp: number;
    dogecoin: number;
}
export interface LastChanges {
    [key: string]: any;
}
export interface CryptoPrices {
    [key: string]: number;
}
  