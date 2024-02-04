import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CryptoData, LastChanges } from '../types';
import { symbols, symbolString } from '../common/variables';
import { globalStyles } from '../common/globalStyles';

interface CryptoPrices {
  [key: string]: number;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: globalStyles.color.black,
    flex: 1
  },
  columnWidth: {
    width: Dimensions.get('window').width / 3
  },
  labelContainer: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    marginTop: 30
  },
  label: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.7)',
    textAlign: 'left',
    width: Dimensions.get('window').width / 3
  },
  alignRight: {
    textAlign: 'right'
  },
  alignCenter: {
    textAlign: 'center'
  },
  element: {
    fontSize: 20,
    fontWeight: 'bold',
    color: globalStyles.color.white,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10
  },
  elementName: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.7)',
  },
  prices: {
    color: globalStyles.color.white,
    fontSize: 16,
    fontWeight: 'bold'
  },
  last24HoursChange: {
    color: globalStyles.color.red
  },
  priceDown: {
    color: globalStyles.color.red
  },
  priceUp: {
    color: globalStyles.color.green
  }
});
  
const WebSocketComponent: React.FC<{initialPrice: CryptoData, last24HoursChanges: LastChanges}> = ({ initialPrice, last24HoursChanges }) => {
  const [cryptoPrices, setCryptoPrices] = useState<CryptoPrices>({});

  const termMap: { [key: string]: [string, string] } = {
    'bitcoin': ['BTC', 'Bitcoin'],
    'ethereum': ['ETH', 'Ethereum'],
    'binance-coin': ['BNB', 'Binance'],
    'cardano': ['ADA', 'Cardano'],
    'solana': ['SOL', 'Solana'],
    'xrp': ['XRP', 'Ripple'],
    'dogecoin': ['DOGE', 'Dogecoin']
  };

  useEffect(() => {

    const socket = new WebSocket(`wss://ws.coincap.io/prices?assets=${symbolString}`);

    socket.onopen = () => {
      console.log('WebSocket connection opened');
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setCryptoPrices((prevPrices) => {
        const updatedPrices: CryptoPrices = {};
        symbols.forEach((symbol) => {
          updatedPrices[symbol] = data[symbol] !== undefined ? data[symbol] : prevPrices[symbol];
        });
        return updatedPrices;
      });
    };

    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };

    return () => {
      socket.close();
    };
  }, []); 

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <View>
          <Text style={styles.label}>Name</Text>
        </View>
        <View>
          <Text style={[styles.label, styles.alignRight]}>Last Price</Text>
        </View>
        <View>
          <Text style={[styles.label, styles.alignCenter]}>24h chg%</Text>
        </View>
      </View>
   
      {Object.entries(cryptoPrices).map(([symbol, price]: [string, number]) => (
          <TouchableOpacity key={symbol} onPress={() => navigation.navigate('Chart' as never)}>
            <View style={styles.priceContainer}>
              <View style={styles.columnWidth}>
                <Text style={styles.element}>
                  {termMap[symbol][0]}
                </Text>
                <Text style={styles.elementName}>
                  {termMap[symbol][1]} 
                </Text>
              </View>
              <View style={styles.columnWidth}>
                <Text style={[styles.prices, styles.alignRight]}>
                  ${ price ? `${Number(price).toFixed(2)}` : initialPrice[symbol] }
                </Text>
        
              </View>
              <View style={styles.columnWidth}>
                <Text style={[styles.alignCenter, Number(last24HoursChanges[symbol]) > 0 ? styles.priceUp : styles.priceDown]}>
                  { last24HoursChanges[symbol] as string} %
                </Text>
              </View>
            </View>
          </TouchableOpacity>
      ))}
    </View>
  );
};

export default WebSocketComponent;
