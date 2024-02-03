import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';
import WebSocketComponent from './components/WebSocketComponent';
import { CryptoData, LastChanges } from './types';
import { symbolString } from './common';


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1
  },
});


const MainScreen: React.FC = () => {

    const [cryptoData, setCryptoData] = useState<CryptoData>({
        'bitcoin': 0,
        'ethereum': 0,
        'binance-coin': 0,
        'cardano': 0,
        'solana': 0,
        'xrp': 0,
        'dogecoin': 0
    });

    const [last24HoursChanges, setLast24HoursChanges] = useState<LastChanges>({
        'bitcoin': '0',
        'ethereum': '0',
        'binance-coin': '0',
        'cardano': '0',
        'solana': '0',
        'xrp': '0',
        'dogecoin': '0'
    })
  
    useEffect(() => {
        const fetchCryptoData = async () => {
            try {
                const response = await fetch(`https://api.coincap.io/v2/assets?ids=${symbolString}`);
                const data = await response.json();
                const prices = {...cryptoData};
                const lastChanges = {...last24HoursChanges}

                data.data.forEach((asset: any) => {
                    let symbol = asset.symbol;
                    if (symbol === 'BTC' || symbol === 'ETH' || symbol === 'BNB' || symbol === 'ADA' || symbol === 'SOL' || symbol === 'XRP' || symbol === 'DOGE') {
                        prices[asset.id.toLowerCase()] = parseFloat(asset.priceUsd).toFixed(2);
                        lastChanges[asset.id.toLowerCase()] = parseFloat(asset.changePercent24Hr).toFixed(2); 
                    }
                });
                setCryptoData(prices);
                setLast24HoursChanges(lastChanges);
            } catch (error) {
                console.error('Error fetching crypto data', error);
            }
        };

        fetchCryptoData();

    }, []); 

    return (
        <ScrollView style={styles.container}>
            <WebSocketComponent initialPrice={cryptoData} last24HoursChanges={last24HoursChanges} />
        </ScrollView>
    );
};

export default MainScreen;
